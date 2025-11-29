import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "/test1.jpg",
      text: `"FuturePath AI helped me land my dream job at Google! The mock interviews were incredibly realistic and the resume feedback was spot-on."`,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Meta",
      image: "/test2.jpg",
      text: `"The personalized career roadmap completely transformed my job search. I went from feeling lost to getting three offers in two months!"`,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Amazon",
      image: "/test3.jpg",
      text: `"The AI-powered resume critique identified issues I never noticed. After implementing the changes, my interview callback rate tripled!"`,
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-container">

      <h2 className="test-heading">Loved by Professionals Worldwide</h2>
      <p className="test-subheading">
        Join thousands who've transformed their careers
      </p>

      <div className="testimonial-card">
        <button className="arrow left" onClick={prevSlide}>❮</button>

        <div className="content">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="profile-img"
          />

          <div className="stars">★★★★★</div>

          <p className="review-text">{testimonials[index].text}</p>

          <h3 className="name">{testimonials[index].name}</h3>
          <p className="role">{testimonials[index].role}</p>
        </div>

        <button className="arrow right" onClick={nextSlide}>❯</button>
      </div>

      <div className="dots">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
