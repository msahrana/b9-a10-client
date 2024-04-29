import {Link} from "react-router-dom";

const CountryListCard = ({items}) => {
  const {
    country,
    photoURL,
    description,
    name,
    location,
    cost,
    visitors,
    seasonality,
    _id,
  } = items || {};

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt="Shoes" />
      </figure>
      <div className="p-4 space-y-4">
        <h2 className="text-3xl text-center uppercase">{name}</h2>
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
          <h2 className="text-2xl text-blue-500 uppercase">{country}</h2>
          <p>
            <span className="font-bold">Season</span>: {seasonality}
          </p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row space-x-2 items-center">
          <p className="text-red-500">
            <span className="text-xl font-bold">Average Cost :</span>${cost}
          </p>
          <p className="text-green-500">
            <span className="text-xl font-bold">Total Visitors Per Year:</span>
            {visitors}
          </p>
        </div>
        <p>
          <span className="text-xl font-bold">Location :</span>
          {location}
        </p>
        <p className="text-justify">
          <span className="font-bold text-justify">Description:</span>
          {description}
        </p>
        <div className="card-actions justify-end">
          <Link className="w-full" to={`/details/${_id}`}>
            <button className="btn bg-red-500 text-white w-full text-xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryListCard;
