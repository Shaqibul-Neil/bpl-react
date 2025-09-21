import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ chosePlayers }) => {
  return (
    <div className="p-4 mb-4 space-y-2">
      {chosePlayers.map((chosePlayer, i) => (
        <SelectedPlayer chosePlayer={chosePlayer} key={i} />
      ))}
      <button className="btn-Add">Add More Players</button>
    </div>
  );
};

export default SelectedPlayers;
