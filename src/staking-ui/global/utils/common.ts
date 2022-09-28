import { Wallet, Erc20, BigNumber, ISendTxEventsOptions } from "@ijstech/eth-wallet"; 
import { Contracts } from "@openswap/sdk";
import { ITokenObject } from "..";

export const isTransactionConfirmed = async (txHash: string) => {
  const tx = await Wallet.getInstance().web3.eth.getTransaction(txHash);
  return tx && !!tx.blockNumber;
}

export const registerSendTxEvents = (sendTxEventHandlers: ISendTxEventsOptions) => {
  const wallet = Wallet.getInstance();
  wallet.registerSendTxEvents({
      transactionHash: (error: Error, receipt?: string) => {
          if (sendTxEventHandlers.transactionHash) {
              sendTxEventHandlers.transactionHash(error, receipt);
          }
      },
      confirmation: (receipt: any) => {
          if (sendTxEventHandlers.confirmation) {
              sendTxEventHandlers.confirmation(receipt);
          }
      },
  })
}

export async function getERC20Amount(wallet:Wallet, token:string, decimals:number) { //get token amount in that wallet
  let erc20 = new Erc20(wallet, token, decimals);
  return await erc20.balance;
}

export const approveERC20Max = async (token: ITokenObject, spenderAddress: string, callback?: any, confirmationCallback?: any) => {
  let wallet = Wallet.getInstance();
  let amount = new BigNumber(2).pow(256).minus(1);
  let erc20 = new Contracts.ERC20(wallet, token.address);
  registerSendTxEvents({
    transactionHash: callback,
    confirmation: confirmationCallback
  })
  let receipt = await erc20.approve({
    spender: spenderAddress,
    amount
  });
  return receipt;
}

export const getERC20Allowance = async (token: ITokenObject, spenderAddress: string) => {
  if (!token.address) return null;
  let wallet = Wallet.getInstance();
  let erc20 = new Contracts.ERC20(wallet, token.address);
  let allowance = await erc20.allowance({
    owner: wallet.account.address,
    spender: spenderAddress
  });
  return allowance;
}

export const isAddressValid = async(address: string) => {
  let wallet = Wallet.getInstance();
  const isValid = wallet.web3.utils.isAddress(address);
  return isValid;
}