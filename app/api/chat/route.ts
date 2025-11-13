import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const MEDICAL_CONTEXT = `You are a helpful medical AI assistant. Your role is to:
1. Provide general health information and wellness advice
2. Help users understand symptoms (but always recommend consulting a healthcare professional for diagnosis)
3. Offer lifestyle and preventive health tips
4. Answer questions about medications, treatments, and medical procedures in an educational manner
5. Be empathetic, clear, and professional

IMPORTANT DISCLAIMERS:
- Always remind users that you're an AI assistant and not a replacement for professional medical advice
- For serious symptoms or emergencies, always advise seeking immediate medical attention
- Never provide specific diagnoses or prescribe medications
- Encourage users to consult healthcare professionals for personalized medical advice`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured. Please add GEMINI_API_KEY to your .env.local file" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Format chat history for Gemini
    const chatHistory = history?.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    })) || [];

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: MEDICAL_CONTEXT }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'm here to provide helpful medical information while always encouraging users to consult healthcare professionals for personalized advice. How can I assist you today?" }],
        },
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
