// src/pages/Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png"; // Path to your logo

const Dashboard = () => {
  const navigate = useNavigate();

  // Navigation functions
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
        <h1>
          Welcome to <span>Intelligent Symptomate</span>
        </h1>
        <p>Your trusted AI partner in healthcare.</p>
      </header>

      {/* Dashboard Buttons */}
      <div className="dashboard-buttons">
        <div
          className="dashboard-box highlight"
          onClick={() => handleNavigation("/detect-disease")}
        >
          <h2>Detect Disease</h2>
          <p>Analyze symptoms and get AI-driven insights.</p>
        </div>

        <div
          className="dashboard-box"
          onClick={() => handleNavigation("/health-articles")}
        >
          <h2>Health Articles</h2>
          <p>Explore the latest health news and tips.</p>
        </div>

        <div
          className="dashboard-box"
          onClick={() => handleNavigation("/our-team")}
        >
          <h2>Our Team</h2>
          <p>Meet the experts behind our innovation.</p>
        </div>

        <div
          className="dashboard-box"
          onClick={() => handleNavigation("/contact-us")}
        >
          <h2>Contact Us</h2>
          <p>Reach out to us for assistance or inquiries.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
