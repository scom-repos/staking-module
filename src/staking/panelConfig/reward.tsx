import { Styles, Container, Panel, customElements, ControlElement, Module, Input, Label, Checkbox, Control, application, HStack, VStack, Modal, Button } from '@ijstech/components';
import { BigNumber } from '@ijstech/eth-wallet';
import { EventId, isAddressValid, isValidNumber, ITokenObject, limitInputNumber } from '@staking/global';
import { getChainId, getDefaultChainId, getTokenMapData, Reward } from '@staking/store';
import { TokenSelection } from '../../token-selection';
const Theme = Styles.Theme.ThemeVars;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['reward-config']: ControlElement;
		}
	}
};

@customElements('reward-config')
export class RewardConfig extends Module {
	private pnlTokenSelection: Panel;
	private tokenSelection: TokenSelection;
	private token?: ITokenObject;
	private inputMultiplier: Input;
	private inputInitialReward: Input;
	private inputRewardVesting: Input;
	private inputClaimDeadline: Input;
	private inputAdmin: Input;
	private lbErr: Label;
	private isAdminValid = false;
	private checkboxStartDate: Checkbox;
	private wrapperAddressElm: HStack;
	private _isNew: boolean;
	private _data?: Reward;
	private inputAddress: Input;
	private lbAddressErr: Label;
	private isAddressValid: boolean;
	private _chainId: number;
	private isInitialized = false;

	private pnlTimeSelection: Panel;
	private btnTime: Button;
	private unit: number = 1;
	private hourVal = 60 * 60;
	private units = [
		{
			name: 'Hour(s)',
			value: 1
		},
		{
			name: 'Day(s)',
			value: 24
		},
		{
			name: 'Week(s)',
			value: 7 * 24
		},
	];

	constructor(parent?: Container, options?: any) {
		super(parent, options);
	}

