'use server';
/**
 * @fileOverview A question answering AI agent about phones.
 *
 * - answerPhoneQuestions - A function that handles the question answering process.
 * - AnswerPhoneQuestionsInput - The input type for the answerPhoneQuestions function.
 * - AnswerPhoneQuestionsOutput - The return type for the answerPhoneQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerPhoneQuestionsInputSchema = z.object({
  query: z.string().describe('The question to ask about phone models, availability, and pricing.'),
});
export type AnswerPhoneQuestionsInput = z.infer<typeof AnswerPhoneQuestionsInputSchema>;

const AnswerPhoneQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AnswerPhoneQuestionsOutput = z.infer<typeof AnswerPhoneQuestionsOutputSchema>;

export async function answerPhoneQuestions(input: AnswerPhoneQuestionsInput): Promise<AnswerPhoneQuestionsOutput> {
  return answerPhoneQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerPhoneQuestionsPrompt',
  input: {schema: AnswerPhoneQuestionsInputSchema},
  output: {schema: AnswerPhoneQuestionsOutputSchema},
  prompt: `You are a chatbot assistant specialized in answering questions about phone models, availability, and pricing.

  Answer the following question:

  {{query}}`,
});

const answerPhoneQuestionsFlow = ai.defineFlow(
  {
    name: 'answerPhoneQuestionsFlow',
    inputSchema: AnswerPhoneQuestionsInputSchema,
    outputSchema: AnswerPhoneQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
