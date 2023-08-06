import { Link } from 'react-router-dom';
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

                        <h4>23</h4>
                        <p>Estate agents</p>
                    </div>
                    <div className='cards-basic chooseus-card'>
                        <h4>INR 1Cr</h4>
                        <p>Sales since 2020</p>
                    </div>
                    <div className='cards-basic chooseus-card'>
                        <h4>10</h4>
                        <p>Cities served</p>
                    </div>
                    <div className='cards-basic chooseus-card'>
                        <h4>2,000+</h4>
                        <p>Sales transaction</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Chooseus;