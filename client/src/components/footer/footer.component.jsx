import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import Companylogo from '../../assets/11_acres_logo.png';
import './footer.styled.css';


const Footer = () => {
  return (
    <div className="container m-auto">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div>
            <img src={Companylogo} alt="11 Acers" />
          </div>
          <div className="footer-link-wrapper">
            <div>
              <h3>Contact US</h3>
              <a href="https://www.com">Lot No 20<br />21 Gajanan Nagar,</a><br />
              <a href="https://www.com">Wardha Road, Nagpur, 440015</a><br />
            </div>
            <div>
              <h3>Business Hours</h3>
              <a href="https://www.com">Morning 8AM to 7PM<br />Everyday</a><br />
            </div>
            <div>
              <h3>Get properties updates</h3>
              <input placeholder="Enter your email" type="email"/>
              <input type="button" />
            </div>
          </div>
        </div>

        <div className="social-container">
          <h3 className="social-head">Get Social</h3>
          <div className="socials-wrapper">
            <div className="socials">
              <a href="https://www.instagram.com/11acre_realestate/"><FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" /></a>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=61551818773260"><FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
