import { Button, Modal, Container, HStack, Panel, customElements, ControlElement, Module, Icon, IEventBus, application, Label } from '@ijstech/components';
import { EventId, registerSendTxEvents } from '@staking/global';
import { Result } from '../../result';
import './modal-config.css';
import { CampaignConfig } from './campaign';
import { getChainId, getNetworkInfo, isWalletConnected, StakingCampaign } from '@staking/store';
import { deployCampaign } from '@staking/staking-utils';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['modal-config']: ControlElement;
    }
  }
};

@customElements('modal-config')
export class ModalConfig extends Module {
  private modalConfig: Modal;
  private networkElm: HStack;
  private lbNetworkName: Label;
  private campaignElm: HStack;
  private listCampaignButton: HStack;
  private pnlInfoElm: Panel;
  private campaignConfig: CampaignConfig[] = [];
  private currentCampaign = 0;
  private btnAdd: Button;
  private stakingResult: Result;
  private btnDeploy: Button;
  private $eventBus: IEventBus;
  onConfigSave: any;

  constructor(parent?: Container, options?: any) {
    super(parent, options);
    this.$eventBus = application.EventBus;
    this.registerEvent();
  }

  private registerEvent = () => {
    this.$eventBus.register(this, EventId.EmitInput, this.updateButton);
    this.$eventBus.register(this, EventId.IsWalletConnected, this.renderUI);
    this.$eventBus.register(this, EventId.IsWalletDisconnected, this.renderUI);
    this.$eventBus.register(this, EventId.chainChanged, this.onChangeChanged);
  }

  private renderUI = () => {
    const isConnected = isWalletConnected();
    this.networkElm.visible = !isConnected;
    this.campaignElm.visible = isConnected;
    this.updateNetworkName(getChainId());
  }

  private onChangeChanged = () => {
    const chainId = getChainId();
    this.updateNetworkName(chainId);
    for (const campaign of this.campaignConfig) {
      campaign.chainId = chainId;
    }
    this.updateButton();
  }

  private updateNetworkName = (chainId: number) => {
    const network = getNetworkInfo(chainId);
    this.lbNetworkName.caption = network ? network.name : 'Unknown Network';
  }

  showModal = async () => {
    this.modalConfig.visible = true;
  }

  closeModal = () => {
    this.modalConfig.visible = false;
  }

  private onRenderCampaign = (button: Button, idx: number) => {
    for (const elm of this.campaignConfig) {
      elm.visible = false;
    }
    this.campaignConfig[idx].visible = true;
    const active = this.listCampaignButton.querySelector('.btn-active');
    if (active) {
      active.classList.remove('btn-active');
    }
    button.classList.add('btn-active');
    this.currentCampaign = idx;
  }

  private removeCampaign = (idx: number) => {
    this.listCampaignButton.removeChild(this.listCampaignButton.childNodes[idx]);
    this.pnlInfoElm.removeChild(this.campaignConfig[idx]);
    this.campaignConfig.splice(idx, 1);
    for (let i = 0; i < this.listCampaignButton.childElementCount; i++) {
      const elm = this.listCampaignButton.childNodes[i];
      const button = (elm.firstChild as Button);
      button.caption = `Campaign ${i + 1}`;
      button.onClick = () => this.onRenderCampaign(button, i);
      (elm.lastChild as Icon).onClick = () => this.removeCampaign(i);
      if (this.currentCampaign === idx && i === 0) {
        this.onRenderCampaign(button, 0);
      }
    }
  }

  private addCampaign = async (idx: number) => {
    for (const elm of this.campaignConfig) {
      elm.visible = false;
    }
    const campaigns = [...this.campaignConfig];
    campaigns[idx] = new CampaignConfig();
    this.campaignConfig = [...campaigns];
    this.pnlInfoElm.appendChild(this.campaignConfig[idx]);
    this.currentCampaign = idx;
  }

  private onAddCampaign = async () => {
    // this.btnAdd.enabled = false;
    const idx = Number(this.campaignConfig.length);
    // const pnl = await Panel.create({ position: 'relative' });
    // pnl.classList.add('pnl-label');
    // const icon = await Icon.create({ name: 'times', fill: '#0c1234', height: 12, width: 12, position: 'absolute', top: 1, right: 1 });
    // icon.onClick = () => this.removeCampaign(idx);
    // const button = await Button.create({ caption: `Campaign ${idx + 1}`, padding: { top: 6, bottom: 6, left: 16, right: 16 }});
    // button.classList.add('btn-item', 'btn-active');
    // button.onClick = () => this.onRenderCampaign(button, idx);
    // const active = this.listCampaignButton.querySelector('.btn-active');
    // if (active) {
    //   active.classList.remove('btn-active');
    // }
    // pnl.appendChild(button);
    // pnl.appendChild(icon);
    // this.listCampaignButton.appendChild(pnl);
    await this.addCampaign(idx);
    // this.btnAdd.enabled = true;
  }

