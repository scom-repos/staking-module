import { Styles, Button, Modal, Container, VStack, Panel, customElements, ControlElement, Module, HStack, Icon, Input, Checkbox, application, Label } from '@ijstech/components';
import { EventId } from '@staking/global';
import { getChainId, getDefaultChainId, Networks, Staking, StakingCampaign } from '@staking/store';
import { StakingConfig } from './staking';
const Theme = Styles.Theme.ThemeVars;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['campaign-config']: ControlElement;
		}
	}
};

@customElements('campaign-config')
export class CampaignConfig extends Module {
	private networkSelection: Panel;
	private btnNetwork: Button;
	private network: number;
	private listStakingButton: HStack;
	private pnlInfoElm: Panel;
	private stakingConfig: StakingConfig[] = [];
	private btnAdd: Button;
	private currentStaking = 0;
	private inputName: Input;
	private inputDesc: Input;
	private inputURL: Input;
	private checkboxContract: Checkbox;
	private inputMainColor: Input;
	private inputBg: Input;
	private inputColorText: Input;
	private inputCountdownBg: Input;
	private inputStakingBg: Input;
	private inputStakingBtn: Input;
	private _isNew: boolean;
	private _data?: StakingCampaign;
	private wapperNetworkElm: HStack;
	private isInitialized = false;

	constructor(parent?: Container, options?: any) {
		super(parent, options);
	}

	set chainId(chainId: number) {
		for (const elm of this.stakingConfig) {
			elm.chainId = chainId;
		}
	}

	set isNew(value: boolean) {
		this._isNew = value;
		this.setupInput();
	}

	get isNew() {
		return this._isNew;
	}

	set data(value: StakingCampaign | undefined) {
		this._data = value;
		this.setupData();
	}

	get data() {
		return this._data;
	}

	private setupInput = () => {
		if (this.wapperNetworkElm) {
			this.wapperNetworkElm.visible = !this.isNew;
		}
	}

	private setupData = async () => {
		if (this.data) {
			const { chainId, customName, customDesc, getTokenURL, showContractLink, customColorCampaign, customColorBackground, customColorStakingBackground, customColorButton, customColorText, customColorTimeBackground, stakings } = this.data;
			this.network = chainId || getChainId();
			const interval = setInterval(async () => {
				if (this.isInitialized) {
					clearInterval(interval)
					this.inputName.value = customName;
					this.inputDesc.value = customDesc || '';
					this.inputURL.value = getTokenURL || '';
					this.checkboxContract.checked = !!showContractLink;
					this.inputMainColor.value = customColorCampaign || '';
					this.inputBg.value = customColorBackground || '';
					this.inputColorText.value = customColorText || '';
					this.inputCountdownBg.value = customColorTimeBackground || '';
					this.inputStakingBg.value = customColorStakingBackground || '';
					this.inputStakingBtn.value = customColorButton || '';
					const networkObj = Networks.find(f => f.chainId === this.network);
					this.btnNetwork.caption = networkObj ? `${networkObj.name} (${networkObj.chainId})` : 'Unknown Network'
					this.listStakingButton.clearInnerHTML();
					this.pnlInfoElm.clearInnerHTML();
					this.stakingConfig = [];
					for (const staking of stakings) {
						await this.onAddStaking(staking);
					}
				}
			}, 200);
		} else if (!this.stakingConfig.length) {
			const interval = setInterval(() => {
				if (this.isInitialized) {
					clearInterval(interval);
					this.onAddStaking();
				}
			}, 200);
		}
	}

