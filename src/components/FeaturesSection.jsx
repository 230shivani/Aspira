import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div className="features-section">
      
      <h2 className="features-heading">
        Powerful Features to Accelerate Your Career
      </h2>
      <p className="features-subheading">
        Everything you need to stand out in today's competitive job market
      </p>

      <div className="features-grid">

        {/* Feature 1 */}
        <div className="feature-card">
          <div className="icon blue"></div>
          <h3>AI-Powered Resume Critique</h3>
          <p>
            Get instant, detailed feedback on your resume with actionable 
            suggestions to make it stand out to recruiters.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="icon purple"></div>
          <h3>Mock Interviews</h3>
          <p>
            Practice with AI-driven mock interviews tailored to your industry 
            and get real-time feedback.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="icon orange"></div>
          <h3>Personalized Career Roadmaps</h3>
          <p>
            Receive customized career paths and actionable steps based on your 
            goals, skills, and market trends.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <div className="icon green"></div>
          <h3>Job Match Intelligence</h3>
          <p>
            Our AI analyzes thousands of job postings to find the perfect 
            matches for your unique profile and aspirations.
          </p>
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;
