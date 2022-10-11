import { Styles, Button, Modal, Container, VStack, Panel, customElements, ControlElement, Module, HStack, Icon, Input, Control, application, Label } from '@ijstech/components';
import { BigNumber } from '@ijstech/eth-wallet';
import { EventId, isAddressValid, isValidNumber, ITokenObject, limitInputNumber } from '@staking/global';
import { getChainId, getDefaultChainId, LockTokenType, LockTokenTypeList, Reward, Staking } from '@staking/store';
import { TokenSelection } from '../../token-selection';
import { RewardConfig } from './reward';
const Theme = Styles.Theme.ThemeVars;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['staking-config']: ControlElement;
		}
	}
};

@customElements('staking-config')
export class StakingConfig extends Module {
	private tokenSelection: TokenSelection;
	private token?: ITokenObject;
	private pnlTokenSelection: Panel;
	private typeSelection: Panel;
	private lockType: LockTokenType;
	private listRewardButton: HStack;
	private pnlInfoElm: Panel;
	private rewardConfig: RewardConfig[] = [];
	private btnAdd: Button;
	private currentReward = 0;
	private _chainId: number;
	private inputMinLockTime: Input;
	private inputEntryStart: Input;
	private inputEntryEnd: Input;
	private inputPerAddressCap: Input;
	private inputMaxTotalLock: Input;
	private inputDesc: Input;
	private inputDecimalsOffset: Input;
	private wrapperAddressElm: HStack;
	private _isNew: boolean;
	private inputAddress: Input;
	private lbAddressErr: Label;
	private isAddressValid: boolean;

	constructor(parent?: Container, options?: any) {
		super(parent, options);
	}

	set chainId(chainId: number) {
		this._chainId = chainId;
		this.tokenSelection.chainId = chainId;
		this.token = undefined;
		for (const elm of this.rewardConfig) {
			elm.chainId = chainId;
		}
	}

	get chainId() {
		return this._chainId || getChainId() || getDefaultChainId();
	}

	set isNew(value: boolean) {
		this._isNew = value;
		this.setupInput();
	}

	get isNew() {
		return this._isNew;
	}

	private setupInput = () => {
		if (this.wrapperAddressElm) {
			this.wrapperAddressElm.visible = !this.isNew;
		}
	}

	renderTypeButton = async () => {
		const vstack = await VStack.create({ gap: 8 });
		const dropdownModal = await Modal.create({
			showBackdrop: false,
			width: '100%',
			maxWidth: 300,
			popupPlacement: 'bottom'
		});
		this.lockType = LockTokenTypeList[0]?.value;
		const btnType = await Button.create({
			caption: LockTokenTypeList[0] ? LockTokenTypeList[0].name : 'Select Type',
			background: { color: Theme.input.background },
			border: { style: 'none', radius: 12 },
			padding: { top: '0.5rem', bottom: '0.5rem', left: '0.75rem', right: '0.75rem' },
			rightIcon: { name: 'caret-down', fill: Theme.colors.primary.main },
			width: '100%',
			height: 40,
			maxWidth: 300,
		});
		btnType.classList.add('btn-select');
		btnType.onClick = () => { dropdownModal.visible = !dropdownModal.visible }
		for (const type of LockTokenTypeList) {
			const dropdownItem = await Button.create({
				caption: `${type.name} (${type.value})`,
				background: { color: 'transparent' },
				height: 36,
			});
			dropdownItem.onClick = () => {
				dropdownModal.visible = false;
				btnType.caption = `${type.name} (${type.value})`;
				this.lockType = type.value;
			};
			vstack.appendChild(dropdownItem);
		}
		dropdownModal.item = vstack;
		this.typeSelection.clearInnerHTML();
		this.typeSelection.appendChild(btnType);
		this.typeSelection.appendChild(dropdownModal);
	}

	private onRenderReward = (button: Button, idx: number) => {
		for (const elm of this.rewardConfig) {
			elm.visible = false;
		}
		this.rewardConfig[idx].visible = true;
		const active = this.listRewardButton.querySelector('.btn-active');
		if (active) {
			active.classList.remove('btn-active');
		}
		button.classList.add('btn-active');
		this.currentReward = idx;
	}

	private removeReward = (idx: number) => {
		this.listRewardButton.removeChild(this.listRewardButton.childNodes[idx]);
		this.pnlInfoElm.removeChild(this.rewardConfig[idx]);
		this.rewardConfig.splice(idx, 1);
		for (let i = 0; i < this.listRewardButton.childElementCount; i++) {
			const elm = this.listRewardButton.childNodes[i];
			const button = (elm.firstChild as Button);
			button.caption = `Reward ${i + 1}`;
			button.onClick = () => this.onRenderReward(button, i);
			(elm.lastChild as Icon).onClick = () => this.removeReward(i);
			if (this.currentReward === idx && i === 0) {
				this.onRenderReward(button, 0);
			}
		}
		this.emitInput();
	}

	private addReward = async (idx: number) => {
		for (const elm of this.rewardConfig) {
			elm.visible = false;
		}
		const rewards = [...this.rewardConfig];
		rewards[idx] = new RewardConfig();
		rewards[idx].isNew = this.isNew;
		this.rewardConfig = [...rewards];
		this.pnlInfoElm.appendChild(this.rewardConfig[idx]);
		if (!this.isNew) {
			this.rewardConfig[idx].chainId = this.chainId;
		}
		this.currentReward = idx;
		this.emitInput();
	}

