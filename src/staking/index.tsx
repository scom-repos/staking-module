import { Module, Panel, Icon, Button, Label, VStack, HStack, Container, customElements, ControlElement, IEventBus, application, customModule, Styles, Modal, CarouselSlider } from '@ijstech/components';
import { formatNumber, formatDate, registerSendTxEvents, TokenMapType, PageBlock, EventId } from '@staking/global';
import { InfuraId, Networks, getChainId, getTokenMap, getTokenIconPath, viewOnExplorerByAddress, isWalletConnected, getNetworkInfo, setTokenMap, getDefaultChainId, hasWallet, connectWallet, setDataFromSCConfig, setCurrentChainId, tokenSymbol, LockTokenType, getStakingStatus, StakingCampaign, Reward, fallBackUrl } from '@staking/store';
import {
	getStakingTotalLocked,
	getLPObject,
	getVaultObject,
	getERC20RewardCurrentAPR,
	getLPRewardCurrentAPR,
	getVaultRewardCurrentAPR,
	withdrawToken,
	claimToken,
	getAllCampaignsInfo,
} from '@staking/staking-utils';
import {
	getLockedTokenObject,
	getLockedTokenSymbol,
	getLockedTokenIconPaths,
} from './common';
import Assets from '@staking/assets';
import moment from 'moment';
import { BigNumber, Wallet, WalletPlugin } from '@ijstech/eth-wallet';
import { Result } from '../result';
import { getTokenUrl, isThemeApplied } from '../config';
import './staking.css';
import { ManageStake } from './manageStake';
import { PanelConfig } from './panelConfig';
import { Contracts } from '@validapp/time-is-money-sdk';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['i-section-staking']: StakingBlock
		}
	}
}

@customModule
@customElements('i-section-staking')
export class StakingBlock extends Module implements PageBlock {
	private data: any;
	readonly onEdit: () => Promise<void>;
	readonly onConfirm: () => Promise<void>;
	readonly onDiscard: () => Promise<void>;

	private pnlConfig: PanelConfig;
	private $eventBus: IEventBus;
	private loadingElm: Panel;
	private campaigns: any = [];
	private stakingComponent: Panel;
	private stakingLayout: Panel;
	private stakingElm: Panel;
	private noCampaignSection: Panel;
	private stakingResult: Result;
	private manageStakeElm: Panel;
	private listAprTimer: any = [];
	private listActiveTimer: any = [];
	private tokenMap: TokenMapType = {};
	private importFileErrModal: Modal;
  private importFileErr: Label;
	private isImportNewCampaign = false;

	validateConfig() {

	}

	async getData() {
		return this.data;
	}

	async setData(value: any) {
		this.data = value;
		this.pnlConfig.visible = false;
		this.stakingLayout.visible = true;
		this.onSetupPage(isWalletConnected());
	}

	async getTag() {
		return this.tag;
	}

	async setTag(value: any) {
		this.tag = value;
	}

	async edit() {
		this.pnlConfig.showInputCampaign(!this.data, this.getCampaign());
		this.stakingLayout.visible = false;
		this.pnlConfig.visible = true;
	}

	async confirm() {
		if (this.pnlConfig) {
			this.pnlConfig.onConfirm();
		}
	}

	async discard() {
		this.pnlConfig.visible = false;
		this.stakingLayout.visible = true;
	}

	async config() {

	}

	async onConfigSave(campaign: StakingCampaign) {
		this.data = campaign;
		this.pnlConfig.visible = false;
		this.stakingLayout.visible = true;
		this.onSetupPage(isWalletConnected());
	}

	async onEditCampaign(isNew: boolean, data?: { [key: string]: StakingCampaign[] }) {
		this.pnlConfig.showInputCampaign(isNew, this.getCampaign(data));
		this.stakingLayout.visible = false;
		this.pnlConfig.visible = true;
	}

	private initInputFile = (importFileElm: Label) => {
    importFileElm.caption = '<input type="file" accept=".json" />';
    const inputElm = importFileElm.firstChild?.firstChild as HTMLElement;
    if (inputElm) {
      inputElm.onchange = (event: any) => {
        const reader = new FileReader();
        const files = event.target.files;
        if (!files.length) {
          return;
        }
        const file = files[0];
        reader.readAsBinaryString(file);
        reader.onload = (event) => {
          const { loaded, total } = event;
          const isCompleted = loaded === total;
          if (isCompleted) {
            this.initInputFile(importFileElm);
            this.convertJSONToObj(reader.result);
          }
        }
      }
    }
  }

	private convertJSONToObj = (result: any) => {
    if (!result) this.showImportJsonError('Data is corrupted. No data were recovered.');
		try {
			const obj = JSON.parse(result);
			const length = Object.keys(obj).length;
			const chainId = getChainId();
			const campaignObj = obj[chainId];
			if (!length) {
				this.showImportJsonError('No data found in the imported file.');
			} else if (this.isImportNewCampaign && !campaignObj) {
				const network = getNetworkInfo(chainId);
				this.showImportJsonError(`No data found in ${network?.name} network.`);
			} else {
				if (this.isImportNewCampaign) {
					const data = { [chainId]: [campaignObj[0]] };
					this.onEditCampaign(true, data);
				} else {
					this.onEditCampaign(false, obj);
				}
			}
		} catch {
			this.showImportJsonError('Data is corrupted. No data were recovered.');
		}
  }

