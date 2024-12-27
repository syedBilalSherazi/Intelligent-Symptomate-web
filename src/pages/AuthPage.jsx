import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./FireBase"; // Firebase configuration
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import logo from "../assets/Logo.png"; // Add the path to your logo

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}!`);
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Email Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password); // Firebase email login
      alert("Logged in successfully!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Email Sign Up
  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Firebase sign-up
      alert("Account created successfully! You can now log in.");
      setIsSignUp(false); // Redirect to login form
    } catch (err) {
      setError(err.message || "Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Forgot Password
  const handleForgotPassword = () => {
    alert("Redirecting to Forgot Password page...");
    navigate("/forgot-password");
  };

  return (
    <div className="auth-page">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      {/* Google Login */}
      <button onClick={handleGoogleLogin} className="google-btn" disabled={loading}>
        {loading ? "Loading..." : "Continue with Google"}
      </button>

      <div className="divider">OR</div>

      {/* Email Login/Sign Up Form */}
      <form onSubmit={isSignUp ? handleEmailSignUp : handleEmailLogin} className="email-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="email-btn" disabled={loading}>
          {loading ? (isSignUp ? "Signing Up..." : "Logging in...") : isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>

      {/* Forgot Password for Login */}
      {!isSignUp && (
        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      )}

      {/* Toggle between Login and Sign Up */}
      <p className="toggle-auth" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Log in" : "Don't have an account? Sign up"}
      </p>

      {error && <p className="error-message">{error}</p>} {/* Show error if any */}
    </div>
  );
};

export default AuthPage;