	private onAddReward = async () => {
		this.btnAdd.enabled = false;
		const idx = Number(this.rewardConfig.length);
		const pnl = await Panel.create({ position: 'relative' });
		pnl.classList.add('pnl-label');
		const icon = await Icon.create({ name: 'times', fill: Theme.background.main, height: 12, width: 12, position: 'absolute', top: 1, right: 1 });
		icon.onClick = () => this.removeReward(idx);
		const button = await Button.create({ caption: `Reward ${idx + 1}`, padding: { top: 6, bottom: 6, left: 16, right: 16 } });
		button.classList.add('btn-item', 'btn-active');
		button.onClick = () => this.onRenderReward(button, idx);
		const active = this.listRewardButton.querySelector('.btn-active');
		if (active) {
			active.classList.remove('btn-active');
		}
		pnl.appendChild(button);
		pnl.appendChild(icon);
		this.listRewardButton.appendChild(pnl);
		await this.addReward(idx);
		this.btnAdd.enabled = true;
	}

	private emitInput = () => {
		application.EventBus.dispatch(EventId.EmitInput);
	}

	private onInputAddress = async () => {
		this.isAddressValid = await isAddressValid(this.inputAddress.value);
		this.lbAddressErr.visible = !this.isAddressValid;
		this.emitInput();
	}

	private onInputToken = (token: ITokenObject) => {
		this.token = token;
		this.emitInput();
	}

	private onInputUnixAndSecond = (input: Control) => {
		const _input = input as Input;
		let value = _input.value;
		value = value.replace(/[^0-9]+/g, "");
		_input.value = value;
		this.emitInput();
	}

	private onInputNumber = (input: Control) => {
		limitInputNumber(input, 18);
		this.emitInput();
	}

	private isRewardValid = () => {
		if (!this.rewardConfig.length) return false;
		for (const reward of this.rewardConfig) {
			if (!reward.checkValidation()) {
				return false;
			}
		}
		return true;
	}

	checkValidation = () => {
		return this.token && !isNaN(this.lockType) &&
			isValidNumber(this.inputMinLockTime.value) &&
			isValidNumber(this.inputEntryStart.value) &&
			isValidNumber(this.inputEntryEnd.value) &&
			isValidNumber(this.inputPerAddressCap.value) &&
			isValidNumber(this.inputMaxTotalLock.value) &&
			(this.isNew || this.isAddressValid) &&
			this.isRewardValid();
	}

	getRewardData = () => {
		const rewardData: Reward[] = [];
		for (const reward of this.rewardConfig) {
			const data = reward.getData();
			rewardData.push(data);
		}
		return rewardData;
	}

	getData = () => {
		const offset = Number(this.inputDecimalsOffset.value);
		const staking: Staking = {
			address: this.inputAddress.value,
			lockTokenAddress: this.token?.address || '',
			minLockTime: new BigNumber(this.inputMinLockTime.value),
			entryStart: new BigNumber(this.inputEntryStart.value),
			entryEnd: new BigNumber(this.inputEntryEnd.value),
			perAddressCap: new BigNumber(this.inputPerAddressCap.value),
			maxTotalLock: new BigNumber(this.inputMaxTotalLock.value),
			customDesc: this.inputDesc.value,
			lockTokenType: this.lockType,
			decimalsOffset: isNaN(offset) ? undefined : offset,
			rewards: this.getRewardData()
		}
		return staking;
	}

	init() {
		super.init();
		this.tokenSelection = new TokenSelection();
		this.tokenSelection.onSelectToken = this.onInputToken;
		this.pnlTokenSelection.appendChild(this.tokenSelection);
		this.onAddReward();
		this.renderTypeButton();
		this.setupInput();
	}

	render() {
		return (
			<i-panel class="custom-scroll">
				<i-vstack gap={10} verticalAlignment="center" class="main-content">
					<i-hstack id="wrapperAddressElm" gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Address" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-vstack gap={4} width="calc(100% - 190px)" verticalAlignment="center">
							<i-input id="inputAddress" class="input-text w-100" onChanged={this.onInputAddress} />
							<i-label id="lbAddressErr" visible={false} caption="The address is invalid!" font={{ color: Theme.colors.primary.main, size: '12px' }} />
						</i-vstack>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Lock Token Address" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-panel id="pnlTokenSelection" width="calc(100% - 190px)" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Min Lock Time" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputMinLockTime" placeholder="Second" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputUnixAndSecond(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Entry Start" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputEntryStart" placeholder="Unix" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputUnixAndSecond(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Entry End" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputEntryEnd" placeholder="Unix" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputUnixAndSecond(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Per Address Cap" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputPerAddressCap" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputNumber(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Max Total Lock" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputMaxTotalLock" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputNumber(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Staking Description" />
						<i-input id="inputDesc" class="input-text" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Lock Token Type" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-panel id="typeSelection" class="network-selection" width="calc(100% - 190px)" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Decimals Offset" />
						<i-input id="inputDecimalsOffset" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputNumber(src)} />
					</i-hstack>
					<i-hstack gap={10} margin={{ top: 10, bottom: 5 }} width="100%" verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack id="listRewardButton" verticalAlignment="center" />
						<i-button id="btnAdd" class="btn-os" margin={{ left: 'auto' }} caption="Add Reward" onClick={this.onAddReward} />
					</i-hstack>
					<i-panel width="100%" height={2} margin={{ bottom: 10 }} background={{ color: Theme.colors.primary.light }} />
					<i-panel id="pnlInfoElm" />
				</i-vstack>
			</i-panel>
		)
	}
}
