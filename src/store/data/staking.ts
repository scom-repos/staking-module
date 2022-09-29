enum LockTokenType {
  ERC20_Token,
  LP_Token,
  VAULT_Token
}

interface StakingCampaign {
  //custom
  customName: string,
  customDesc?: string,
  getTokenURL?: string,

  stakings: Staking[],
}

interface Staking {
  //contract
  address?: string,
  lockTokenAddress: string,
  minLockTime: number, //in second 
  entryStart: number, //unix
  entryEnd: number, //unix
  perAddressCap: number,
  maxTotalLock: number,

  //custom
  customDesc?: string,
  lockTokenType: LockTokenType,

  rewards: Reward[]
}

interface Reward {
  //contract
  address?:string,
  rewardTokenAddress:string,
  multiplier: number, //lockAmount * multiplier = rewardAmount
  initialReward: number, // 0 <= initialReward <= 1; lockAmount * initialReward = initialRewardAmount;
  vestingPeriod: number, // in second
  claimDeadline: number, //unix
  admin: string, // can only withdraw remaining fund after claimDeadline.
}


export const USDPeggedTokenAddressMap: { [key: number]: string } = {
  56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', //BUSD
  97: '0xDe9334C157968320f26e449331D6544b89bbD00F', //BUSD
}
