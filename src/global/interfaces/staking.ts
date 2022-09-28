enum StakingType {
  ERC20_Token,
  LP_Token,
  VAULT_Token
}

interface RewardOption {
  rewardAddress: string,
  tokenAddress: string,
  rate: string,
  rateDesc: string,
  rateTooltip?: string,
  isCommonStartDate?: boolean,
  referencePair?: string,
  APROption?: number,
  claimStartTime?: number
}

interface StakingCampaignOption {
  duration: string,
  stakingAddress: string,
  stakingDesc: string,
  stakingType: StakingType,
  rewardOptions: RewardOption[],
  decimalsOffset?: number,
}

interface StakingCampaignInfo {
  campaignName: string,
  campaignDesc: string,
  campaignPeriod: string,
  vestingPeriod: string,
  decimalsOffset?: number,
  getTokenURL?: string,
  getTokenURL2?: string,
  isSimplified?: boolean
  options: StakingCampaignOption[]
}

export {
  StakingType,
  RewardOption,
  StakingCampaignOption,
  StakingCampaignInfo
}