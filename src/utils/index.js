export const parseWeiToEther = (web3, amount) =>
  web3.utils.fromWei(web3.utils.toBN(amount), "ether");
