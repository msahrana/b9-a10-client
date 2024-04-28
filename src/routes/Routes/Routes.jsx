import {createBrowserRouter} from "react-router-dom";
import Root from "../../layout/Root/Root";
import ErrorPage from "../../error/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import AllTouristsSpot from "../../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../../pages/AddTouristsSpot/AddTouristsSpot";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import MyList from "../../pages/MyList/MyList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import UpdateSpot from "../../components/UpdateSpot/UpdateSpot";
import CountryList from "../../components/CountryList/CountryList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:5000/singleSpot/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/singleSpot/${params.id}`),
      },
      {
        path: "/countryList",
        element: <CountryList></CountryList>,
      },
    ],
  },
]);
