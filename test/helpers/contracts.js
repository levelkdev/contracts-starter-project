import eth from './eth'
import ShrimpCoinJSON from '../../build/contracts/ShrimpCoin.json'

export const getShrimpCoin = getContractFn(ShrimpCoinJSON)

function getContractFn (contractJSON) {
  return async () => {
    const accounts = await eth.accounts()
    const { abi, unlinked_binary } = contractJSON
    const ethContract = eth.contract(abi, unlinked_binary, {
      from: accounts[0],
      gas: 4712388
    })
    return {
      new: newContract(ethContract),
      at: ethContract.at
    }
  }
}

function newContract (ethContract) {
  return async () => {
    const txAddress = await ethContract.new()
    const txReceipt = await eth.getTransactionReceipt(txAddress)
    return ethContract.at(txReceipt.contractAddress)
  }
}
