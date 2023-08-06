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
                <h2 className='mt-5'>Our Milestones</h2>
                <p className='mb-5'>
                    our crededntials, affilitiaitons, or awards here. You can use the icons below to share logo or seals you want to highlights
                </p>
                <h3 className='mb-4'>Awards</h3>
                <div className='milestones-card-container mb-4'>
                    <div className='cards-basic milestones-card'>
                        <div class="shining-container">
                            <img src={Awardicon} alt='' />
                        </div>
                        <h4>2022</h4>
                        <p>Great workplace for diversity</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Trophyicon} alt='' />
                        <h4>2022</h4>
                        <p>Great workplace for diversity</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Medalicon} alt='' />
                        <h4>2022</h4>
                        <p>Great workplace for diversity</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Milestones;