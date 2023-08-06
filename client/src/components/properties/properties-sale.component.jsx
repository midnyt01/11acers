import { Link } from 'react-router-dom';
import './properties.styled.css'


import Propertyimg1 from '../../assets/186_Scene-02-scaled-2-768x432.jpg';
import Propertyimg2 from '../../assets/Jamtha_Layout_02-scaled-1-768x512.jpg';
import Propertyimg3 from '../../assets/Mauli-Nagar-021-1024x683-1-768x512.jpg';

const Propertysale = () => {
  return (
    <div>
    <div className='container m-auto'>
        <div className='propertysale-wrapper'>
            <h2 className='mt-5 mb-5 secondary-text'>Properties for Sale</h2>
            <div className='propertysale-card-container mb-4'>
                <div className='cards-basic propertysale-card'>
                    <img src={Propertyimg1} alt='' />
                    <p>Commercial space</p>
                    <h4>123 Anywhere St.</h4>
                    <p>Great workplace for diversity</p>
                </div>
                <div className='cards-basic propertysale-card'>
                    <img src={Propertyimg2} alt='' />
                    <p>Office building</p>
                    <h4>123 Anywhere St.</h4>
                    <p>Great workplace for diversity</p>
                </div>
                <div className='cards-basic propertysale-card'>
                    <img src={Propertyimg3} alt='' />
                    <p>Commercial space</p>
                    <h4>123 Anywhere St.</h4>
                    <p>Great workplace for diversity</p>
                </div>
            </div>
            <div className='d-flex jc-center'>
                <Link to='/' className='see-more-btn'>See More</Link>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Propertysale;