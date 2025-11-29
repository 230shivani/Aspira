import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-container">

      <h2 className="how-heading">How It Works</h2>
      <p className="how-subheading">Get started in three simple steps</p>

      <div className="steps-container">
        
        {/* STEP 1 */}
        <div className="step">
          <div className="circle">01</div>
          <h3>Build Your Profile</h3>
          <p>
            Upload your resume and tell us about your career goals and
            aspirations.
          </p>
        </div>

        {/* LINE between circles */}
        <div className="line"></div>

        {/* STEP 2 */}
        <div className="step">
          <div className="circle">02</div>
          <h3>Get AI Insights</h3>
          <p>
            Receive personalized recommendations, interview prep,
            and resume optimization.
          </p>
        </div>

        {/* LINE */}
        <div className="line"></div>

        {/* STEP 3 */}
        <div className="step">
          <div className="circle">03</div>
          <h3>Land Your Dream Job</h3>
          <p>
            Apply with confidence using AI-generated cover letters and interview strategies.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
