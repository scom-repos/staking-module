import { Container, Panel, customElements, ControlElement, Module, Input, Label, Checkbox, Control, application, HStack } from '@ijstech/components';
import { BigNumber } from '@ijstech/eth-wallet';
import { EventId, isAddressValid, isValidNumber, ITokenObject, limitInputNumber } from '@staking/global';
import { Reward } from '@staking/store';
import { TokenSelection } from '../../token-selection';

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
	private inputVestingPeriod: Input;
	private inputClaimDeadline: Input;
	private inputAdmin: Input;
	private lbErr: Label;
	private isAdminValid = false;
	private checkboxStartDate: Checkbox;
	private wrapperAddressElm: HStack;
	private _isNew: boolean;
	private inputAddress: Input;
	private lbAddressErr: Label;
	private isAddressValid: boolean;

	constructor(parent?: Container, options?: any) {
		super(parent, options);
	}

	set chainId(chainId: number) {
		this.tokenSelection.chainId = chainId;
		this.token = undefined;
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
			isValidNumber(this.inputVestingPeriod.value) &&
			isValidNumber(this.inputClaimDeadline.value) &&
			(this.isNew || this.isAddressValid);
	}

	getData = () => {
		const reward: Reward = {
			address: this.inputAddress.value,
			rewardTokenAddress: this.token?.address || this.token?.symbol || '',
			multiplier: new BigNumber(this.inputMultiplier.value),
			initialReward: new BigNumber(this.inputInitialReward.value),
			vestingPeriod: new BigNumber(this.inputVestingPeriod.value),
			claimDeadline: new BigNumber(this.inputClaimDeadline.value),
			admin: `${this.inputAdmin.value}`,
			isCommonStartDate: this.checkboxStartDate.checked,
		}
		return reward;
	}

	init() {
		super.init();
		this.tokenSelection = new TokenSelection();
		this.tokenSelection.onSelectToken = this.onInputToken;
		this.pnlTokenSelection.appendChild(this.tokenSelection);
		this.setupInput();
	}

	render() {
		return (
			<i-panel class="custom-scroll">
				<i-vstack gap={10} verticalAlignment="center" class="main-content">
					<i-hstack id="wrapperAddressElm" gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Address" />
							<i-label caption="*" font={{ color: '#f15e61', size: '16px' }} />
						</i-hstack>
						<i-vstack gap={4} width="calc(100% - 190px)" verticalAlignment="center">
							<i-input id="inputAddress" class="input-text w-100" onChanged={this.onInputAddress} />
							<i-label id="lbAddressErr" visible={false} caption="The address is invalid!" font={{ color: '#f15e61', size: '12px' }} />
						</i-vstack>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Reward Token Address" />
							<i-label caption="*" font={{ color: '#f15e61', size: '16px' }} />
						</i-hstack>
						<i-panel id="pnlTokenSelection" width="calc(100% - 190px)" />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Multiplier" />
							<i-label caption="*" font={{ color: '#f15e61', size: '16px' }} />
						</i-hstack>
						<i-input id="inputMultiplier" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputNumber(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Initial Reward" />
							<i-label caption="*" font={{ color: '#f15e61', size: '16px' }} />
						</i-hstack>
						<i-input id="inputInitialReward" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputNumber(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Vesting Period" />
							<i-label caption="*" font={{ color: '#f15e61', size: '16px' }} />
						</i-hstack>
						<i-input id="inputVestingPeriod" placeholder="Second" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputUnix(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Claim Deadline" />
							<i-label caption="*" font={{ color: '#f15e61', size: '16px' }} />
						</i-hstack>
						<i-input id="inputClaimDeadline" placeholder="Unix" inputType="number" class="input-text" onChanged={(src: Control) => this.onInputUnix(src)} />
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-hstack gap={4} verticalAlignment="center">
							<i-label class="lb-title" caption="Admin" />
							<i-label caption="*" font={{ color: '#f15e61', size: '16px' }} />
						</i-hstack>
						<i-vstack gap={4} width="calc(100% - 190px)" verticalAlignment="center">
							<i-input id="inputAdmin" class="input-text w-100" onChanged={this.onInputAdmin} />
							<i-label id="lbErr" visible={false} caption="The address is invalid!" font={{ color: '#f15e61', size: '12px' }} />
						</i-vstack>
					</i-hstack>
					<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
						<i-label class="lb-title" caption="Common Start Date" />
						<i-vstack verticalAlignment="center" horizontalAlignment="start" width="calc(100% - 190px)">
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
