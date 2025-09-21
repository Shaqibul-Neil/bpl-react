import { use } from "react";
import Player from "./Player";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  chosePlayers,
  setChosePlayers,
}) => {
  const playerData = use(playersPromise);
  //console.log(playerData);

  return (
    <div className="grid grid-cols-3 gap-3">
      {playerData.map((player, i) => (
        <Player
          player={player}
          key={i}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          chosePlayers={chosePlayers}
          setChosePlayers={setChosePlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
