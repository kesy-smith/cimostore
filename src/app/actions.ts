"use server";

import { answerPhoneQuestions } from "@/ai/flows/answer-phone-questions";

export async function handleInquiry(query: string) {
  try {
    const result = await answerPhoneQuestions({ query });
    return result.answer;
  } catch (error) {
    console.error("Error handling inquiry:", error);
    return "Je suis désolé, j'ai des difficultés à me connecter à ma base de connaissances en ce moment. Veuillez réessayer plus tard.";
  }
}
