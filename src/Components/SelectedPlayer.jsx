const SelectedPlayer = ({ chosePlayer, handleRemove }) => {
  return (
    <div className="flex justify-between items-center shadow-sm p-4 rounded-xl">
      <div className="flex gap-6 items-center py-2">
        <div className="w-20">
          <img
            className="object-cover rounded-xl aspect-square"
            src={chosePlayer.image}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{chosePlayer.name}</h3>
          <p className="text-gray-500">{chosePlayer.playing_role}</p>
        </div>
      </div>
      <div>
        <button
          className="cursor-pointer"
          onClick={() => handleRemove(chosePlayer)}
        >
          <i
            className="fa-solid fa-trash-can text-xl hover:animate-bounce"
            style={{ color: "#ec5b5b" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
