import axios from "axios";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

export const generateLessonContent = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(API_URL, {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
  } catch (error) {
    console.error("Error generating lesson:", error);
    return "Error generating lesson. Please try again.";
  }
};
