import React from 'react';
import { Slide } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../testimonials/testimonials.styled.css';

const TestimonialCard = ({ testimonial }) => {
  const { id, review, reviewerName } = testimonial;

  return (
    <Slide right delay={id * 200}>
      <div className="testimonial-container">
        <div className="testimonial-wrapper">
          <div className="review-container">
            <p className="review">{review}</p>
            <div className="testimonial-pointer"></div>
          </div>
          <div className="reviewer-container">
            <div className="reviewer-image-container">
              <div className="reviewer-image">
                <FontAwesomeIcon icon="fa-solid fa-user" size="2xl" />
              </div>
            </div>
            <div className="reviewer-info">
              <p className="reviewer-name">{reviewerName}</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TestimonialCard;
