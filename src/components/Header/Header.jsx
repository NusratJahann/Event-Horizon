import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IconChevronDown, IconMenu } from "@tabler/icons-preact";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth)
  const navItems = (
    <React.Fragment>
      <li>
        <NavLink to="/contact" className="nav-link">Contact us</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
      <li>
        <NavLink to="/signup" >Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/role" >Role</NavLink>
      </li>
      <li tabIndex={0}>
        <a>
          Profile
          <IconChevronDown size={20} className="" />
        </a>
        <ul className="p-2 shadow bg-base-100">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Log out</a>
          </li>
        </ul>
      </li>
    </React.Fragment>
  );
  return (
    <div className="border-[#e9e9e9] border-b-[1px] text-primary">
      <div className="navbar bg-base-100 py-3 px-10 mx-auto max-w-[1440px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-link lg:hidden">
              <IconMenu size={20}/>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-60 min-w-[200px]" />
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
