import { Link } from 'react-router-dom';
import Blogimg1 from '../../assets/Jamtha_Layout_02-scaled-1-768x512.jpg';

import "./blogs.styled.css";

const Blogs = () => {
  return (
    <div>
      <div className="container m-auto">
        <div className="blogs-container">
          <h2>Blogs</h2>
          <div className="blogs-wrapper">
            <div className="cards-basic blogs-card">
              <img src={Blogimg1} alt="" />
              <div className='padding-10'>
                <Link to='/blogpage'>How to buy best property</Link>
                <p>Lorem ipsum dor emi por de rusee, Lorem ipsum dor emi por de rusee</p>
                <div>
                  <span>7 july, '23</span> <span>by Saiyed Farhan</span>
                </div>
              </div>
            </div>

            <div className="cards-basic blogs-card">
              <img src={Blogimg1} alt="" />
              <div className='padding-10'>
                <Link to='/blogpage'>How to buy best property</Link>
                <p>Lorem ipsum dor emi por de rusee, Lorem ipsum dor emi por de rusee</p>
                <div>
                  <span>7 july, '23</span> <span>by Saiyed Farhan</span>
                </div>
              </div>
            </div>

            <div className="cards-basic blogs-card">
              <img src={Blogimg1} alt="" />
              <div className='padding-10'>
              <Link to='/blogpage'>How to buy best property</Link>
              <p>Lorem ipsum dor emi por de rusee, Lorem ipsum dor emi por de rusee</p>
              <div>
                <span>7 july, '23</span> <span>by Saiyed Farhan</span>
              </div>
              </div>
            </div>

            <div className="cards-basic blogs-card">
              <img src={Blogimg1} alt="" />
              <div className='padding-10'>
              <Link to='/blogpage'>How to buy best property</Link>
              <p>Lorem ipsum dor emi por de rusee, Lorem ipsum dor emi por de rusee</p>
              <div>
                <span>7 july, '23</span> <span>by Saiyed Farhan</span>
              </div>
              </div>
            </div>
          </div>
          <div className='mt-5'></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