	renderNetworkButton = async () => {
		const vstack = await VStack.create({ gap: 8 });
		const dropdownModal = await Modal.create({
			showBackdrop: false,
			width: '100%',
			maxWidth: 300,
			popupPlacement: 'bottom',
		});
		const listNetwork = Networks.filter(f => !f.isDisabled);
		const networkObj = listNetwork.find(f => f.chainId === this.network);
		this.btnNetwork = await Button.create({
			caption: networkObj ? `${networkObj.name} (${networkObj.chainId})` : 'Select Network',
			background: { color: Theme.input.background },
			border: { style: 'none', radius: 12 },
			padding: { top: '0.5rem', bottom: '0.5rem', left: '0.75rem', right: '0.75rem' },
			rightIcon: { name: 'caret-down', fill: Theme.colors.primary.main },
			width: '100%',
			height: 40,
			maxWidth: 300,
		});
		this.btnNetwork.classList.add('btn-select');
		this.btnNetwork.onClick = () => { dropdownModal.visible = !dropdownModal.visible }
		for (const network of listNetwork) {
			const dropdownItem = await Button.create({
				caption: `${network.name} (${network.chainId})`,
				background: { color: 'transparent' },
				height: 36,
			});
			dropdownItem.onClick = () => {
				dropdownModal.visible = false;
				this.btnNetwork.caption = `${network.name} (${network.chainId})`;
				this.network = network.chainId;
				for (const elm of this.stakingConfig) {
					elm.chainId = this.network;
				}
				this.emitInput();
			};
			vstack.appendChild(dropdownItem);
		}
		dropdownModal.item = vstack;
		this.networkSelection.clearInnerHTML();
		this.networkSelection.appendChild(this.btnNetwork);
		this.networkSelection.appendChild(dropdownModal);
	}

	private onRenderStaking = (button: Button, idx: number) => {
		for (const elm of this.stakingConfig) {
			elm.visible = false;
		}
		this.stakingConfig[idx].visible = true;
		const active = this.listStakingButton.querySelector('.btn-active');
		if (active) {
			active.classList.remove('btn-active');
		}
		button.classList.add('btn-active');
		this.currentStaking = idx;
	}

	private removeStaking = (idx: number) => {
		this.listStakingButton.removeChild(this.listStakingButton.childNodes[idx]);
		this.pnlInfoElm.removeChild(this.stakingConfig[idx]);
		this.stakingConfig.splice(idx, 1);
		for (let i = 0; i < this.listStakingButton.childElementCount; i++) {
			const elm = this.listStakingButton.childNodes[i];
			const button = (elm.firstChild as Button);
			button.caption = `Staking ${i + 1}`;
			button.onClick = () => this.onRenderStaking(button, i);
			(elm.lastChild as Icon).onClick = () => this.removeStaking(i);
			if (this.currentStaking === idx && i === 0) {
				this.onRenderStaking(button, 0);
			}
		}
		this.emitInput();
	}

	private addStaking = async (idx: number, staking?: Staking) => {
		for (const elm of this.stakingConfig) {
			elm.visible = false;
		}
		const stakings = [...this.stakingConfig];
		stakings[idx] = new StakingConfig();
		stakings[idx].isNew = this.isNew;
		this.stakingConfig = [...stakings];
		this.pnlInfoElm.appendChild(this.stakingConfig[idx]);
		if (!this.isNew) {
			this.stakingConfig[idx].chainId = this.network;
		}
		this.stakingConfig[idx].data = staking;
		this.currentStaking = idx;
		this.emitInput();
	}

	private onAddStaking = async (staking?: Staking) => {
		this.btnAdd.enabled = false;
		const idx = Number(this.stakingConfig.length);
		const pnl = await Panel.create({ position: 'relative' });
		pnl.classList.add('pnl-label');
		const icon = await Icon.create({ name: 'times', fill: Theme.background.main, height: 12, width: 12, position: 'absolute', top: 1, right: 1 });
		icon.onClick = () => this.removeStaking(idx);
		const button = await Button.create({ caption: `Staking ${idx + 1}`, padding: { top: 6, bottom: 6, left: 16, right: 16 } });
		button.classList.add('btn-item', 'btn-active');
		button.onClick = () => this.onRenderStaking(button, idx);
		const active = this.listStakingButton.querySelector('.btn-active');
		if (active) {
			active.classList.remove('btn-active');
		}
		pnl.appendChild(button);
		pnl.appendChild(icon);
		this.listStakingButton.appendChild(pnl);
		await this.addStaking(idx, staking);
		this.btnAdd.enabled = true;
	}

