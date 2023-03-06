import React from "react";
import Actions from "../components/Actions";
import Comedy from "../components/Comedy";
import IntrolVideo from "../components/IntrolVideo";
import Romance from "../components/Romance";
import TopRate from "../components/TopRate";
import Trending from "../components/Trending";

function HomePage() {
  return (
    <div>
      <IntrolVideo />
      <div className="container-main-homepage">
        <TopRate />
        <Trending />
        <Actions />
        <Comedy />
        <Romance />
      </div>
    </div>
  );
}

export default HomePage;
