import React, { useState, useEffect, useRef } from "react";
import { parseWeiToEther } from "../../utils";

export const Balance = ({ web3, contract }) => {
  const [balance, setBalance] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    const getBalance = async () => {
      const balance = await web3.eth.getBalance(contract._address);

      setBalance(balance);
    };

    getBalance();

    intervalRef.current = setInterval(() => getBalance(), 5000);

    return () => clearInterval(intervalRef.current);
  }, [contract.options, contract._address, web3.eth]);

  return <div>Deposited: {parseWeiToEther(web3, balance)} Ether</div>;
};
