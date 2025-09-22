import { GoogleGenerativeAI } from "@google/generative-ai";
require('dotenv').config();

// Put your API key here OR use environment variables
const API_KEY = process.env.API_KEY;

const client = new GoogleGenerativeAI(API_KEY);

export default client;
