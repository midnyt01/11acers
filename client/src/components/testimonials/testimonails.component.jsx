import React from 'react';
import TestimonialCard from '../testimonial-cards/testimonials-cards.component';
import './testimonials.styled.css';

const Testimonials = () => {
  const TESTIMONIALS = [
    {
        id: 0,
        review: 'Their expertise, responsiveness, and dedication made the process of buying a plot seamless and enjoyable. I highly recommend their services.',
        reviewerName: 'Sunil Guraw - Nagpur LIC',
    },
    {
        id: 1,
        review: 'The service provided by 11Acre was really satisfactory because of their transparency at each step.',
        reviewerName: 'Shalini Ghoradkar - Nagpur WCL',
    },
    {
        id: 2,
        review: 'Their Incredible Efficient and knowledgeable, making my plot purchase effortless. Highly recommended for a smooth and satisfying experience.',
        reviewerName: 'Milind Nagrale - Qatar',
    },
    {
        id: 3,
        review: 'Made buying my plot a breeze with their expert guidance and unmatched price. Highly recommend for a smooth and stress-free experience!',
        reviewerName: 'Shubham Ramteke – Chandrapur',
    },
    {
        id: 4,
        review: 'Dealing with my ideal plot with professionalism and efficiency. Highly recommended for a smooth and successful real estate experience.',
        reviewerName: 'Manish Pande - Mumbai IIT Kharagpur',
    },
  ];

  return (
    <div className="container-fluid m-auto">
      <h1 className="testimonies-title">Client Testimonials</h1>
      <p className="testimonies-subtitle">Have a look at what people say about us!</p>
      <div className="testimonies-wrapper">
        <div className="testimonies-container">
          <div className="testimonies-wrapper">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;