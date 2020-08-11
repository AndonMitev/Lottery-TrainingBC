import React, { useState, useEffect } from "react";

import { Player } from "./Player/Player";

import { useCallMethodPeriodically } from "../../hooks/useCallMethodPeriodically";

export const Players = ({ contract }) => {
  const [players, setPlayers] = useState([]);

  const { state } = useCallMethodPeriodically(contract, "getPlayers");

  useEffect(() => {
    setPlayers([...new Set(state)]);
  }, [state]);

  return (
    players && (
      <div className="players-wrapper">
        <h3>Current players: {players.length}</h3>
        {players.map((player, idx) => (
          <Player key={idx} player={player} />
        ))}
      </div>
    )
  );
};
