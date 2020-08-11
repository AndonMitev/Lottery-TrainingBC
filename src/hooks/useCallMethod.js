import { useState, useEffect } from "react";

export const useCallMethod = (contract, method) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await contract.methods[method]().call();

      setState(data);
    };

    getData();
  }, [contract.methods, method]);

  return {
    state,
  };
};
