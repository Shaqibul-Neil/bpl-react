import playerIcon from "../assets/player.png";
import flagIcon from "../assets/flag.png";

const Player = ({ player }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-4 mb-4">
      {/* player image */}
      <figure>
        <img
          src={player.image}
          alt=""
          className="w-[352px] h-[200px] object-cover"
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
        <div className="flex items-center justify-between border-b-1 border-gray-300 pb-4">
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
          <div className="flex items-center justify-between text-base font-semibold card-actions items-center">
            <h3>Price: ${player.price}</h3>
            <button className="btn btn-soft">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
