import { getTokenMap, getTokenIconPath, DefaultTokens } from '@staking/store';

enum StakingType {
  ERC20_Token,
  LP_Token,
  VAULT_Token
}

const getLockedTokenObject = (info: any, tokenInfo: any, tokenMap?: any) => {
  if (info) {
    if (info.stakingType == StakingType.ERC20_Token) {
      if (!tokenMap) {
        tokenMap = getTokenMap();
      }
      return tokenMap[tokenInfo.tokenAddress];
    }
    if (info.stakingType == StakingType.LP_Token && tokenInfo.lpToken) {
      return tokenInfo.lpToken.object;
    }
    else if (info.stakingType == StakingType.VAULT_Token && tokenInfo.vaultToken) {
      return tokenInfo.vaultToken.object;
    }
  }
  return null;
}

const getLockedTokenSymbol = (info: any, token: any) => {
  if (info) {
    if (info.stakingType == StakingType.ERC20_Token) {
      return token ? token.symbol : '';
    }
    if (info.stakingType == StakingType.LP_Token) {
      return 'LP';
    }
    if (info.stakingType == StakingType.VAULT_Token) {
      return token ? `vt${token.assetToken.symbol}` : '';
    }
  }
  return '';
}

const getLockedTokenIconPaths = (info: any, tokenObject: any, chainId: number, tokenMap?: any) => {
  if (info && tokenObject) {
    if (!tokenMap) {
      tokenMap = getTokenMap();
    }
    if (info.stakingType == StakingType.ERC20_Token) {
      return [getTokenIconPath(tokenObject, chainId)];
    }
    if (info.stakingType == StakingType.LP_Token) {
      const nativeToken = DefaultTokens[chainId]?.find((token) => token.isNative);
      const token0 = tokenMap[tokenObject.token0] || nativeToken;
      const token1 = tokenMap[tokenObject.token1] || nativeToken;
      return [getTokenIconPath(token0, chainId), getTokenIconPath(token1, chainId)];
    }
    if (info.stakingType == StakingType.VAULT_Token) {
      return [getTokenIconPath(tokenObject.assetToken, chainId)];
    }
  }
  return [];
}

export {
  StakingType,
  getLockedTokenObject,
  getLockedTokenSymbol,
  getLockedTokenIconPaths,
}
