import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Contactformimg from "../../assets/two-appraisers-working-on-architecture.jpeg";
import "react-toastify/dist/ReactToastify.css";
import "./contact.styles.css";

const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm (
        'service_pax7me5',
        'template_r3l0v8i',
        form.current,
        'gdc0EVsCEsu1qoNBl'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show a success toast
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 3000, // Close the toast after 3 seconds
            hideProgressBar: false,
          });
        },
        (error) => {
          console.log(error.text);
          // Show an error toast
          toast.error("Something went wrong. Try again later.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
          });
        }
      );
  };

  return (
    <div>
      <ToastContainer />
      <div className="contactpagecontainer">
        <div className="contacticon">
          <img src={Contactformimg} alt="11acre" className="swami-pic" />
        </div>
        <div className="Contactcontainer">
          <h1 className="contact-title">Contact Us</h1>
          <div className="form-wrapper">
            <div className="mt-2"><br /></div>
            <form className="contact-form" onSubmit={sendEmail} ref={form} >
              <input
                placeholder="Enter your name"
                name="name"
              />
              <br />
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
              />
              <br />
              <input
                name="phonenumber"
                type="tel"
                placeholder="Enter your mobile number"
              />
              <br />
              <input
                name="subject"
                type="text"
                placeholder="Enter your subject"
              />
              <br />
              <textarea
                className="messageBox"
                name="message"
                rows="3"
                placeholder="Enter your message"
              />
              <br />
              <input 
                className="sendbutton" 
                value="Send" 
                type="submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="socialcontainer">
        <div className="locationwrapper">
          <div className="locationicons">
            <FontAwesomeIcon
              icon="fa-solid fa-map-location-dot"
              size="2xl"
            />
            <a
              className="locationtext"
              href="https://maps.app.goo.gl/HY6RDYUYmiY8fuPGA"
            >
              Lot No 20 &amp; 21 Gajanan Nagar,<br />Wardha Road, Nagpur, 440015
            </a>
          </div>
          <div className="locationicons">
            <FontAwesomeIcon icon="fa-solid fa-phone" size="2xl" />
            <a className="locationtext" href="tel:9960277584">
              996-027-7584
            </a>
            <a className="locationtext" href="tel:9175577584">
              917-557-7584
            </a>
          </div>
          <div className="locationicons">
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="2xl" />
            <a
              className="locationtext"
              href="mailto:11acre.in@gmail.com"
            >
              11acre.in@gmail.com
            </a>
          </div>
        </div>
        <hr />
        <h3 className="socialhead">Find us On</h3>
        <div className="socialswrapper">
          <a
            className="socials"
            href="https://www.instagram.com/11acre_realestate/"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-instagram"
              size="2xl"
            />
          </a>
          <a
            className="socials"
            href="https://www.facebook.com/profile.php?id=61551818773260"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-facebook"
              size="2xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;