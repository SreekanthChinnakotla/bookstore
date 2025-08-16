import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar stays fixed height */}
        <Sidebar className="h-full" />

        {/* Main content scrolls independently */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
