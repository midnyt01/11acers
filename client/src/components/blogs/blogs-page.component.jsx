// import { Link } from 'react-router-dom';
import Topbar from '../topbar/topbar.component';
import Footer from '../footer/footer.component'
import Blogimg1 from '../../assets/Jamtha_Layout_02-scaled-1-768x512.jpg';

import "./blogs.styled.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogPage = () => {
  return (
    <div>
        <Topbar />
        <div className='container m-auto'>
            <div className='blog-page-wrapper'>
                <h2>How to buy the best property</h2>
                <div className='blog-img-recent-blog-wrapper'>
                    <img src={Blogimg1} alt='' className='blog-hero-img'/>
                    <div style={{border:'1px solid rgba(88, 129, 87, 0.4)'}}>
                        <Link to='/blogs'>&nbsp; Read more blogs<FontAwesomeIcon icon="fa-solid fa-chevron-right" /></Link>
                        <div className='recent-blogs'>
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
                    </div>
                </div>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, cot, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectete eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>Get an insight of property</h3>
                <div className='blog-property-img-grid'>
                    <img src={Blogimg1} alt='' />
                    <img src={Blogimg1} alt='' />
                    <img src={Blogimg1} alt='' />
                </div>
                <h3>Final words</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default BlogPage;
