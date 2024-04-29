import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CountryListCard from "./CountryListCard";

const CountryList = () => {
  const [countryList, setCountryList] = useState([]);
  const {country: countryName} = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/spot")
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((c) => c.country === countryName);
        console.log(data);
        console.log(filter);
        console.log(countryName);
        setCountryList(filter);
      });
  }, [countryName]);

  console.log(countryList);

  return (
    <div>
      <h1 className="text-5xl text-center my-6 font-bold">
        Country Wise Spot List: {countryName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
        {countryList.map((items) => (
          <CountryListCard key={items._id} items={items}></CountryListCard>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
