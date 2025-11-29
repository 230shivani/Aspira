import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <div className="cta-wrapper">

      <div className="cta-box">

        <div className="cta-icon">⚡</div>

        <h2 className="cta-title">Ready to Transform Your Career?</h2>
        <p className="cta-subtitle">
          Join thousands of professionals who are already using AI to land their
          dream jobs
        </p>

        <button className="cta-button">
          Sign Up Now - It's Free →
        </button>

      </div>

    </div>
  );
};

export default CTASection;
