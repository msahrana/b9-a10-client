import {Link} from "react-router-dom";

const AllTouristsSpotCard = ({spot}) => {
  const {name, visitors, photoURL, country, cost, _id} = spot || {};

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photoURL} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-3xl font-semibold uppercase text-center mb-3">
          {name}
        </h2>
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-between">
          <p className="text-2xl text-blue-400 font-semibold uppercase">
            {country}
          </p>
          <p className="text-xl font-semibold text-red-400">
            Average Cost: ${cost}
          </p>
        </div>
        <p className="text-xl font-bold">Total Visitors Per Year: {visitors}</p>
        <div className="card-actions w-full">
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

export default AllTouristsSpotCard;
