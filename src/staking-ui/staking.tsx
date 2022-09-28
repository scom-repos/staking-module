import { Module, Panel, Icon, Button, Label, VStack, HStack, Container, customElements, ControlElement } from '@ijstech/components';
import { formatNumber, formatDate, registerSendTxEvents, INetwork, TokenMapType } from '@staking/global';
import { getChainId, getTokenMap, getTokenIconPath, viewOnExplorerByAddress, isWalletConnected } from '@staking/store';
import {
  getStakingTotalLocked,
  getLPObject,
  getVaultObject,
  getERC20RewardCurrentAPR,
  getLPRewardCurrentAPR,
  getVaultRewardCurrentAPR,
  withdrawToken,
  claimToken,
} from '@staking/staking-utils';
import {
  StakingType,
  getLockedTokenObject,
  getLockedTokenSymbol,
  getLockedTokenIconPaths,
} from './common';
import Assets from '@staking/assets';
import moment from 'moment';
import { BigNumber } from '@ijstech/eth-wallet';
import './staking.css';
import { Result } from '@staking/result';

export interface StakingElement extends ControlElement {
  campaigns?: any;
  lpTokenURL?: string;
  manageStakeURL?: string;
  tokenIcon: string;
  networkMap: { [key: number]: INetwork };
  tokenMap: TokenMapType;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-staking']: StakingElement
    }
  }
}

@customElements('i-staking')
export class Staking extends Module {
  private _campaigns: any = [];
  private stakingPanel: Panel;
  private noCampaignSection: Panel;
  private stakingResult: Result;
  private listAprTimer: any = [];
  private listActiveTimer: any = [];
  private count = 0;
  private tokenIcon: string;
  private _tokenMap: TokenMapType = {};
  private _networkMap: { [key: number]: INetwork }
  public lpTokenURL: string;
  public manageStakeURL: string;
  
  get campaigns() {
    return this._campaigns;
  }

  set campaigns(data: any) {
    this._campaigns = data;
    this.count++;
  }

  get networkMap(): {[key: number]: INetwork} {
    return this._networkMap;
  }

  set networkMap(data: {[key: number]: INetwork}) {
    this._networkMap = data || {};
  }

  get tokenMap(): TokenMapType {
    return this._tokenMap;
  }

  set tokenMap(data: TokenMapType) {
    this._tokenMap = data || {};
  }

  static async create(options: StakingElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: StakingElement) {
    super(parent, options);
    if (options) {
      this.networkMap = options.networkMap;
      this.tokenMap = options.tokenMap;
    }
  }

  private showResultMessage = (result: Result, status: 'warning' | 'success' | 'error', content?: string | Error) => {
    if (!result) return;
    let params: any = { status };
    if (status === 'success') {
      params.txtHash = content;
    } else {
      params.content = content;
    }
    result.message = { ...params };
    result.showModal();
  }

  private onStake = (stakingAddress: string) => {
    if (this.manageStakeURL) {
      window.location.assign(`${this.manageStakeURL}=${stakingAddress}`);
    } else {
      window.location.assign(`#/staking/manage-stake?address=${stakingAddress}`);
    }
  }

  private onUnstake = async (btnUnstake: Button, data: any) => {
    if (data.option.mode !== 'Claim') {
      this.onStake(data.option.stakingAddress);
    } else {
      this.showResultMessage(this.stakingResult, 'warning', `Unstake ${data.lockedTokenSymbol}`);
      const callBack = async (err: any, reply: any) => {
        if (err) {
          this.showResultMessage(this.stakingResult, 'error', err);
        } else {
          this.showResultMessage(this.stakingResult, 'success', reply);
          btnUnstake.enabled = false;
          btnUnstake.rightIcon.visible = true;
        }
      };

      const confirmationCallBack = async (receipt: any) => {
        await this.renderUI();
        if (!btnUnstake) return;
        btnUnstake.rightIcon.visible = false;
        btnUnstake.enabled = true;
      };

      registerSendTxEvents({
        transactionHash: callBack,
        confirmation: confirmationCallBack
      });

      withdrawToken(data.option.stakingAddress);
    }
  }

