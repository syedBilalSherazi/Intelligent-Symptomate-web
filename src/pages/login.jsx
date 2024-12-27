//D:\Web project\Front-end\frontend\src\pages\login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./FireBase"; // Your Firebase configuration
import "./Login.css"; // Custom styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Signup
  const [forgotPassword, setForgotPassword] = useState(false); // Show forgot password input
  const navigate = useNavigate();

  // Handle Login or Signup with email and password
  const handleLoginOrSignup = async (e) => {
    e.preventDefault();
    try {
      if (forgotPassword) {
        // Forgot password flow
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent!");
        setForgotPassword(false); // Reset back to login
      } else if (isSignup) {
        // Signup flow
        await axios.post("http://localhost:5000/api/auth/signup", { email, password });
        alert("Signup successful! Please log in.");
        setIsSignup(false);
      } else {
        // Login flow
        const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Redirect to Dashboard
      }
    } catch (error) {
      alert(
        forgotPassword
          ? "Failed to reset password"
          : isSignup
          ? "Signup failed"
          : "Login failed"
      );
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google login result:", result);
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (error) {
      alert("Google login failed");
    }
  };

  return (
    <div className="login-page">
      <h1>{forgotPassword ? "Reset Password" : isSignup ? "Signup" : "Login"}</h1>
      <form onSubmit={handleLoginOrSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {!forgotPassword && (
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        )}

        {/* Forgot Password Button */}
        {forgotPassword ? (
          <button type="submit">Send Reset Email</button>
        ) : (
          <button type="submit">{isSignup ? "Signup" : "Login"}</button>
        )}
      </form>

      {!forgotPassword && (
        <>
          <button className="google-btn" onClick={handleGoogleLogin}>
            Login with Google
          </button>
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setIsSignup(!isSignup);
                setForgotPassword(false); // Ensure reset is hidden when toggling
              }}
            >
              {isSignup ? "Login" : "Signup"}
            </span>
          </p>
          <p>
            <span
              className="forgot-link"
              onClick={() => {
                setForgotPassword(true);
                setIsSignup(false); // Ensure signup is hidden when resetting
              }}
            >
              Forgot Password?
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
