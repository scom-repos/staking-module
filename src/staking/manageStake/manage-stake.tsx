import { Button, Label, Input, Modal, Container, VStack, HStack, Panel, customElements, ControlElement, Module, Styles } from '@ijstech/components';
import { formatNumber, ITokenObject, IERC20ApprovalAction, limitInputNumber } from '@staking/global';
import { getChainId, getTokenMap, getTokenBalances, isWalletConnected, setTokenBalances, LockTokenType, setStakingStatus } from '@staking/store';
import { Result } from '../../result';
import {
  lockToken,
  withdrawToken,
  getLPObject,
  getLPBalance,
  getVaultObject,
  getVaultBalance,
  getApprovalModelAction,
} from '@staking/staking-utils';
import {
  getLockedTokenObject,
  getLockedTokenSymbol,
  getLockedTokenIconPaths,
} from '../common';
import Assets from '@staking/assets';
import { BigNumber } from '@ijstech/eth-wallet';
import './manage-stake.css';
import moment from 'moment';

enum CurrentMode {
  STAKE,
  UNLOCK
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['manage-stake']: ControlElement;
    }
  }
};

@customElements('manage-stake')
export class ManageStake extends Module {
  private modalStake: Modal;
  private loadingElm: Panel;
  private containerStake: Container;
  private stakingInfo: any = {};
  private address: string;
  private lockedTokenObject: any = {};
  private maxQty = 0;
  private availableQty = '0';
  private balance = '0';
  private perAddressCap = '0';
  private stakeQty = '0';
  private tokenSymbol = '';
  private currentMode = CurrentMode.STAKE;
  private timer: any;
  private chainId: number;
  private tokenBalances: any = {};
  private tokenMap: any = {};
  private lbTitle: Label;
  private lbDuration: Label;
  private lbMaxQty: Label;
  private lbAvailableQty: Label;
  private lbMaturity: Label;
  private lbBalance: Label;
  private rowImgToken: HStack;
  private lbTimer: Label;
  private sectionUnlockMessage: Panel;
  private sectionEarnedQty: Panel;
  private colYourStakeQty: VStack;
  private colIndividualCap: VStack;
  private sectionTokenInput: Panel;
  private inputAmount: Input;
  private btnApprove: Button;
  private btnStake: Button;
  private btnMax: Button;
  private modalActions: Modal;
  private stakingResult: Result;
  private approvalModelAction: IERC20ApprovalAction;
  public onRefresh: any;

  constructor(parent?: Container, options?: any) {
    super(parent, options);
  }

