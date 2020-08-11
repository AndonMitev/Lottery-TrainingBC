import React, { useState } from "react";

export const Enter = ({ web3, contract }) => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [txHash, setTxHash] = useState("");

  const handleOnChange = (event) => {
    event.persist();

    setAmount(event.target.value);
  };

  const enterLottery = async () => {
    setMessage("Processing...");
    setAmount("");

    const accounts = await web3.eth.getAccounts();

    const { transactionHash } = await contract.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(amount),
    });

    setTxHash(transactionHash);
    setMessage("Congrats! Check tx here");
  };

  return (
    <div>
      <input onChange={handleOnChange} value={amount} />
      <button onClick={enterLottery}>Enter</button>
      {message ? (
        <p
          onClick={() =>
            message !== "Processing..." &&
            window.open(`https://ropsten.etherscan.io/tx/${txHash}`, "_blank")
          }
        >
          {message}
        </p>
      ) : null}
    </div>
  );
};
