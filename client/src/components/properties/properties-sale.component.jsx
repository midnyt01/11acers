 import { Link } from 'react-router-dom';
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties.context";


import Propertyimg1 from '../../assets/186_Scene-02-scaled-2-768x432.jpg';
import Propertyimg2 from '../../assets/Jamtha_Layout_02-scaled-1-768x512.jpg';
import Propertyimg3 from '../../assets/Mauli-Nagar-021-1024x683-1-768x512.jpg';

import './properties.styled.css';

const Propertysale = () => {
  return (
    <div>
    <div className='container m-auto'>
        <div className='propertysale-wrapper'>
            <h2 className='mt-5 mb-5 secondary-text'>Current Projects</h2>
            <div className='seemorebtn-wrapper'>
                <Link to='/properties/current-projects' className='btn underline-btn'>See More</Link>
            </div>
            <div className='propertysale-card-container mb-4'>
                <div className='cards-basic propertysale-card'>
                    <img src={Propertyimg1} alt='' />
                    <h4>123 Anywhere St.</h4>
                    <p>Great workplace for diversity</p>
                </div>
                <div className='cards-basic propertysale-card'>
                    <img src={Propertyimg2} alt='' />
                    <h4>123 Anywhere St.</h4>
                    <p>Great workplace for diversity</p>
                </div>
                <div className='cards-basic propertysale-card'>
                    <img src={Propertyimg3} alt='' />
                    <h4>123 Anywhere St.</h4>
                    <p>Great workplace for diversity</p>
                </div>
            </div>
            <div className='d-flex jc-center'>
                <Link to='/properties/rentout-projects' className='see-more-btn'>Check out Rented out projects</Link>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Propertysale;