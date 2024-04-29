import {Link} from "react-router-dom";

const CountriesSectionCard = ({item}) => {
  const {photoURL, country} = item || {};

  return (
    <Link to={`/countryList/${country}`}>
      <div className="w-full bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-full rounded-2xl"
            src={photoURL}
            alt="photo"
          />
        </figure>
      </div>
    </Link>
  );
};

export default CountriesSectionCard;
