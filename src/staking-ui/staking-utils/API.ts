import moment from "moment";
import { Wallet, BigNumber, Utils } from "@ijstech/eth-wallet";
import { Contracts as TimeIsMoneyContracts } from '@validapp/time-is-money-sdk';
import { Contracts } from "@openswap/sdk";
import { Contracts as UtilsContracts } from "@validapp/chainlink-sdk";
import { Contracts as CrossChainContracts } from "@ijstech/cross-chain-bridge";
import { 
  ERC20ApprovalModel, 
  IERC20ApprovalEventOptions, 
  ITokenObject, 
  RewardOption,
  StakingCampaignOption,
  StakingCampaignInfo
} from "../global";
import { 
  getTokenMap,
  USDPeggedTokenAddressMap,
  ToUSDPriceFeedAddressesMap,
  WETHByChainId,
  getChainId,
  tokenPriceAMMReference
} from "../store";

export const getTokenPrice = async (token: string) => { // in USD value
  let wallet = Wallet.getInstance();
  let chainId = wallet.chainId;
  let tokenPrice: string;

  // get price from price feed 
  let tokenPriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId][token.toLowerCase()];
  if (tokenPriceFeedAddress) {
    let aggregator = new UtilsContracts.EACAggregatorProxy(wallet, tokenPriceFeedAddress);
    let tokenLatestRoundData = await aggregator.latestRoundData();
    let tokenPriceFeedDecimals = await aggregator.decimals();
    return tokenLatestRoundData.answer.shiftedBy(-tokenPriceFeedDecimals).toFixed();
  }

  // get price from AMM
  let referencePair = tokenPriceAMMReference[chainId][token.toLowerCase()]
  if (!referencePair) return null;
  let pair = new Contracts.OSWAP_Pair(wallet, referencePair);
  let token0 = await pair.token0();
  let token1 = await pair.token1();
  let reserves = await pair.getReserves()
  let token0PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId][token0.toLowerCase()]
  let token1PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId][token1.toLowerCase()]

  if (token0PriceFeedAddress || token1PriceFeedAddress) {
    if (token0PriceFeedAddress) {
      let aggregator = new UtilsContracts.EACAggregatorProxy(wallet, token0PriceFeedAddress);
      let token0LatestRoundData = await aggregator.latestRoundData();
      let token0PriceFeedDecimals = await aggregator.decimals();
      let token0USDPrice = new BigNumber(token0LatestRoundData.answer).shiftedBy(-token0PriceFeedDecimals).toFixed();
      if (new BigNumber(token.toLowerCase()).lt(token0.toLowerCase())) {
        tokenPrice = new BigNumber(reserves._reserve1).div(reserves._reserve0).times(token0USDPrice).toFixed()
      } else {
        tokenPrice = new BigNumber(reserves._reserve0).div(reserves._reserve1).times(token0USDPrice).toFixed()
      }
    } else {
      let aggregator = new UtilsContracts.EACAggregatorProxy(wallet, token1PriceFeedAddress);
      let token1LatestRoundData = await aggregator.latestRoundData();
      let token1PriceFeedDecimals = await aggregator.decimals();
      let token1USDPrice = new BigNumber(token1LatestRoundData.answer).shiftedBy(-token1PriceFeedDecimals).toFixed();
      if (new BigNumber(token.toLowerCase()).lt(token1.toLowerCase())) {
        tokenPrice = new BigNumber(reserves._reserve1).div(reserves._reserve0).times(token1USDPrice).toFixed()
      } else {
        tokenPrice = new BigNumber(reserves._reserve0).div(reserves._reserve1).times(token1USDPrice).toFixed()
      }
    }
  } else {
    if (token0.toLowerCase() == token.toLowerCase()) {//for other reference pair
      let token1Price = await getTokenPrice(token1);
      if (!token1Price) return null;
      tokenPrice = new BigNumber(token1Price).times(reserves._reserve1).div(reserves._reserve0).toFixed()
    } else {
      let token0Price = await getTokenPrice(token0);
      if (!token0Price) return null;
      tokenPrice = new BigNumber(token0Price).times(reserves._reserve0).div(reserves._reserve1).toFixed()
    }
  }
  return tokenPrice;
}

