import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <span className="badge">AI-Powered Career Coaching</span>

        <h1 className="hero-title">
          Unlock Your Career <br /> Potential with AI
        </h1>

        <p className="hero-desc">
          Get personalized career guidance, resume optimization, and interview
          preparation powered by advanced AI technology. Your dream job is
          closer than you think.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started Free</button>
          <button className="btn-secondary">Watch Demo</button>
        </div>

        <div className="trial-info">
          <p>✔ No credit card required</p>
          <p>✔ 14-day free trial</p>
        </div>
      </div>

      <div className="hero-right">
        <img src="/ai-graph.jpg" alt="AI Growth Graph" className="hero-img" />

      </div>
    </div>
  );
};

export default HeroSection;
