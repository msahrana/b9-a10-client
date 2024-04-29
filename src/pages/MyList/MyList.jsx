import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const {user} = useAuth() || {};
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/spot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/singleSpot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "This Spot has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spot) => spot._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-373px)]">
      <div>
        <h1 className="text-5xl font-bold my-8 text-center">
          My Total List: {spots.length}
        </h1>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Location</th>
                <th className="p-3">Visitors</th>
                <th className="p-3 text-right">Status1</th>
                <th className="p-3 text-right">Status2</th>
              </tr>
            </thead>
            <tbody>
              {spots.map((spot, index) => (
                <tr
                  key={spot._id}
                  className="border-b border-opacity-20 w-full"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{spot.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{spot.country}</p>
                  </td>
                  <td className="p-3">
                    <p>{spot.location}</p>
                  </td>
                  <td className="p-3 text-start">
                    <p>{spot.visitors}</p>
                  </td>
                  <td className="">
                    <Link to={`/update/${spot._id}`}>
                      <button className="bg-orange-500 px-4 py-2 text-base rounded-xl text-white">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(spot._id)}
                      className="bg-red-500 px-4 py-2 text-base rounded-xl text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