const getStakingRewardInfoByAddresses = async (option: RewardOption, providerAddress: string, releaseTime: number) => {
  try {
    let rewardAddress = option.rewardAddress;
    let isCommonStartDate = option.isCommonStartDate;
    let reward = '0';
    let claimSoFar = '0';
    let claimable = '0';
    if (!rewardAddress) {
      return {
        reward,
        claimSoFar,
        claimable,
        multiplier: option.rate
      }
    }

    let wallet = Wallet.getInstance();
    let rewardsContract;
    if (isCommonStartDate) {
      rewardsContract = new TimeIsMoneyContracts.RewardsCommonStartDate(wallet, rewardAddress);
    }
    else {
      rewardsContract = new TimeIsMoneyContracts.Rewards(wallet, rewardAddress);
    }

    try {
      let rewardWei = await rewardsContract.reward();
      let unclaimedWei = await rewardsContract.unclaimed();
      let claimSoFarWei = await rewardsContract.claimSoFar(providerAddress);

      reward = Utils.fromDecimals(rewardWei).toFixed();
      claimSoFar = Utils.fromDecimals(claimSoFarWei).toFixed();
      claimable = Utils.fromDecimals(unclaimedWei).toFixed();
    } catch (err) {
    }

    let vestingPeriod = (await rewardsContract.vestingPeriod()).toNumber();
    let vestingStart;

    if (rewardsContract instanceof TimeIsMoneyContracts.RewardsCommonStartDate) {
      let vestingStartDateRaw = (await rewardsContract.vestingStartDate()).toNumber();
      vestingStart = moment.unix(vestingStartDateRaw);
    }
    else {
      vestingStart = moment.unix(releaseTime);
    }

    let vestingEnd = moment(vestingStart).add(vestingPeriod, 'seconds');
    let multiplierWei = await rewardsContract.multiplier();
    let multiplier = Utils.fromDecimals(multiplierWei).toFixed();

    return {
      vestingPeriod,
      vestingStart,
      vestingEnd,
      reward,
      claimSoFar,
      claimable,
      multiplier
    }
  }
  catch (err) {
    console.log('err', err)
    return null
  }
}

