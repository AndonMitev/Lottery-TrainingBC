import React from "react";
import { useCallMethod } from "../../hooks/useCallMethod";

export const Manager = ({ contract }) => {
  const { state } = useCallMethod(contract, "manager");

  return <div>Manager address: {state}</div>;
};
