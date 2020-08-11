import React, { useEffect, useState } from "react";

import getContract from "./blockchain/lottery";
import getWeb3 from "./blockchain/web3";

import { Manager } from "./components/Manager/Manager";
import { Players } from "./components/Players/Players";
import { Balance } from "./components/Balance/Balance";
import { Enter } from "./components/Enter/Enter";
import { PickWinner } from "./components/PickWinner/PickWinner";

import "./App.css";

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const getBlockchainData = async () => {
      const web3 = await getWeb3();
      const contract = await getContract(web3);

      setWeb3(web3);
      setContract(contract);
    };

    getBlockchainData();
  }, []);

  return !contract ? (
    <h1>Fetching blockchain data...</h1>
  ) : (
    <div className="App">
      <h2>Lottery contract</h2>
      <Manager contract={contract} />
      <Players contract={contract} />
      <Balance contract={contract} web3={web3} />
      <Enter contract={contract} web3={web3} />
      <PickWinner contract={contract} web3={web3} />
    </div>
  );
}

export default App;
