import Slider from "react-slick";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DesktopCoverPic from '../../assets/real-estate-images.jpg';
import DesktopCoverPic1 from '../../assets/real-estate-images2.jpg';
import DesktopCoverPic2 from '../../assets/real-estate-images3.jpg';
import DesktopCoverPic3 from '../../assets/real-estate-images4.jpg';
import './hero-banner.css';

const HeroBanner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className=''>
      <div className='container m-auto'>
        <div className="hero-banner-container">
          <Slider {...settings}>
            <div className="slider-wrapper">
              <img src={DesktopCoverPic} alt='' />
              <div className='hero-content-container'>
                <h2>Build Your Dream Home With 11Acres in Nagpur.</h2>
                <p>
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Residential & Commercial Plots Heart Of City Nagpur.<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />NMRDA SANCTION RL RERA APPROVED PROJECTS<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Dongargaon & Hingna<br />
                </p>
                <Link to= '/'>Book a site visit</Link>
              </div>
            </div>
            <div className="slider-wrapper">
              <img src={DesktopCoverPic1} alt='' />
              <div className='hero-content-container'>
                <h2>Build Your Dream Home With 11Acres in Nagpur.</h2>
                <p>
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Residential & Commercial Plots Heart Of City Nagpur.<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />NMRDA SANCTION RL RERA APPROVED PROJECTS<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Dongargaon & Hingna<br />
                </p>
                <Link to= '/'>Book a site visit</Link>
              </div>
            </div>
            <div className="slider-wrapper">
              <img src={DesktopCoverPic2} alt='' />
              <div className='hero-content-container'>
                <h2>Build Your Dream Home With 11Acres in Nagpur.</h2>
                <p>
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Residential & Commercial Plots Heart Of City Nagpur.<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />NMRDA SANCTION RL RERA APPROVED PROJECTS<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Dongargaon & Hingna<br />
                </p>
                <Link to= '/'>Book a site visit</Link>
              </div>
            </div>
            <div className="slider-wrapper">
              <img src={DesktopCoverPic3} alt='' />
              <div className='hero-content-container'>
                <h2>Build Your Dream Home With 11Acres in Nagpur.</h2>
                <p>
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Residential & Commercial Plots Heart Of City Nagpur.<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />NMRDA SANCTION RL RERA APPROVED PROJECTS<br /><br />
                  <FontAwesomeIcon icon="fa-regular fa-circle-right" />Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Dongargaon & Hingna<br />
                </p>
                <Link to= '/'>Book a site visit</Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