const getStakingOptionExtendedInfoByAddress = async (option: StakingCampaignOption) => {
  try {
    let wallet = Wallet.getInstance();
    let stakingAddress = option.stakingAddress;
    let rewardOptions = option.rewardOptions;
    let decimalsOffset = option.decimalsOffset || 0;
    let currentAddress = wallet.address;
    let hasRewardAddress = rewardOptions.length > 0 && rewardOptions[0].rewardAddress;

    let timeIsMoney = new TimeIsMoneyContracts.TimeIsMoney(wallet, stakingAddress);

    let totalCreditWei = await timeIsMoney.getCredit(currentAddress);
    let lockAmountWei = await timeIsMoney.lockAmount(currentAddress);
    let withdrawn = await timeIsMoney.withdrawn(currentAddress);
    let totalCredit = Utils.fromDecimals(totalCreditWei).shiftedBy(decimalsOffset).toFixed();
    let lockAmount = Utils.fromDecimals(lockAmountWei).shiftedBy(decimalsOffset).toFixed();
    let stakeQty = withdrawn ? '0' : lockAmount;
    let mode = '';

    if (new BigNumber(totalCredit).gt(0) && hasRewardAddress) {
      mode = 'Claim';
    }
    else if (new BigNumber(stakeQty).isZero()) {
      mode = 'Stake';
    }
    else {
      mode = 'Unlock';
    }

    let minimumLockTime = await timeIsMoney.minimumLockTime();
    let releaseTime = await timeIsMoney.releaseTime(currentAddress);
    let maximumTotalLock = await timeIsMoney.maximumTotalLock();
    let totalLockedWei = await timeIsMoney.totalLocked();

    let startOfEntryPeriod = '0';
    try {
      startOfEntryPeriod = (await timeIsMoney.startOfEntryPeriod()).toFixed();
    } catch (err) { }

    let endOfEntryPeriod = (await timeIsMoney.endOfEntryPeriod()).toFixed();
    let perAddressCapWei = await timeIsMoney.perAddressCap();
    let lockedTime = releaseTime.minus(minimumLockTime);

    let maxTotalLock = Utils.fromDecimals(maximumTotalLock).shiftedBy(decimalsOffset).toFixed();
    let totalLocked = Utils.fromDecimals(totalLockedWei).shiftedBy(decimalsOffset).toFixed();
    let perAddressCap = Utils.fromDecimals(perAddressCapWei).shiftedBy(decimalsOffset).toFixed();
    let tokenAddress = await timeIsMoney.token();

    let obj = {
      mode: mode,
      minLockTime: minimumLockTime.toNumber(),
      releaseTime: releaseTime.toNumber() * 1000,
      lockedTime: lockedTime.toNumber() * 1000,
      maxTotalLock: maxTotalLock,
      totalLocked: totalLocked,
      totalCredit: totalCredit,
      stakeQty: stakeQty,
      withdrawn: withdrawn,
      lockAmount: lockAmount,
      startOfEntryPeriod: parseInt(startOfEntryPeriod) * 1000,
      endOfEntryPeriod: parseInt(endOfEntryPeriod) * 1000,
      perAddressCap: perAddressCap,
      tokenAddress: tokenAddress.toLowerCase(),
      decimalsOffset,
    };

    if (mode === 'Claim' && hasRewardAddress) {
      let rewardsData: any[] = [];
      let promises = rewardOptions.map(async (option, index) => {
        return new Promise<void>(async (resolve, reject) => {
          try {
            let stakingRewardInfo = await getStakingRewardInfoByAddresses(option, currentAddress, releaseTime.toNumber());
            if (stakingRewardInfo) {
              let vestedReward = new BigNumber(totalCredit).times(stakingRewardInfo.multiplier).minus(stakingRewardInfo.claimSoFar).toFixed();
              rewardsData.push({
                ...option,
                ...stakingRewardInfo,
                vestedReward,
                index
              });
            }
          }
          catch (error) { }
          resolve();
        })
      });
      await Promise.all(promises);
      return {
        ...obj,
        rewardsData: rewardsData.sort((a, b) => a.index - b.index)
      }
    }
    else {
      return obj;
    }
  }
  catch (err) {
    console.log('err', err);
    return null;
  }
}

const composeCampaignInfoList = async (stakingCampaignInfoList: StakingCampaignInfo[], addDurationOption: (options: any[], defaultOption: StakingCampaignOption) => void) => {
  let campaigns: any[] = [];
  for (let i = 0; i < stakingCampaignInfoList.length; i++) {
    let stakingCampaignInfo = stakingCampaignInfoList[i];
    let durationOptionsWithExtendedInfo: any[] = [];
    let durationOptions = stakingCampaignInfo.options;
    for (let j = 0; j < durationOptions.length; j++) {
      let durationOption = durationOptions[j];
      addDurationOption(durationOptionsWithExtendedInfo, durationOption);
    }

    let campaignObj: any = {
      campaignName: stakingCampaignInfo.campaignName,
      campaignDesc: stakingCampaignInfo.campaignDesc,
      campaignPeriod: stakingCampaignInfo.campaignPeriod,
      vestingPeriod: stakingCampaignInfo.vestingPeriod,
      isSimplified: stakingCampaignInfo.isSimplified,
      getTokenURL: stakingCampaignInfo.getTokenURL,
      getTokenURL2: stakingCampaignInfo.getTokenURL2,
      options: durationOptionsWithExtendedInfo,
      decimalsOffset: stakingCampaignInfo.decimalsOffset,
    }

    if (durationOptionsWithExtendedInfo.length > 0) {
      campaignObj = {
        ...campaignObj,
        tokenAddress: durationOptionsWithExtendedInfo[0].tokenAddress.toLowerCase()
      }
    }
    campaigns.push(campaignObj);
  }
  return campaigns;
}