	private showImportJsonError(message: string) {
    this.importFileErrModal.visible = true;
    this.importFileErr.caption = message;
  }

	private getCampaign(data?: { [key: string]: StakingCampaign[] }) {
		const _data = data ? data : this.data;
		if (_data) {
			const keys = Object.keys(_data);
			let campaigns = [];
			for (const key of keys) {
				const arr = _data[key].map((item: StakingCampaign) => {
					item.chainId = Number(key)
					return item;
				});
				campaigns.push(...arr)
			}
			return campaigns;
		}
		return _data;
	}

	constructor(parent?: Container, options?: ControlElement) {
		super(parent, options);
		this.$eventBus = application.EventBus;
		this.registerEvent();
	}

	private registerEvent = () => {
		this.$eventBus.register(this, EventId.IsWalletConnected, this.onWalletConnect);
		this.$eventBus.register(this, EventId.IsWalletDisconnected, this.onWalletConnect);
		this.$eventBus.register(this, EventId.chainChanged, this.onChainChange);
		this.$eventBus.register(this, EventId.EmitButtonStatus, this.updateButtonStatus);
	}

	private onWalletConnect = async (connected: boolean) => {
		this.onSetupPage(connected);
	}

	private onChainChange = async () => {
		const isConnected = isWalletConnected();
		if (await this.isWalletValid(isConnected)) {
			this.onSetupPage(isConnected);
		}
	}

	private isWalletValid = async (isConnected: boolean) => {
		if (this.data && isConnected) {
			try {
				const wallet = Wallet.getInstance();
				const infoList = this.data[wallet.chainId];
				const stakingAddress = infoList && infoList[0].stakings[0]?.address;
				if (stakingAddress) {
					const timeIsMoney = new Contracts.TimeIsMoney(wallet, stakingAddress);
					await timeIsMoney.getCredit(wallet.address);
				}
				return true;
			} catch {
				return false;
			}
		}
		return false;
	}

	private initWalletData = async () => {
		let accountsChangedEventHandler = async (account: string) => {
			setTokenMap();
		}
		let chainChangedEventHandler = async (hexChainId: number) => {
			setTokenMap();
		}
		const selectedProvider = localStorage.getItem('walletProvider') as WalletPlugin;
		const isValidProvider = Object.values(WalletPlugin).includes(selectedProvider);
		if (!Wallet.getInstance().chainId) {
			Wallet.getInstance().chainId = getDefaultChainId();
		}
		if (hasWallet() && isValidProvider) {
			await connectWallet(selectedProvider, {
				'accountsChanged': accountsChangedEventHandler,
				'chainChanged': chainChangedEventHandler
			});
		}
	}

	private onSetupPage = async (connected: boolean, hideLoading?: boolean) => {
		if (!hideLoading && this.loadingElm) {
			this.loadingElm.visible = true;
		}
		if (!connected || !this.data) {
			await this.renderEmpty();
			return;
		}
		this.campaigns = await getAllCampaignsInfo(this.data);
		await this.renderCampaigns(hideLoading);
		if (!hideLoading && this.loadingElm) {
			this.loadingElm.visible = false;
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

	private onStake = async (option: any) => {
		const manageStake = new ManageStake();
		manageStake.onRefresh = () => this.onSetupPage(isWalletConnected(), true);
		this.manageStakeElm.clearInnerHTML();
		this.manageStakeElm.appendChild(manageStake);
		manageStake.showModal(option, `#btn-${option.address}`);
	}

	private onUnstake = async (btnUnstake: Button, data: any) => {
		if (data.option.mode !== 'Claim') {
			this.onStake(data.option);
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
				await this.onSetupPage(isWalletConnected(), true);
				if (!btnUnstake) return;
				btnUnstake.rightIcon.visible = false;
				btnUnstake.enabled = true;
			};

			registerSendTxEvents({
				transactionHash: callBack,
				confirmation: confirmationCallBack
			});

			withdrawToken(data.option.address, callBack);
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
			await this.onSetupPage(isWalletConnected(), true);
			if (!btnClaim) return;
			btnClaim.rightIcon.visible = false;
			btnClaim.enabled = true;
		};

		registerSendTxEvents({
			transactionHash: callBack,
			confirmation: confirmationCallBack
		});

		claimToken(data.reward.address, callBack);
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
			window.open(getTokenUrl ? getTokenUrl : `#/swap?chainId=${chainId}&fromToken=BNB&toToken=${token}&fromAmount=1&showOptimizedRoutes=false`);
		}
	}

