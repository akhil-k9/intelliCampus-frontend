// geminiClient.js
import { GoogleGenerativeAI } from "@google/generative-ai";

import axios from "axios";
import { API_URL } from "./api.js";




let API_KEY = "AIzaSyCTFuBI4P1OUX1_KbhEL7DQg-1AE1OEZVA";

// If not available in .env, try backend endpoint
if (!API_KEY) {
  try {
    const response = await axios.get(`${API_URL}/geminiKey`);
    API_KEY = response.data.apiKey;
  } catch (err) {
    console.error("❌ Failed to fetch Gemini API key from backend:", err.message);
  }
}

if (!API_KEY) {
  throw new Error("❌ Gemini API key missing. Set GEMINI_API_KEY in .env or provide via backend.");
}

const client = new GoogleGenerativeAI(API_KEY);

export default client;
