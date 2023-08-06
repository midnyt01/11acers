import { Link } from "react-router-dom";
import Pulse from "react-reveal/Pulse";
import Bounce from "react-reveal/Bounce";
import "./sidebar.styles.css";
import MainLogo from "../../assets/11_acres_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Sidebar = ({ sidebarToggle }) => {

  const [activeContent, setActiveContent] = useState("properties");

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
      <div className="sidenav">
        <ul className="slideout">
          <div className="mt-4">
          <Link to="/">
            <img
              src={MainLogo}
              alt="The Musical SwaMi Logo"
              className="main-logo"
            />
            <p style={{margin: 0,}}>The Real Estate Finder</p>
          </Link>
          </div>
          <span
            onClick={sidebarToggle}
            className="sidenav-close f-size-1 dark-text"
          >
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </span>
          <Pulse>
            <div className="sidenav-links decoration-none">
              <li>
                <Link to="/" className="decoration-none light-text">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="decoration-none light-text">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="decoration-none light-text">
                  <span>Properties&nbsp;<FontAwesomeIcon icon="fa-solid fa-chevron-down" /></span>
                </Link>
                <div className="sidebar-dropdown-content">
                <li>
                  <Link to="/properties/current-projects" onClick={() => handleMenuClick("current")}>
                    &nbsp; Current Projects
                  </Link>
                </li>
                <li>
                  <Link to="/properties/rentout-projects" onClick={() => handleMenuClick("rentout")}>
                    &nbsp; Rent-out Projects
                  </Link>
                </li>
                </div>
              </li><br />
              <li>
                <Link to="/about-us" className="decoration-none light-text">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="decoration-none light-text">
                  Contact Us
                </Link>
              </li>
            </div>
          </Pulse>
          <Bounce top cascade>
            <ul className="social-links">
              <li>
                <a
                  href="https://wa.me/9473814273?text=i%20am%20iron%20man"
                  className="f-size-1 secondary-text mr-2"
                >
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/themusicalswami/"
                  className="f-size-1 secondary-text mr-2"
                >
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.co"
                  className="f-size-1 secondary-text mr-2"
                >
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="f-size-1 secondary-text mr-2">
                  <FontAwesomeIcon icon="fa-solid fa-at" />
                </Link>
              </li>
            </ul>
          </Bounce>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