  private onClaim = async (btnClaim: Button, data: any) => {
    this.showResultMessage(this.stakingResult, 'warning', `Claim ${data.rewardSymbol}`);
    const callBack = async (err: any, reply: any) => {
      if (err) {
        this.showResultMessage(this.stakingResult, 'error', err);
      } else {
        this.showResultMessage(this.stakingResult, 'success', reply);
        btnClaim.enabled = false;
        btnClaim.rightIcon.visible = true;
      }
    };

    const confirmationCallBack = async (receipt: any) => {
      await this.renderUI();
      if (!btnClaim) return;
      btnClaim.rightIcon.visible = false;
      btnClaim.enabled = true;
    };

    registerSendTxEvents({
      transactionHash: callBack,
      confirmation: confirmationCallBack
    });

    claimToken(data.reward.rewardAddress);
  }

  private removeTimer = () => {
    for (const timer of this.listAprTimer) {
      clearInterval(timer);
    }
    this.listAprTimer = [];
    for (const timer of this.listActiveTimer) {
      clearInterval(timer);
    }
    this.listActiveTimer = [];
  }

  private getRewardToken = (tokenAddress: string) => {
    return this.tokenMap[tokenAddress] || this.tokenMap[tokenAddress?.toLocaleLowerCase()] || {};
  }

  private getLPToken = (campaign: any, token: string, chainId?: number) => {
    if (campaign.getTokenURL) {
      window.open(campaign.getTokenURL);
    } else {
      window.open(this.lpTokenURL ? this.lpTokenURL : `#/swap?chainId=${chainId}&fromToken=BNB&toToken=${token}&fromAmount=1&showOptimizedRoutes=false`);
    }
  }

  renderUI = async () => {
    await this.renderCampaigns(Number(this.count));
  }

