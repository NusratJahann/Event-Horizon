import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Banner from "../components/Home/Banner/Banner";
import Login from "../components/Login/Login";
import Contact from "../components/Contact/Contact";
import SignUp from "../components/SignUp/SignUp";
import Venues from "../components/Venues/Venues";
import SetRole from "../components/SetRole/SetRole";
import AllVenues from "../components/AllVenues/AllVenues";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: [<Banner />, <Venues></Venues>],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/role",
        element: <SetRole/>,
      },
      {
        path: "/allvenues",
        element: <AllVenues></AllVenues>,
      },
    ],
  },
]);
