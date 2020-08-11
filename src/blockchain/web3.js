import Web3 from "web3";

let web3;

export default async () => {
  try {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      alert("Non ethereum browser detected");
    }
  } catch (error) {
    alert("Enable metamask");
  }

  return web3;
};
