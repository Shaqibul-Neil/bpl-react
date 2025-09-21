import "./App.css";
import Header from "./Components/Header";
import AvailablePlayers from "./Components/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers";
import Skeleton from "./Components/Skeleton";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  try {
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

  return (
    <div className="container">
      <Header availableBalance={availableBalance} />

      <div className="tab-section pt-20">
        <h2 className="section-title">
          {toggle ? `Available Players` : `Selected Players(4/6)`}
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
            Selected <span>(0)</span>
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
            />
          </Suspense>
        ) : (
          <Suspense fallback={"..."}>
            <SelectedPlayers />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
