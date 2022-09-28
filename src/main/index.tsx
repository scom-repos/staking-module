import {
  application,
  customElements,
  Control, Module,
  Styles,
  Panel,
  customModule,
  IEventBus,
  IModuleOptions,
  IModuleMenuItem,
  IHasDependencies,
  Label,
  Container
} from '@ijstech/components';
import styleClass from './index.css';
import { SITE_ENV, EventId } from '@staking/global';
import { getChainId, getDefaultChainId, getNetworkInfo, getSiteSupportedNetworks, isWalletConnected, setCurrentChainId, setDataFromSCConfig, setSiteEnv } from '@staking/store';
export { Nav } from './nav';
Styles.Theme.applyTheme(Styles.Theme.darkTheme);
@customModule
@customElements('openswap-main-launcher')
export class MainLauncher extends Module {
  private pageWrap: Panel;
  private $eventBus: IEventBus;
  private menuItems: IModuleMenuItem[];
  private siteEnv: string;
  private networkMsg: Label;

  constructor(parent?: Container, options?: IModuleOptions) {
    super(parent, options);
    this.classList.add(styleClass);
    this.$eventBus = application.EventBus;
  }

  override bindOnHashChange() {
    window.onhashchange = this.locationHashChanged.bind(this)
  }

  override initCustomData(options: any) {
    this.siteEnv = options.env || '';
    this.menuItems = options.menuItems || []
    setDataFromSCConfig(options)
    setSiteEnv(this.siteEnv)
    setCurrentChainId(getDefaultChainId())
  }

  override async handleLoadModuleCustom(module: Module) {
    if (this.pageWrap.contains(module)) module.style.display = 'initial'
    else this.pageWrap.append(module)
  }

  get isTestnet() {
    return this.siteEnv === SITE_ENV.TESTNET;
  }

  async locationHashChanged() {
    const path: string = location.hash.split("?")[0];
    if (this.currentPath === path) return;

    await this.hideModule(this.currentPath);
    this.currentPath = path;

    if (!this.pageWrap) {
      this.pageWrap = document.getElementById('pageWrap') as Panel;
    }

    if (!this.modulesMapper.has(path)) {
      this.networkMsg.visible = true;
      const TIMEOUT_TIME = 5000;
      const redirectTimeout = setTimeout(() => {
        window.location.replace("/#/swap");
      }, TIMEOUT_TIME);
      this.networkMsg.innerHTML = `<span>Page Not Available, redirect to swap page after ${TIMEOUT_TIME/1000} seconds.<br>If you are not redirected automatically, please click <a href='/#/swap' style='display: contents' onClick="clearTimeout(${redirectTimeout})">HERE</a>.</span>`;
    } else {
      super.locationHashChanged()
    }
  }

  async handleLoadModule(modulePath: string) {
    if (!this.checkTestingEnabled()) {
      if (!this.currentPath) {
        this.currentPath = location.hash.split("?")[0];
      }
      this.networkMsg.visible = true;
      this.networkMsg.caption = isWalletConnected() ? `This network <b>${getNetworkInfo(getChainId())?.name || ''}</b> is not supported!` : 'Please connect with your wallet!';
      this.hideModule(this.currentPath);
      return;
    }
    this.networkMsg.visible = false;
    super.handleLoadModule(modulePath);
  }

  reloadModule() {
    if (this.isTestnet) {
      const modulePath: string = this.modulesMapper.get(this.currentPath) ?? '';
      this.handleLoadModule(modulePath);
    }
  }

  checkTestingEnabled() {
    if (this.isTestnet) {
      const chainId = getChainId();
      const list = getSiteSupportedNetworks();
      return list.some((network) => network.chainId === chainId);
    }
    return true;
  }

  registerEvent() {
    this.$eventBus.register(this, EventId.IsWalletConnected, this.reloadModule);
    this.$eventBus.register(this, EventId.chainChanged, this.reloadModule);
  }

  init() {
    super.init();
    this.registerEvent();
  }

  render() {
    return (
      <i-vstack height="100vh">
        <openswap-main-nav menuItems={this.menuItems} height="auto" width="100%"></openswap-main-nav>
        <i-panel id="pageWrap" stack={{ grow: "1", shrink: "0" }}>
          <i-label id="networkMsg" class="network-msg"/>
        </i-panel>
      </i-vstack>
    )
  }
}

