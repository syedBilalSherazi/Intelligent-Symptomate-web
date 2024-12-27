import React, { useState } from "react";
import axios from "axios";
import './DiseaseDetectForm.css'; // Import the CSS file

const DiseaseDetectForm = () => {
  const [symptoms, setSymptoms] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms) {
      setError("Please enter symptoms");
      return;
    }
    setLoading(true);
    setError("");
    setResponseMessage("");
    
    try {
      const response = await axios.post("http://localhost:5000/api/disease/detect", {
        symptoms,
      });
      setResponseMessage(response.data.message);
    } catch (err) {
      setError("Error detecting disease, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="disease-detect-form">
      <h2>Detect Disease Based on Symptoms</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={symptoms}
          onChange={handleInputChange}
          placeholder="Enter your symptoms..."
          rows="5"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Detecting..." : "Detect Disease"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {responseMessage && <p className="response">{responseMessage}</p>}
    </div>
  );
};

export default DiseaseDetectForm;