  private updateButton = () => {
    if (this.btnDeploy.rightIcon.visible) return;
    this.btnDeploy.enabled = this.checkValidation();
  }

  private checkValidation = () => {
    if (!this.campaignConfig.length) return false;
    for (const campaign of this.campaignConfig) {
      if (!campaign.checkValidation()) {
        return false;
      }
    }
    return true;
  }

  // private getStakingCampaignData = () => {
  //   const campaignData: StakingCampaign[] = [];
  //   for (const campaign of this.campaignConfig) {
  //     const data = campaign.getData();
  //     campaignData.push(data);
  //   }
  //   return campaignData;
  // }

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

  private onDeployCampaign = async () => {
    if (this.checkValidation()) {
      const campaign = this.campaignConfig[0].getData();
      const chainId = getChainId();
      let result: StakingCampaign | null;
      this.showResultMessage(this.stakingResult, 'warning', `Deploying ${campaign.customName}`);
      const callBack = async (err: any, reply: any) => {
        if (err) {
          this.showResultMessage(this.stakingResult, 'error', err);
        } else {
          this.showResultMessage(this.stakingResult, 'success', reply);
          this.btnDeploy.caption = 'Deploying';
          this.btnDeploy.enabled = false;
          this.btnDeploy.rightIcon.visible = true;
        }
      };

      const confirmationCallBack = async (receipt: any) => {
        if (result) {
          this.btnDeploy.rightIcon.visible = false;
          this.btnDeploy.caption = 'Deploy';
          this.updateButton();
        }
      };

      registerSendTxEvents({
        transactionHash: callBack,
        confirmation: confirmationCallBack
      });

      result = await deployCampaign(campaign, callBack);
      if (result) {
        this.stakingResult.closeModal();
        this.onConfigSave({[chainId]: [{ ...result }]});
      }
    }
  }

  init() {
    super.init();
    this.modalConfig.closeOnBackdropClick = false;
    this.onAddCampaign();
    this.stakingResult = new Result();
    this.appendChild(this.stakingResult);
  }

  render() {
    return (
      <i-modal
        id="modalConfig"
        class="modal-config"
        title="Campaigns Configuration"
        maxWidth="100%"
        closeIcon={{ name: 'times' }}
      >
        <i-panel class="custom-scroll">
          <i-hstack id="networkElm" width="100%" height="50vh" verticalAlignment="center" horizontalAlignment="center">
            <i-label caption="Please connect with your network!" font={{ color: '#fff' }} />
          </i-hstack>
          <i-panel visible={false} id="campaignElm" width="100%">
            {/* <i-hstack gap={10} margin={{ bottom: 10 }} width="100%" verticalAlignment="center" horizontalAlignment="space-between">
              <i-hstack id="listCampaignButton" verticalAlignment="center" />
              <i-button id="btnAdd" class="btn-os" margin={{ left: 'auto' }} caption="Add Campaign" onClick={this.onAddCampaign} />
            </i-hstack>
            <i-panel width="100%" height={2} margin={{ bottom: 10 }} background={{ color: '#6b6e7e' }} /> */}
            <i-hstack width="100%" margin={{ bottom: 10 }} verticalAlignment="center" horizontalAlignment="center">
              <i-label id="lbNetworkName" font={{ color: '#f15e61', size: '20px', bold: true }} />
            </i-hstack>
            <i-vstack gap={10} verticalAlignment="center" class="main-content">
              <i-panel id="pnlInfoElm" />
              <i-hstack margin={{ top: 20 }} horizontalAlignment="center">
                <i-button
                  id="btnDeploy"
                  caption="Deploy"
                  enabled={false}
                  width={200}
                  maxWidth="100%"
                  rightIcon={{ spin: true, visible: false, fill: '#fff' }}
                  class="btn-os"
                  onClick={this.onDeployCampaign}
                />
              </i-hstack>
            </i-vstack>
          </i-panel>
        </i-panel>
      </i-modal>
    )
  }
}
