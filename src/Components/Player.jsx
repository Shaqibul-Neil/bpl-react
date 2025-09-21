import playerIcon from "../assets/player.png";
import flagIcon from "../assets/flag.png";
import { useState } from "react";

const Player = ({
  player,
  setAvailableBalance,
  availableBalance,
  chosePlayers,
  setChosePlayers,
}) => {
  const [showWarningToast, setShowWarningToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const isSelected = chosePlayers.find(
    (chosePlayer) => chosePlayer.id === player.id
  );

  const handleSelection = (playerData) => {
    if (availableBalance >= playerData.price && chosePlayers.length < 6) {
      setAvailableBalance((prev) => prev - playerData.price);
      const newPlayers = [...chosePlayers, playerData];
      setChosePlayers(newPlayers);
      setShowSuccessToast(true);
      setTimeout(() => {
        setShowSuccessToast(false);
      }, 3000);
    } else {
      setShowWarningToast(true);
      setTimeout(() => {
        setShowWarningToast(false);
      }, 3000);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl p-4 mb-4">
      {/* player image */}
      <figure>
        <img
          src={player.image}
          alt=""
          className="w-[352px] h-[200px] object-cover rounded-lg"
        />
      </figure>
      {/* player details */}
      <div className="mt-4 space-y-4">
        {/* player name */}
        <div className="flex gap-3 items-center">
          <img src={playerIcon} className="w-6" alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>
        {/* player country role */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex items-center gap-3 ">
            <div>
              <img src={flagIcon} className="w-3" alt="" />
            </div>
            <p className="text-gray-600">{player.country}</p>
          </div>
          <button className="role-btn">{player.playing_role}</button>
        </div>
        {/* player infos */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-base font-semibold">
            <h3>Rating</h3>
            <h3 className="text-gray-600">{player.rating}</h3>
          </div>
          <div className="flex items-center justify-between text-base font-semibold">
            <h3>{player.batting_style}</h3>
            <h3 className="text-gray-600 text-sm">{player.bowling_style}</h3>
          </div>
          <div className="flex items-center justify-between text-base font-semibold card-actions">
            <h3>Price: ${player.price}</h3>
            <button
              className="btn btn-soft"
              disabled={isSelected}
              onClick={() => {
                handleSelection(player);
              }}
            >
              {isSelected ? `Selected` : `Choose Player`}
            </button>
          </div>
        </div>
      </div>
      {/* toast conditionally render */}
      {showSuccessToast && (
        <div className="toast toast-top toast-center z-100 animate-bounce">
          <div className="alert alert-success">
            <span className="font-semibold text-lg">
              Congratulations! You have selected {player.name}
            </span>
          </div>
        </div>
      )}
      {showWarningToast && (
        <div className="toast toast-top toast-center z-100 animate-bounce">
          <div className="alert alert-warning">
            <span className="font-semibold text-lg">
              {availableBalance <= player.price
                ? ` You don't have sufficient coins to purchase`
                : `You have already selected your desired six`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
