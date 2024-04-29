import {useEffect, useState} from "react";
import AllTouristsSpotCard from "./AllTouristsSpotCard";
import {Typewriter} from "react-simple-typewriter";

const AllTouristsSpot = () => {
  const [items, setItems] = useState([]);

  const sortByCost = () => {
    const content = [...items];
    const sorted = content.sort((a, b) => parseInt(a.cost) - parseInt(b.cost));
    setItems(sorted);
  };

  useEffect(() => {
    fetch("http://localhost:5000/spot")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div>
      <div className="App">
        <h1
          className="text-5xl font-bold text-center uppercase mb-0"
          style={{paddingTop: "5rem", margin: "auto 4", fontWeight: "normal"}}
        >
          <span style={{color: "red", fontWeight: "bold"}}>
            <Typewriter
              words={["All Tourists Spots Here:"]}
              loop={" "}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </span>
        </h1>
      </div>
      <div className="text-center my-6">
        <button
          onClick={sortByCost}
          className="bg-green-600 px-3 py-1 rounded-xl text-xl text-white"
        >
          Sorted By Cost
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((spot) => (
          <AllTouristsSpotCard key={spot._id} spot={spot}></AllTouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
