import { Styles, customElements, Module, ControlElement, Modal, Button, Image, Container, GridLayout } from '@ijstech/components';
import {
  ChainNativeTokenByChainId,
  getChainId,
  getDefaultChainId,
  getTokenIconPath,
  getTokenList,
} from '@staking/store';
import { ITokenObject } from '@staking/global';
import Assets from '@staking/assets';
import './tokenSelection.css';
const Theme = Styles.Theme.defaultTheme;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['token-selection']: ControlElement;
    }
  }
};

@customElements('token-selection')
export class TokenSelection extends Module {
  private _token?: ITokenObject;
  private _onSelectToken: any;
  private tokenSelectionModal: Modal;
  private btnToken: Button;
  private tokenList: GridLayout;
  private _chainId: number;

  get token() {
    return this._token;
  }

  set token(value: ITokenObject | undefined) {
    this._token = value;
    this.updateButton(value);
  }

  get onSelectToken(): any {
    return this._onSelectToken;
  }

  set onSelectToken(callback: any) {
    this._onSelectToken = callback;
  }

  set chainId(value: number) {
    this._chainId = value;
    this.updateDataByChain();
  }

  get chainId(): number {
    return this._chainId || getChainId() || getDefaultChainId();
  }

  private initData = () => {
    this.renderTokenItems();
  }

  private updateDataByChain = async () => {
    this.renderTokenItems();
    this.updateButton();
  }

  private get tokenDataList(): ITokenObject[] {
    const tokenList = getTokenList(this.chainId).filter(token => token.address);
    return tokenList.map((token: ITokenObject) => {
      const tokenObject = { ...token };
      const nativeToken = ChainNativeTokenByChainId[this.chainId];
      if (token.symbol === nativeToken.symbol) {
        Object.assign(tokenObject, { isNative: true })
      }
      return tokenObject;
    }).sort(this.sortToken);
  }

  private sortToken = (a: any, b: any, asc?: boolean) => {
    if (a.balance != b.balance) {
      return asc ? (a.balance - b.balance) : (b.balance - a.balance);
    }
    if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) {
      return -1;
    }
    if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  private renderToken = (token: ITokenObject) => {
    const logoAddress = Assets.fullPath(getTokenIconPath(token, this.chainId));
    return (
      <i-hstack
        width="100%"
        minHeight="40px"
        verticalAlignment="center"
        padding={{ top: 6, bottom: 6, left: 8, right: 8 }}
        class="pointer token-item"
        onClick={() => this.onSelect(token)}
      >
        <i-vstack width="100%">
          <i-hstack gap={16} verticalAlignment="center">
            <i-image width={24} height={24} minWidth={16} minHeight={16} url={logoAddress} />
            <i-label caption={`${token.symbol} ${token.address ? `(${token.address})` : ''}`} font={{ size: '16px', color: Theme.colors.primary.contrastText, name: 'Proxima Nova' }} />
          </i-hstack>
        </i-vstack>
      </i-hstack>
    )
  }

  private renderTokenItems = async () => {
    if (!this.tokenList) return;
    this.tokenList.clearInnerHTML();
    if (this.tokenDataList.length) {
      const tokenItems = this.tokenDataList.map((token: ITokenObject) => this.renderToken(token));
      this.tokenList.append(...tokenItems);
    } else {
      this.tokenList.append(<i-label font={{ color: Theme.colors.primary.contrastText }} margin={{ top: 10, bottom: 16 }} class="text-center" caption="No tokens found" />)
    }
  }

  showModal = () => {
    if (!this.enabled) return;
    if (this.tokenSelectionModal.visible) {
      this.tokenSelectionModal.visible = false;
      return;
    }
    if (!this.tokenList.innerHTML) {
      this.initData();
    }
    this.tokenSelectionModal.visible = true;
  }

  onCloseModal = () => {
    this.tokenSelectionModal.visible = false;
  }

  private updateButton = (token?: ITokenObject) => {
    const btnToken = this.btnToken;
    if (!btnToken) return;
    try {
      let image: Image = btnToken.querySelector('i-image') as Image;
      if (!token) {
        token = this.tokenDataList?.find((v: ITokenObject) => (v.address && v.address == this.token?.address) || (v.symbol == this.token?.symbol))
      }
      if (!token) {
        btnToken.caption = 'Select Token';
        btnToken.font = { size: '16px', color: Theme.colors.primary.contrastText };
        if (image) {
          btnToken.removeChild(image);
        }
      } else {
        btnToken.caption = `${token.symbol} ${token.address ? `(${token.address})` : ''}`;
        btnToken.font = { size: '16px', color: Theme.colors.primary.contrastText };
        const logoAddress = Assets.fullPath(getTokenIconPath(token, this.chainId));
        if (!image) {
          image = new Image(btnToken, {
            width: 24,
            height: 24,
            marginRight: 10,
          });
          btnToken.prepend(image);
        }
        image.url = logoAddress;
      }
    } catch { }
  }

  private onSelect = (token: ITokenObject) => {
    this.token = token;
    this.onSelectToken(token);
    this.tokenSelectionModal.visible = false;
  }

  constructor(parent?: Container, options?: any) {
    super(parent, options);
  };

  init = async () => {
    this.initData();
    super.init();
    this.updateButton(this._token);
  }

  render() {
    return (
      <i-panel class="token-selection">
        <i-button
          id="btnToken"
          display="flex"
          width="100%"
          height={40}
          background={{ color: Theme.background.main }}
          font={{ size: '16px', color: Theme.colors.primary.contrastText }}
          padding={{ left: '1rem', right: '1rem' }}
          border={{ radius: 16 }}
          rightIcon={{ name: 'caret-down', fill: Theme.colors.primary.main, width: 16, height: 16 }}
          caption="Select Token"
          onClick={() => this.showModal()}
        />
        <i-modal id="tokenSelectionModal" showBackdrop={false} popupPlacement="bottom" width="100%">
          <i-grid-layout
            id="tokenList"
            columnsPerRow={1}
            margin={{ top: 8, bottom: 8 }}
          />
        </i-modal>
      </i-panel>
    )
  }
};