const getAllCampaignsInfo = async (stakingInfo: { [key: number]: StakingCampaignInfo[] }) => {
  let wallet = Wallet.getInstance();
  let chainId = wallet.chainId;
  let stakingCampaignInfoList = stakingInfo[chainId];
  if (!stakingCampaignInfoList) return [];

  let optionExtendedInfoMap: any = {};
  let allCampaignOptions = (stakingCampaignInfoList as any).flatMap((v: any) => v.options);
  let promises = allCampaignOptions.map(async (option: any, index: any) => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        let optionExtendedInfo = await getStakingOptionExtendedInfoByAddress(option);
        if (optionExtendedInfo) optionExtendedInfoMap[option.stakingAddress] = optionExtendedInfo;
      }
      catch (error) { }
      resolve();
    })
  });
  await Promise.all(promises);

  let campaigns: any[] = await composeCampaignInfoList(stakingCampaignInfoList, (options: any[], defaultOption: StakingCampaignOption) => {
    if (optionExtendedInfoMap[defaultOption.stakingAddress]) {
      options.push({
        ...defaultOption,
        ...optionExtendedInfoMap[defaultOption.stakingAddress]
      })
    }
  })
  return campaigns;
}

const getStakingTotalLocked = async (stakingAddress: string, decimalsOffset: number) => {
  let wallet = Wallet.getInstance();
  let timeIsMoney = new TimeIsMoneyContracts.TimeIsMoney(wallet, stakingAddress);
  let totalLockedWei = await timeIsMoney.totalLocked();
  let totalLocked = Utils.fromDecimals(totalLockedWei).shiftedBy(decimalsOffset).toFixed();
  return totalLocked;
}

const getWETH = (wallet: Wallet): ITokenObject => {
  let wrappedToken = WETHByChainId[wallet.chainId];
  return wrappedToken;
};

const getLPObject = async (pairAddress: string) => {
  try {
    let wallet = Wallet.getInstance();
    const WETH = getWETH(wallet);
    let pair = new Contracts.OSWAP_Pair(wallet, pairAddress);

    let getSymbol = await pair.symbol();
    let getName = await pair.name();
    let getDecimal = await pair.decimals();
    let token0 = (await pair.token0()).toLowerCase();
    let token1 = (await pair.token1()).toLowerCase();

    return {
      address: pairAddress.toLowerCase(),
      decimals: getDecimal.toFixed(),
      name: getName,
      symbol: getSymbol,
      token0: token0 == WETH.address!.toLowerCase() ? '' : token0,
      token1: token1 == WETH.address!.toLowerCase() ? '' : token1
    };
  } catch (e) {
    return null;
  }
}

const getLPBalance = async (pairAddress: string) => {
  let wallet = Wallet.getInstance();
  let pair = new Contracts.OSWAP_Pair(wallet, pairAddress);
  let balance = await pair.balanceOf(wallet.address);
  return Utils.fromDecimals(balance).toFixed();
}

const getVaultObject = async (vaultAddress: string) => {
  let wallet = Wallet.getInstance();
  let vault = new CrossChainContracts.OSWAP_BridgeVault(wallet, vaultAddress);
  let symbol = await vault.symbol();
  let name = await vault.name();
  let decimals = await vault.decimals();
  let asset = await vault.asset();
  let tokenMap = getTokenMap();
  let assetToken = tokenMap[asset.toLowerCase()]
  return {
      address: vaultAddress.toLowerCase(),
      decimals,
      name,
      symbol,
      assetToken
  }
}

const getVaultBalance = async (vaultAddress: string) => {
  let wallet = Wallet.getInstance();
  let vault = new CrossChainContracts.OSWAP_BridgeVault(wallet, vaultAddress);
  let balance = await vault.balanceOf(wallet.address);
  return Utils.fromDecimals(balance).toFixed();
}

const getERC20RewardCurrentAPR = async (rewardOption: any, lockedToken: any, lockedDays: string) => {
  let wallet = Wallet.getInstance();
  let chainId = wallet.chainId;
  const usdPeggedTokenAddress = USDPeggedTokenAddressMap[chainId];
  if (!usdPeggedTokenAddress) return '';

  let APR = "";
  let rewardPrice = await getTokenPrice(rewardOption.tokenAddress);
  let lockedTokenPrice = await getTokenPrice(lockedToken.address);
  if (!rewardPrice || !lockedTokenPrice) return null;
  APR = new BigNumber(rewardOption.rate).times(new BigNumber(rewardPrice).times(365)).div(new BigNumber(lockedTokenPrice).times(lockedDays)).toFixed();
  return APR
}

