import Topbar from "../topbar/topbar.component";
import Footer from "../footer/footer.component";

import './properties.styled.css';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties.context";

const RentoutProperties = () => {

  const {allRentalProjects} = useContext(PropertiesContext)

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


  return (
    <div>
      <Topbar />
      <div className="container m-auto">
        <div className="properties-wrapper">
          <h2>Rent Out Projects</h2>
          <div className="property-gallery-wrapper">
            <div className="property-gallery-grid">
              {allRentalProjects.map((imageData, index) => (
                <div
                  key={index}
                  className="gallery-img-container"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  onClick={() => openOverlay(index)} // Add onClick event
                >
                  <img src={imageData.ImageUrl} alt="" />
                  {hoveredImage === index && (
                    <div className="gallery-img-overlay">
                      {imageData.Description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {selectedImage !== null && (
            <div className="gallery-enlarged-overlay show">
              <div className="gallery-enlarged-overlay-content">
                <img src={allRentalProjects[selectedImage].ImageUrl} alt="" />
                <div className="gallery-enlarged-overlay-text">
                  <p>{allRentalProjects[selectedImage].Description}</p>
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

export default RentoutProperties;
