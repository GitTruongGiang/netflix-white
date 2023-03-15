import React from "react";

import IntrolVideo from "../components/IntrolVideo";
import TopRate from "../components/TopRate";
import { nameMovie } from "../nameMovie/nameMovie";

function HomePage() {
  return (
    <div>
      <IntrolVideo />
      <div className="container-main-homepage">
        {nameMovie.map((e) => {
          return (
            <>
              <TopRate name={e.name} topRate={e.api} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
