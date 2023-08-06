import { useState } from "react";

import Sliderpic1 from "../../assets/Mauli-Nagar-021-1024x683-1-768x512.jpg";
import Sliderpic2 from "../../assets/186_Scene-02-scaled-2-768x432.jpg";
import Sliderpic3 from "../../assets/Mauli-Nagar-13_01-1024x683-1-768x512.jpg";
import Aboutimg1 from "../../assets/Mauli_09-Birds-eye-1024x683-1-768x512.jpg";
import Aboutimg2 from "../../assets/186_Scene-02-scaled-2-768x432.jpg";

import './about.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const AboutContent = () => {

    // const mapEmbedURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM_LEVEL!4m5!3m4!1s0x0:0x0!8m2!3dYOUR_LATITUDE!4dYOUR_LONGITUDE';

    const [hoveredImage, setHoveredImage] = useState(null);

    const imagesData = [
      { imgSrc: Sliderpic1, 
        name: 'Name 1',
        description: 'Hi, there',
        link: 'https://www.linkedin.com'
        },
      { imgSrc: Sliderpic2, 
        name: 'Name 2' ,
        description: 'Hi, there',
        link: 'https://www.linkedin.com'
        },
      { imgSrc: Sliderpic3, 
        name: 'Name 3',
        description: 'Hi, there',
        link: 'https://www.linkedin.com' 
        },
    ];

    return (
        <div>
            <div className="container m-auto">
                <div className="mt-4"></div>
                <div className="about-wrapper">
                    <h2>About 11 Acre</h2>
                    <div className="about-content-card-grid">
                        <div className="about-card">
                            <div className="about-card-img-wrapper">
                                <img src={Aboutimg1} alt=""/>
                            </div>
                            <div className="about-card-content">
                                <h3>Our Story</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur</p>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="about-card-content">
                                <h3>Our Values</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur</p>
                            </div>
                            <div className="about-card-img-wrapper">
                                <img src={Aboutimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <h2>Our Team</h2>
                    <div className="about-slider">
                    <div className="about-slider-grid">
                        {imagesData.map((imageData, index) => (
                            <div
                            key={index}
                            className="about-slider-container"
                            onMouseEnter={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(null)}
                            >
                            <img src={imageData.imgSrc} alt="" />
                            {
                                hoveredImage === index && 
                                <div className="about-slider-overlay">
                                    <p>{imageData.name}</p>
                                    <p>{imageData.description}</p>
                                    <a href={imageData.link} ><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                                </div>
                            }
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* <h2>Locate us</h2>
                    <div className="map-container">
                        <iframe
                            title="Map Location"
                            width="600"
                            height="450"
                            loading="lazy"
                            allowFullScreen
                            src={mapEmbedURL}
                        ></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AboutContent;   