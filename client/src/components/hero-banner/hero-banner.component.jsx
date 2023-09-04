import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DesktopCoverPic from '../../assets/real-estate-images.jpg'
import './hero-banner.css'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className=''>
      <div className='container m-auto'>
        <div className="hero-banner-container">
          <img src={DesktopCoverPic} alt='' />
          <div className='hero-content-container'>
            <h2>
            Build Your Dream Home With 11Acres in Nagpur.
            </h2>
            <p>
              
            <FontAwesomeIcon icon="fa-regular fa-circle-right" />Residential & Commercial Plots Heart Of City Nagpur.<br /><br />
            <FontAwesomeIcon icon="fa-regular fa-circle-right" />NMRDA SANCTION RL RERA APPROVED PROJECTS<br /><br />
            <FontAwesomeIcon icon="fa-regular fa-circle-right" />Location- Besa, Beltarodi, Shankarpur, Wardha Road, Jamtha, Dongargaon & Hingna<br />
            </p>
            <Link to= '/'>Book a tour</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
