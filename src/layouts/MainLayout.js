import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <div className="container">
      <MainHeader />
      <MainFooter />
    </div>
  );
}

export default MainLayout;
