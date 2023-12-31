import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Destination from "../Pages/Destination";

import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PlaceDetails from "../Pages/PlaceDetails.jsx/PlaceDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/placeDetails",
        element: (
          <PrivateRoute>
            <PlaceDetails></PlaceDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/contact",
        element: <Destination></Destination>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export { router };
