"use server";

import { answerPhoneQuestions } from "@/ai/flows/answer-phone-questions";

export async function handleInquiry(query: string) {
  try {
    const result = await answerPhoneQuestions({ query });
    return result.answer;
  } catch (error) {
    console.error("Error handling inquiry:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
}