const getReservesByPair = async (pairAddress: string, tokenInAddress?: string, tokenOutAddress?: string) => {
  let wallet = Wallet.getInstance();
  let reserveObj;
  let pair = new Contracts.OSWAP_Pair(wallet, pairAddress);
  let reserves = await pair.getReserves();
  if (!tokenInAddress || !tokenOutAddress) {
    tokenInAddress = await pair.token0();
    tokenOutAddress = await pair.token1();
  }

  if (tokenInAddress && tokenOutAddress) {
    if (new BigNumber(tokenInAddress.toLowerCase()).lt(tokenOutAddress.toLowerCase())) {
      reserveObj = {
        reserveA: reserves._reserve0,
        reserveB: reserves._reserve1
      };
    } else {
      reserveObj = {
        reserveA: reserves._reserve1,
        reserveB: reserves._reserve0
      };
    }
  }
  return reserveObj;
}

const getLPRewardCurrentAPR = async (rewardOption: any, lpObject: any, lockedDays: string) => {
  let wallet = Wallet.getInstance();
  const WETH = getWETH(wallet);
  const WETHAddress = WETH.address!;
  let chainId = wallet.chainId;
  const usdPeggedTokenAddress = USDPeggedTokenAddressMap[chainId];
  if (!usdPeggedTokenAddress) return '';

  let APR = '';
  if (lpObject.token0.toLowerCase() == usdPeggedTokenAddress.toLowerCase() || lpObject.token1.toLowerCase() == usdPeggedTokenAddress.toLowerCase()) {
    let rewardPrice = '';
    if (rewardOption.APROption && rewardOption.APROption == 1) {
      let WETH9PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId][WETHAddress.toLowerCase()];
      if (!WETH9PriceFeedAddress) return '';

      let aggregator = new UtilsContracts.EACAggregatorProxy(wallet, WETH9PriceFeedAddress);
      let WETH9LatestRoundData = await aggregator.latestRoundData();
      let WETH9PriceFeedDecimals = await aggregator.decimals();
      let WETH9USDPrice = new BigNumber(WETH9LatestRoundData.answer).shiftedBy(-WETH9PriceFeedDecimals).toFixed();

      let rewardReserves = await getReservesByPair(rewardOption.referencePair, WETHAddress, rewardOption.tokenAddress);
      if (!rewardReserves) return '';
      rewardPrice = new BigNumber(rewardReserves.reserveA).div(rewardReserves.reserveB).times(WETH9USDPrice).toFixed();
    }
    else {
      let rewardReserves = await getReservesByPair(rewardOption.referencePair, usdPeggedTokenAddress, rewardOption.tokenAddress);
      if (!rewardReserves) return '';
      rewardPrice = new BigNumber(rewardReserves.reserveA).div(rewardReserves.reserveB).toFixed();
    }

    let lpTokenOut = lpObject.token0.toLowerCase() == usdPeggedTokenAddress.toLowerCase() ? lpObject.token1 : lpObject.token0;
    let lockedLPReserves = await getReservesByPair(lpObject.address, usdPeggedTokenAddress, lpTokenOut);
    if (!lockedLPReserves) return '';
    let lockedLPPrice = new BigNumber(lockedLPReserves.reserveA).div(lockedLPReserves.reserveB).times(2).toFixed();
    APR = new BigNumber(rewardOption.rate).times(new BigNumber(rewardPrice).times(365)).div(new BigNumber(lockedLPPrice).times(lockedDays)).toFixed();
  }
  else {
    if (!lpObject.token0 || !lpObject.token1 || lpObject.token0.toLowerCase() == WETHAddress.toLowerCase() || lpObject.token1.toLowerCase() == WETHAddress.toLowerCase()) {
      let WETH9PriceFeedAddress = ToUSDPriceFeedAddressesMap[chainId][WETHAddress.toLowerCase()];
      if (!WETH9PriceFeedAddress) return '';

      let aggregator = new UtilsContracts.EACAggregatorProxy(wallet, WETH9PriceFeedAddress);
      let WETH9LatestRoundData = await aggregator.latestRoundData();
      let WETH9PriceFeedDecimals = await aggregator.decimals();
      let WETH9USDPrice = new BigNumber(WETH9LatestRoundData.answer).shiftedBy(-WETH9PriceFeedDecimals).toFixed();

      let rewardReserves = await getReservesByPair(rewardOption.referencePair, WETHAddress, rewardOption.tokenAddress);
      if (!rewardReserves) return '';
      let rewardPrice = new BigNumber(rewardReserves.reserveA).div(rewardReserves.reserveB).times(WETH9USDPrice).toFixed();

      let otherTokenAddress = (!lpObject.token0 || lpObject.token0.toLowerCase() == WETHAddress.toLowerCase()) ? lpObject.token1 : lpObject.token0;
      let lockedLPReserves = await getReservesByPair(lpObject.address, WETHAddress, otherTokenAddress);
      if (!lockedLPReserves) return '';
      let otherTokenPrice = new BigNumber(lockedLPReserves.reserveA).div(lockedLPReserves.reserveB).times(WETH9USDPrice).toFixed();

      let lockedLPPrice = new BigNumber(otherTokenPrice).times(2).div(new BigNumber(otherTokenPrice).div(WETH9USDPrice).sqrt()).toFixed();
      APR = new BigNumber(rewardOption.rate).times(new BigNumber(rewardPrice).times(365)).div(new BigNumber(lockedLPPrice).times(lockedDays)).toFixed();
    }
  }

  return APR;
}

