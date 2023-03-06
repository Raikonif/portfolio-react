import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar2";

const SectionsLayout = () => {
  return (
    <div className="w-full h-min-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SectionsLayout;
