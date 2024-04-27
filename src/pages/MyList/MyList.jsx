import {useLoaderData} from "react-router-dom";

const MyList = () => {
  const spots = useLoaderData();

  // const {name, country, location, visitors} = spots || {};

  return (
    <div>
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
                  <td className="p-3 text-right">
                    <button className="bg-orange-500 px-4 py-0 text-base rounded-xl">
                      Update
                    </button>
                  </td>
                  <td className="p-3 text-right">
                    <button className="bg-red-500 px-4 py-0 text-base rounded-xl">
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
