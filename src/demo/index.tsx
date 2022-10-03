import { customModule, Module, Panel, Container } from '@ijstech/components';
import { StakingBlock } from '@staking/staking';

@customModule
export class StakingEarn extends Module {
  private stakingElm: Panel;

  constructor(parent?: Container, options?: any) {
    super(parent, options);
  }

  async init() {
    super.init();
    const stakingUI = await StakingBlock.create({});
    const body = this.closest('body');
    if (body) {
      body.style.background = '#0c1234';
    }
    this.stakingElm.appendChild(stakingUI);
  }

  render() {
    return (
      <i-panel class="staking-rewards">
        <i-panel id="stakingElm" />
      </i-panel>
    )
  }
}
