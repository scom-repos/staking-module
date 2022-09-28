export interface GuaranteedBuyBackCampaign {
  projectName: string;
  providerAddress: string;
  pairAddress: string;
  offerIndex: number;
  description: string;
  projectUrl: string;
  tokenIn: string;
  tokenOut: string;
  idoPrice: number;
  idoAmount: number;
  idoDate: number;
  idoUrl: string;
  committedAmount: number;
  offeringType: string;
  marketPriceRef: string;
}

export const GuaranteedBuyBackCampaignInfo: {
  [chainId: number]: GuaranteedBuyBackCampaign[];
} = {
  // Binance Mainnet
  56: [{
    projectName: 'Impossible IDO Buyback - Ouro Finance (IDIA)',
    providerAddress: '0x04a2684a46934504a62bdf9947af166f01bf14f8',
    pairAddress: '0x9f1418f82B2927AcED3154d9e838fe5202952CAE',
    offerIndex: 2,
    description: 'This is the Buyback of OGS token with a buyback price at 50% of the IDO Price.',
    projectUrl: 'https://ouro.finance/',
    tokenIn: '0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89',
    tokenOut: '0x416947e6Fc78F158fd9B775fA846B72d768879c2',
    idoPrice: 0.0136,
    idoAmount: 8738029,
    idoDate: 1641499200000,
    idoUrl: 'https://app.impossible.finance/launchpad/project/OGS',
    committedAmount: 17006.78207,
    offeringType: 'IDO',
    marketPriceRef: "0xe6A97E7B5EB2FA72A8B4BeDaaf4CdE85E015DAbf" // OGS & BUSD Pair
  },
  {
    projectName: 'Impossible IDO Buyback - Ouro Finance',
    providerAddress: '0x04a2684a46934504a62bdf9947af166f01bf14f8',
    pairAddress: '0x785970CeEec60666b3E34671996604f4d59040dF',
    offerIndex: 4,
    description: 'This is the Buyback of OGS token with a buyback price at 50% of the IDO Price.',
    projectUrl: 'https://ouro.finance/',
    tokenIn: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    tokenOut: '0x416947e6Fc78F158fd9B775fA846B72d768879c2',
    idoPrice: 0.025,
    idoAmount: 29558444,
    idoDate: 1641499200000,
    idoUrl: 'https://app.impossible.finance/launchpad/project/OGS',
    committedAmount: 155488,
    offeringType: 'IDO',
    marketPriceRef: "0xe6A97E7B5EB2FA72A8B4BeDaaf4CdE85E015DAbf" // OGS & BUSD Pair
  }],
  // Binance Test Chain
  97: [
    {
      projectName: "OSwap IDO Buyback #1",
      providerAddress: "0xD2Ed0a2B019Ea79E917f897F68d3f8e295FB8019",
      pairAddress: "0x14CdA7e08E4A2c4648E0bFaa3A0693fD7FAFeeF9",
      offerIndex: 6,
      description:
        "This is the second IDO Buyback of OSWAP with a buyback price at <b>20%</b> of the IDO Price. <b>90%</b> of the IDO Amount will be covered on a <b>prorated basis</b>.",
      projectUrl: "https://doc.openswap.xyz/",
      // tokenIn: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
      tokenIn: "0xde9334c157968320f26e449331d6544b89bbd00f",
      tokenOut: "0x45eee762aaea4e5ce317471bda8782724972ee19",
      idoPrice: 0.04,
      idoAmount: 125000,
      idoDate: 1630339200000,
      idoUrl: "https://invest.impossible.finance/project/IDO1/OSWAP_UNLIMITED?tab=closed",
      committedAmount: 900,
      offeringType: "IDO",
      marketPriceRef: "0xb0094FfE387da1739FB95bAbCAF01B105FD0D887", // OSWAP & BUSD Pair
    },
    {
      projectName: "Impossible IDO Buyback - Ouro Finance",
      providerAddress: "0x18a6Ab8742BD46d27B9823c9767522f48ebF26b3",
      pairAddress: "0x14CdA7e08E4A2c4648E0bFaa3A0693fD7FAFeeF9",
      offerIndex: 8,
      description: "This is the Buyback of OGS token with a buyback price at 50% of the IDO Price.",
      projectUrl: "https://ouro.finance",
      tokenIn: "0xde9334c157968320f26e449331d6544b89bbd00f",//"0x416947e6fc78f158fd9b775fa846b72d768879c2",
      tokenOut: "0x45eee762aaea4e5ce317471bda8782724972ee19",//"0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89",
      idoPrice: 0.0136, // in tokenOut
      idoAmount: 10000,
      idoDate: 1630339200000,
      idoUrl: "https://app.impossible.finance/launchpad/project/OGS",
      committedAmount: 10000,
      offeringType: "IDO",
      marketPriceRef: "", // OSWAP & BUSD Pair
    }
  ]
};