	private emitInput = () => {
		application.EventBus.dispatch(EventId.EmitInput);
	}

	private onInputText = () => {

	}

	private isStakingValid = () => {
		if (!this.stakingConfig.length) return false;
		for (const staking of this.stakingConfig) {
			if (!staking.checkValidation()) {
				return false;
			}
		}
		return true;
	}

	checkValidation = () => {
		return !!this.inputName.value && this.isStakingValid();
	}

	getStakingData = () => {
		const stakingData: Staking[] = [];
		for (const staking of this.stakingConfig) {
			const data = staking.getData();
			stakingData.push(data);
		}
		return stakingData;
	}

	getData = () => {
		const campaign: StakingCampaign = {
			chainId: this.network,
			customName: this.inputName.value,
			customDesc: this.inputDesc.value || undefined,
			getTokenURL: this.inputURL.value || undefined,
			showContractLink: this.checkboxContract.checked || undefined,
			customColorCampaign: this.inputMainColor.value || undefined,
			customColorBackground: this.inputBg.value || undefined,
			customColorStakingBackground: this.inputStakingBg.value || undefined,
			customColorButton: this.inputStakingBtn.value || undefined,
			customColorText: this.inputColorText.value || undefined,
			customColorTimeBackground: this.inputCountdownBg.value || undefined,
			stakings: this.getStakingData(),
		}
		return campaign;
	}

	async init() {
		this.network = getChainId() || getDefaultChainId();
		super.init();
		this.setupInput();
		await this.renderNetworkButton();
		this.isInitialized = true;
	}

	render() {
		return (
			<i-panel class="custom-scroll">
				<i-vstack gap={10} verticalAlignment="center" class="main-content">
					<i-hstack id="wapperNetworkElm" gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Network" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-panel id="networkSelection" class="network-selection" width="calc(100% - 190px)" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Campaign Name" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputName" class="input-text" onChanged={this.emitInput} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Campaign Description" />
						<i-input id="inputDesc" class="input-area" inputType="textarea" rows={3} onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Token Trade URL" />
						<i-input id="inputURL" class="input-text" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} margin={{ top: 5, bottom: 5 }} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Show Contract Link" />
						<i-vstack verticalAlignment="center" horizontalAlignment="start" width="calc(100% - 190px)">
							<i-checkbox
								id="checkboxContract"
								height="auto"
								checked={false}
							/>
						</i-vstack>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Campaign Main Color" />
						<i-input id="inputMainColor" placeholder="#f15e61" class="input-text" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Campaign Background" />
						<i-input id="inputBg" placeholder="#ffffff26" class="input-text" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Color Text" />
						<i-input id="inputColorText" placeholder="#ffffff" class="input-text" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Countdown Background" />
						<i-input id="inputCountdownBg" placeholder="#b14781" class="input-text" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Staking Background" />
						<i-input id="inputStakingBg" placeholder="#ffffff07" class="input-text" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Staking Button" />
						<i-input id="inputStakingBtn" placeholder="linear-gradient(90deg, #AC1D78 0%, #E04862 100%)" class="input-text" onChanged={this.onInputText} />
					</i-hstack>
					<i-hstack gap={10} margin={{ top: 10, bottom: 5 }} width="100%" verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack id="listStakingButton" verticalAlignment="center" />
						<i-button id="btnAdd" class="btn-os" margin={{ left: 'auto' }} caption="Add Staking" onClick={() => this.onAddStaking()} />
					</i-hstack>
					<i-panel width="100%" height={2} margin={{ bottom: 10 }} background={{ color: Theme.colors.primary.light }} />
					<i-panel id="pnlInfoElm" />
				</i-vstack>
			</i-panel>
		)
	}
}
