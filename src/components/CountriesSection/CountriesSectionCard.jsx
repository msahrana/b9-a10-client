import {Link} from "react-router-dom";

const CountriesSectionCard = ({item}) => {
  const {photoURL, country, description} = item || {};

  return (
    <Link to={`/countryList/${country}`}>
      <div className="w-full bg-base-100 shadow-xl rounded-2xl">
        <figure>
          <img
            className="w-full h-[360px] rounded-2xl"
            src={photoURL}
            alt="photo"
          />
        </figure>
        <h1 className="text-3xl text-blue-500 font-bold uppercase py-4">
          <span className="text-green-600 mr-40 pl-16">Country Name: </span>
          {country}
        </h1>
        <p className="p-4 text-justify">
          <span className="font-bold mr-4">Description:</span>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CountriesSectionCard;
