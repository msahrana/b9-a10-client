import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";

const AddTouristsSpot = () => {
  const {user} = useAuth();

  const handleAddPlace = (event) => {
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

    const newSpot = {
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
    /* for server */
    fetch("http://localhost:5000/spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Spot added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-6">
      <h1 className="text-5xl text-center font-bold mb-6">
        Add a Tourists Spot
      </h1>
      <div className="border-2 mx-auto p-4 rounded-lg">
        <form onSubmit={handleAddPlace}>
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
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              value="Add Place"
              className="btn bg-red-500 w-full mt-4 text-xl text-white font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
