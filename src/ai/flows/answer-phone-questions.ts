'use server';
/**
 * @fileOverview Un agent IA pour répondre aux questions sur les téléphones.
 *
 * - answerPhoneQuestions - Une fonction qui gère le processus de réponse aux questions.
 * - AnswerPhoneQuestionsInput - Le type d'entrée pour la fonction answerPhoneQuestions.
 * - AnswerPhoneQuestionsOutput - Le type de retour pour la fonction answerPhoneQuestions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerPhoneQuestionsInputSchema = z.object({
  query: z.string().describe('La question à poser sur les modèles de téléphones, leur disponibilité et leurs prix.'),
});
export type AnswerPhoneQuestionsInput = z.infer<typeof AnswerPhoneQuestionsInputSchema>;

const AnswerPhoneQuestionsOutputSchema = z.object({
  answer: z.string().describe('La réponse à la question.'),
});
export type AnswerPhoneQuestionsOutput = z.infer<typeof AnswerPhoneQuestionsOutputSchema>;

export async function answerPhoneQuestions(input: AnswerPhoneQuestionsInput): Promise<AnswerPhoneQuestionsOutput> {
  return answerPhoneQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerPhoneQuestionsPrompt',
  input: {schema: AnswerPhoneQuestionsInputSchema},
  output: {schema: AnswerPhoneQuestionsOutputSchema},
  prompt: `Vous êtes un assistant chatbot spécialisé dans la réponse aux questions sur les modèles de téléphones, leur disponibilité et leurs prix.

  Répondez à la question suivante :

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
