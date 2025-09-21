import "./App.css";
import Header from "./Components/Header";
import AvailablePlayers from "./Components/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers";
import Skeleton from "./Components/Skeleton";
import SelectedSkeleton from "./Components/SelectedSkeleton";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  try {
    //5 second delay
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const res = await fetch("/players.json");
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
//call fetchPlayers() outside the App to render the promise once
//returning promise
const playersPromise = fetchPlayers();

function App() {
  //returning promise
  // const playersPromise = fetchPlayers();
  //toggling
  const [toggle, setToggle] = useState(true);
  //available balance
  const [availableBalance, setAvailableBalance] = useState(6000000);
  //selecting players
  const [chosePlayers, setChosePlayers] = useState([]);
  console.log(chosePlayers);

  return (
    <div className="container">
      <Header availableBalance={availableBalance} />

      <div className="tab-section pt-20">
        <h2 className="section-title">
          {toggle
            ? `Available Players`
            : `Selected Players (${chosePlayers.length}/6)`}
        </h2>
        <div className="flex">
          <button
            className={`btn-Available ${
              toggle ? "bg-[#E7FE29] text-black" : "text-gray-500"
            }`}
            onClick={() => setToggle(true)}
          >
            Available
          </button>
          <button
            className={`btn-Selected ${
              toggle ? "text-gray-500" : "bg-[#E7FE29] text-black"
            }`}
            onClick={() => setToggle(false)}
          >
            Selected <span>({chosePlayers.length})</span>
          </button>
        </div>
      </div>

      <div className="mt-12">
        {toggle ? (
          <Suspense fallback={<Skeleton />}>
            <AvailablePlayers
              playersPromise={playersPromise}
              setAvailableBalance={setAvailableBalance}
              availableBalance={availableBalance}
              chosePlayers={chosePlayers}
              setChosePlayers={setChosePlayers}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<SelectedSkeleton />}>
            <SelectedPlayers chosePlayers={chosePlayers} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
