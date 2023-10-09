import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { PropertiesContext } from "../../context/properties.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './properties.styled.css';

const Propertysale = () => {
    const { allCurrentProjects } = useContext(PropertiesContext);
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
    <div className='container m-auto'>
        <div className='propertysale-wrapper'>
            <h2 className='mt-5 mb-5 secondary-text'>Current Projects</h2>
            <div className='seemorebtn-wrapper'>
                <Link to='/properties/current-projects' className='btn underline-btn'>See More</Link>
            </div>
            <div className="property-gallery-wrapper">
                <div className="property-gallery-grid">
                {allCurrentProjects &&
                    allCurrentProjects.map((imageData, index) => (
                    <div
                        key={index}
                        className="gallery-img-container"
                        onClick={() => openOverlay(index)} // Add onClick event
                    >
                        <div className="gallery-img">
                        <img src={imageData.ImageUrl} alt="" />
                        <div className="gallery-img-description">
                            <h3>{imageData.Title}</h3>
                            <p>{imageData.Description}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {selectedImage !== null && (
                <div className="gallery-enlarged-overlay show">
                <div className="gallery-enlarged-overlay-content">
                    <img
                    src={allCurrentProjects[selectedImage].ImageUrl}
                    alt=""
                    />
                    <div className="gallery-enlarged-overlay-text">
                    <p>{allCurrentProjects[selectedImage].Description}</p>
                    </div>
                    <button className="close-btn" onClick={closeOverlay}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </button>
                </div>
                </div>
            )}
            <div className='d-flex jc-center'>
                <Link to='/properties/rentout-projects' className='see-more-btn'>Check out Rented out projects</Link>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Propertysale;