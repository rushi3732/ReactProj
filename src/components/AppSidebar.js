//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom"
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
//import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
//import Category from "./Category";
//import Favourite from "./Favourite";
//import Author from "./Author";
//import Dashboard from "./Dashboard";

const AppSidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (

    <div style={{ diplay: "flex" }}>

      <div id="header">

        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Dashboard
                <Link to="/" className="nav-item nav-link " >Dashboard</Link>

              </MenuItem>
              <MenuItem icon={<FaList />}>
                Category

              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>
                Favourite

              </MenuItem>

              <MenuItem icon={<RiPencilLine />}>
                Auther
              </MenuItem>
              <MenuItem icon={<BiCog />}>
                Settings
              </MenuItem>
            </Menu>

          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                <Link to="/logout" className="nav-item nav-link " >Logout</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>

        </ProSidebar>


      </div>


    </div>


  );
};

export default AppSidebar;


