import Roads from '../../assets/road.png'
import Sewage  from '../../assets/sewage.png'
import Electricity from '../../assets/tower.png'
import Plantation from '../../assets/cultivation.png'
import Waterline from '../../assets/valve.png'
import Light from '../../assets/street-lamp.png'
import Stromeline from '../../assets/disaster-recovery.png'
import Club from '../../assets/clubhouse.png'
import Garden from '../../assets/park.png'

import './milestones.styled.css'

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
                <div className='milestones-card-container mb-4'>
                    <div className='cards-basic milestones-card'>
                        <img src={Roads} alt='' />
                        <p>Cement Concrete Roads</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Sewage} alt='' />
                        <p>Sewage & Drainage Line</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Electricity} alt='' />
                        <p>Underground Electricity</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Plantation} alt='' />
                        <p>Plantation</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Waterline} alt='' />
                        <p>Underground Water line</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Light} alt='' />
                        <p>Street Light</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Stromeline} alt='' />
                        <p>Strome Line</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Club} alt='' />
                        <p>Club House</p>
                    </div>
                    <div className='cards-basic milestones-card'>
                        <img src={Garden} alt='' />
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