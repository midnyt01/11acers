// import Zoom from 'react-reveal/Zoom';
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
              The best commercial real estate in and around Pune
            </h2>
            <p>
              We are a full-service real estate firm in the Pune area. Our team of experts is ready to help you with any questions you have.
            </p>
            <Link to= '/'>Book a tour</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
