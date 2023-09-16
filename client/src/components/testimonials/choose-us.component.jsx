import { Link } from 'react-router-dom';

import Chooseusicon1 from '../../assets/agreement.png';
import Chooseusicon2 from '../../assets/checklist.png';
import Chooseusicon3 from '../../assets/compliance.png';
import Chooseusicon4 from '../../assets/signing.png';

import './testimonials.styled.css'

const Chooseus = () => {
  return (
    <div>
    <div className='container m-auto'>
        <div className='chooseus-container'>
            <div className='chooseus-wrapper'>
                <h2 className='mt-5 mb-5'>Why choose <br />11 Acres</h2>
                <div className='chooseus-card-container mb-4'>
                    <div className='cards-basic chooseus-card'>
                        <img src={Chooseusicon2} alt='Clear Title Property' />
                        <h4>Rera Registered Property</h4>
                        <p>We only deal in clear title properties. Customer can check all the documents related to the property.</p>
                    </div>
                    <div className='cards-basic chooseus-card'>
                        <img src={Chooseusicon3} alt='Clear Title Property' />
                        <h4>Legal Help</h4>
                        <p>Our legal team is always ready to help investors to know the entire legal process for purchasing plots.</p>
                    </div>
                    <div className='cards-basic chooseus-card'>
                        <img src={Chooseusicon4} alt='Clear Title Property' />
                        <h4>Loan Facility</h4>
                        <p>We are having tie ups with nationalized and private banks for loan facility on every project.</p>
                    </div>
                    <div className='cards-basic chooseus-card'>
                        <img src={Chooseusicon1} alt='Clear Title Property' />
                        <h4>Document Assistance</h4>
                        <p>We explain and provide each and every required documents related to purchase of plots. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Chooseus;