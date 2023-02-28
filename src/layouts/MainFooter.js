import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

function MainFooter() {
  return (
    <div className="container_footer">
      <div className="footer_netflix">
        <div className="icon_wraper">
          <div className="list_icon">
            <button>
              <FacebookIcon />
            </button>
            <button>
              <InstagramIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
            <button>
              <YouTubeIcon />
            </button>
          </div>
          <div className="footer_wraper">
            <ul>
              <li>
                <a href="#">Audio Desciption</a>
                <a href="#">Investor Relations</a>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Help Center</a>
                <a href="#">Jobs</a>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Gift Cards</a>
                <a href="#">Terms of Use</a>
                <a href="#">Corporate Infomation</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Media Center</a>
                <a href="#">Privacy</a>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <button className="service_code">Service Code</button>
        <div className="copyright">
          <CopyrightIcon className="icon_copyright" />
          <p>1977-2023 Netflix, Inc</p>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
