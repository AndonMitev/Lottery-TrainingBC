import { abi } from "../bin/src/blockchain/contracts/Lottery.json";

const CONTRACT_ADDRESS = "0x696f5Be40c4c51ee0eBf98B96aA76ED116c8a87c";

export default (web3) => {
  return new web3.eth.Contract(abi, CONTRACT_ADDRESS);
};
