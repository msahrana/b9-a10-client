import {useLoaderData} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const {user} = useAuth() || {};
  const spot = useLoaderData()[0] || {};
  const {
    name,
    country,
    location,
    description,
    cost,
    time,
    visitors,
    seasonality,
    photoURL,
    username,
    _id,
  } = spot || {};

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const seasonality = form.seasonality.value;
    const email = form.email.value;
    const username = form.username.value;
    const photoURL = form.photoURL.value;
    const updateSpot = {
      name,
      country,
      location,
      description,
      cost,
      time,
      visitors,
      seasonality,
      email,
      username,
      photoURL,
    };
    fetch(`https://b9-a10-server-blush.vercel.app/singleSpot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Spot updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-10">Update Spot: {}</h1>
      <div className="border-2 mx-auto p-4 rounded-lg mb-6">
        <form onSubmit={handleUpdate}>
          {/* form row */}
          <div className="flex flex-col lg:flex-row lg:my-6">
            <label className="form-control w-full lg:w-1/2">
              <div className="label">
                <span className="text-xl">Tourists Spot Name:</span>
              </div>
              <input
                type="text"
                placeholder="Tourists Spot Name"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/2 lg:ml-5">
              <div className="label">
                <span className="text-xl">Country Name:</span>
              </div>
              <input
                type="text"
                placeholder="Country Name"
                name="country"
                defaultValue={country}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* form row */}
          <div className="flex flex-col lg:flex-row lg:mb-6">
            <label className="form-control w-full lg:w-1/2">
              <div className="label">
                <span className="text-xl">Location:</span>
              </div>
              <input
                type="text"
                placeholder="Location"
                name="location"
                defaultValue={location}
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/2 lg:ml-5">
              <div className="label">
                <span className="text-xl">Short Description:</span>
              </div>
              <input
                type="text"
                placeholder="Short Description"
                name="description"
                defaultValue={description}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* form row */}
          <div className="flex flex-col lg:flex-row lg:mb-6">
            <label className="form-control w-full lg:w-1/2">
              <div className="label">
                <span className="text-xl">Average Cost:(tk)</span>
              </div>
              <input
                type="number"
                placeholder="Average Cost"
                name="cost"
                defaultValue={cost}
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/2 lg:ml-5">
              <div className="label">
                <span className="text-xl">Travel Time:(days)</span>
              </div>
              <input
                type="number"
                placeholder="Travel Time"
                name="time"
                defaultValue={time}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* form row */}
          <div className="flex flex-col lg:flex-row lg:mb-6">
            <label className="form-control w-full lg:w-1/2">
              <div className="label">
                <span className="text-xl">Total Visitors Per Year:</span>
              </div>
              <input
                type="number"
                placeholder="Total Visitors PerYear"
                name="visitors"
                defaultValue={visitors}
                className="input input-bordered w-full"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/2 lg:ml-5">
              <div className="label">
                <span className="text-xl">Seasonality:(summer or winter)</span>
              </div>
              <input
                type="text"
                placeholder="Seasonality"
                name="seasonality"
                defaultValue={seasonality}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* form row */}
          <div className="flex flex-col lg:flex-row lg:mb-6">
            <label className="form-control w-full lg:w-1/2">
              <div className="label">
                <span className="text-xl">User Email:</span>
              </div>
              <input
                type="email"
                placeholder="User Email"
                name="email"
                value={user?.email}
                disabled
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full lg:w-1/2 lg:ml-5">
              <div className="label">
                <span className="text-xl">User Name:</span>
              </div>
              <input
                type="text"
                placeholder="User Name"
                name="username"
                defaultValue={username}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* form row */}
          <div className="flex mb-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="text-xl">photoURL</span>
              </div>
              <input
                type="text"
                placeholder="photoURL"
                name="photoURL"
                defaultValue={photoURL}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              value="Update Spot"
              className="btn bg-red-500 w-full mt-4 text-xl text-white font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
