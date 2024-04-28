import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import TouristsSpotsCard from "./TouristsSpotsCard";

const TouristsSpots = () => {
  const {user} = useAuth() || {};

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/spot")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">
        Historical Tourists Spots
      </h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.slice(0, 6).map((spot) => (
          <TouristsSpotsCard key={spot._id} spot={spot}></TouristsSpotsCard>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpots;
