import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Banner from "../components/Home/Banner/Banner";
import Login from "../components/Login/Login";
import Contact from "../components/Contact/Contact";
import SignUp from "../components/SignUp/SignUp";
import SetRole from "../components/SetRole/SetRole";
import AllVenues from "../components/AllVenues/AllVenues";
import RequireAuth from "../components/Login/RequireAuth"
import Venues from "../components/Home/Banner/Venues";
import NotFound from "../components/Shared/NotFound/NotFound";
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../components/Dashboard/Profile/Profile";
import SavedVenues from "../components/Dashboard/SavedVenues/SavedVenues";

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
        path: "*",
        element: <NotFound></NotFound>,
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
        element: <RequireAuth><SetRole/></RequireAuth>,
      },
      {
        path: "/allvenues",
        element: <AllVenues></AllVenues>,
      },
      {
        path: "/",
        element: <AllVenues></AllVenues>,
      },
      {
        path: "/dashboard",
        element: <RequireAuth><Dashboard/></RequireAuth>,
        children: [
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>
          },
          {
            path: "/dashboard/saved-venues",
            element: <SavedVenues></SavedVenues>
          },
        ]
      }
    ],
  },
]);