	init = async () => {
		super.init();
		this.pnlConfig = new PanelConfig();
		this.pnlConfig.visible = false;
		this.pnlConfig.onConfigSave = (campaign: StakingCampaign) => this.onConfigSave(campaign);
		this.pnlConfig.onReset = () => {
			this.pnlConfig.visible = false;
			this.stakingLayout.visible = true;
		}
		this.stakingComponent.appendChild(this.pnlConfig);
		this.stakingResult = new Result();
		this.stakingComponent.appendChild(this.stakingResult);
		this.initWalletData();
		setDataFromSCConfig(Networks, InfuraId);
		setCurrentChainId(getDefaultChainId());
		if (!this.data) {
			await this.renderEmpty();
		}

		window.addEventListener('resize', () => {
			const isDesktop = innerWidth >= 1240;
			if (this.stakingElm) {
				const carousels = this.stakingElm.querySelectorAll('i-carousel-slider');
				for (const _carousel of carousels) {
					const carousel = _carousel as CarouselSlider;
					carousel.width = isDesktop ? '75%' : '100%';
					carousel.slidesToShow = isDesktop ? 3 : 1;
				}
			}
		});
	}

	private updateButtonStatus = async (data: any) => {
		if (data) {
			const { value, key, text } = data;
			const elm = this.stakingElm?.querySelector(key) as Button;
			if (elm) {
				elm.rightIcon.visible = value;
				elm.caption = text;
			}
		}
	}

	private getBtnText = (key: string, text: string) => {
		const data = getStakingStatus(key);
		if (data.value) {
			return data.text;
		}
		return text;
	}

	private initEmptyUI = async () => {
		if (!this.noCampaignSection) {
			this.noCampaignSection = await Panel.create();
		}
		const isConnected = isWalletConnected();
		const isBtnShown = !this.data && isConnected;
		let importFileElm: any;
		let onImportCampaign: any;
		let onClose: any;
		if (isBtnShown) {
			importFileElm = await Label.create({ visible: false });
			onImportCampaign = (isNew: boolean) => {
				this.isImportNewCampaign = isNew;
				(importFileElm.firstChild?.firstChild as HTMLElement)?.click();
			}
			onClose = () => {
				this.importFileErrModal.visible = false;
			}
			this.initInputFile(importFileElm);
		}
		this.noCampaignSection.clearInnerHTML();
		this.noCampaignSection.appendChild(
			<i-panel class="no-campaign" background={{ color: '#192046' }}>
				<i-vstack gap={10} verticalAlignment="center">
					<i-image url={Assets.fullPath('img/staking/TrollTrooper.svg')} />
					<i-label font={{ color: '#FFFFFF' }} caption={ isConnected ? 'No Campaigns' : 'Please connect with your wallet!' } />
					{
						isBtnShown ? (
							<i-hstack gap={10} margin={{ top: 10 }} verticalAlignment="center" horizontalAlignment="center">
								<i-button maxWidth={220} caption="Add New Campaign" class="btn-os btn-stake" onClick={() => this.onEditCampaign(true)} />
								<i-button maxWidth={220} caption="Import New Campaign" class="btn-os btn-stake" onClick={() => onImportCampaign(true)} />
								<i-button maxWidth={220} caption="Import Existing Campaigns" class="btn-os btn-stake" onClick={() => onImportCampaign(false)} />
								{ importFileElm }
								<i-modal id="importFileErrModal" maxWidth="100%" width={420} title="Import Campaign Error" closeIcon={{ name: 'times' }}>
									<i-vstack gap={20} margin={{ bottom: 10 }} verticalAlignment="center" horizontalAlignment="center">
										<i-label id="importFileErr" font={{ size: '16px', color: '#fff' }} />
										<i-button caption="Close" class="btn-os btn-stake" width={120} onClick={onClose} />
									</i-vstack>
								</i-modal>
							</i-hstack>
						) : []
					}
				</i-vstack>
			</i-panel>
		);
		this.noCampaignSection.visible = true;
	}

	private renderEmpty = async () => {
		await this.initEmptyUI();
		if (this.stakingElm) {
			this.stakingElm.clearInnerHTML();
			this.stakingElm.appendChild(this.noCampaignSection);
		}
		if (this.loadingElm) {
			this.loadingElm.visible = false;
		}
	}