export interface MilestoneInfo {
  campaignName: string;
  projectName: string;
  providerAddress: string;
  description: string;
  tokenForSale: string;
  purchase: MilestoneOffer;
  redeem: MilestoneOffer;
  buyback: MilestoneOffer;
}

interface MilestoneOffer {
  pairAddress: string;
  offerIndex: number;
  tokenIn: string;
  tokenOut: string;
}

export const MilestoneInfoByChainId: { [chainId: number]: MilestoneInfo[] } = {
  // Binance Mainnet
  56: [
    {
      campaignName: "IDIA",
      projectName: "IDIA Booster Queue Offering",
      providerAddress: "0x18DD9e6F8EA9cCaC88635209A6cf68648895a70b",
      description:
        "Impossible Finanace luanches Booster Queue on OpenSwap to offer a private sale of $25,000 worth mIDIA to investor. The bqIDIA1 token is redeemable to IDIA tokens 1 year after the sale and it is backed up by a 95% Buyback of the offer price.",
      tokenForSale: "28488",
      purchase: {
        pairAddress: "0x17e7Ad6EAE34E13F4015F9BDfaeE44274c3F1CD4",
        offerIndex: 1,
        tokenIn: "0x46c5BC0656301c3DFb8EF8fc44CfBF89ef121348",
        tokenOut: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      },
      redeem: {
        pairAddress: "0xDAc37424B823A5D13995A7296984e4B3f96acC3C",
        offerIndex: 1,
        tokenIn: "0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89",
        tokenOut: "0x46c5BC0656301c3DFb8EF8fc44CfBF89ef121348",
      },
      buyback: {
        pairAddress: "0x17e7Ad6EAE34E13F4015F9BDfaeE44274c3F1CD4",
        offerIndex: 2,
        tokenIn: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        tokenOut: "0x46c5BC0656301c3DFb8EF8fc44CfBF89ef121348",
      },
    },
  ],
  // Binance Test Chain
  97: [
    {
      campaignName: "CrossChain Bridge",
      projectName: "OpenSwap Demo 1",
      providerAddress: "0x069E76f6FF91000BEf420D78590B6C1309349ec9",
      description:
        "OpenSwap key Booster - CrossChain Bridge is going to luanch in late March. Buy booster tokens at a discounted price in advance to earn more!",
      tokenForSale: "20000",
      purchase: {
        pairAddress: "0xE8b5ca89d9a43901087A30319a14De83B5b3Ccd8",
        offerIndex: 4,
        tokenIn: "0xc2c76387eb1cd15f2f55d2463b5aad6fca062eb1",
        tokenOut: "0xde9334c157968320f26e449331d6544b89bbd00f",
      },
      redeem: {
        pairAddress: "0x9cF8a74fC451c02ef2d0Faa2f466Ac6b3629687f",
        offerIndex: 5,
        tokenIn: "0x45eee762aaea4e5ce317471bda8782724972ee19",
        tokenOut: "0xc2c76387eb1cd15f2f55d2463b5aad6fca062eb1",
      },
      buyback: {
        pairAddress: "0xE8b5ca89d9a43901087A30319a14De83B5b3Ccd8",
        offerIndex: 2,
        tokenIn: "0xde9334c157968320f26e449331d6544b89bbd00f",
        tokenOut: "0xc2c76387eb1cd15f2f55d2463b5aad6fca062eb1",
      },
    },
  ],
};