	set chainId(chainId: number) {
		this._chainId = chainId;
		this.tokenSelection.targetChainId = chainId;
		this.token = undefined;
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

	set data(value: Reward | undefined) {
		this._data = value;
		this.setupData();
	}

	get data() {
		return this._data;
	}

	private setupInput = () => {
		if (this.wrapperAddressElm) {
			this.wrapperAddressElm.visible = !this.isNew;
			// this.inputMultiplier.enabled = this.isNew;
			// this.inputInitialReward.enabled = this.isNew;
			// this.inputRewardVesting.enabled = this.isNew;
			// this.inputClaimDeadline.enabled = this.isNew;
			// this.inputAdmin.enabled = this.isNew;
			// if (this.tokenSelection) {
			// 	this.tokenSelection.enabled = this.isNew;
			// }
		}
	}

	private setupData = async () => {
		if (this.data) {
			const { address, rewardTokenAddress, multiplier, initialReward, vestingPeriod, claimDeadline, admin, isCommonStartDate } = this.data;
			const interval = setInterval(() => {
				if (this.isInitialized && this.tokenSelection.isInitialized) {
					clearInterval(interval);
					const tokenMap = getTokenMapData(this.chainId);
					const token = tokenMap[rewardTokenAddress] || tokenMap[rewardTokenAddress.toLowerCase()];
					this.inputAddress.value = address;
					this.isAddressValid = true;
					this.token = token;
					this.tokenSelection.token = token;
					this.inputMultiplier.value = new BigNumber(multiplier).toFixed();
					this.inputInitialReward.value = new BigNumber(initialReward).toFixed();
					this.inputRewardVesting.value = new BigNumber(vestingPeriod).dividedBy(this.hourVal).toFixed();
					this.inputClaimDeadline.value = new BigNumber(claimDeadline).toFixed();
					this.inputAdmin.value = admin;
					this.isAdminValid = true;
					this.checkboxStartDate.checked = !!isCommonStartDate;
					this.emitInput();
				}
			}, 200);
		}
	}

	renderTimeButton = async () => {
		const vstack = await VStack.create({ gap: 8 });
		const dropdownModal = await Modal.create({
			showBackdrop: false,
			maxWidth: 80,
			minWidth: 'auto',
			popupPlacement: 'bottom'
		});
		this.btnTime = await Button.create({
			caption: 'Hour(s)',
			background: { color: Theme.input.background },
			border: { style: 'none', radius: 12 },
			padding: { top: '0.5rem', bottom: '0.5rem', left: '0.75rem', right: '0.75rem' },
			rightIcon: { name: 'caret-down', fill: Theme.colors.primary.main },
			width: '100%',
			height: 40,
			maxWidth: 80,
		});
		this.btnTime.classList.add('btn-select');
		this.btnTime.onClick = () => { dropdownModal.visible = !dropdownModal.visible }
		for (const unit of this.units) {
			const dropdownItem = await Button.create({
				caption: unit.name,
				background: { color: 'transparent' },
				height: 36,
			});
			dropdownItem.onClick = () => {
				if (this.unit === unit.value) return;
				dropdownModal.visible = false;
				this.btnTime.caption = unit.name;
				this.unit = unit.value;
			};
			vstack.appendChild(dropdownItem);
		}
		dropdownModal.item = vstack;
		this.pnlTimeSelection.clearInnerHTML();
		this.pnlTimeSelection.appendChild(this.btnTime);
		this.pnlTimeSelection.appendChild(dropdownModal);
	}

	private emitInput = () => {
		application.EventBus.dispatch(EventId.EmitInput);
	}

	private onInputToken = (token: ITokenObject) => {
		this.token = token;
		this.emitInput();
	}

	private onInputNumber = (input: Control) => {
		limitInputNumber(input, 18);
		this.emitInput();
	}

	private onInputUnix = (input: Control) => {
		const _input = input as Input;
		let value = _input.value;
		value = value.replace(/[^0-9]+/g, "");
		_input.value = value;
		this.emitInput();
	}

	private onInputAddress = async () => {
		this.isAddressValid = await isAddressValid(this.inputAddress.value);
		this.lbAddressErr.visible = !this.isAddressValid;
		this.emitInput();
	}

	private onInputAdmin = async () => {
		this.isAdminValid = await isAddressValid(this.inputAdmin.value);
		this.lbErr.visible = !this.isAdminValid;
		this.emitInput();
	}

	checkValidation = () => {
		return this.token && this.isAdminValid &&
			isValidNumber(this.inputMultiplier.value) &&
			isValidNumber(this.inputInitialReward.value) &&
			isValidNumber(this.inputRewardVesting.value) &&
			isValidNumber(this.inputClaimDeadline.value) &&
			(this.isNew || this.isAddressValid);
	}

	getData = () => {
		const reward: Reward = {
			address: this.inputAddress.value,
			rewardTokenAddress: this.token?.address || '',
			multiplier: new BigNumber(this.inputMultiplier.value),
			initialReward: new BigNumber(this.inputInitialReward.value),
			vestingPeriod: new BigNumber(this.inputRewardVesting.value).multipliedBy(this.unit).multipliedBy(this.hourVal),
			claimDeadline: new BigNumber(this.inputClaimDeadline.value),
			admin: `${this.inputAdmin.value}`,
			isCommonStartDate: this.checkboxStartDate.checked,
		}
		return reward;
	}

	async init() {
		super.init();
		this.tokenSelection = new TokenSelection();
		this.tokenSelection.onSelectToken = this.onInputToken;
		this.pnlTokenSelection.appendChild(this.tokenSelection);
		await this.renderTimeButton();
		this.setupInput();
		this.isInitialized = true;
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
						<i-vstack gap={4} class="w-input" verticalAlignment="center">
							<i-input id="inputAddress" class="input-text w-input w-100" onChanged={this.onInputAddress} />
							<i-label id="lbAddressErr" visible={false} caption="The address is invalid!" font={{ color: Theme.colors.primary.main, size: '12px' }} />
						</i-vstack>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Reward Token Address" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-panel id="pnlTokenSelection" class="w-input" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Upfront Reward" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputInitialReward" inputType="number" class="input-text w-input" onChanged={(src: Control) => this.onInputNumber(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Reward Factor" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputMultiplier" inputType="number" class="input-text w-input" onChanged={(src: Control) => this.onInputNumber(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Reward Vesting" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-hstack gap={4} class="w-input" verticalAlignment="center" wrap="nowrap">
							<i-input id="inputRewardVesting" inputType="number" width={216} class="input-text" onChanged={(src: Control) => this.onInputUnix(src)} />
							<i-panel id="pnlTimeSelection" class="network-selection" width={80} />
						</i-hstack>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Admin Claim Deadline" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-input id="inputClaimDeadline" placeholder="Unix" inputType="number" class="input-text w-input" onChanged={(src: Control) => this.onInputUnix(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Admin" />
							<i-label caption="*" font={{ color: Theme.colors.primary.main, size: '16px' }} />
						</i-hstack>
						<i-vstack gap={4} class="w-input" verticalAlignment="center">
							<i-input id="inputAdmin" class="input-text w-input w-100" onChanged={this.onInputAdmin} />
							<i-label id="lbErr" visible={false} caption="The address is invalid!" font={{ color: Theme.colors.primary.main, size: '12px' }} />
						</i-vstack>
					</i-hstack>
					<i-hstack class="row-mobile" gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Common Start Date" />
						<i-vstack verticalAlignment="center" horizontalAlignment="start" class="w-input">
							<i-checkbox
								id="checkboxStartDate"
								height="auto"
								checked={false}
							/>
						</i-vstack>
					</i-hstack>
				</i-vstack>
			</i-panel>
		)
	}
}
