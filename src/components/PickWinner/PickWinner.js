import React from "react";

export const PickWinner = ({ contract, web3 }) => {
  const pickWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    const data = await contract.methods.pickWinner().send({
      from: accounts[0],
    });

    console.log(data);
  };

  return (
    <div>
      <button onClick={pickWinner}>Pick winner</button>
    </div>
  );
};
