// server.js
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5000;

// Middleware for parsing JSON and enabling CORS
app.use(express.json());
app.use(cors());

// Set up OpenAI API client using Axios
const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
});

// Disease detection endpoint
app.post("/api/disease/detect", async (req, res) => {
  const { symptoms } = req.body;
  if (!symptoms) {
    return res.status(400).json({ message: "Symptoms are required" });
  }

  try {
    // Call OpenAI API with the symptoms provided by the user
    const response = await openai.post("/chat/completions", {
      model: "gpt-3.5-turbo",  // Correct model for chat-based API
      messages: [
        { role: "system", content: "You are an assistant that helps diagnose diseases based on symptoms." },
        { role: "user", content: `What disease might I have based on these symptoms: ${symptoms}` },
      ],
    });

    // Check if response format is as expected
    const message = response.data?.choices?.[0]?.message?.content;

    if (message) {
      res.json({ message });
    } else {
      res.status(500).json({ message: "Error processing OpenAI response" });
    }
  } catch (error) {
    console.error("Error with OpenAI API:", error.response ? error.response.data : error.message);
    res.status(500).json({ message: "Error detecting disease" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