  showModal = async (data: any, actionKey: string) => {
    this.address = data.address;
    this.stakingInfo = data;
    this.onSetupPage(isWalletConnected(), actionKey);
    if (this.currentMode === CurrentMode.UNLOCK) {
      this.modalActions.visible = true;
    } else {
      this.modalStake.visible = true;
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

  private onApproveToken = async () => {
    this.showResultMessage(this.stakingResult, 'warning', `Approve ${this.tokenSymbol}`);
    this.approvalModelAction.doApproveAction(this.lockedTokenObject, this.inputAmount.value);
  }

  private onStake = async () => {
    this.approvalModelAction.doPayAction();
  }

  private onInputAmount = () => {
    limitInputNumber(this.inputAmount, this.lockedTokenObject?.decimals || 18);
    this.approvalModelAction.checkAllowance(this.lockedTokenObject, this.inputAmount.value);
  }

  private setMaxBalance = () => {
    this.inputAmount.value = BigNumber.min(this.availableQty, this.balance, this.perAddressCap).toFixed();
    limitInputNumber(this.inputAmount, this.lockedTokenObject?.decimals || 18);
    this.approvalModelAction.checkAllowance(this.lockedTokenObject, this.inputAmount.value);
  };

  private renderStakingInfo = async (info: any) => {
    if (!info || !Object.keys(info).length) {
      clearInterval(this.timer);
      this.lbDuration.caption = '-';
      this.lbMaxQty.caption = '-';
      this.lbAvailableQty.caption = '-';
      this.lbMaturity.caption = '-';
      this.colIndividualCap.visible = false;
      this.colYourStakeQty.visible = false;
      this.sectionEarnedQty.visible = false;
      this.btnApprove.visible = false;
      if (!isWalletConnected()) {
        this.lbBalance.caption = 'Balance: 0';
        this.btnMax.visible = false;
      }
      return;
    };
    let lpTokenData: any = {};
    let vaultTokenData: any = {};
    const { tokenAddress, lockTokenType } = info;
    if (tokenAddress) {
      if (lockTokenType == LockTokenType.LP_Token) {
        lpTokenData = {
          'object': await getLPObject(tokenAddress),
          'balance': await getLPBalance(tokenAddress)
        }
      } else if (lockTokenType == LockTokenType.VAULT_Token) {
        vaultTokenData = {
          'object': await getVaultObject(tokenAddress),
          'balance': await getVaultBalance(tokenAddress)
        }
      }
    }
    const tokenInfo = {
      tokenAddress: tokenAddress,
      lpToken: lpTokenData,
      vaultToken: vaultTokenData
    }
    this.lockedTokenObject = getLockedTokenObject(info, tokenInfo, this.tokenMap);
    const defaultDecimalsOffset = 18 - (this.lockedTokenObject?.decimals || 18);
    const symbol = getLockedTokenSymbol(info, this.lockedTokenObject);
    this.tokenSymbol = symbol;
    this.lbDuration.caption = info.duration;
    this.perAddressCap = new BigNumber(info.perAddressCap).shiftedBy(defaultDecimalsOffset).toFixed();
    this.maxQty = new BigNumber(info.maxTotalLock).shiftedBy(defaultDecimalsOffset).toNumber();
    this.stakeQty = new BigNumber(info.stakeQty).shiftedBy(defaultDecimalsOffset).toFixed();
    const totalLocked = new BigNumber(info.totalLocked).shiftedBy(defaultDecimalsOffset);
    this.availableQty = new BigNumber(this.maxQty).minus(totalLocked).toFixed();
    this.lbMaxQty.caption = `${formatNumber(this.maxQty)} ${symbol}`;
    this.lbAvailableQty.caption = `${formatNumber(this.availableQty)} ${symbol}`;
    this.btnApprove.visible = false;
    clearInterval(this.timer);
    if (this.currentMode === CurrentMode.UNLOCK) {
      const totalCredit = new BigNumber(info.totalCredit);
      if (totalCredit.isZero()) {
        this.sectionUnlockMessage.visible = true;
        this.btnStake.onClick = () => { this.modalActions.visible = true };
      } else {
        this.btnStake.onClick = () => this.onStake();
        this.sectionUnlockMessage.visible = false;
      }
      this.lbTitle.caption = 'Manage Locked Staking';
      this.colIndividualCap.visible = false;
      this.colYourStakeQty.visible = true;
      this.sectionEarnedQty.visible = true;
      this.sectionTokenInput.visible = false;
      this.colYourStakeQty.innerHTML = '';
      this.colYourStakeQty.appendChild(<i-label caption="Your Stake QTY" font={{ color: '#FFFFFF' }} />);
      this.colYourStakeQty.appendChild(<i-label class="text-yellow" caption={`${formatNumber(this.stakeQty)} ${symbol}`} />);
      const maturity = moment(info.releaseTime).format('YYYY-MM-DD HH:mm:ss');
      this.lbMaturity.caption = maturity;
      this.lbTimer.caption = `Please note that you will forfeit your rewards by unstaking. You are not eligible for rewards until <b>${maturity}</b>`;
      this.sectionEarnedQty.innerHTML = '';
      info.rewards.forEach((rewardOption: any) => {
        const earnedQty = formatNumber(totalCredit.times(rewardOption.rate));
        const rewardSymbol = this.tokenMap[rewardOption.tokenAddress?.toLowerCase()]?.symbol || '';
        this.sectionEarnedQty.appendChild(
          <i-vstack class="w-50">
            <i-label caption="Your Earned QTY" font={{ color: '#FFFFFF' }} />
            <i-label class="text-yellow" caption={`${earnedQty} ${rewardSymbol}`} />
          </i-vstack>
        )
      })
      this.approvalModelAction.checkAllowance(this.lockedTokenObject, this.stakeQty);
    } else {
      this.lbTitle.caption = 'Create Locked Staking';
      this.btnStake.onClick = () => this.onStake();
      this.btnStake.caption = 'Stake';
      this.btnStake.enabled = false;
      this.sectionUnlockMessage.visible = false;
      this.colIndividualCap.visible = true;
      this.colYourStakeQty.visible = false;
      this.sectionEarnedQty.visible = false;
      if (!!tokenAddress) {
        if (lockTokenType == LockTokenType.ERC20_Token) {
          await setTokenBalances();
          let balances = getTokenBalances();
          this.tokenBalances = Object.keys(balances).reduce((accumulator: any, key) => {
            accumulator[key.toLowerCase()] = balances[key];
            return accumulator;
          }, {});
          this.balance = this.tokenBalances[tokenAddress] || '0';
        } else if (lockTokenType == LockTokenType.LP_Token) {
          this.balance = new BigNumber(lpTokenData.balance || 0).shiftedBy(defaultDecimalsOffset).toFixed();
        } else if (lockTokenType == LockTokenType.VAULT_Token) {
          this.balance = new BigNumber(vaultTokenData.balance || 0).shiftedBy(defaultDecimalsOffset).toFixed();
        }
        this.btnMax.visible = true;
        this.btnMax.enabled = new BigNumber(this.balance).gt(0);
        this.lbBalance.caption = `Balance: ${formatNumber(this.balance)}`;
        this.rowImgToken.innerHTML = '';
        const lockedTokenIconPaths = getLockedTokenIconPaths(info, this.lockedTokenObject, this.chainId, this.tokenMap);
        lockedTokenIconPaths.forEach((tokenPath: string) => {
          this.rowImgToken.appendChild(
            <i-image
              width={28}
              class="inline-block img-token"
              url={Assets.fullPath(tokenPath)}
            />
          )
        });
        this.rowImgToken.appendChild(<i-label class="text-yellow" caption={symbol} />)
        this.sectionTokenInput.visible = true;
      } else {
        this.sectionTokenInput.visible = false;
      }
      this.colIndividualCap.innerHTML = '';
      this.colIndividualCap.appendChild(<i-label caption="Individual Cap" font={{ color: '#FFFFFF' }} />);
      this.colIndividualCap.appendChild(<i-label class="text-yellow" caption={`${formatNumber(info.perAddressCap)} ${symbol}`} />);
      const setMaturityText = () => {
        const val = moment().add(info.minLockTime, 'seconds').format('YYYY-MM-DD HH:mm:ss');
        this.lbMaturity.caption = val;
      }
      setMaturityText();
      this.timer = setInterval(setMaturityText, 1000);
    }
  }

  private onSetupPage = async (connected: boolean, actionKey: string) => {
    if (!connected) {
      this.btnStake.enabled = false;
      this.btnApprove.visible = false;
      this.inputAmount.enabled = false;
      this.renderStakingInfo(null);
      this.loadingElm.visible = false;
      return;
    }
    this.loadingElm.visible = true;
    this.inputAmount.enabled = true;
    this.tokenMap = getTokenMap();
    this.chainId = getChainId();
    this.currentMode = (CurrentMode as any)[this.stakingInfo.mode.toUpperCase()];
    await this.initApprovalModelAction(actionKey);
    await this.renderStakingInfo(this.stakingInfo);
    this.loadingElm.visible = false;
  }

  private closeStakeModal = () => {
    this.modalStake.visible = false;
  }

  private closeModal = () => {
    this.modalActions.visible = false;
  }

  async initApprovalModelAction(actionKey: string) {
    this.approvalModelAction = getApprovalModelAction(this.address, {
      sender: this,
      payAction: async () => {
        if (this.modalActions.visible) {
          this.modalActions.visible = false;
        }
        this.showResultMessage(this.stakingResult, 'warning', `${this.currentMode === CurrentMode.STAKE ? 'Stake' : 'Unlock'} ${this.tokenSymbol}`);
        if (this.currentMode === CurrentMode.STAKE) {
          lockToken(this.lockedTokenObject, this.inputAmount.value, this.address);
        } else {
          withdrawToken(this.address);
        }
      },
      onToBeApproved: async (token: ITokenObject) => {
        if (new BigNumber(this.inputAmount.value).lte(BigNumber.min(this.availableQty, this.balance, this.perAddressCap))) {
          this.btnApprove.caption = `Approve ${token.symbol}`;
          this.btnApprove.visible = true;
          this.btnApprove.enabled = true;
        }
        else {
          this.btnApprove.visible = false;
        }
        this.btnStake.enabled = false;
      },
      onToBePaid: async (token: ITokenObject) => {
        this.btnApprove.visible = false;
        if (this.currentMode === CurrentMode.STAKE) {
          const amount = new BigNumber(this.inputAmount.value);
          if (amount.gt(this.balance)) {
            this.btnStake.caption = 'Insufficient Balance';
            this.btnStake.enabled = false;
            return;
          }
          this.btnStake.caption = 'Stake';
          if (amount.isNaN() || amount.lte(0) || amount.gt(BigNumber.min(this.availableQty, this.balance, this.perAddressCap))) {
            this.btnStake.enabled = false;
          } else {
            this.btnStake.enabled = true;
          }
        } else {
          this.btnStake.caption = 'Unstake';
          this.btnStake.enabled = new BigNumber(this.stakeQty).gt(0);
        }
      },
      onApproving: async (token: ITokenObject, receipt?: string) => {
        if (receipt) {
          this.modalStake.closeOnBackdropClick = false;
          this.modalActions.closeOnBackdropClick = false;
          this.showResultMessage(this.stakingResult, 'success', receipt);
          this.btnApprove.caption = `Approving`;
          this.btnApprove.enabled = false;
          this.btnApprove.rightIcon.visible = true;
          this.btnMax.enabled = false;
          this.inputAmount.enabled = false;
          setStakingStatus(actionKey, true, 'Approving');
        }
      },
      onApproved: async (token: ITokenObject) => {
        await setTokenBalances();
        this.btnApprove.rightIcon.visible = false;
        this.btnApprove.visible = false;
        this.btnMax.enabled = new BigNumber(this.balance).gt(0);
        this.inputAmount.enabled = true;
        setStakingStatus(actionKey, false, 'Stake');
      },
      onApprovingError: async (token: ITokenObject, err: Error) => {
        this.showResultMessage(this.stakingResult, 'error', err);
        this.btnApprove.rightIcon.visible = false;
        this.btnMax.enabled = new BigNumber(this.balance).gt(0);
        this.inputAmount.enabled = true;
        setStakingStatus(actionKey, false, 'Stake');
      },
      onPaying: async (receipt?: string) => {
        if (receipt) {
          this.showResultMessage(this.stakingResult, 'success', receipt);
          this.inputAmount.enabled = false;
          this.btnMax.enabled = false;
          const caption = this.currentMode === CurrentMode.STAKE ? 'Staking' : 'Unstaking';
          this.btnStake.caption = caption;
          this.btnStake.enabled = false;
          this.btnStake.rightIcon.visible = true;
          setStakingStatus(actionKey, true, caption);
        }
      },
      onPaid: async () => {
        const caption = this.currentMode === CurrentMode.STAKE ? 'Unstake' : 'Stake';
        if (this.onRefresh) {
          await setTokenBalances();
          await this.onRefresh();
          setStakingStatus(actionKey, false, caption);
        }
        this.inputAmount.value = '';
        this.inputAmount.enabled = true;
        this.btnMax.enabled = true;
        this.btnStake.caption = caption;
        this.btnStake.rightIcon.visible = false;
        this.modalActions.visible = false;
      },
      onPayingError: async (err: Error) => {
        this.inputAmount.enabled = true;
        this.btnMax.enabled = true;
        const caption = this.currentMode === CurrentMode.STAKE ? 'Stake' : 'Unstake';
        this.btnStake.caption = caption;
        this.btnStake.rightIcon.visible = false;
        this.showResultMessage(this.stakingResult, 'error', err);
        setStakingStatus(actionKey, false, caption);
      }
    });
  }

  init() {
    super.init();
    this.stakingResult = new Result();
    this.stakingResult.onCustomClose = () => {
      this.modalStake.closeOnBackdropClick = true;
      this.modalActions.closeOnBackdropClick = true;
    }    
    this.appendChild(this.stakingResult);
  }

  render() {
    return (
      <i-panel class="manage-stake">
        <i-modal
          id="modalStake"
          class="stake-modal"
          closeIcon={{ name: 'times' }}
        >
          <i-panel id="containerStake">
            <i-hstack horizontalAlignment="center">
              <i-vstack class="manage-wrapper">
                <i-panel class="main-content">
                  <i-vstack id="loadingElm" class="i-loading-overlay" background={{ color: '#192046' }}>
                    <i-vstack class="i-loading-spinner" horizontalAlignment="center" verticalAlignment="center">
                      <i-icon
                        class="i-loading-spinner_icon"
                        image={{ url: Assets.fullPath('img/loading.svg'), width: 36, height: 36 }}
                      ></i-icon>
                      <i-label
                        caption="Loading..." font={{ color: '#FD4A4C', size: '1.5em' }}
                        class="i-loading-spinner_text"
                      ></i-label>
                    </i-vstack>
                  </i-vstack>
                  <i-panel class="manage-header">
                    <i-icon width={20} height={20} fill="#fff" class="cursor-pointer pointer" name="arrow-left" onClick={this.closeStakeModal} />
                    <i-label
                      id="lbTitle"
                      caption="Create Locked Staking"
                      class="text-yellow"
                    />
                    <i-icon
                      width={20}
                      height={20}
                      fill="#fff"
                      class="question-icon"
                      name="question"
                      tooltip={{
                        content: 'You can lock your stake for a certain period of time.',
                        placement: 'bottom'
                      }}
                    />
                  </i-panel>
                  <i-panel id="sectionUnlockMessage" visible={true} class="description">
                    <i-label caption="Note that you will forfeit your rewards if you unstake before the maturity date." font={{ color: '#FFFFFF' }} />
                    <i-label caption="By unlocking, you will lose your progress, are you sure?" font={{ color: '#FFFFFF' }} />
                  </i-panel>
                  <i-panel class="section-info">
                    <i-panel visible={false}>
                      <i-vstack class="w-100">
                        <i-hstack verticalAlignment="center">
                          <i-label class="mr-025" caption="Duration (days)" font={{ color: '#FFFFFF' }} />
                          <i-icon
                            width={18}
                            height={18}
                            fill="#fff"
                            class="question-icon"
                            name="question"
                            tooltip={{
                              content: 'You can lock your stake for a certain period of time.',
                              placement: 'bottom'
                            }}
                          />
                        </i-hstack>
                        <i-label id="lbDuration" class="text-yellow" caption="-" />
                      </i-vstack>
                      <i-vstack class="w-50">
                        <i-label caption="Max QTY." font={{ color: '#FFFFFF' }} />
                        <i-label id="lbMaxQty" class="text-yellow" caption="-" />
                      </i-vstack>
                      <i-vstack class="w-50">
                        <i-label caption="Available QTY." font={{ color: '#FFFFFF' }} />
                        <i-label id="lbAvailableQty" class="text-yellow" caption="-" />
                      </i-vstack>
                      <i-vstack id="colYourStakeQty" class="w-50" />
                      <i-panel id="sectionEarnedQty" class="w-100" />
                      <i-vstack id="colIndividualCap" class="w-50" />
                    </i-panel>
                    <i-vstack class="w-100">
                      <i-label caption="Maturity" font={{ color: '#FFFFFF' }} />
                      <i-label id="lbMaturity" class="text-yellow" caption="-" />
                    </i-vstack>
                  </i-panel>
                  <i-panel id="sectionTokenInput" class="input--token-box mb-1">
                    <i-hstack class="mb-075">
                      <i-label caption="Input" font={{ color: '#FFFFFF' }} />
                      <i-label id="lbBalance" class="text-yellow text-normal w-100 text-right" caption="-" />
                    </i-hstack>
                    <i-hstack>
                      <i-input
                        id="inputAmount"
                        inputType="number"
                        placeholder="0.0"
                        class="token-input w-100 mr-025"
                        width="100%"
                        onChanged={() => this.onInputAmount()}
                      />
                      <i-button
                        id="btnMax"
                        caption="Max"
                        enabled={false}
                        class="btn-os btn-max"
                        onClick={() => this.setMaxBalance()}
                      />
                      <i-hstack id="rowImgToken" verticalAlignment="center" />
                    </i-hstack>
                  </i-panel>
                  <i-hstack>
                    <i-button
                      id="btnApprove"
                      caption="Approve Token"
                      enabled={false}
                      visible={false}
                      width="100%"
                      class="btn-os btn-approve mb-075 mr-025"
                      rightIcon={{ spin: true, visible: false }}
                      onClick={() => this.onApproveToken()}
                    />
                    <i-button
                      id="btnStake"
                      caption="Stake"
                      enabled={false}
                      width="100%"
                      rightIcon={{ spin: true, visible: false }}
                      class="btn-os btn-approve mb-075"
                    />
                  </i-hstack>
                </i-panel>
              </i-vstack>
            </i-hstack>
          </i-panel>
        </i-modal>
        <i-modal
          id="modalActions"
          class="custom-modal"
          closeIcon={{ name: 'times' }}
        >
          <i-panel class="manage-header">
            <i-icon
              width={24}
              height={24}
              name="times"
              class="cursor-pointer"
              onClick={() => this.closeModal()}
            />
          </i-panel>
          <i-panel class="i-modal_content">
            <i-panel class="mt-1">
              <i-hstack verticalAlignment="center" horizontalAlignment="center" class="mb-1">
                <i-image width={80} height={80} url={Assets.fullPath('img/warning-icon.png')} />
              </i-hstack>
              <i-panel class="description-time">
                <i-label id="lbTimer" caption="Please note that you will forfeit your rewards by unstaking. You are not eligible for rewards until" />
              </i-panel>
              <i-hstack verticalAlignment="center" horizontalAlignment="center" class="group-btn">
                <i-button
                  caption="Cancel"
                  class="btn-os btn-cancel"
                  onClick={() => this.closeModal()}
                />
                <i-button
                  caption="Proceed"
                  class="btn-os btn-submit"
                  onClick={() => this.onStake()}
                />
              </i-hstack>
            </i-panel>
          </i-panel>
        </i-modal>
      </i-panel>
    )
  }
}
