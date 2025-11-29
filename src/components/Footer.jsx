import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* LEFT SECTION */}
        <div className="footer-brand">
          <div className="footer-logo">FP</div>

          <p className="footer-text">
            Your AI-powered career coach for landing your dream job.
          </p>

          <div className="footer-socials">
            <div className="social-icon">🌐</div>
            <div className="social-icon">🐦</div>
            <div className="social-icon">📸</div>
            <div className="social-icon">💼</div>
          </div>
        </div>

        {/* COLUMNS */}
        <div className="footer-columns">

          <div className="footer-col">
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>AI Technology</p>
            <p>Success Stories</p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
            <p>GDPR</p>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Community</p>
            <p>FAQ</p>
            <p>Contact Support</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 FuturePath AI. All rights reserved.</p>
        <p className="email">📧 support@futurepath.ai</p>
      </div>

    </footer>
  );
};

export default Footer;
