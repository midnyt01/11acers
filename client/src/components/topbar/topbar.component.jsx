import { Link } from 'react-router-dom';
import {useState} from "react";
import Sidebar from '../sidebar/sidebar.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainLogo from "../../assets/11_acres_logo.png";
// import PropertiesPage from '../../routes/properties.component';
import './topbar.styles.css';

const Topbar = () => {

  const [ isSidenavOpen, setIsSidenavOpen ] = useState(false)
  const sidebarToggle = () => {
    if (isSidenavOpen === false) {
      setIsSidenavOpen(true)
    }
    else {
      setIsSidenavOpen(false)
    }
  }

  const [activeContent, setActiveContent] = useState("properties");

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
      <div className="topbar-container">
        <div className='logo-container'>
            <img src={MainLogo} alt="The Musical SwaMi Logo" className='main-logo' />
            <Link to='/'>The Real Estate Finder</Link>
        </div>
        <div className='navbar-links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li className="navbar-dropdown">
              <span>Properties&nbsp;<FontAwesomeIcon icon="fa-solid fa-chevron-down" /></span>
              <ul className="navbar-dropdown-content">
                <li>
                  <Link to="/properties/current-projects" onClick={() => handleMenuClick("current")}>
                    Current Projects
                  </Link>
                </li>
                <li>
                  <Link to="/properties/rentout-projects" onClick={() => handleMenuClick("rentout")}>
                    Rent-out Projects
                  </Link>
                </li>
              </ul>
            </li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <span className='dak-text f-size-1 side-menu-icon' onClick={sidebarToggle} >
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </span>
      </div>
      { isSidenavOpen && <Sidebar sidebarToggle={sidebarToggle} /> }
    </div>
  );
};

export default Topbar;
