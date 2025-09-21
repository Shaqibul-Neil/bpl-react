import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ chosePlayers, setToggle, handleRemove }) => {
  return (
    <>
      <div className="p-4 mb-4 space-y-2 min-h-[300px]">
        {chosePlayers.map((chosePlayer, i) => (
          <SelectedPlayer
            chosePlayer={chosePlayer}
            key={i}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="add-Player">
        <button className="btn-Add" onClick={() => setToggle(true)}>
          Add More Players
        </button>
      </div>
    </>
  );
};

export default SelectedPlayers;