	private renderCampaigns = async (hideLoading?: boolean) => {
		if (!hideLoading) {
			this.stakingElm.clearInnerHTML();
		}
		this.tokenMap = getTokenMap();
		const chainId = getChainId();
		const network = getNetworkInfo(chainId);
		await this.initEmptyUI();
		this.noCampaignSection.visible = false;
		if (this.campaigns && !this.campaigns.length) {
			this.stakingElm.clearInnerHTML();
			this.stakingElm.appendChild(this.noCampaignSection);
			this.noCampaignSection.visible = true;
			return;
		}

		const currentAddress = Wallet.getInstance().address;
		let nodeItems: HTMLElement[] = [];
		this.removeTimer();
		for (let idx = 0; idx < this.campaigns.length; idx++) {
			const campaign = this.campaigns[idx];
			const colorCampaignLine = isThemeApplied ? campaign.customColorCampaign || '#0000001f' : '#0000001f';
			const colorCampaignText = isThemeApplied ? campaign.customColorCampaign || '#f15e61' : '#f15e61';
			const colorCampaignBackground = isThemeApplied ? campaign.customColorBackground || '#ffffff26' : '#ffffff26';
			const colorStakingBackground = isThemeApplied ? campaign.customColorStakingBackground || '#ffffff07' : '#ffffff07';
			const colorButton = isThemeApplied ? campaign.customColorButton : undefined;
			const colorText = isThemeApplied ? campaign.customColorText || '#fff' : '#fff';
			const colorTimeBackground = isThemeApplied ? campaign.customColorTimeBackground || '#b14781' : '#b14781';
			const isDesktop = innerWidth >= 1240;
			let items: any[] = [];
			let carousel = await CarouselSlider.create({
				width: isDesktop ? '75%' : '100%',
				minHeight: 200,
				slidesToShow: isDesktop ? 3 : 1,
				transitionSpeed: 600,
				items: items,
				type: 'arrow'
			})
			const containerSection = await Panel.create();
			containerSection.id = `campaign-${idx}`;
			containerSection.classList.add('container-custom');
			if (isThemeApplied && campaign.customColorText) {
				const style = document.createElement('style');
				style.innerHTML = `
					.wrapper i-label:not(.duration) > * {
						color: ${campaign.customColorText} !important;
					},
				`;
				containerSection.appendChild(style);
			}
			const options = campaign.options;
			for (let optIdx = 0; optIdx < options.length; optIdx++) {
				const opt = options[optIdx];
				let lpTokenData: any = {};
				let vaultTokenData: any = {};
				if (opt.tokenAddress) {
					if (opt.lockTokenType == LockTokenType.LP_Token) {
						lpTokenData = {
							'object': await getLPObject(opt.tokenAddress)
						}
					} else if (opt.lockTokenType == LockTokenType.VAULT_Token) {
						vaultTokenData = {
							'object': await getVaultObject(opt.tokenAddress)
						}
					}
				}
				const tokenInfo = {
					tokenAddress: campaign.tokenAddress,
					lpToken: lpTokenData,
					vaultToken: vaultTokenData
				}
				options[optIdx] = {
					...options[optIdx],
					tokenInfo
				}
			}
			const stakingInfo = options ? options[0] : null;
			const lockedTokenObject = getLockedTokenObject(stakingInfo, stakingInfo.tokenInfo, this.tokenMap);
			const lockedTokenSymbol = getLockedTokenSymbol(stakingInfo, lockedTokenObject);
			const lockedTokenIconPaths = getLockedTokenIconPaths(stakingInfo, lockedTokenObject, chainId, this.tokenMap);
			const lockedTokenDecimals = lockedTokenObject?.decimals || 18;
			const defaultDecimalsOffset = 18 - lockedTokenDecimals;
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
			const bg = { color: colorTimeBackground };
			const endHours = await Label.create({ background: bg });
			const endDays = await Label.create({ background: bg });
			const endMins = await Label.create({ background: bg });
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
						<i-image width={25} height={25} url={Assets.fullPath(network?.img || '')} fallbackUrl={fallBackUrl} />
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
					const _totalLocked = await getStakingTotalLocked(o.address);
					totalLocked[o.address] = _totalLocked;
					const optionQty = new BigNumber(o.maxTotalLock).minus(_totalLocked).shiftedBy(defaultDecimalsOffset);
					const lbOptionQty = document.querySelector(`#lb-${o.address}`) as Label;
					if (lbOptionQty) {
						lbOptionQty.caption = `${formatNumber(optionQty)} ${lockedTokenSymbol}`;
					}
					const btnStake = document.querySelector(`#btn-${o.address}`) as Button;
					const isStaking = getStakingStatus(`#btn-${o.address}`).value;
					if (btnStake && btnStake.caption === 'Stake') {
						btnStake.enabled = !isStaking && !(!isStarted || o.mode === 'Stake' && (optionQty.lte(0) || isClosed));
					} else if (btnStake && btnStake.caption === 'Unstake') {
						btnStake.enabled = !isStaking && o.stakeQty != "0";
					}
					const stickerOption = document.querySelector(`#sticker-${o.address}`) as Panel;
					if (optionQty.lte(0) && stickerOption) {
						stickerOption.visible = true;
					}
					_totalTokens += parseFloat(o.maxTotalLock);
					_availableQty += (parseFloat(o.maxTotalLock) - parseFloat(_totalLocked));
				};
				totalTokens = _totalTokens;
				availableQty = _availableQty;
				totalTokensLabel.caption = `${formatNumber(new BigNumber(totalTokens).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`;
				availableQtyLabel.caption = `${formatNumber(new BigNumber(availableQty).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`;
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
			totalTokensLabel.caption = `${formatNumber(new BigNumber(totalTokens).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`;
			availableQtyLabel.caption = `${formatNumber(new BigNumber(availableQty).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`;
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
				{
					title: 'Vesting Period:',
					value: campaign.vestingPeriod,
					isHidden: !campaign.vestingPeriod || isSimplified,
					img: Assets.fullPath('img/staking/stopwatch.svg'),
				},
			];

