import HeroVideo from "../../assets/videos/hero-banner-video-mobile.mp4"
import HeroVideoDesktop from "../../assets/videos/hero-banner-video.mp4"
// import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';


import './hero-video.styles.css'

const HeroVideoComponent = () => {
  return (

    <div>
        <div className="artist-blob mt-2">
            <div className="video-wrapper">
                <video className="mobile-video" controls="false" playsinline autoPlay muted loop >
                    <source src={HeroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video className="desktop-video" controls="false" playsinline autoPlay muted loop >
                    <source src={HeroVideoDesktop} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Flip top>
                  <h2 className="light-text">Get tickets for the main event</h2>
                </Flip>
                <a href='https://surveyheart.com/form/639aca66b482b4504c46cc5b' className="btn cta-btn-text">Get Tickets</a>
            </div>
        </div>
    </div>
  );
};

export default HeroVideoComponent;