  private renderCampaigns = async (count: number) => {
    this.removeTimer();
    this.noCampaignSection = await Panel.create();
    this.tokenMap = getTokenMap();
    const chainId = getChainId();
    const network = this.networkMap[chainId];
    this.noCampaignSection.visible = false;
    if (this.campaigns && !this.campaigns.length) {
      this.stakingPanel.clearInnerHTML();
      this.stakingPanel.appendChild(this.noCampaignSection);
      this.noCampaignSection.visible = true;
      return;
    }

    let nodeItems: HTMLElement[] = [];
    this.removeTimer();
    for (let idx = 0; idx < this.campaigns.length; idx++) {
      const campaign = this.campaigns[idx];
      const containerSection = await Panel.create();
      containerSection.id = `campaign-${idx}`;
      containerSection.classList.add('container-custom');
      const options = campaign.options;
      const stakingInfo = options ? options[0] : null;
      let lpTokenData: any = {};
      let vaultTokenData: any = {};
      if (stakingInfo && stakingInfo.tokenAddress) {
        if (stakingInfo.stakingType == StakingType.LP_Token) {
          lpTokenData = {
            'object': await getLPObject(stakingInfo.tokenAddress)
          }
        } else if (stakingInfo.stakingType == StakingType.VAULT_Token) {
          vaultTokenData = {
            'object': await getVaultObject(stakingInfo.tokenAddress)
          }
        }
      }
      const tokenInfo = {
        tokenAddress: campaign.tokenAddress,
        lpToken: lpTokenData,
        vaultToken: vaultTokenData
      }
      const lockedTokenObject = getLockedTokenObject(stakingInfo, tokenInfo, this.tokenMap);
      const lockedTokenSymbol = getLockedTokenSymbol(stakingInfo, lockedTokenObject);
      const lockedTokenIconPaths = getLockedTokenIconPaths(stakingInfo, lockedTokenObject, chainId, this.tokenMap);
      const isSimplified = campaign.isSimplified;
      const activeStartTime = stakingInfo ? stakingInfo.startOfEntryPeriod : 0;
      const activeEndTime = stakingInfo ? stakingInfo.endOfEntryPeriod : 0;
      let isStarted = moment(activeStartTime).diff(moment()) <= 0;
      let isClosed = moment(activeEndTime).diff(moment()) <= 0;
      let totalTokens = 0;
      let availableQty = 0;
      let totalLocked: any = {};
      const totalTokensLabel = await Label.create();
      const availableQtyLabel = await Label.create();
      const activeTimerRow = await VStack.create();
      const endHours = await Label.create();
      const endDays = await Label.create();
      const endMins = await Label.create();
      const stickerSection = await Panel.create();
      const stickerLabel = await Label.create();
      const stickerIcon = await Icon.create();
      const simplifiedRow = await VStack.create();
      stickerSection.classList.add('sticker');
      endHours.classList.add('timer-value');
      endDays.classList.add('timer-value');
      endMins.classList.add('timer-value');

      if (isSimplified) {
        simplifiedRow.classList.add('simplified');
        simplifiedRow.appendChild(
          <i-panel class="simplified-description">
            <i-label caption={`Don't have ${network?.name} ${lockedTokenSymbol}?`} />
            <i-image width={25} height={25} url={Assets.fullPath(network?.img || '')} />
          </i-panel>
        );
        simplifiedRow.appendChild(
          <i-panel class="simplified-link">
            <i-label caption={`Flip ERC20 ${lockedTokenSymbol} to ${network?.name} ${lockedTokenSymbol}`} />
            <i-label link={{ href: campaign.getTokenURL2 }} caption="HERE" />
            <i-label caption="now!" />
          </i-panel>
        );
      }

      const setAvailableQty = async () => {
        if (!isWalletConnected()) return;
        let _totalTokens = 0;
        let _availableQty = 0;
        for (const o of options) {
          const _totalLocked = await getStakingTotalLocked(o.stakingAddress, o.decimalsOffset);
          totalLocked[o.stakingAddress] = _totalLocked;
          const optionQty = new BigNumber(o.maxTotalLock).minus(_totalLocked);
          const lbOptionQty = document.querySelector(`#lb-${o.stakingAddress}`) as Label;
          if (lbOptionQty) {
            lbOptionQty.caption = `${formatNumber(optionQty)} ${lockedTokenSymbol}`;
          }
          const btnStake = document.querySelector(`#btn-${o.stakingAddress}`) as Button;
          if (btnStake && btnStake.caption === 'Stake') {
            btnStake.enabled = !(!isStarted || o.mode === 'Stake' && (optionQty.lte(0) || isClosed));
          } else if (btnStake && btnStake.caption === 'Unstake') {
            btnStake.enabled = o.stakeQty != "0";
          }
          const stickerOption = document.querySelector(`#sticker-${o.stakingAddress}`) as Panel;
          if (optionQty.lte(0) && stickerOption) {
            stickerOption.visible = true;
          }
          _totalTokens += parseFloat(o.maxTotalLock);
          _availableQty += (parseFloat(o.maxTotalLock) - parseFloat(_totalLocked));
        };
        totalTokens = _totalTokens;
        availableQty = _availableQty;
        totalTokensLabel.caption = `${formatNumber(totalTokens)} ${lockedTokenSymbol}`;
        availableQtyLabel.caption = `${formatNumber(availableQty)} ${lockedTokenSymbol}`;
        if (isClosed) {
          if (stickerLabel.caption !== 'Closed') {
            stickerSection.classList.add('closed');
            stickerSection.classList.remove('sold-out');
            stickerLabel.caption = 'Closed';
            stickerIcon.name = 'check-square';
          }
        } else if (availableQty === 0) {
          if (stickerLabel.caption !== 'Sold Out') {
            stickerLabel.caption = 'Sold Out';
            stickerIcon.name = 'star';
            stickerSection.classList.add('sold-out');
          }
        } else {
          if (stickerLabel.caption !== 'Active') {
            stickerLabel.caption = 'Active';
            stickerIcon.name = 'star';
          }
        }
      }

      const setEndRemainingTime = () => {
        isStarted = moment(activeStartTime).diff(moment()) <= 0;
        isClosed = moment(activeEndTime).diff(moment()) <= 0;
        if (isStarted && !isClosed) {
          activeTimerRow.visible = true;
        } else {
          activeTimerRow.visible = false;
        }
        if (activeEndTime == 0) {
          endDays.caption = endHours.caption = endMins.caption = '0';
          if (this.listActiveTimer[idx]) {
            clearInterval(this.listActiveTimer[idx]);
          }
        } else {
          const days = moment(activeEndTime).diff(moment(), 'days');
          const hours = moment(activeEndTime).diff(moment(), 'hours') - days * 24;
          const mins = moment(activeEndTime).diff(moment(), 'minutes') - days * 24 * 60 - hours * 60;
          endDays.caption = `${days}`;
          endHours.caption = `${hours}`;
          endMins.caption = `${mins}`;
        }
      }

      const setTimer = () => {
        setEndRemainingTime();
        setAvailableQty();
      }

      setTimer();
      this.listActiveTimer.push(setInterval(setTimer, 2000));

      stickerSection.appendChild(
        <i-vstack class="sticker-text">
          {stickerIcon}
          {stickerLabel}
        </i-vstack>
      );

      activeTimerRow.appendChild(
        <i-vstack>
          <i-label caption="Time until the staking campaign ends:" />
          <i-panel margin={{ top: 4 }} class="custom-timer">
            {endDays}
            <i-label caption="D" class="timer-unit" />
            {endHours}
            <i-label caption="H" class="timer-unit" />
            {endMins}
            <i-label caption="M" class="timer-unit" />
          </i-panel>
        </i-vstack>
      );

      totalTokensLabel.classList.add('bold');
      availableQtyLabel.classList.add('bold');
      totalTokensLabel.caption = `${formatNumber(totalTokens)} ${lockedTokenSymbol}`;
      availableQtyLabel.caption = `${formatNumber(availableQty)} ${lockedTokenSymbol}`;
      totalTokensLabel.classList.add('text-right');
      availableQtyLabel.classList.add('text-right');
      const rowItems = [
        {
          title: 'Total Tokens:',
          value: totalTokensLabel.caption,
          isHidden: isSimplified,
          img: Assets.fullPath('img/staking/dot-circle.svg'),
          elm: totalTokensLabel,
        },
        {
          title: 'Available QTY:',
          value: availableQtyLabel.caption,
          isHidden: isSimplified,
          img: Assets.fullPath('img/staking/dot-circle.svg'),
          elm: availableQtyLabel,
        },
        {
          title: 'Campaign Start:',
          value: moment(activeStartTime).utc().format('YYYY-MM-DD HH:mm:ss z'),
          isHidden: isStarted || isSimplified,
          img: Assets.fullPath('img/staking/stopwatch.svg'),
        },
        //{
        //  title: 'Campaign Period:',
        //  value: campaign.campaignPeriod,
        //  img: Assets.fullPath('img/staking/stopwatch.svg'),
        //},
        {
          title: 'Vesting Period:',
          value: campaign.vestingPeriod,
          isHidden: !campaign.vestingPeriod || isSimplified,
          img: Assets.fullPath('img/staking/stopwatch.svg'),
        },
      ];

      nodeItems.push(containerSection);
      containerSection.appendChild(
        <i-hstack class="row-custom" width="100%" wrap='wrap'>
          <i-vstack class="column-custom">
            <i-vstack class="banner" verticalAlignment="space-between">
              {stickerSection}
              <i-hstack verticalAlignment='center' class="campaign-name">
                <i-image width="25px" height="25px" url={Assets.fullPath(this.tokenIcon)} />
                <i-label caption={campaign.campaignName} />
              </i-hstack>
              <i-hstack>
                <i-label class="campaign-description" caption={campaign.campaignDesc} />
              </i-hstack>
              <i-panel>
                {
                  rowItems.filter(f => !f.isHidden).map((v: any) => {
                    return <i-hstack verticalAlignment="start" horizontalAlignment="space-between" class="row-item">
                      <i-hstack class="col-item">
                        <i-image class="custom-icon" url={v.img} />
                        <i-label class="no-wrap" caption={v.title} />
                      </i-hstack>
                      <i-vstack width="auto" horizontalAlignment="end">
                        {v.elm ? v.elm : <i-label class="bold text-right" caption={v.value} />}
                      </i-vstack>
                    </i-hstack >
                  })
                }
              </i-panel>
              {simplifiedRow}
              <i-hstack verticalAlignment='center' class="get-token" onClick={() => this.getLPToken(campaign, lockedTokenSymbol, chainId)}>
                <i-label class="bold" caption={`Get ${lockedTokenSymbol}`} />
                {
                  lockedTokenIconPaths.map((v: any) => {
                    return <i-image width={25} height={25} url={Assets.fullPath(v)} />
                  })
                }
                <i-icon name="external-link-alt" width="14" height="14" fill="#fff" />
              </i-hstack >
              {activeTimerRow}
            </i-vstack>
          </i-vstack>
          {
            await Promise.all(options.map(async (option: any) => {
              const stickerOptionSection = await Panel.create();
              stickerOptionSection.classList.add('sticker', 'sold-out', 'hidden', 'sticker-text');
              stickerOptionSection.id = `sticker-${option.stakingAddress}`;
              stickerOptionSection.appendChild(
                <i-panel class="sticker-text">
                  <i-icon name="star" />
                  <i-label caption="Sold Out" />
                </i-panel>
              )

              const btnStake = await Button.create();
              const btnUnstake = await Button.create({
                rightIcon: { spin: true, visible: false }
              });
              if (option.mode === 'Stake') {
                btnUnstake.visible = false;
                btnStake.id = `btn-${option.stakingAddress}`;
                btnStake.enabled = !isClosed;
                btnStake.caption = 'Stake';
                btnStake.classList.add('btn-os', 'btn-stake');
                btnStake.onClick = () => this.onStake(option.stakingAddress);
              } else {
                btnStake.visible = false;
                btnUnstake.id = `btn-${option.stakingAddress}`;
                btnUnstake.caption = 'Unstake';
                btnUnstake.classList.add('btn-os', 'btn-stake');
                btnUnstake.onClick = () => this.onUnstake(btnUnstake, { option, lockedTokenSymbol });
              }

              const isClaim = option.mode === 'Claim';

              const rewardOptions = !isClaim ? option.rewardOptions : [];
              const rewardToken = !isClaim ? this.getRewardToken(rewardOptions[0].tokenAddress) : {} as any;
              const lpRewardTokenIconPath = !isClaim && rewardToken.address ? getTokenIconPath(rewardToken, chainId) : '';
              let aprInfo: any = {};

              const optionAvailableQtyLabel = await Label.create();
              optionAvailableQtyLabel.classList.add('ml-auto');
              optionAvailableQtyLabel.id = `lb-${option.stakingAddress}`;
              optionAvailableQtyLabel.caption = `${formatNumber(new BigNumber(option.maxTotalLock).minus(totalLocked[option.stakingAddress]))} ${lockedTokenSymbol}`;
              const claimStakedRow = await HStack.create();
              claimStakedRow.appendChild(<i-label class="mr-025" caption="You Staked:" />);
              claimStakedRow.appendChild(<i-label class="ml-auto" caption={`${formatNumber(option.stakeQty)} ${lockedTokenSymbol}`} />);

              const rowRewardsLocked = await Panel.create();
              const rowRewardsVesting = await Panel.create();
              const rowRewardsVestingEnd = await Panel.create();
              const rowRewardsClaimable = await Panel.create();
              const rowRewardsClaimBtn = await Panel.create();

              if (isClaim) {
                claimStakedRow.classList.add('mb-1');
                for (let idx = 0; idx < option.rewardsData.length; idx++) {
                  const reward = option.rewardsData[idx]
                  const rewardToken = this.getRewardToken(reward.tokenAddress);
                  const rewardSymbol = rewardToken.symbol || '';
                  rowRewardsLocked.appendChild(
                    <i-hstack horizontalAlignment="space-between">
                      <i-label caption={`${rewardSymbol} Locked:`} />
                      <i-label class="bold" caption={`${formatNumber(reward.vestedReward)} ${rewardSymbol}`} />
                    </i-hstack>
                  );
                  rowRewardsVesting.appendChild(
                    <i-hstack horizontalAlignment="space-between">
                      <i-label caption={`${rewardSymbol} Vesting Start:`} />
                      <i-label class="bold" caption={reward.vestingStart ? reward.vestingStart.format('YYYY-MM-DD HH:mm:ss') : 'TBC'} />
                    </i-hstack>
                  );
                  rowRewardsVestingEnd.appendChild(
                    <i-hstack horizontalAlignment="space-between">
                      <i-label caption={`${rewardSymbol} Vesting End:`} />
                      <i-label class="bold" caption={reward.vestingEnd ? reward.vestingEnd.format('YYYY-MM-DD HH:mm:ss') : 'TBC'} />
                    </i-hstack>
                  );
                  const passClaimStartTime = !(reward.claimStartTime && moment().diff(moment.unix(reward.claimStartTime)) < 0);
                  let rewardClaimable = `0 ${rewardSymbol}`;
                  if (passClaimStartTime) {
                    rewardClaimable = `${formatNumber(reward.claimable)} ${rewardSymbol}`;
                  }
                  let startClaimingText = '';
                  if (!(!reward.claimStartTime || passClaimStartTime)) {
                    const claimStart = moment.unix(reward.claimStartTime).format('YYYY-MM-DD HH:mm:ss');
                    startClaimingText = `(Claim ${rewardSymbol} after ${claimStart})`;
                  }
                  rowRewardsClaimable.appendChild(
                    <i-hstack horizontalAlignment="space-between">
                      <i-label caption={`${rewardSymbol} Claimable:`} />
                      <i-label class="bold" caption={rewardClaimable} />
                      {startClaimingText ? <i-label caption={startClaimingText} /> : []}
                    </i-hstack>
                  );
                  const btnClaim = await Button.create({
                    rightIcon: { spin: true, visible: false },
                    caption: `Claim ${rewardSymbol}`,
                    enabled: !(!passClaimStartTime || new BigNumber(reward.claimable).isZero())
                  })
                  btnClaim.id = `btnClaim-${idx}-${option.stakingAddress}`;
                  btnClaim.classList.add('btn-os', 'btn-stake', 'mt-1');
                  btnClaim.onClick = () => this.onClaim(btnClaim, { reward, rewardSymbol });
                  rowRewardsClaimBtn.appendChild(btnClaim);
                };
              } else {
                rowRewardsLocked.visible = false;
                rowRewardsVesting.visible = false;
                rowRewardsVestingEnd.visible = false;
                rowRewardsClaimable.visible = false;
                rowRewardsClaimBtn.visible = false;
              }

              const rowOptionItems = !isClaim ? [
                {
                  title: 'Max. QTY',
                  value: `${formatNumber(option.maxTotalLock)} ${lockedTokenSymbol}`,
                  isHidden: isSimplified,
                },
                {
                  title: 'Available QTY',
                  value: optionAvailableQtyLabel.caption,
                  isHidden: isSimplified,
                  elm: optionAvailableQtyLabel,
                },
                {
                  title: 'Individual Cap',
                  value: `${formatNumber(option.perAddressCap)} ${lockedTokenSymbol}`,
                },
                {
                  title: 'Campaign Start Date',
                  value: formatDate(option.startOfEntryPeriod, 'DD MMM YYYY'),
                  isHidden: !isSimplified,
                },
              ] : [];

              const getAprValue = (rewardOption: any) => {
                if (rewardOption && aprInfo && aprInfo[rewardOption.tokenAddress]) {
                  const apr = new BigNumber(aprInfo[rewardOption.tokenAddress]).times(100).toFormat(2, BigNumber.ROUND_DOWN);
                  return `${apr}%`;
                }
                return '';
              }

              return <i-vstack class="column-custom">
                <i-panel class="bg-color">
                  {stickerOptionSection}
                  <i-panel class="header-info">
                    <i-hstack verticalAlignment='center' horizontalAlignment="center">
                      {
                        lockedTokenIconPaths.map((v: any) => {
                          return <i-image width={25} height={25} url={Assets.fullPath(v)} />
                        })
                      }
                      <i-label class="bold" caption={`${option.duration} Days`} />
                    </i-hstack >
                    <i-label caption={option.stakingDesc} />
                  </i-panel>
                  <i-panel class="img-custom">
                    {
                      (option.stakingType === StakingType.LP_Token && rewardOptions.length === 2)
                        ?
                        <i-panel class="group-img">
                          <i-image width={75} height={75} url={Assets.fullPath(lpRewardTokenIconPath)} />
                          <i-icon name="plus" width={16} height={16} />
                          <i-image width={75} height={75} url={Assets.fullPath(this.tokenIcon)} />
                        </i-panel>
                        :
                        <i-image width={75} height={75} url={Assets.fullPath(this.tokenIcon)} />
                    }
                  </i-panel>
                  <i-panel class="info-stake">
                    {btnStake}
                    {
                      await Promise.all(rewardOptions.map(async (rewardOption: any) => {
                        const labelApr = await Label.create();
                        labelApr.classList.add('ml-auto');
                        const updateApr = async () => {
                          if (option.stakingType === StakingType.ERC20_Token) {
                            const apr: any = await getERC20RewardCurrentAPR(rewardOption, lockedTokenObject, option.duration);
                            if (!isNaN(parseFloat(apr))) {
                              aprInfo[rewardOption.tokenAddress] = apr;
                            }
                          } else if (option.stakingType === StakingType.LP_Token) {
                            if (rewardOption.referencePair) {
                              aprInfo[rewardOption.tokenAddress] = await getLPRewardCurrentAPR(rewardOption, lpTokenData.object, option.duration);
                            }
                          } else {
                            aprInfo[rewardOption.tokenAddress] = await getVaultRewardCurrentAPR(rewardOption, vaultTokenData.object, option.duration);
                          }
                          const aprValue = getAprValue(rewardOption);
                          if (isSimplified) {
                            labelApr.caption = aprValue;
                          } else {
                            labelApr.caption = aprValue ? `(${aprValue} APR) ${rewardOption.rateDesc}` : rewardOption.rateDesc;
                          }
                        }
                        updateApr();
                        this.listAprTimer.push(setInterval(updateApr, 10000));
                        const aprValue = getAprValue(rewardOption);
                        if (isSimplified) {
                          labelApr.caption = aprValue;
                          return <i-vstack>
                            <i-hstack horizontalAlignment="space-between">
                              <i-label class="mr-025" caption="Rate" />
                              <i-label class="bold" caption={rewardOption.rateDesc} />
                            </i-hstack>
                            <i-hstack>
                              <i-label class="mr-025" caption="APR" />
                              {labelApr}
                            </i-hstack>
                          </i-vstack>
                        }
                        labelApr.caption = aprValue ? `(${aprValue} APR) ${rewardOption.rateDesc}` : rewardOption.rateDesc;
                        return <i-hstack>
                          <i-label class="mr-025" caption="Rate" />
                          {labelApr}
                        </i-hstack>
                      }))
                    }
                    {
                      rowOptionItems.filter(f => !f.isHidden).map((v: any) => {
                        return <i-hstack horizontalAlignment="space-between">
                          <i-label class="mr-025" caption={v.title} />
                          {v.elm ? v.elm : <i-label caption={v.value} />}
                        </i-hstack>
                      })
                    }
                    <i-panel class={isClaim ? 'hidden' : 'custom-divider'} />
                    {claimStakedRow}
                    {btnUnstake}
                    {rowRewardsLocked}
                    {rowRewardsVesting}
                    {rowRewardsVestingEnd}
                    {rowRewardsClaimable}
                    {rowRewardsClaimBtn}
                    {
                      rewardOptions.map((rewardOption: any) => {
                        const earnedQty = formatNumber(new BigNumber(option.totalCredit).times(rewardOption.rate));
                        const earnedSymbol = this.getRewardToken(rewardOption.tokenAddress).symbol || '';
                        return <i-hstack horizontalAlignment="space-between">
                          <i-label class="mr-025" caption="You Earned" />
                          <i-label caption={`${earnedQty} ${earnedSymbol}`} />
                        </i-hstack>
                      })
                    }
                  </i-panel>
                  <i-label class="view-contract pointer" margin={{ top: isClaim ? 0 : 16 }} onClick={() => viewOnExplorerByAddress(chainId, option.stakingAddress)}>
                    <i-label caption="View Contract" />
                    <i-icon name="external-link-alt" width="14" height="14" fill="#fff" class="inline-block" />
                  </i-label>
                </i-panel>
              </i-vstack>
            }))
          }
        </i-hstack>
      )
    };
    if (count == this.count) {
      this.stakingPanel.clearInnerHTML();
      this.stakingPanel.append(this.noCampaignSection, ...nodeItems);
    }
  }

  init() {
    super.init();
    this.tokenIcon = this.getAttribute('tokenIcon', true);
    this.lpTokenURL = this.getAttribute('lpTokenURL', true);
    this.manageStakeURL = this.getAttribute('manageStakeURL', true);
    const networkMap = this.getAttribute('networkMap', true);
    if (networkMap) {
      this.networkMap = JSON.parse(networkMap);
    }
    const tokenMap = this.getAttribute('tokenMap', true);
    if (tokenMap) {
      this.tokenMap = JSON.parse(tokenMap);
    }
    const campaigns = this.getAttribute('campaigns', true);
    if (campaigns) {
      this.campaigns = JSON.parse(campaigns);
      this.renderUI();
    }
  }

  render() {
    return (
      <i-panel class="staking-component">
        <i-panel class="staking-layout">
          <i-panel>
            <i-panel id="stakingPanel" class="wrapper" />
          </i-panel>
        </i-panel>
        <staking-result id="stakingResult" />
      </i-panel>
    )
  }
}
