import {Link} from "react-router-dom";

const DetailsPage = () => {
  return (
    <div className="card w-2/3 mx-auto mt-6 mb-10 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link
            className="bg-red-500 text-xl text-white px-3 py-1 rounded-lg"
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
