import {Link} from "react-router-dom";

const CountriesSectionCard = ({item}) => {
  const {photoURL} = item || {};

  return (
    <Link to="/countryList">
      <div className="w-full bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-full rounded-2xl"
            src={photoURL}
            alt="Shoes"
          />
        </figure>
      </div>
    </Link>
  );
};

export default CountriesSectionCard;