			const _items = await Promise.all(options.map(async (option: any) => {
					const stickerOptionSection = await Panel.create();
					stickerOptionSection.classList.add('sticker', 'sold-out', 'hidden', 'sticker-text');
					stickerOptionSection.id = `sticker-${option.address}`;
					stickerOptionSection.appendChild(
						<i-panel class="sticker-text">
							<i-icon name="star" />
							<i-label caption="Sold Out" />
						</i-panel>
					)

					const key = `btn-${option.address}`;
					const btnStake = await Button.create({
						caption: this.getBtnText(key, 'Stake'),
						background: { color: `${colorButton} !important` },
						font: { color: colorText },
						rightIcon: { spin: true, fill: colorText, visible: getStakingStatus(key).value }
					});
					const btnUnstake = await Button.create({
						caption: this.getBtnText(key, 'Unstake'),
						background: { color: `${colorButton} !important` },
						font: { color: colorText },
						rightIcon: { spin: true, fill: colorText, visible: getStakingStatus(key).value }
					});
					if (option.mode === 'Stake') {
						btnUnstake.visible = false;
						btnStake.id = key;
						btnStake.enabled = !isClosed;
						btnStake.classList.add('btn-os', 'btn-stake');
						btnStake.onClick = () => this.onStake({ ...campaign, ...option });
					} else {
						btnStake.visible = false;
						btnUnstake.id = key;
						btnUnstake.classList.add('btn-os', 'btn-stake');
						btnUnstake.onClick = () => this.onUnstake(btnUnstake, { option: { ...campaign, ...option }, lockedTokenSymbol });
					}

					const isClaim = option.mode === 'Claim';

					const rewardOptions = !isClaim ? option.rewardsData : [];
					let aprInfo: any = {};

					const optionAvailableQtyLabel = await Label.create();
					optionAvailableQtyLabel.classList.add('ml-auto');
					optionAvailableQtyLabel.id = `lb-${option.address}`;
					optionAvailableQtyLabel.caption = `${formatNumber(new BigNumber(option.maxTotalLock).minus(totalLocked[option.address]).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`;
					const claimStakedRow = await HStack.create();
					claimStakedRow.appendChild(<i-label class="mr-025" caption="You Staked" />);
					claimStakedRow.appendChild(<i-label class="ml-auto" caption={`${formatNumber(new BigNumber(option.stakeQty).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`} />);

					const rowRewards = await Panel.create();
					if (isClaim) {
						claimStakedRow.classList.add('mb-1');
						for (let idx = 0; idx < option.rewardsData.length; idx++) {
							const reward = option.rewardsData[idx];
							const rewardToken = this.getRewardToken(reward.rewardTokenAddress);
							const rewardTokenDecimals = rewardToken.decimals || 18;
							const decimalsOffset = 18 - rewardTokenDecimals;
							let rewardLockedDecimalsOffset = decimalsOffset;
							if (rewardTokenDecimals !== 18 && lockedTokenDecimals !== 18) {
								rewardLockedDecimalsOffset = decimalsOffset * 2;
							}
							const rewardSymbol = rewardToken.symbol || '';
							rowRewards.appendChild(
								<i-panel margin={{ bottom: 16 }} width="100%" height={2} background={{ color: colorCampaignLine }} />
							)
							rowRewards.appendChild(
								<i-hstack horizontalAlignment="space-between">
									<i-label caption={`${rewardSymbol} Locked:`} />
									<i-label class="bold" caption={`${formatNumber(new BigNumber(reward.vestedReward).shiftedBy(rewardLockedDecimalsOffset))} ${rewardSymbol}`} />
								</i-hstack>
							);
							rowRewards.appendChild(
								<i-hstack horizontalAlignment="space-between">
									<i-label caption={`${rewardSymbol} Vesting Start:`} />
									<i-label class="bold" caption={reward.vestingStart ? reward.vestingStart.format('YYYY-MM-DD HH:mm:ss') : 'TBC'} />
								</i-hstack>
							);
							rowRewards.appendChild(
								<i-hstack horizontalAlignment="space-between">
									<i-label caption={`${rewardSymbol} Vesting End:`} />
									<i-label class="bold" caption={reward.vestingEnd ? reward.vestingEnd.format('YYYY-MM-DD HH:mm:ss') : 'TBC'} />
								</i-hstack>
							);
							const passClaimStartTime = !(reward.claimStartTime && moment().diff(moment.unix(reward.claimStartTime)) < 0);
							let rewardClaimable = `0 ${rewardSymbol}`;
							if (passClaimStartTime) {
								rewardClaimable = `${formatNumber(new BigNumber(reward.claimable).shiftedBy(decimalsOffset))} ${rewardSymbol}`;
							}
							let startClaimingText = '';
							if (!(!reward.claimStartTime || passClaimStartTime)) {
								const claimStart = moment.unix(reward.claimStartTime).format('YYYY-MM-DD HH:mm:ss');
								startClaimingText = `(Claim ${rewardSymbol} after ${claimStart})`;
							}
							rowRewards.appendChild(
								<i-hstack horizontalAlignment="space-between">
									<i-label caption={`${rewardSymbol} Claimable:`} />
									<i-label class="bold" caption={rewardClaimable} />
									{startClaimingText ? <i-label caption={startClaimingText} /> : []}
								</i-hstack>
							);
							if (campaign.showContractLink) {
								rowRewards.appendChild(
									<i-hstack gap={4} class="pointer" width="fit-content" margin={{ top: 12, bottom: -4, left: 'auto', right: 'auto' }} onClick={() => viewOnExplorerByAddress(chainId, reward.address)}>
										<i-label font={{ bold: true }} caption="View Reward Contract" />
										<i-icon name="external-link-alt" width="14" height="14" fill={colorText} class="inline-block" />
									</i-hstack>
								)
							}
							const btnClaim = await Button.create({
								rightIcon: { spin: true, fill: colorText, visible: false },
								caption: `Claim ${rewardSymbol}`,
								background: { color: `${colorButton} !important` },
								font: { color: colorText },
								enabled: !(!passClaimStartTime || new BigNumber(reward.claimable).isZero())
							})
							btnClaim.id = `btnClaim-${idx}-${option.address}`;
							btnClaim.classList.add('btn-os', 'btn-stake', 'mt-1');
							btnClaim.onClick = () => this.onClaim(btnClaim, { reward, rewardSymbol });
							rowRewards.appendChild(btnClaim);
							// if (reward.admin?.toLowerCase() === currentAddress?.toLowerCase()) {
							// 	rowRewards.appendChild(
							// 		<i-vstack gap={4} margin={{ top: 2, bottom: 12 }} verticalAlignment="center">
							// 			<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
							// 				<i-label caption="Admin Claim:" />
							// 				<i-label caption={`${formatNumber(1000)} ${rewardSymbol}`} />
							// 			</i-hstack>
							// 			<i-hstack horizontalAlignment="center">
							// 				<i-button caption="Admin Claim" class="btn-os btn-stake" margin={{ bottom: 0 }} onClick={(src) => this.onClaim(src as Button, { reward: { address: currentAddress }, rewardSymbol })} />
							// 			</i-hstack>
							// 		</i-vstack>
							// 	)
							// }
						};
					} else {
						rowRewards.visible = false;
					}

					const rowOptionItems = !isClaim ? [
						{
							title: 'Max. QTY',
							value: `${formatNumber(new BigNumber(option.maxTotalLock).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`,
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
							value: `${formatNumber(new BigNumber(option.perAddressCap).shiftedBy(defaultDecimalsOffset))} ${lockedTokenSymbol}`,
						},
						{
							title: 'Campaign Start Date',
							value: formatDate(option.startOfEntryPeriod, 'DD MMM YYYY'),
							isHidden: !isSimplified,
						},
					] : [];

					const getAprValue = (rewardOption: any) => {
						if (rewardOption && aprInfo && aprInfo[rewardOption.rewardTokenAddress]) {
							const apr = new BigNumber(aprInfo[rewardOption.rewardTokenAddress]).times(100).toFormat(2, BigNumber.ROUND_DOWN);
							return `${apr}%`;
						}
						return '';
					}

					const durationDays = option.minLockTime / (60 * 60 * 24);

					const imgTokensElm = await HStack.create({ width: '100%', verticalAlignment: 'center', horizontalAlignment: 'center' })
					const rewardLenght = option.rewardsData.length;
					for (const reward of option.rewardsData) {
						const rewardToken = this.getRewardToken(reward.rewardTokenAddress);
						const imgUrl = getTokenIconPath(rewardToken, chainId);
						const size = 100 / rewardLenght;
						imgTokensElm.appendChild(
							<i-image width={`${size}%`} height="100%" maxWidth={75} maxHeight={75} url={Assets.fullPath(imgUrl)} fallbackUrl={fallBackUrl} />
						)
					}

					const _lockedTokenObject = getLockedTokenObject(option, option.tokenInfo, this.tokenMap);
					const _lockedTokenIconPaths = getLockedTokenIconPaths(option, _lockedTokenObject, chainId, this.tokenMap);

					return <i-vstack class="column-custom" width="100%" padding={{ left: 5, right: 5 }}>
						<i-panel class="bg-color" background={{ color: colorStakingBackground }}>
							{stickerOptionSection}
							<i-panel class="header-info">
								<i-hstack verticalAlignment="center" horizontalAlignment="center">
									{
										_lockedTokenIconPaths.map((v: any) => {
											return <i-image width={25} height={25} url={Assets.fullPath(v)} fallbackUrl={fallBackUrl} />
										})
									}
									<i-label class="bold duration" font={{ color: colorCampaignText }} caption={durationDays < 1 ? '< 1 Day' : `${durationDays} Days`} />
								</i-hstack >
								<i-label width="100%" class="staking-description" minHeight={20} caption={option.customDesc || ''} />
							</i-panel>
							<i-panel class="img-custom">
								{imgTokensElm}
							</i-panel>
							<i-panel class="info-stake">
								{btnStake}
								{btnUnstake}
								{
									rowOptionItems.filter(f => !f.isHidden).map((v: any) => {
										return <i-hstack horizontalAlignment="space-between">
											<i-label class="mr-025" caption={v.title} />
											{v.elm ? v.elm : <i-label caption={v.value} />}
										</i-hstack>
									})
								}
								{claimStakedRow}
								{
									!isClaim && !!campaign.showContractLink ?
									<i-hstack gap={4} class="pointer" width="fit-content" margin={{ top: 8, left: 'auto', right: 'auto' }} onClick={() => viewOnExplorerByAddress(chainId, option.address)}>
											<i-label font={{ bold: true }} caption="View Staking Contract" />
											<i-icon name="external-link-alt" width="14" height="14" fill={colorText} class="inline-block" />
									</i-hstack> : []
								}
								{ isClaim ? [] : <i-panel width="100%" height={2} margin={{ top: 10, bottom: 8 }} background={{ color: colorCampaignLine }} /> }
								{
									await Promise.all(rewardOptions.map(async (rewardOption: any, idx: number) => {
										const labelApr = await Label.create();
										labelApr.classList.add('ml-auto');
										const rewardToken = this.getRewardToken(rewardOption.rewardTokenAddress);
										const rewardTokenDecimals = rewardToken.decimals || 18;
										const decimalsOffset = 18 - rewardTokenDecimals;
										const rateDesc = `1 ${tokenSymbol(option.lockTokenAddress)} : ${new BigNumber(rewardOption.multiplier).shiftedBy(decimalsOffset).toFixed()} ${tokenSymbol(rewardOption.rewardTokenAddress)}`;
										const updateApr = async () => {
											if (option.lockTokenType === LockTokenType.ERC20_Token) {
												const apr: any = await getERC20RewardCurrentAPR(rewardOption, lockedTokenObject, durationDays);
												if (!isNaN(parseFloat(apr))) {
													aprInfo[rewardOption.rewardTokenAddress] = apr;
												}
											} else if (option.lockTokenType === LockTokenType.LP_Token) {
												if (rewardOption.referencePair) {
													aprInfo[rewardOption.rewardTokenAddress] = await getLPRewardCurrentAPR(rewardOption, option.tokenInfo?.lpTokenData?.object, durationDays);
												}
											} else {
												aprInfo[rewardOption.rewardTokenAddress] = await getVaultRewardCurrentAPR(rewardOption, option.tokenInfo?.vaultTokenData?.object, durationDays);
											}
											const aprValue = getAprValue(rewardOption);
											if (isSimplified) {
												labelApr.caption = aprValue;
											} else {
												labelApr.caption = aprValue ? `(${aprValue} APR) ${rateDesc}` : rateDesc;
											}
										}
										updateApr();
										this.listAprTimer.push(setInterval(updateApr, 10000));
										const aprValue = getAprValue(rewardOption);
										let offset = decimalsOffset;
										if (rewardTokenDecimals !== 18 && lockedTokenDecimals !== 18) {
											offset = offset * 2;
										}
										const earnedQty = formatNumber(new BigNumber(option.totalCredit).times(new BigNumber(rewardOption.multiplier)).shiftedBy(offset));
										const earnedSymbol = this.getRewardToken(rewardOption.rewardTokenAddress).symbol || '';
										const rewardElm = await VStack.create({ verticalAlignment: 'center' });
										rewardElm.appendChild(
											<i-hstack horizontalAlignment="space-between">
												<i-label class="mr-025" caption="You Earned:" />
												<i-label caption={`${earnedQty} ${earnedSymbol}`} />
											</i-hstack>
										);
										// if (rewardOption.admin?.toLowerCase() === currentAddress?.toLowerCase()) {
										// 	rowRewards.appendChild(
										// 		<i-vstack gap={4} margin={{ top: 2, bottom: 12 }} verticalAlignment="center">
										// 			<i-hstack gap={10} verticalAlignment="center" horizontalAlignment="space-between">
										// 				<i-label caption="Admin Claim:" />
										// 				<i-label caption={`${formatNumber(1000)} ${earnedSymbol}`} />
										// 			</i-hstack>
										// 			<i-hstack horizontalAlignment="center">
										// 				<i-button caption="Admin Claim" class="btn-os btn-stake" margin={{ bottom: 0 }} onClick={(src) => this.onClaim(src as Button, { reward: { address: currentAddress }, rewardSymbol: earnedSymbol })} />
										// 			</i-hstack>
										// 		</i-vstack>
										// 	)
										// }
										if (campaign.showContractLink) {
											rewardElm.appendChild(
												<i-hstack gap={4} class="pointer" width="fit-content" margin={{ top: 8, bottom: -4, left: 'auto', right: 'auto' }} onClick={() => viewOnExplorerByAddress(chainId, rewardOption.address)}>
													<i-label font={{ bold: true }} caption="View Reward Contract" />
													<i-icon name="external-link-alt" width="14" height="14" fill={colorText} class="inline-block" />
												</i-hstack>
											)
										}
										if (isSimplified) {
											labelApr.caption = aprValue;
											return <i-vstack>
												{ idx ? <i-panel width="100%" height={2} margin={{ top: 10, bottom: 8 }} background={{ color: colorCampaignLine }} /> : [] }
												<i-hstack horizontalAlignment="space-between">
													<i-label class="mr-025" caption="Rate:" />
													<i-label class="bold" caption={rateDesc} />
												</i-hstack>
												<i-hstack>
													<i-label class="mr-025" caption="APR:" />
													{labelApr}
												</i-hstack>
												{rewardElm}
											</i-vstack>
										}
										labelApr.caption = aprValue ? `(${aprValue} APR) ${rateDesc}` : rateDesc;
										return <i-vstack verticalAlignment="center">
											{ idx ? <i-panel width="100%" height={2} margin={{ top: 10, bottom: 8 }} background={{ color: colorCampaignLine }} /> : [] }
											<i-hstack horizontalAlignment="space-between">
												<i-label class="mr-025" caption="Rate:" />
												{labelApr}
											</i-hstack>
											{rewardElm}
										</i-vstack>
									}))
								}
								{
									isClaim && !!campaign.showContractLink ?
									<i-hstack gap={4} class="pointer" width="fit-content" margin={{ top: -12, bottom: 12, left: 'auto', right: 'auto' }} onClick={() => viewOnExplorerByAddress(chainId, option.address)}>
										<i-label font={{ bold: true }} caption="View Staking Contract" />
										<i-icon name="external-link-alt" width="14" height="14" fill={colorText} class="inline-block" />
									</i-hstack> : []
								}
								{rowRewards}
							</i-panel>
						</i-panel>
					</i-vstack>
				})
			);

