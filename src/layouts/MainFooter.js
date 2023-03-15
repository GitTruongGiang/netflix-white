import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

function MainFooter() {
  const listname = [
    { name: ["Audio Desciption", "Investor Relations", "Legal Notices"] },
    { name: ["Help Center", "Jobs", "Cookie Preferences"] },
    { name: ["Gift Cards", "Terms of Use", "Corporate Infomation"] },
    { name: ["Media Center", "Privacy", "Contact Us"] },
  ];
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
            {listname.map((e) => {
              return (
                <ul className="linkname">
                  <li>
                    {e.name.map((item) => {
                      return <a href="#">{item}</a>;
                    })}
                  </li>
                </ul>
              );
            })}
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
