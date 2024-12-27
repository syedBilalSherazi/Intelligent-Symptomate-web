//D:\Web project\Front-end\frontend\src\pages\ProtectedRoute.jsx
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"; // To redirect if not authenticated
import { auth } from "./FireBase"; // Import Firebase auth instance

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Track authentication state
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (user === null) {
    return <Redirect to="/" />; // Redirect to login if not authenticated
  }

  return children; // Render protected content if authenticated
};

export default ProtectedRoute;
