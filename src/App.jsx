// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LearnMorePage from "./pages/LearnMorePage";
import AuthPage from "./pages/AuthPage"; // AuthPage for Login/Signup
import DashboardPage from "./pages/DashboardPage"; // DashboardPage for logged-in users
import OurTeam from "./pages/OurTeam";  // Import OurTeam page
import HealthArticlePage from "./pages/HealthArticlePage";  // Import HealthArticlePage
import ContactUs from "./pages/ContactUs"; // Import ContactUs page
import DetectDiseasePage from "./pages/DiseaseDetectForm"; // Import DetectDiseasePage

import { auth } from "./pages/FireBase";  // Firebase setup
import { onAuthStateChanged } from "firebase/auth"; // Monitor auth state

function App() {
  const [user, setUser] = useState(null); // Track authenticated user

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state to logged-in user or null
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
        <Route path="/learn-more" element={<LearnMorePage />} /> {/* Learn More Page */}

        {/* If user is logged in, show Dashboard, else show AuthPage */}
        <Route
          path="/dashboard"
          element={user ? <DashboardPage /> : <AuthPage />} // Conditional rendering based on user authentication
        />

        {/* Detect Disease Page */}
        <Route path="/detect-disease" element={<DetectDiseasePage />} />

        {/* Our Team Page */}
        <Route path="/our-team" element={<OurTeam />} />

        {/* Health Articles Page */}
        <Route path="/health-articles" element={<HealthArticlePage />} />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />  {/* Add Contact Us Route */}

        {/* Login/Signup Page */}
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
