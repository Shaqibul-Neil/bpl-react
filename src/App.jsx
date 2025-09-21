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

function App() {
  //returning promise
  const playersPromise = fetchPlayers();
  //toggling
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container">
      <Header />

      <div className="tab-section">
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
            <AvailablePlayers playersPromise={playersPromise} />
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
