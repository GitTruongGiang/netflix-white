import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <div className="container">
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  );
}

export default MainLayout;
