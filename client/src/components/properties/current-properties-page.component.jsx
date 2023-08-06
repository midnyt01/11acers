import Topbar from "../topbar/topbar.component";
import Footer from "../footer/footer.component";

import Propertyimg1 from '../../assets/Untitled-design-33-768x525.png';
import Propertyimg2 from '../../assets/Untitled-design-35-768x525.png';
import Propertyimg3 from '../../assets/Mauli-Nagar-021-1024x683-1-768x512.jpg';
import Propertyimg4 from '../../assets/Untitled-design-35-768x525.png';
import Propertyimg5 from '../../assets/Untitled-design-38-768x525.png';
import Propertyimg6 from '../../assets/Untitled-design-39-768x525.png';

import './properties.styled.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const CurrentProperties = () => {

  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = bodyOverflow || 'auto';
    };
  }, []);

  const openOverlay = (index) => {
    const bodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = bodyOverflow || 'hidden';
    setSelectedImage(index);
  };

  const closeOverlay = () => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    setSelectedImage(null);
  };

  const imagesData = [
    { imgSrc: Propertyimg1, text: 'Image 1 Description' },
    { imgSrc: Propertyimg2, text: 'Image 2 Description' },
    { imgSrc: Propertyimg3, text: 'Image 3 Description' },
    { imgSrc: Propertyimg4, text: 'Image 4 Description' },
    { imgSrc: Propertyimg5, text: 'Image 5 Description' },
    { imgSrc: Propertyimg6, text: 'Image 6 Description' },
    { imgSrc: Propertyimg2, text: 'Image 7 Description' },
    { imgSrc: Propertyimg3, text: 'Image 8 Description' },
  ];

  return (
    <div>
      <Topbar />
      <div className="container m-auto">
        <div className="properties-wrapper">
          <h2>Rent Out projects</h2>
          <div className="property-gallery-wrapper">
            <div className="property-gallery-grid">
              {imagesData.map((imageData, index) => (
                <div
                  key={index}
                  className="gallery-img-container"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => openOverlay(index)} // Add onClick event
                >
                  <img src={imageData.imgSrc} alt="" />
                  {hoveredImage === index && (
                    <div className="gallery-img-overlay">
                      {imageData.text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {selectedImage !== null && (
            <div className="gallery-enlarged-overlay show">
              <div className="gallery-enlarged-overlay-content">
                <img src={imagesData[selectedImage].imgSrc} alt="" />
                <div className="gallery-enlarged-overlay-text">
                  <p>{imagesData[selectedImage].text}</p>
                </div>
                <button className="close-btn" onClick={closeOverlay}>
                  <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CurrentProperties;
