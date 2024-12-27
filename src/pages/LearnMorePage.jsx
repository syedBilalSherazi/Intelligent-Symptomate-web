// LearnMorePage.js (React Component)
//D:\Web project\Front-end\frontend\src\pages\LearnMorePage.jsx
import React from "react";
import './LearnMorePage.css';  // Make sure you import the CSS

const LearnMorePage = () => {
  return (
    <div className="learn-more-page">
      <div className="page-header">
        <h1>Learn More About Intelligent Symptomate</h1>
        <p>Discover how our app uses AI to revolutionize healthcare and diagnose symptoms.</p>
      </div>
      <div className="sections-container">
        <div className="section-card">
          <h3>AI in Healthcare</h3>
          <p>We leverage advanced AI algorithms to provide personalized health insights.</p>
        </div>
        <div className="section-card">
          <h3>Accurate Diagnoses</h3>
          <p>Our system helps identify possible diseases based on your symptoms.</p>
        </div>
        <div className="section-card impact">
          <h3>Making an Impact</h3>
          <p>Transforming healthcare with actionable insights and treatments.</p>
        </div>
      </div>
      <div className="cta-container">
        <h2>Get Started with Intelligent Symptomate</h2>
        <p>Try it now and get personalized healthcare recommendations.</p>
        <button className="cta-button">Contact Us</button>
      </div>
    </div>
  );
}

export default LearnMorePage;
