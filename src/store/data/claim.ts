export interface IClaimBasicInfo {
  campaignId: number;
  campaignName: string;
  campaignDesc: string;
  vestingPeriod: string;
  dripAddress: string;
}

export const investorClaimInfoByChainId: { [key: number]: IClaimBasicInfo[] } = {
  56: [
    {
      campaignId: 1,
      campaignName: 'Backer Claim',
      campaignDesc: 'Thank you for supporting OpenSwap as an early stage backer.',
      vestingPeriod: '24 Months',
      dripAddress: '0x0E1F5ae02eEEB1259f1DDb21D5091Ec22c2588eC'
    }
  ],
  97: [
    {
      campaignId: 1,
      campaignName: 'Backer Claim Test',
      campaignDesc: 'Thank you for supporting OpenSwap as an early stage backer.',
      vestingPeriod: '1 Week',
      dripAddress: '0xFc28280774317326229aCC97C830ad77348fa1eF'
    }
  ]
}