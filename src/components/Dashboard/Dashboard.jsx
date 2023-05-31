import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IconChevronRight, IconHomeHeart, IconUserCircle } from "@tabler/icons-preact";

const Dashboard = () => {
    const [showText, setShowText] = useState(false);
  
    const handleToggleText = () => {
      setShowText(!showText);
    };
  
    return (
      <div className="flex h-screen">
        {/* <!-- Sidebar --> */}
        <div
          className={`menu ${
            showText ? "w-80 absolute" : "w-fit relative"
          } md:relative z-[9] text-base-content h-screen bg-base-100 border-r-[0.5px]`}
        >
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard/profile" className="p-4 inline-flex">
                <IconUserCircle height={24}/>
                {showText && <span className="pl-3">Profile</span>}
              </Link>
            </li>
            <li>
              <Link to='/dashboard/saved-venues' className="p-4 inline-flex">
                <IconHomeHeart height={24}></IconHomeHeart>
                {showText && <span className="pl-3">Saved Venues</span>}
              </Link>
            </li>
            <li>
              <a className="p-4 inline-flex" onClick={handleToggleText}>
              <IconChevronRight height={24} className={`${
                    showText ? "rotate-180" : "rotate-0"
                  } transition-transform`}/>
                {showText && <span className="pl-3">Hide Texts</span>}
              </a>
            </li>
          </ul>
        </div>
  
        {/* <!-- Main Content --> */}
        <div className="flex-grow overflow-y-auto no-scrollbar">
          <Outlet></Outlet>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  