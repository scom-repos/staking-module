export interface FlipCampaignInfo {
  contractAddress: string;
  tokenAddress: string;
  tagline: string;
  secondTagline: string;
  description: string;
  confirmMessage: string;
  targetAmount: number;
  targetDate: number;
  rewardAmount: number;
}

export const FlipCampaignInfoByChainId: {
  [chainId: number]: FlipCampaignInfo;
} = {
  56: {
    contractAddress: "0x7eB8a5079AeF1cE3cBC9Bc9f0F1EF0F0E4D03c00",
    tokenAddress: "0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93",
    tagline: "Flip OSWAP to AVAX",
    secondTagline: "Help us expand OSWAP presence on AVAX!",
    description:
      "We are offering a weekly flip for <b>OSWAP</b> holders who would like to move their tokens from <b>BSC</b> to <b>AVAX</b>. Lock your tokens into the contract and your tokens will be flipped over to <b>AVAX</b> on the flipping date specified below. Note that you will receive <b>OSWAP</b> tokens on <b>AVAX</b> with the same address you used to lock the tokens.",
    confirmMessage:
      "Your OSWAP tokens will be flipped to Avalanche Mainnet on <b>Thursday</b>. You <b>WILL NOT</b> be able to withdraw these tokens once you proceed.",
    targetAmount: 700000,
    targetDate: 1649289600000,
    rewardAmount: 5,
  },
  97: {
    contractAddress: "0x13538c92fF1Fa286eb2c42a4512258E081AAD9de",
    tokenAddress: "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
    tagline: "Flip OSWAP to AVAX",
    secondTagline: "Help us expand OSWAP presence on AVAX!",
    description:
      "We are offering a weekly flip for <b>OSWAP</b> holders who would like to move their tokens from <b>BSC</b> to <b>AVAX</b>. Lock your tokens into the contract and your tokens will be flipped over to <b>AVAX</b> on the flipping date specified below. Note that you will receive <b>OSWAP</b> tokens on <b>AVAX</b> with the same address you used to lock the tokens.",
    confirmMessage:
      "Your OSWAP tokens will be flipped to Avalanche Fuji Testnet on <b>Thursday</b>. You <b>WILL NOT</b> be able to withdraw these tokens once you proceed.",
    targetAmount: 700000,
    targetDate: 1649289600000,
    rewardAmount: 5,
  },
  43113: {
    contractAddress: "0x6f4678238e308f78b114ac9a80c9059B28E001a3",
    tokenAddress: "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
    tagline: "Flip OSWAP to BSC Testnet",
    secondTagline: "Help us expand OSWAP presence on BSC!",
    description:
      "We are offering a weekly flip for <b>OSWAP</b> holders who would like to move their tokens from <b>AVAX</b> to <b>BSC</b>. Lock your tokens into the contract and your tokens will be flipped over to <b>BSC</b> on the flipping date specified below. Note that you will receive <b>OSWAP</b> tokens on <b>BSC</b> with the same address you used to lock the tokens.",
    confirmMessage:
      "Your OSWAP tokens will be flipped to BSC Testnet on <b>Thursday</b>. You <b>WILL NOT</b> be able to withdraw these tokens once you proceed.",
    //properties below are not used anymore
    targetAmount: 700000,
    targetDate: 1649289600000,
    rewardAmount: 5,
  },
  43114: {
    contractAddress: "0xb1Cb1EC68dF60E098Cda4e8aF6760033188101E2",
    tokenAddress: "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
    tagline: "Flip OSWAP to BSC",
    secondTagline: "Help us expand OSWAP presence on BSC!",
    description:
      "We are offering a weekly flip for <b>OSWAP</b> holders who would like to move their tokens from <b>AVAX</b> to <b>BSC</b>. Lock your tokens into the contract and your tokens will be flipped over to <b>BSC</b> on the flipping date specified below. Note that you will receive <b>OSWAP</b> tokens on <b>BSC</b> with the same address you used to lock the tokens.",
    confirmMessage:
      "Your OSWAP tokens will be flipped to BSC Mainnet on <b>Thursday</b>. You <b>WILL NOT</b> be able to withdraw these tokens once you proceed.",
    //properties below are not used anymore
    targetAmount: 700000,
    targetDate: 1649289600000,
    rewardAmount: 5,
  },
};