			items = _items.map((item, idx) => {
				return {
					name: `Staking ${idx}`,
					controls: [item]
				}
			})
			carousel.items = items;

			nodeItems.push(containerSection);
			containerSection.appendChild(
				<i-hstack class="row-custom" background={{ color: colorCampaignBackground }} width="100%" wrap="wrap">
					<i-vstack class="column-custom">
						<i-vstack class="banner" background={{ color: colorCampaignText }} verticalAlignment="space-between">
							{stickerSection}
							<i-hstack verticalAlignment="center" class="campaign-name">
								{ !campaign.customLogo ? [] : <i-image width="25px" height="25px" url={campaign.customLogo} fallbackUrl={fallBackUrl} /> }
								<i-label caption={campaign.campaignName} />
							</i-hstack>
							<i-hstack>
								<i-label class="campaign-description" caption={campaign.campaignDesc || ''} />
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
							<i-hstack verticalAlignment="center" class="get-token" onClick={() => this.getLPToken(campaign, lockedTokenSymbol, chainId)}>
								<i-label class="bold" caption={`Get ${lockedTokenSymbol}`} />
								{
									lockedTokenIconPaths.map((v: any) => {
										return <i-image width={25} height={25} url={Assets.fullPath(v)} fallbackUrl={fallBackUrl} />
									})
								}
								<i-icon name="external-link-alt" width="14" height="14" fill={colorText} />
							</i-hstack >
							{activeTimerRow}
						</i-vstack>
					</i-vstack>
					{ carousel }
				</i-hstack>
			)
		};
		this.stakingElm.clearInnerHTML();
		this.stakingElm.append(this.noCampaignSection, ...nodeItems);
	}

	render() {
		return (
			<i-panel id="stakingComponent" class="staking-component" minHeight={200}>
				<i-panel id="stakingLayout" class="staking-layout" minHeight={290}>
					<i-vstack id="loadingElm" class="i-loading-overlay">
						<i-vstack class="i-loading-spinner" horizontalAlignment="center" verticalAlignment="center">
							<i-icon
								class="i-loading-spinner_icon"
								image={{ url: Assets.fullPath('img/loading.svg'), width: 36, height: 36 }}
							/>
							<i-label
								caption="Loading..." font={{ color: '#FD4A4C', size: '1.5em' }}
								class="i-loading-spinner_text"
							/>
						</i-vstack>
					</i-vstack>
					<i-panel id="stakingElm" class="wrapper" />
				</i-panel>
				<i-panel id="manageStakeElm" />
			</i-panel>
		)
	}
}
