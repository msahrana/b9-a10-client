import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import AllTouristsSpotCard from "./AllTouristsSpotCard";

const AllTouristsSpot = () => {
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
      <h1 className="text-5xl text-center font-bold mt-5 mb-10">
        All Tourists Spots Here:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((spot) => (
          <AllTouristsSpotCard key={spot._id} spot={spot}></AllTouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
