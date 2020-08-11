import { useState, useEffect, useRef } from "react";

export const useCallMethodPeriodically = (contract, method) => {
  const [state, setState] = useState("");
  const intervalRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const data = await contract.methods[method]().call();

      setState(data);
    };

    getData();

    intervalRef.current = setInterval(() => getData(), 1000);

    return () => clearInterval(intervalRef.current);
  }, [contract.methods, method]);

  return {
    state,
  };
};
