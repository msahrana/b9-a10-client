import {Link, useLoaderData} from "react-router-dom";

const DetailsPage = () => {
  const singleData = useLoaderData();

  const {
    name,
    photoURL,
    country,
    location,
    description,
    cost,
    time,
    visitors,
    seasonality,
  } = singleData[0] || {};

  return (
    <div className="card w-2/3 mx-auto mt-6 mb-10 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={photoURL} alt="Shoes" />
      </figure>
      <div className="my-4">
        <div className="flex justify-between px-4 my-4">
          <h2 className="text-3xl uppercase text-blue-500">{name}</h2>
          <p className="text-3xl uppercase text-green-500">{country}</p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between px-4 mb-3">
          <p className="text-red-500 font-bold">Average Cost: ${cost}</p>
          <p className="text-green-500 font-bold">Travel Time: {time}</p>
          <p className="text-orange-500 font-bold">Season: {seasonality}</p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between px-4 mb-3">
          <p>
            <span className="font-bold">Location</span>: {location}
          </p>
          <p>
            <span className="font-bold">Total Visitors Per Year</span>:{" "}
            {visitors}
          </p>
        </div>
        <div className="px-4 mb-5">
          <h1>
            <span className="font-bold">Short-Description</span>: {description}
          </h1>
        </div>
        <div className="card-actions justify-center">
          <Link
            className="bg-red-500 text-xl text-white px-3 py-2 rounded-full"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
