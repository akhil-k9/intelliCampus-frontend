import { GoogleGenerativeAI } from "@google/generative-ai";

// Put your API key here OR use environment variables
const API_KEY = "AIzaSyCTFuBI4P1OUX1_KbhEL7DQg-1AE1OEZVA";

const client = new GoogleGenerativeAI(API_KEY);

export default client;
