import Awardicon from '../../assets/award.png'
import Trophyicon from '../../assets/trophy.png'
import Medalicon from '../../assets/medal.png'

import './milestones.styled.css'
// import { Link } from 'react-router-dom';

const Milestones = () => {
  return (
    <div>
    <div className='container m-auto'>
        <div className="milestones-container">
            <div className='milestones-wrapper'>
                <h2 className='mt-5'>Project Emenities</h2>
                <p className='mb-5'>
                    our crededntials, affilitiaitons, or awards here. You can use the icons below to share logo or seals you want to highlights
                </p>
                <h3 className='mb-4'>Awards</h3>
                <div className='milestones-card-container mb-4'>
                    <div className='cards-basic milestones-card'>
                        <div class="shining-container">
                            <img src={Awardicon} alt='' />
                        </div>
                        <p>Cement Concrete Roads</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Trophyicon} alt='' />
                        <p>Sewage & Drainage Line</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Medalicon} alt='' />
                        <p>Underground Electricity</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <div class="shining-container">
                            <img src={Awardicon} alt='' />
                        </div>
                        <p>Plantation</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Trophyicon} alt='' />
                        <p>Underground Water line</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Medalicon} alt='' />
                        <p>Street Light</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <div class="shining-container">
                            <img src={Awardicon} alt='' />
                        </div>
                        <p>Strome Line</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Trophyicon} alt='' />
                        <p>Club House</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Medalicon} alt='' />
                        <p>Landscape garden</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Milestones;