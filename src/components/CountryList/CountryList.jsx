import {useEffect, useState} from "react";

const CountryList = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => {
        setCountryList(data);
      });
  }, []);

  console.log(countryList);

  return (
    <div>
      <h1 className="text-5xl text-center my-6 font-bold">
        Country Wise Spot List:
      </h1>
      <div></div>
    </div>
  );
};

export default CountryList;
