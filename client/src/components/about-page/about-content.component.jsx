import { useState } from "react";

import Sliderpic1 from "../../assets/pexels-askar-abayev-5638731.jpg";
import Sliderpic2 from "../../assets/pexels-atef-khaled-1808387.jpg";
import Sliderpic3 from "../../assets/pexels-balljinder-singh-1544928.jpg";
import Sliderpic4 from "../../assets/pexels-italo-melo-2379005.jpg";
import Sliderpic5 from "../../assets/pexels-rahul-shah-1215695.jpg";
import Sliderpic6 from "../../assets/pexels-ravi-k-938639.jpg";
import Aboutimg1 from "../../assets/Mauli_09-Birds-eye-1024x683-1-768x512.jpg";
import Aboutimg2 from "../../assets/186_Scene-02-scaled-2-768x432.jpg";
import Companylogo from "../../assets/11_acres_logo.png"

import './about.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const AboutContent = () => {

    // const mapEmbedURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM_LEVEL!4m5!3m4!1s0x0:0x0!8m2!3dYOUR_LATITUDE!4dYOUR_LONGITUDE';

    const [hoveredImage, setHoveredImage] = useState(null);

    const imagesData = [
        { 
            imgSrc: Sliderpic1, 
            name: 'Mr Saurabh V Katole',
            description: 'Director (11 Acre)',
            link: 'https://www.linkedin.com'
        },
        { imgSrc: Sliderpic2, 
            name: 'Abhishek Anasane' ,
            description: 'Advisor Associate',
            link: 'https://www.linkedin.com'
        },
        { 
            imgSrc: Sliderpic3, 
            name: 'Roopam Sontakke',
            description: 'Advisor Associate',
            link: 'https://www.linkedin.com' 
        },
        { 
            imgSrc: Sliderpic4, 
            name: 'Akshay Vinchurkar',
            description: 'Advisor Associate',
            link: 'https://www.linkedin.com' 
        },
        {   
            imgSrc: Sliderpic5, 
            name: 'Jagdish Yenaskar',
            description: 'Advisor Associate',
            link: 'https://www.linkedin.com' 
        },
        {   
            imgSrc: Sliderpic6, 
            name: 'Rishikesh Mharaskolhe',
            description: 'Advisor Associate',
            link: 'https://www.linkedin.com' 
        },
    ];

    return (
        <div>
            <div className="container m-auto">
                <div className="mt-4"></div>
                <div className="about-wrapper">
                    <h2>About 11 Acre</h2>
                    <div className="about-content-card-grid">
                        <div className="about-card ">
                            <div className="about-card-img-wrapper width-30">
                                <img src={Aboutimg1} alt=""/>
                            </div>
                            <div className="about-card-content width-60">
                                <h3>Our Story</h3>
                                <p>Welcome to 11 Acre, where real estate dreams come to life! With over 8+ years of
                                    experience in the industry, we have established ourselves as a premier name in the world of
                                    real estate in Nagpur. Our passion for crafting exceptional plots, layouts, and townships sets
                                    us apart and has earned us the trust of over 150+ satisfied clients.
                                </p>
                                <p>At 11 Acre, we take immense pride in our specialization in the plotting business. Our
                                    meticulous attention to detail and a keen understanding of the local market make us your go-
                                    to choice for investment plots that hold great potential. Whether you&#39;re looking to invest or
                                    build your dream home, we have the perfect canvas waiting for you.
                                </p>
                                <p>What truly sets us apart is our commitment to providing not just plots, but opportunities. Our
                                    company is a testament to our dedication to growth, and as one of the fastest-growing real
                                    estate companies in Nagpur, we are driven to create thriving communities that stand the test
                                    of time.
                                </p>
                                <p>Join us on this journey to unlock the potential of real estate. Explore our carefully curated
                                    plots, layouts, and townships, and let us help you find the perfect space to call your own.
                                    Your dreams, our expertise – together, let&#39;s build a future that&#39;s as solid as the foundations we
                                    lay.
                                    Welcome to 11 Acre, where your vision meets our legacy
                                </p>
                            </div>
                        </div>

                        <h2 className="mt-5">At 11 Acre</h2>
                        <div className="about-card">
                            <div className="about-card-content width-60">
                                <h3>Our Values:</h3>
                                <p>Building Dreams, Fostering Trust, and Creating Homes
                                    Welcome to company logo, where our foundation is built on a steadfast commitment to
                                    core values that guide every interaction, transaction, and endeavour. We believe that a
                                    successful real estate journey is not just about buying or selling property; it&#39;s about creating
                                    homes, building dreams, and fostering unwavering trust within our community.
                                </p>
                            </div>
                            <div className="about-card-img-wrapper width-30">
                                <img src={Aboutimg2} alt=""/>
                            </div>
                        </div>
                        <div className="about-card w-100">
                            <div className="about-card-content">
                                <h3><FontAwesomeIcon icon="fa-solid fa-caret-right" />Building Dreams:</h3>
                                <p>We understand that each property represents more than just bricks and mortar; it&#39;s a canvas
                                    upon which dreams are painted. Whether you&#39;re a first-time homebuyer envisioning a cozy
                                    haven for your family or an investor looking to grow your portfolio, we are dedicated to
                                    turning your aspirations into reality. Our passionate team works tirelessly to match your
                                    dreams with properties that resonate with your unique vision and lifestyle, because we
                                    believe that your dreams are the foundation of our success.
                                </p>

                                <h3><FontAwesomeIcon icon="fa-solid fa-caret-right" />Fostering Trust:</h3>
                                <p>Trust is the cornerstone of any successful relationship, and in the realm of real estate, it&#39;s
                                paramount. We are committed to earning and preserving your trust through transparency,
                                honesty, and integrity. Our experts take the time to educate you about the market, the process,
                                and the nuances of every transaction. We believe that by arming you with knowledge, you
                                can make confident decisions that align with your best interests. With [Your Company
                                Name], you&#39;re not just a client; you&#39;re a valued partner in a journey of trust-building.
                                </p>

                                <h3><FontAwesomeIcon icon="fa-solid fa-caret-right" />Creating Homes:</h3>
                                <p>A house becomes a home when it resonates with your personality, needs, and aspirations. We
                                    understand that a home is more than just physical space; it&#39;s where memories are created, and
                                    lives are nurtured. Our team of experienced professionals is dedicated to helping you find a
                                    place that truly resonates with your lifestyle and needs. We believe that the process of buying
                                    or selling a home is an emotional journey, and we are here to guide you through every step,
                                    making it a smooth and fulfilling experience.
                                </p>

                                <h3><FontAwesomeIcon icon="fa-solid fa-caret-right" />Community Engagement:</h3>
                                <p>As a local real estate company, we recognize our role in shaping and enriching the
                                communities we serve. We actively engage with local initiatives, charities, and causes to give
                                back and contribute to the betterment of our neighbourhoods. We believe that strong
                                communities are built on collaboration and support, and we are proud to play our part in
                                making our cities vibrant and welcoming.
                                </p>

                                <h3><FontAwesomeIcon icon="fa-solid fa-caret-right" />Innovation and Excellence:</h3>
                                <p>The real estate landscape is dynamic and ever-evolving. To stay ahead, we embrace
                                innovation and continuously seek new ways to enhance the client experience. Our team stays
                                informed about the latest industry trends and technologies, ensuring that you receive cutting-
                                edge solutions tailored to your needs. Excellence is not just a goal; it&#39;s our standard, and we
                                strive to exceed your expectations at every turn.
                                </p>

                                <h3><FontAwesomeIcon icon="fa-solid fa-caret-right" />Innovation and Excellence:</h3>
                                <p>
                                The real estate landscape is dynamic and ever-evolving. To stay ahead, we embrace
                                innovation and continuously seek new ways to enhance the client experience. Our team stays
                                informed about the latest industry trends and technologies, ensuring that you receive cutting-
                                edge solutions tailored to your needs. Excellence is not just a goal; it&#39;s our standard, and we
                                strive to exceed your expectations at every turn.
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 padding-10 values-card">
                            <p className="f-size-1"><FontAwesomeIcon icon="fa-solid fa-quote-left" />At <img src={Companylogo} alt="" className="inline-company-logo"/>, our values are not just words on a page; they&#39;re the compass that guides
                                our actions and the legacy we&#39;re committed to leaving behind. Whether you&#39;re looking to buy,
                                invest, or explore, we invite you to experience real estate with a team that values your
                                dreams, trusts your journey, and helps you create a place you&#39;re proud to call home. Welcome
                                to a world where values matter and real estate transcends transactions.
                            </p>
                        </div>
                        
                    </div>
                    <h2>Our Team</h2>
                    <div>
                    <p><FontAwesomeIcon icon="fa-solid fa-quote-left" />
                        Behind every successful real estate transaction is a team of dedicated professionals who work
                        tirelessly to bring your dreams to life. At <img src={Companylogo} alt="" className="inline-company-logo"/>, we take immense pride in introducing you to the passionate individuals who form the backbone of our organization.
                        With diverse expertise, unwavering commitment, and a shared dedication to your aspirations,
                        our team is here to guide you through every step of your real estate journey.
                    </p>

                    <h4>Mr Saurabh V Katole – Director (11 Acre)</h4>
                    <p>
                        A visionary Professional with 8+ years of experience in the real estate industry, Mr Saurabh
                        established 11 Acre with a singular mission – to redefine real estate experiences through
                        innovation, transparency, and exceptional service. With a deep understanding of market
                        trends and a commitment to client success, he guides the company&#39;s strategic direction while
                        setting an example of integrity and excellence.
                    </p>

                    <h4>Sales, Client Care &amp; Listings Specialists</h4>
                    <p>
                        Meet our seasoned team who bring an unmatched level of market insight and negotiation
                        prowess to the table. With a wealth of experience in buying and selling properties, they are
                        dedicated to understanding your unique needs and tailoring solutions that align with your
                        goals. Whether you&#39;re looking to buy your dream home or maximize the value of your
                        property, our specialists are here to guide you every step of the way.
                    </p>
                    <div className="mb-2"><br /></div>
                    </div>
                    {/* <div className="about-slider">
                        <div className="about-slider-grid">
                            {imagesData.map((imageData, index) => (
                                <div
                                key={index}
                                className="about-slider-container"
                                onMouseEnter={() => setHoveredImage(index)}
                                onMouseLeave={() => setHoveredImage(null)}
                                >
                                <img src={imageData.imgSrc} alt="" />
                                {
                                    hoveredImage === index && 
                                    <div className="about-slider-overlay">
                                        <p>{imageData.name}</p>
                                        <p>{imageData.description}</p>
                                        <a href={imageData.link} ><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                                    </div>
                                }
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AboutContent;   