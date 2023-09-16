import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import SwaMi from '../../assets/11_acres_logo.png';
import './footer.styled.css';


const Footer = () => {
  return (
    <div className="container m-auto">
      <div className="footer-container">
        <div className="footer-wrapper">
          <div>
            <img src={SwaMi} alt="" />
          </div>
          <div className="footer-link-wrapper">
            <div>
              <h3>Contact US</h3>
              <a href="https://www.com">Lot No 20<br />21 Gajanan Nagar,</a><br />
              <a href="https://www.com">Wardha Road, Nagpur, 440015</a><br />
              <a href="https://www.com">connect@11acre.com</a>
            </div>
            <div>
              <h3>Business Hours</h3>
              <a href="https://www.com">Morning 8AM to 7PM<br />Everyday</a><br />
              <a href="https://www.com">contact@11acre.com</a>
            </div>
            <div>
              <h3>Get properties updates</h3>
              <input placeholder="Enter your email" type="email"/>
            </div>
          </div>
        </div>

        <div className="social-container">
          <h3 className="social-head">Get Social</h3>
          <div className="socials-wrapper">
            <div className="socials">
              <a href="https://instagram.com"><FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" /></a>
            </div>
            <div className="socials">
              <a href="https://threads.com"><FontAwesomeIcon icon="fa-brands fa-threads" size="2xl" /></a> 
            </div>
            <div className="socials">
              <a href="https://facebook.com"><FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
