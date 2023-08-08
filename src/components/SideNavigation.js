import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaPlus } from "react-icons/fa";
import { Menu, MenuItem, ProSidebar, SidebarHeader } from "react-pro-sidebar";
import HomePage from "./HomePage";
import TableList from "./TableList"; // Make sure to import the component

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };

  return (
    <BrowserRouter>
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
        <SidebarHeader>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<FaPlus />}>
            <Link to="/homepage">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaPlus />}>
            <Link to="/tableList">Bar Chart</Link>
          </MenuItem>
          <MenuItem icon={<FaPlus />}>
            <Link to="/homepage">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>Users</MenuItem>
        </Menu>
      </ProSidebar>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/tableList" element={<TableList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SideNavigation;
