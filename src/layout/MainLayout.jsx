import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router";
//add
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
