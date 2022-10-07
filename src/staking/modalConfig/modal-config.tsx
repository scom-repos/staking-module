import { Button, Modal, Container, HStack, Panel, customElements, ControlElement, Module, Icon, IEventBus, application, Label, VStack } from '@ijstech/components';
import { downloadJsonFile, EventId, registerSendTxEvents } from '@staking/global';
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
  private backElm: HStack;
  private selectCampaignsElm: HStack;
  private configCampaignsElm: Panel;
  private wapperCampaignsButton: VStack;
  private wrapperNetworkElm: HStack;
  private networkElm: HStack;
  private lbNetworkName: Label;
  private campaignElm: HStack;
  private listCampaignButton: HStack;
  private pnlInfoElm: Panel;
  private campaignConfig: CampaignConfig[] = [];
  private currentCampaign = 0;
  private btnAdd: Button;
  private stakingResult: Result;
  private groupBtnSaveElm: HStack;
  private groupBtnDeployElm: HStack;
  private btnSave: Button;
  private btnDownload: Button;
  private btnDeploy: Button;
  private btnDeployDownload: Button;
  private $eventBus: IEventBus;
  private isNew: boolean;
  private campaigns: {[chainId:number]: StakingCampaign[]};
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

  private showInputCampaign = (isNew: boolean) => {
    this.selectCampaignsElm.visible = false;
    this.configCampaignsElm.visible = true;
    this.wrapperNetworkElm.visible = isNew;
    this.wapperCampaignsButton.visible = !isNew;
    this.groupBtnSaveElm.visible = !isNew;
    this.groupBtnDeployElm.visible = isNew;
    this.isNew = isNew;
    this.onAddCampaign();
  }

  private onBack = () => {
    this.pnlInfoElm.clearInnerHTML();
    this.listCampaignButton.clearInnerHTML();
    this.campaignConfig = [];
    this.selectCampaignsElm.visible = true;
    this.configCampaignsElm.visible = false;
  }

  private updateNetworkName = (chainId: number) => {
    const network = getNetworkInfo(chainId);
    this.lbNetworkName.caption = network ? network.name : 'Unknown Network';
  }

  showModal = async () => {
    this.onBack();
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
    campaigns[idx].isNew = this.isNew;
    this.campaignConfig = [...campaigns];
    this.pnlInfoElm.appendChild(this.campaignConfig[idx]);
    this.currentCampaign = idx;
  }

  private onAddCampaign = async () => {
    const idx = Number(this.campaignConfig.length);
    if (!this.isNew) {
      this.btnAdd.enabled = false;
      const pnl = await Panel.create({ position: 'relative' });
      pnl.classList.add('pnl-label');
      const icon = await Icon.create({ name: 'times', fill: '#0c1234', height: 12, width: 12, position: 'absolute', top: 1, right: 1 });
      icon.onClick = () => this.removeCampaign(idx);
      const button = await Button.create({ caption: `Campaign ${idx + 1}`, padding: { top: 6, bottom: 6, left: 16, right: 16 }});
      button.classList.add('btn-item', 'btn-active');
      button.onClick = () => this.onRenderCampaign(button, idx);
      const active = this.listCampaignButton.querySelector('.btn-active');
      if (active) {
        active.classList.remove('btn-active');
      }
      pnl.appendChild(button);
      pnl.appendChild(icon);
      this.listCampaignButton.appendChild(pnl);
    }
    await this.addCampaign(idx);
    if (!this.isNew) {
      this.btnAdd.enabled = true;
    }
  }

  private updateButton = () => {
    const valid = this.checkValidation();
    if (this.isNew) {
      if (this.btnDeploy.rightIcon.visible || this.btnDeployDownload.rightIcon.visible) return;
      this.btnDeploy.enabled = valid;
      this.btnDeployDownload.enabled = valid;
    } else {
      this.btnSave.enabled = valid;
      this.btnDownload.enabled = valid;
    }
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

  private getStakingCampaignData = () => {
    const campaignData: StakingCampaign[] = [];
    for (const campaign of this.campaignConfig) {
      const data = campaign.getData();
      campaignData.push(data);
    }
    return campaignData;
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

  private parseData = () => {
    const arr = this.getStakingCampaignData();
    this.campaigns = arr.reduce((result: any, currentValue: any) => {
      (result[currentValue['chainId']] = result[currentValue['chainId']] || []).push(
        currentValue
      );
      return result;
    }, {});
  }

  private onSave = () => {
    if (!this.isNew && this.checkValidation()) {
      this.parseData();
      const campaigns = { ...this.campaigns };
      this.onConfigSave(campaigns);
    }
  }

  private onDownload = (data?: any) => {
    if (this.isNew) {
      downloadJsonFile('campaign.json', { ...data });
      return;
    }
    if (!this.isNew && this.checkValidation()) {
      this.parseData();
      const campaigns = { ...this.campaigns };
      downloadJsonFile('campaign.json', campaigns);
    }
  }

  private onDeployCampaign = async (isDownload?: boolean) => {
    if (this.isNew && this.checkValidation()) {
      const campaign = this.campaignConfig[0].getData();
      const chainId = getChainId();
      let result: StakingCampaign | null;
      const btn = isDownload ? this.btnDeployDownload : this.btnDeploy;
      this.showResultMessage(this.stakingResult, 'warning', `Deploying ${campaign.customName}`);
      const callBack = async (err: any, reply: any) => {
        if (err) {
          this.showResultMessage(this.stakingResult, 'error', err);
        } else {
          this.showResultMessage(this.stakingResult, 'success', reply);
          this.backElm.classList.remove('cursor-pointer');
          this.backElm.onClick = () => {};
          this.btnDeployDownload.enabled = false;
          this.btnDeploy.enabled = false;
          btn.caption = isDownload ? 'Deploying And Downloading' : 'Deploying';
          btn.rightIcon.visible = true;
        }
      };

      const confirmationCallBack = async (receipt: any) => {
        btn.rightIcon.visible = false;
        btn.caption = isDownload ? 'Deploy and Download JSON' : 'Deploy';
        this.updateButton();
        this.backElm.classList.add('cursor-pointer');
        this.backElm.onClick = () => this.onBack();
      };

      registerSendTxEvents({
        transactionHash: callBack,
        confirmation: confirmationCallBack
      });

      result = await deployCampaign(campaign, callBack);
      if (result) {
        this.stakingResult.closeModal();
        this.onConfigSave({[chainId]: [{ ...result }]});
        if (isDownload) {
          this.onDownload({ ...result });
        }
      }
    }
  }

  init() {
    super.init();
    this.modalConfig.closeOnBackdropClick = false;
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
          <i-hstack gap={10} id="selectCampaignsElm" width="100%" height={150} verticalAlignment="center" horizontalAlignment="center">
            <i-button caption="Add New Campaign" class="btn-os" onClick={() => this.showInputCampaign(true)} />
            <i-button caption="Add Existing Campaigns" class="btn-os" onClick={() => this.showInputCampaign(false)} />
          </i-hstack>
          <i-panel id="configCampaignsElm" visible={false} width="100%">
            <i-hstack id="backElm" gap={4} width="fit-content" margin={{ top: 5, bottom: 15, left: 'auto' }} verticalAlignment="center" class="cursor-pointer" onClick={this.onBack}>
              <i-icon name="arrow-left" fill="#fff" width={20} height={20} />
              <i-label caption="Back" font={{ size: '20px', bold: true, color: '#fff' }} />
            </i-hstack>
            <i-hstack id="networkElm" width="100%" height={150} verticalAlignment="center" horizontalAlignment="center">
              <i-label caption="Please connect with your network!" font={{ color: '#fff' }} />
            </i-hstack>
            <i-panel visible={false} id="campaignElm" width="100%">
              <i-vstack id="wapperCampaignsButton" verticalAlignment="center">
                <i-hstack gap={10} margin={{ bottom: 10 }} width="100%" verticalAlignment="center" horizontalAlignment="space-between">
                  <i-hstack id="listCampaignButton" verticalAlignment="center" />
                  <i-button id="btnAdd" class="btn-os" margin={{ left: 'auto' }} caption="Add Campaign" onClick={this.onAddCampaign} />
                </i-hstack>
                <i-panel width="100%" height={2} margin={{ bottom: 10 }} background={{ color: '#6b6e7e' }} />
              </i-vstack>
              <i-hstack id="wrapperNetworkElm" width="100%" margin={{ bottom: 10 }} verticalAlignment="center" horizontalAlignment="center">
                <i-label id="lbNetworkName" font={{ color: '#f15e61', size: '20px', bold: true }} />
              </i-hstack>
              <i-vstack gap={10} verticalAlignment="center" class="main-content">
                <i-panel id="pnlInfoElm" />
                <i-hstack horizontalAlignment="center">
                  <i-hstack id="groupBtnSaveElm" gap={10} margin={{ top: 20 }} verticalAlignment="center" horizontalAlignment="center" wrap="wrap">
                    <i-button
                      id="btnSave"
                      caption="Save"
                      enabled={false}
                      width={200}
                      maxWidth="100%"
                      class="btn-os"
                      onClick={this.onSave}
                    />
                    <i-button
                      id="btnDownload"
                      caption="Download JSON"
                      enabled={false}
                      width={200}
                      maxWidth="100%"
                      class="btn-os"
                      onClick={() => this.onDownload()}
                    />
                  </i-hstack>
                  <i-hstack id="groupBtnDeployElm" gap={10} margin={{ top: 10 }} verticalAlignment="center" horizontalAlignment="center" wrap="wrap">
                    <i-vstack width="100%" margin={{ bottom: 10 }} verticalAlignment="center" horizontalAlignment="start">
                      <i-label caption="Note: You need to confirm on your wallet for each staking/reward!" font={{ size: '12px', color: '#f7d063' }} />
                    </i-vstack>
                    <i-button
                      id="btnDeploy"
                      caption="Deploy"
                      enabled={false}
                      width={200}
                      maxWidth="100%"
                      rightIcon={{ spin: true, visible: false, fill: '#fff' }}
                      class="btn-os"
                      onClick={() => this.onDeployCampaign()}
                    />
                    <i-button
                      id="btnDeployDownload"
                      caption="Deploy and Download JSON"
                      enabled={false}
                      width={300}
                      maxWidth="100%"
                      rightIcon={{ spin: true, visible: false, fill: '#fff' }}
                      class="btn-os"
                      onClick={() => this.onDeployCampaign(true)}
                    />
                  </i-hstack>
                </i-hstack>
              </i-vstack>
            </i-panel>
          </i-panel>
        </i-panel>
      </i-modal>
    )
  }
}