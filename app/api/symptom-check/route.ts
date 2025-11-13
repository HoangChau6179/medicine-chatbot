import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { symptoms } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const symptomList = symptoms
      .map((s: any) => `${s.name} (${s.severity}, duration: ${s.duration})`)
      .join(", ");

    const prompt = `As a medical AI assistant, analyze these symptoms: ${symptomList}

Please provide:
1. Possible conditions (educational purposes only)
2. General recommendations
3. When to seek medical attention
4. Self-care tips

IMPORTANT: Emphasize that this is educational information only and the user should consult a healthcare professional for proper diagnosis and treatment.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ analysis: text });
  } catch (error: any) {
    console.error("Error in symptom check API:", error);
    return NextResponse.json(
      { error: error.message || "Failed to analyze symptoms" },
      { status: 500 }
    );
  }
}
