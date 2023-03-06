import React, { useState } from "react";
import logoNetflit from "../image/5898144_netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0);
  const handleScrolly = () => {
    const scrolly = window.scrollY || document.documentElement.scrollTop;
    setScroll(scrolly);
  };
  window.addEventListener("scroll", handleScrolly);

  return (
    <div>
      <div
        className="container_header"
        style={
          scroll < 50
            ? { backgroundColor: "transparent" }
            : { backgroundColor: "black" }
        }
      >
        <div className="header_netflix">
          <div className="wrapr_header1">
            <img className="logoNetflix" src={logoNetflit} alt="" />
            <div className="Link_header">
              <ul>
                <li>
                  <a href="#">Home</a>
                  <a href="#">TV Shows</a>
                  <a href="#">Movies</a>
                  <a href="#">New & Popular</a>
                  <a href="#">My List</a>
                  <a href="#">Browse By Languages</a>
                  <a href="#">Language Reactor Calalogue</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wrapr_header2">
            <div className="input_search">
              <SearchIcon className="icon_search" />
              <input
                type="text"
                name=""
                id="search"
                className="input"
                autoComplete="off"
                placeholder="Search"
              />
            </div>
            <div className="dvd">
              <a href="#">DVD</a>
            </div>
            <button className="button_notifications">
              <NotificationsIcon className="icon_notifications" />
            </button>
            <button className="title_singin" onClick={() => navigate("/login")}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
