import { BigNumber } from "@ijstech/eth-wallet";
import { StakingCampaignInfo, StakingType } from "@staking/global";

export const StakingCampaignInfoByChainId: { [key: number]: StakingCampaignInfo[] } = {
	1: [
	],
	// Kovan
	42: [
	],
	// Binance Mainnet
	56: [
		{
			campaignName: 'OpenSwap 1st Anniversary<br>Birthday Staking Campaign',
			campaignDesc: 'Wow, Time Flies.. Let\'s Go Bridge Soon<br>Stake Now!',
			campaignPeriod: '13 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/swap`,
			options: [{
				duration: '14',
				stakingAddress: '0xd2eD1a54Ea2c0621DfE3EB3375a53230138EA0F3',
				stakingDesc: 'Stake OSWAP, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x0616bf20ceEd4D18cD6cc7C327c21a681A5C3271',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.03",
					rateDesc: '1 OSWAP : 0.03 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0x3826C16625771f670e5a56271B2aB2b8e12B9e20',
				stakingDesc: 'Stake OSWAP, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x83ff3E08C999684FC936cD12859Bdd6B0EbE5E7f',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.1",
					rateDesc: '1 OSWAP : 0.1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'vtUSDT Bridge Vault\nFixed Staking',
			campaignDesc: 'Help fund OpenSwap Bridge Vault prior to mainnet release and earn lucrative rewards!',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '45',
				stakingAddress: '0x2Bd4b72E8643E804f5C0a2Bd2751c15028012480',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x4aE47FED2606AcfaEe74B822ea026eA76123BF1E',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "3.938",
					rateDesc: '1 vtUSDT : 3.938 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x31a88b923730Ad5b67140C568593Be4BA3FF8bC9',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xe3b45691f4545319E3ac00382E57F671eB8b5547',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "9.453",
					rateDesc: '1 vtUSDT : 9.453 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OSWAP Bridge Vault Program BSC #1',
			campaignDesc: 'Stake vtOSWAP, Earn OSWAP',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '14',
				stakingAddress: '0xC47eB8b2105e1a3Fc95c551e4858Ec93290a28Fb',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x4cbF6100346Dd614859A73EDFcc162f082DC7FDF',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "0.0058",
					rateDesc: '1 vtOSWAP : 0.0058 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0xD61bBE686CdF488c5Cc9D1c7E9EDE565F5448d6b',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x73Ebb51cAa593b89505303F3e34A61D8E29a2b2F',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "0.015",
					rateDesc: '1 vtOSWAP : 0.015 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Stake OAX, Earn OSWAP',
			campaignDesc: 'Stake OAX and earn $OSWAP rewards!',
			campaignPeriod: '2 Months',
			vestingPeriod: '',
			isSimplified: true,
			getTokenURL2: 'https://www.bnbchain.world/en/bridge',
			options: [{
				duration: '45',
				stakingAddress: '0x0a05FA54c49ff751bBeB7BD69BdfF26dB8e838D5',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0xaa40E2b744F0a8c2Dc28acdAbbF5754303b05410',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "0.25",
					rateDesc: '4 OAX : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0xb7e5d9cDddA645dDAb37a5F72D25cf492857a22F',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x7a5E13ed54e62aA0E1d6B851d5afF841b36d756E',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "1",
					rateDesc: '1 OAX : 1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OAX Liquidity Booster Reward Program',
			campaignDesc: 'Stake OAX/BNB LP tokens and earn $OSWAP rewards!',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			getTokenURL: `https://openswap.xyz/#/pool/add`,
			options: [{
				duration: '14',
				stakingAddress: '0x7106727266E46B8c8BD45C0b733187603Aa01946',
				stakingDesc: 'Stake OAX/BNB LP and Earn $OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0x8c6162B0fA876941C9146708D8391dDA17caE5d0',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "2",
					rateDesc: '1 LP : 2 OSWAP',
					referencePair: '0x0DBCe9e7b634B5eAAAb483194CC3224Fde9624CF'
				}]
			}]
		},
		{
			campaignName: 'Thanks IDIA for fueling our launch',
			campaignDesc: 'Stake IDIA/BUSD LP tokens and earn $IDIA and $OSWAP rewards!',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			getTokenURL: 'https://swap.impossible.finance/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89',
			options: [{
				duration: '14',
				stakingAddress: '0x547C8B68Cb36410FFDceE6Ad4bA0c64FD21085Bb',
				stakingDesc: 'Stake IDIA/BUSD LP, Earn IDIA and OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0xe4Fee53a3ea02D0cd6B24D805E532330497f72B9',
					tokenAddress: '0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89',
					rate: "0.044",
					rateDesc: '1 LP : 0.044 IDIA',
					referencePair: '0x154F8A1c77Cb1Bb9C3C1c6e6B15bbA8A23eC77bb'
				},
				{
					rewardAddress: '0xb1Cb1EC68dF60E098Cda4e8aF6760033188101E2',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "0.17",
					rateDesc: '1 LP : 0.17 OSWAP',
					APROption: 1, //Use WETH pair (WETH/OSWAP)
					referencePair: '0x6aa3ec903176df556e8d8473a002b6a807399351'
				}]
			}]
		},
		{
			campaignName: 'Happy Birthday $OSWAP',
			campaignDesc: 'Stake OSWAP/BNB LP tokens and earn $OSWAP rewards',
			campaignPeriod: '6 Days',
			vestingPeriod: '180 Days for OSWAP',
			getTokenURL: `https://openswap.xyz/#/pool/add`,
			options: [{
				duration: '14',
				stakingAddress: '0xBa235a0Cd029D7Ec8890CA4eC636d012aE8D65CA',
				stakingDesc: 'Stake OSWAP/BNB LP and Earn $OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [
					{
						rewardAddress: '0xB0a018FcB5cD780c209E58ba621bD48ED1657cF9',
						tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
						rate: '5',
						rateDesc: '1 LP : 5 OSWAP',
						referencePair: '0x6aa3ec903176df556e8d8473a002b6a807399351'
					}]
			}]
		},
		{
			campaignName: 'Congrats Impossible! IF-BUSD Staking',
			campaignDesc: 'To celebrate the IDIA launch, we are offering IDIA+OSWAP rewards for Liquidity Providers of the IF/BUSD pair on IFSwap <a href="https://swap.impossible.finance/" class="text-purple-200" target="_blank">(https://swap.impossible.finance/)</a>.',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			getTokenURL: 'https://swap.impossible.finance/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xB0e1fc65C1a741b4662B813eB787d369b8614Af1',
			options: [{
				duration: '7',
				stakingAddress: '0xD8C1c018DF55ca4A37975a0883A686876750348A',
				stakingDesc: 'Stake IF/BUSD LP, Earn IDIA and OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0x8Ae51f1A62c4Bc0715C367bFe812c53e583aEE2f',
					tokenAddress: '0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89',
					rate: "0.227272727272727272", //25/110
					rateDesc: '1 LP : 0.227 IDIA',
					referencePair: '0x154F8A1c77Cb1Bb9C3C1c6e6B15bbA8A23eC77bb'
				},
				{
					rewardAddress: '0xa083B9B2adE0B235176ee4227Bc50f459fD15700',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					//rate: "0.6990909090909090909", //76.9/110
					rate: new BigNumber(76.9).div(110).shiftedBy(18).dp(0, BigNumber.ROUND_DOWN).shiftedBy(-18).toFixed(),
					rateDesc: '1 LP : 0.699 OSWAP',
					claimStartTime: 1630416600
				}]
			}]
		},
		{
			campaignName: 'Congrats Impossible! IDIA-BUSD Staking',
			campaignDesc: 'To celebrate the IDIA launch, we are offering IDIA+OSWAP rewards for Liquidity Providers of the IDIA/BUSD pair on IFSwap <a href="https://swap.impossible.finance/" class="text-purple-200" target="_blank">(https://swap.impossible.finance/)</a>.',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			getTokenURL: 'https://swap.impossible.finance/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89',
			options: [{
				duration: '7',
				stakingAddress: '0xcd3e984cdE988C24d5009296e4eDE14b89aE6e29',
				stakingDesc: 'Stake IDIA/BUSD LP, Earn IDIA and OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0x07C72F4ECfC3a5Abac8540a3E3000AD58403348D',
					tokenAddress: '0x0b15ddf19d47e6a86a56148fb4afffc6929bcb89',
					rate: "0.0193333333333333333", //29/1500
					rateDesc: '1 LP : 0.0193 IDIA',
					referencePair: '0x154F8A1c77Cb1Bb9C3C1c6e6B15bbA8A23eC77bb'
				},
				{
					rewardAddress: '0x84DD0bde1A040989dfC5C23C9644a691505880D3',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					//rate: "0.0594666666666666666", //89.2/1500
					rate: new BigNumber(89.2).div(1500).shiftedBy(18).dp(0, BigNumber.ROUND_DOWN).shiftedBy(-18).toFixed(),
					rateDesc: '1 LP : 0.0595 OSWAP',
					claimStartTime: 1630416600
				}]
			}]
		},
		{
			campaignName: 'Thank you Impossible Finance',
			campaignDesc: 'Welcome campaign for Impossible Finance community.',
			campaignPeriod: '29 Days',
			vestingPeriod: '180 Days',
			options: [{
				duration: '45',
				stakingAddress: '0x77B34ceDe3214769F7A50db12F8489766E9F741c',
				stakingDesc: 'Stake IF, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x4710f86E0B87854F955295Eb555f8cd2a546365f',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: new BigNumber(1).div(3).toFixed(),
					rateDesc: '3 IF : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0xcD2A608Ec4B6526407D2830543dC944CF22cc663',
				stakingDesc: 'Stake IF, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x2b14c0Eab5b4Baa6f75FA9Afb3C07bfA1316Ff47',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: '1',
					rateDesc: '1 IF : 1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Thank you Coin98',
			campaignDesc: 'Welcome campaign for Coin98 community.',
			campaignPeriod: '29 Days',
			vestingPeriod: '180 Days',
			options: [{
				duration: '45',
				stakingAddress: '0xAb8a4241FBF3A4CD1783400a3D9dD8f117CDCC46',
				stakingDesc: 'Stake C98, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0xe935d589550B5fe6A4FBcb203fE1B0ab74441Eec',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: new BigNumber(1).div(5).toFixed(),
					rateDesc: '5 C98 : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0xEfeAD058e3a16272FD61D978e54D6c7039ae828E',
				stakingDesc: 'Stake C98, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x174D975e3f99d865C5383F931F8eb84B0fA8Ed8e',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: new BigNumber(3).div(5).toFixed(),
					rateDesc: '5 C98 : 3 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'We Love OAX 3000',
			campaignDesc: 'Sweet campaign to show our sweet love to OAX.',
			campaignPeriod: '29 Days',
			vestingPeriod: '180 Days',
			options: [{
				duration: '45',
				stakingAddress: '0x823bE4d972ab2051ecCedd9787cA413a790B026f',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x646C5e3Ec40706372243accF2D457D9162553685',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: new BigNumber(1).div(3).toFixed(),
					rateDesc: '3 OAX : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0xb7CAd80FEf493B38f80179e54e212D2c4A188856',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x20148CA5ceCC521E4D952213Af53699bDdE9025f',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: '1',
					rateDesc: '1 OAX : 1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Thank You OAX',
			campaignDesc: 'Welcome campaign for new users.',
			campaignPeriod: '30 Days',
			vestingPeriod: '24 Months',
			options: [{
				duration: '30',
				stakingAddress: '0xfc78B1245C4D7995cAA3FEc41b7554D328c862Fc',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x739f0BBcdAd415127FE8d5d6ED053e9D817BdAdb',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: '2',
					rateDesc: '1 OAX : 2 OSWAP',
					isCommonStartDate: true
				}]
			},
			{
				duration: '60',
				stakingAddress: '0xCA883c07447305f5e6f0FE7eec1c4617414f97b2',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x629cF4235c0f6b9954698EF0aF779b9502e4853E',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: '6',
					rateDesc: '1 OAX : 6 OSWAP',
					isCommonStartDate: true
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x6a2e8Dc9cA6a8e8b5da204d6fF69215C01EC7A95',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0xb740f3B46e76f0Ccaa1f55056192263b2671E902',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: '10',
					rateDesc: '1 OAX : 10 OSWAP',
					isCommonStartDate: true
				}]
			}]
		}
	],
	// Binance Test Chain
	97: [
		{
			campaignName: 'Stake OAX, Earn OSWAP',
			campaignDesc: 'Stake OAX and earn $OSWAP rewards!',
			campaignPeriod: '2 Months',
			vestingPeriod: '',
			isSimplified: true,
			getTokenURL2: 'https://www.bnbchain.world/en/bridge',
			options: [{
				duration: '45',
				stakingAddress: '0x7124a5d45ABEd9649c749310C6b7392519b16391',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x5DF37c9DaE55B61F58797D1E0747242f09926209',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: "0.25",
					rateDesc: '4 OAX : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x51e3C86B8b5916e1A1f656C4C144d8FD756aac64',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x42A4B223748611df8dcc90D520d351bE98510cD5',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: "1",
					rateDesc: '1 OAX : 1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OAX Liquidity Booster Reward Program',
			campaignDesc: 'Stake OAX/BNB and earn $OSWAP rewards!',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			options: [{
				duration: '14',
				stakingAddress: '0xC3aC5c30b64FFA3E33007350ef08d532a2743f02',
				stakingDesc: 'Stake OAX/BNB LP, Earn OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0x9D5435a2891af7fECb355f87e4a834903B5cafd0',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: "2",
					rateDesc: '1 LP : 2 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'IDIA-BUSD Staking',
			campaignDesc: '',
			campaignPeriod: '6 Days',
			vestingPeriod: '180 Days for OSWAP',
			getTokenURL: 'https://swap.impossible.finance/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89',
			options: [{
				duration: '14',
				stakingAddress: '0xa1d58FBF715B824a85C6f6A59cA647d519a0c3Ce',
				stakingDesc: 'Stake IDIA/BUSD LP, Earn IDIA and OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0x3f12a06594614849E8A430BeB712a2622509d222',
					tokenAddress: '0x52423b7f0769d0365ebdd79342ce167eb9c29ae2',
					rate: "0.044",
					rateDesc: '1 LP : 0.044 IDIA'
				},
				{
					rewardAddress: '0xEDfB4a1AECbB864DD3862C5AC3EbF83ea1279760',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: "0.17",
					rateDesc: '1 LP : 0.17 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OSWAP/BNB Staking',
			campaignDesc: '',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			options: [{
				duration: '7',
				stakingAddress: '0xb092266b13969ab29d362c67c73a830b2f30148e',
				stakingDesc: 'Stake OSWAP/BNB LP, Earn OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [
					{
						rewardAddress: '0xfA70C3FE8Cc49521f4c713f2B150e32f79bA13ad',
						tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
						rate: '5',
						rateDesc: '1 LP : 5 OSWAP',
						referencePair: '0xb0094ffe387da1739fb95babcaf01b105fd0d887'
					}]
			}]
		},
		{
			campaignName: 'Congrats Impossible! IF-BUSD Staking',
			campaignDesc: 'To celebrate the IDIA launch, we are offering IDIA+OSWAP rewards for Liquidity Providers of the IF/BUSD pair on IFSwap <a href="https://swap.impossible.finance/" class="text-purple-200" target="_blank">(https://swap.impossible.finance/)</a>.',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			options: [{
				duration: '7',
				stakingAddress: '0xAc969F404c61BBF369b61505AeF951dAf2827d7E',
				stakingDesc: 'Stake IF/BUSD LP, Earn IDIA and OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0x20a2F8F8db8D28b34E767EEA27776F1eDb27a249',
					tokenAddress: '0x52423b7f0769d0365ebdd79342ce167eb9c29ae2',
					rate: "0.227272727272727272", //25/110
					rateDesc: '(50.09% APR) 1 LP : 0.227 IDIA',
					rateTooltip: 'APY is based on the token price as of August 19.'
				},
				{
					rewardAddress: '0x2Cf36cC2656993347c3280c95b232E7e8Eef7ed6',
					//rewardAddress: '0x97CA709bb91Dcb6EE7832F740b38A4bF6605E902', 
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					//rate: "0.6990909090909090909", //76.9/110
					rate: new BigNumber(76.9).div(110).shiftedBy(18).dp(0, BigNumber.ROUND_DOWN).shiftedBy(-18).toFixed(),
					rateDesc: '1 LP : 0.699 OSWAP',
					claimStartTime: 1630416600
				}]
			}]
		},
		{
			campaignName: 'Congrats Impossible! IDIA-BUSD Staking',
			campaignDesc: 'To celebrate the IDIA launch, we are offering IDIA+OSWAP rewards for Liquidity Providers of the IDIA/BUSD pair on IFSwap <a href="https://swap.impossible.finance/" class="text-purple-200" target="_blank">(https://swap.impossible.finance/)</a>.',
			campaignPeriod: '7 Days',
			vestingPeriod: '180 Days for OSWAP',
			options: [{
				duration: '7',
				stakingAddress: '0x88D4eE8C76228Ae95c49Fd21bEA25666b02B8e6e',
				stakingDesc: 'Stake IDIA/BUSD LP, Earn IDIA and OSWAP',
				stakingType: StakingType.LP_Token,
				rewardOptions: [{
					rewardAddress: '0x54f07B180E2aB18fCDED1BA60D90C2CC05454812',
					tokenAddress: '0x52423b7f0769d0365ebdd79342ce167eb9c29ae2',
					rate: "0.0193333333333333333", //29/1500
					rateDesc: '(51.03% APR) 1 LP : 0.0193 IDIA',
					rateTooltip: 'APY is based on the token price as of August 19.'
				},
				{
					rewardAddress: '0x0d92ec679BbaB83e0c1839e82fc4a400c2ee6E5F',
					//rewardAddress: '0x7A2379Ec9ef06319c2B266fA13fFf90FAc71d815',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					//rate: "0.0594666666666666666", //89.2/1500
					rate: new BigNumber(89.2).div(1500).shiftedBy(18).dp(0, BigNumber.ROUND_DOWN).shiftedBy(-18).toFixed(),
					rateDesc: '1 LP : 0.0595 OSWAP',
					claimStartTime: 1630416600
				}]
			}]
		},
		{
			campaignName: 'Thank you Impossible Finance',
			campaignDesc: 'Welcome campaign for Impossible Finance community.',
			campaignPeriod: '29 Days',
			vestingPeriod: '180 Days',
			options: [{
				duration: '45',
				stakingAddress: '0x37CfDAD1DC43B2d558C78A073408228dd006Ca21',
				stakingDesc: 'Stake IF, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x6127A08a2Adc8ee56611c92Ff3f46A8b78C1C25F',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: new BigNumber(1).div(3).toFixed(),
					rateDesc: '3 IF : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x824beA6bB0EB867e8383e4DD50D5eb315431f53a',
				stakingDesc: 'Stake IF, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0xfA527c0FF45EcFD052944CbB7C9c431005274850',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: '1',
					rateDesc: '1 IF : 1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Thank you Coin98',
			campaignDesc: 'Welcome campaign for Coin98 community.',
			campaignPeriod: '29 Days',
			vestingPeriod: '180 Days',
			options: [{
				duration: '45',
				stakingAddress: '0xF4c1FF0Bc4049694137098121df4830E4E32A7B9',
				stakingDesc: 'Stake C98, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0xc51ab6Cf26E762Af0f0f9515352f3f4904948b12',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: new BigNumber(1).div(5).toFixed(),
					rateDesc: '5 C98 : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x1913D73eD3b5eF80669c132734cD23Aed2890B13',
				stakingDesc: 'Stake C98, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x25baBD786b14dc375baEC8a7AEcEE1226B08EfCd',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: new BigNumber(3).div(5).toFixed(),
					rateDesc: '5 C98 : 3 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'We Love OAX 3000',
			campaignDesc: 'Sweet campaign to show our sweet love to OAX.',
			campaignPeriod: '30 Days',
			vestingPeriod: '180 Days',
			options: [{
				duration: '45',
				stakingAddress: '0x4d45113786A4Db463D04d48D08f6c58E3201f9d9',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0xEF4Faa48Ee32E2D47503a821eb7E8607D52489AC',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: new BigNumber(1).div(3).toFixed(),
					rateDesc: '3 OAX : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x0f8A454299E52CC8B68ad6cF63c7152851268D62',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x403dB269a2CeeD6B94905595fa28b40CdD1A2F87',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: '1',
					rateDesc: '1 OAX : 1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Thank You OAX',
			campaignDesc: 'Welcome campaign for new users.',
			campaignPeriod: '30 Days',
			vestingPeriod: '24 Months',
			options: [{
				duration: '30',
				stakingAddress: '0x4565945F050a60abA82Eee0aFE8ffe8201974303',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x70AdFB7eB23ce76Df6F5717d319A7c5D444808eC',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: '2',
					rateDesc: '1 OAX : 2 OSWAP',
					isCommonStartDate: true
				}]
			},
			{
				duration: '60',
				stakingAddress: '0x1936e51BfB42a9810fB6b53fa9aE5EA51e9DF7e2',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x226021E3582c89eF9a338be069dEcFD43acF0269',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: '6',
					rateDesc: '1 OAX : 6 OSWAP',
					isCommonStartDate: true
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x10835a580a0DED282E442Fd9e40C7b9234295020',
				stakingDesc: 'Stake OAX, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x4849dd61138b6ddDCC5F400c8124c6A60Bbd65c2',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: '10',
					rateDesc: '1 OAX : 10 OSWAP',
					isCommonStartDate: true
				}]
			}]
		},
		{
			campaignName: 'Stake vtUSDT, Earn OSWAP',
			campaignDesc: 'Stake vtUSDT and earn $OSWAP rewards!',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			options: [{
				duration: '45',
				stakingAddress: '0x8A80257103D23eAd25CfE1A94E74297D8D595749',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x425170235Cb78C65204aA648C7842b6D72C43694',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: "3.938",
					rateDesc: '1 vtUSDT : 3.938 OSWAP' //'0.2539 vtUSDC : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0xaA829366d41011C9Fe71FE2e3480F1506e504140',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x035648056FeC694e419354a0Fc9349b0CC9354b3',
					tokenAddress: '0x45eee762aaea4e5ce317471bda8782724972ee19',
					rate: "9.453",
					rateDesc: '1 vtUSDT : 9.453 OSWAP' //'0.1058 vtUSDC : 1 OSWAP'
				}]
			}]
		}
	],
	1337: [],
	43113: [
		{
			campaignName: 'OpenSwap 1st Anniversary<br>Birthday Staking Campaign',
			campaignDesc: 'Wow, Time Flies.. Let\'s Go Bridge Soon<br>Stake Now!',
			campaignPeriod: '13 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/swap`,
			options: [{
				duration: '14',
				stakingAddress: '0x8b57B7A5DA3a0f16928483222FAD5402Fb7cA2d2',
				stakingDesc: 'Stake OSWAP, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0xd7B24B5a4E9C97BF415A2B2B3BaC67A42bcEbf76',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.03",
					rateDesc: '1 OSWAP : 0.03 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0x3d22Ca8Ecc15C9aEb5Df75fd596D9c0FB6a7e33A',
				stakingDesc: 'Stake OSWAP, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x3dEaba228f1FF361CCDA2C31Cf7503CA59422a2B',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.1",
					rateDesc: '1 OSWAP : 0.1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Upgraded OSWAP Vault',
			campaignDesc: 'Thanks for migrating your OSWAP to our upgraded bridge vault! Please help fund the new OSWAP vault prior to mainnet release and earn lucrative rewards.',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '14',
				stakingAddress: '0x96a4e389F4534B5B06e9BeF6cbfE25f2B13343eF',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xb4726C80A5dA7d45010C63Bf4e838c4105Fc7869',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.0058",
					rateDesc: '1 vtOSWAP : 0.0058 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0xD3a63AcBeB9E45DB42d6875fd4EA9B8264A03B48',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x495DAc474830823bE850bc2E30f73986895C0F43',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.015",
					rateDesc: '1 vtOSWAP : 0.015 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'vtUSDT Bridge Vault\nFixed Staking',
			campaignDesc: 'Help fund OpenSwap Bridge Vault prior to mainnet release and earn lucrative rewards!',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '45',
				stakingAddress: '0xb0779f64Ef60572dcd74FE475BEAaD22F2B49fa7',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				decimalsOffset: 12,
				rewardOptions: [{
					rewardAddress: '0xb0779f64Ef60572dcd74FE475BEAaD22F2B49fa7',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "5.01",
					rateDesc: '1 vtUSDT : 5.01 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0xb0779f64Ef60572dcd74FE475BEAaD22F2B49fa7',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				decimalsOffset: 12,
				rewardOptions: [{
					rewardAddress: '0x7Bb92118d75fE32A7c827A579F2141e37d42120B',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "12.027",
					rateDesc: '1 vtUSDT : 12.027 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OSWAP Bridge Vault Program 2',
			campaignDesc: 'Stake vtOSWAP, Earn OSWAP',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '14',
				stakingAddress: '0x62F70C0d57df2694F4D13bd7cF51668Dff3b3748',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x6403B9E4BADF3F96Cfe82cE19A0F97785ac458d5',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.0058",
					rateDesc: '1 vtOSWAP : 0.0058 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0xcDB0949130a3329Fa66553b3913081FC8E35ca7f',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xc32E2b332Cb5E77F02DDb95a051fE084a4D4a23F',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.015",
					rateDesc: '1 vtOSWAP : 0.015 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OSWAP Bridge Vault Program 1',
			campaignDesc: 'Stake OSWAP Vault Token, Earn OSWAP',
			campaignPeriod: '3 Days',
			vestingPeriod: '180 Days',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '3',
				stakingAddress: '0x7d78B00c89123613fe9226C80c131F565daAb7E6',
				stakingDesc: 'Stake OSWAP Vault Token, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xe25e8533FBe3E725B3baE172d3aBAB0887ccD63E',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.001",
					rateDesc: '1 vtOSWAP : 0.001 OSWAP'
				}]
			},
			{
				duration: '7',
				stakingAddress: '0x6562D7b754f695b1C70641fdcdb56615A363D394',
				stakingDesc: 'Stake OSWAP Vault Token, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x492448Df2a9c9163F0d72050E5De511c5CF19801',
					tokenAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
					rate: "0.003",
					rateDesc: '1 vtOSWAP : 0.003 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Stake vtUSDC, Earn OSWAP',
			campaignDesc: 'Stake vtUSDC and earn $OSWAP rewards!',
			campaignPeriod: '90 Days',
			vestingPeriod: '',
			options: [{
				duration: '45',
				stakingAddress: '0x32ADAa900DEd1f2D9d3ae2Ec4F6e27220A918C8F',
				stakingDesc: 'Stake vtUSDC, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x557EF6a7fc628eB9f399DAAe4b89EB2f8a443154',
					tokenAddress: '0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c',
					rate: `${new BigNumber("5010000000000").shiftedBy(18 - 6)}`, //5.01*10^12 
					rateDesc: '1 vtUSDC : 5.01 OSWAP' //'0.1996 vtUSDC : 1 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x4b38037139Ddb05C3B091093646A9f63F6D85E28',
				stakingDesc: 'Stake vtUSDC, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xEB94cc393530b19B293b97b40dc97fD39072b6A6',
					tokenAddress: '0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c',
					rate: `${new BigNumber("12027000000000").shiftedBy(18 - 6)}`, //12.027*10^12
					rateDesc: '1 vtUSDC : 12.027 OSWAP' //'0.0831 vtUSDC : 1 OSWAP'
				}]
			}]
		}
	],
	43114: [
		{
			campaignName: 'OpenSwap 1st Anniversary<br>Birthday Staking Campaign',
			campaignDesc: 'Wow, Time Flies.. Let\'s Go Bridge Soon<br>Stake Now!',
			campaignPeriod: '13 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/swap`,
			options: [{
				duration: '14',
				stakingAddress: '0x425c590c442d2E8bC3aB01dEA1db58f095466D92',
				stakingDesc: 'Stake OSWAP, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x4290566C6FF4b453aaeaEC58cd174B4146c86016',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.03",
					rateDesc: '1 OSWAP : 0.03 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0x4800b7705ba56d6Da4BB8EA26124A395c28DcAA1',
				stakingDesc: 'Stake OSWAP, Earn OSWAP',
				stakingType: StakingType.ERC20_Token,
				rewardOptions: [{
					rewardAddress: '0x06C62Fc9F1EF0D3897A7263d9C4915ce2726FFb1',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.1",
					rateDesc: '1 OSWAP : 0.1 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'Upgraded OSWAP Vault',
			campaignDesc: 'Thanks for migrating your OSWAP to our upgraded bridge vault! Please help fund the new OSWAP vault prior to mainnet release and earn lucrative rewards.',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '14',
				stakingAddress: '0x83F85C85518aDF02C5cc67c8059F6C60584d154D',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x96F8F857Fb1698a5ef569A142a4363275a8eB985',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.0058",
					rateDesc: '1 vtOSWAP : 0.0058 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0x6D33E3f5dC830f34257308216ce9E6fFb7Ff2C85',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xAaBd6fd6c57bd5659d489A383DE268C1e1EBc55F',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.015",
					rateDesc: '1 vtOSWAP : 0.015 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'vtUSDT Bridge Vault\nFixed Staking',
			campaignDesc: 'Help fund OpenSwap Bridge Vault prior to mainnet release and earn lucrative rewards!',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: `https://openswap.xyz/#/cross-chain-bridge-vault`,
			options: [{
				duration: '45',
				stakingAddress: '0x57d69D4F9531F2606d48C7D03aF9EC698175cDC8',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				decimalsOffset: 12,
				rewardOptions: [{
					rewardAddress: '0xB2515Cd512931db70475735b87272eD292D13477',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "5.01",
					rateDesc: '1 vtUSDT : 5.01 OSWAP'
				}]
			},
			{
				duration: '90',
				stakingAddress: '0x65508E2609938dF346cbD7C8711B6a51f578A734',
				stakingDesc: 'Stake vtUSDT, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				decimalsOffset: 12,
				rewardOptions: [{
					rewardAddress: '0x0c5D5342CB1ecF1e9e2A110f40615657ae7Fb451',
					tokenAddress: '0xb32ac3c79a94ac1eb258f3c830bbdbc676483c93',
					rate: "12.027",
					rateDesc: '1 vtUSDT : 12.027 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OSWAP Bridge Vault Program 3',
			campaignDesc: 'Stake vtOSWAP, Earn OSWAP',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: 'https://www.openswap.xyz/#/cross-chain-bridge-vault',
			options: [{
				duration: '14',
				stakingAddress: '0x3d4F9cA218E4cB5C8B7F6f0B0D84d62d7400788B',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xe1d8784d245D2d45e6F0dE05427B9b085C7CfC33',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.0058",
					rateDesc: '1 vtOSWAP : 0.0058 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0x8c6162B0fA876941C9146708D8391dDA17caE5d0',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xe4Fee53a3ea02D0cd6B24D805E532330497f72B9',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.015",
					rateDesc: '1 vtOSWAP : 0.015 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OSWAP Bridge Vault Program 2',
			campaignDesc: 'Stake vtOSWAP, Earn OSWAP',
			campaignPeriod: '14 Days',
			vestingPeriod: '',
			getTokenURL: 'https://www.openswap.xyz/#/cross-chain-bridge-vault',
			options: [{
				duration: '14',
				stakingAddress: '0xB124679972Ef4B6CAB1280082C620F0Fd600F327',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xB072020c0ad2E961c8B819d3D42FFCc11D83FF4A',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.0058",
					rateDesc: '1 vtOSWAP : 0.0058 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0x2c571239412Cc908106EDbC4851b87aaD4402acb',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0xF496F27f807FFC58a7E57e49018e8aA9459a1890',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.015",
					rateDesc: '1 vtOSWAP : 0.015 OSWAP'
				}]
			}]
		},
		{
			campaignName: 'OSWAP Bridge Vault Program 1',
			campaignDesc: 'Stake vtOSWAP, Earn OSWAP',
			campaignPeriod: '14 Days',
			vestingPeriod: '180 Days',
			getTokenURL: 'https://www.openswap.xyz/#/cross-chain-bridge-vault',
			options: [{
				duration: '14',
				stakingAddress: '0x7106727266E46B8c8BD45C0b733187603Aa01946',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x0E1F5ae02eEEB1259f1DDb21D5091Ec22c2588eC',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.0058",
					rateDesc: '1 vtOSWAP : 0.0058 OSWAP'
				}]
			},
			{
				duration: '30',
				stakingAddress: '0x3945BD8beee8e88Ae8e1FEAf5AAb263581dA854B',
				stakingDesc: 'Stake vtOSWAP, Earn OSWAP',
				stakingType: StakingType.VAULT_Token,
				rewardOptions: [{
					rewardAddress: '0x7607650Bea995c11F081d001aa3ad67c1Ac78D5B',
					tokenAddress: '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93',
					rate: "0.015",
					rateDesc: '1 vtOSWAP : 0.015 OSWAP'
				}]
			}]
		},
	]
}