const getVaultRewardCurrentAPR = async (rewardOption: any, vaultObject: any, lockedDays: string) => {
  let APR = '';
  let rewardPrice = await getTokenPrice(rewardOption.tokenAddress)
  let assetTokenPrice = await getTokenPrice(vaultObject.assetToken.address);
  if (!assetTokenPrice || !rewardPrice) return '';
  let wallet = Wallet.getInstance();
  let vault = new CrossChainContracts.OSWAP_BridgeVault(wallet, vaultObject.address);
  let vaultTokenTotalSupply = await vault.totalSupply();
  let lpAssetBalance =  await vault.lpAssetBalance();
  let lpToAssetRatio = new BigNumber(lpAssetBalance).div(vaultTokenTotalSupply).toFixed();
  let VaultTokenPrice = new BigNumber(assetTokenPrice).times(lpToAssetRatio).toFixed()
  APR = new BigNumber(rewardOption.rate).times(new BigNumber(rewardPrice).times(365)).div(new BigNumber(VaultTokenPrice).times(lockedDays)).toFixed();
  return APR; 
}

const withdrawToken = async (contractAddress: string) => {
  if (!contractAddress) return;
  let wallet = Wallet.getInstance();
  let timeIsMoney = new TimeIsMoneyContracts.TimeIsMoney(wallet, contractAddress);
  let receipt = await timeIsMoney.withdraw(true);
  return receipt;
}

const claimToken = async (contractAddress: string) => {
  if (!contractAddress) return;
  let wallet = Wallet.getInstance();
  let rewards = new TimeIsMoneyContracts.Rewards(wallet, contractAddress);
  let receipt = await rewards.claim();
  return receipt;
}

const lockToken = async (token: ITokenObject, amount: string, contractAddress: string) => {
  if (!token) return;
  if (!contractAddress) return;
  let wallet = Wallet.getInstance();
  let decimals = typeof token.decimals === 'object' ? (token.decimals as BigNumber).toNumber() : token.decimals;
  let tokenAmount = Utils.toDecimals(amount, decimals);
  let timeIsMoney = new TimeIsMoneyContracts.TimeIsMoney(wallet, contractAddress);
  let receipt = await timeIsMoney.lock(tokenAmount);
  return receipt;
}

const getApprovalModelAction = (contractAddress: string, options: IERC20ApprovalEventOptions) => {
  const approvalOptions = {
    ...options,
    spenderAddress: contractAddress
  };
  const approvalModel = new ERC20ApprovalModel(approvalOptions);
  let approvalModelAction = approvalModel.getAction();
  return approvalModelAction;
}

export {
  getAllCampaignsInfo,
  getStakingTotalLocked,
  getLPObject,
  getLPBalance,
  getVaultObject,
  getVaultBalance,
  getERC20RewardCurrentAPR,
  getLPRewardCurrentAPR,
  getVaultRewardCurrentAPR,
  withdrawToken,
  claimToken,
  lockToken,
  getApprovalModelAction
}