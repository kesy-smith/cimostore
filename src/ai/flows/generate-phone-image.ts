'use server';
/**
 * @fileOverview Un flux Genkit pour générer des images de téléphones.
 *
 * - generatePhoneImage - Une fonction qui génère une image à partir d'une invite de texte.
 * - GeneratePhoneImageInput - Le type d'entrée pour la fonction generatePhoneImage.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GeneratePhoneImageInputSchema = z.object({
  prompt: z.string().describe('Le texte à utiliser pour générer l\'image du téléphone.'),
});
export type GeneratePhoneImageInput = z.infer<typeof GeneratePhoneImageInputSchema>;


export async function generatePhoneImage(input: GeneratePhoneImageInput): Promise<{ media: { url: string; } | undefined; }> {
  return generatePhoneImageFlow(input);
}


const generatePhoneImageFlow = ai.defineFlow(
  {
    name: 'generatePhoneImageFlow',
    inputSchema: GeneratePhoneImageInputSchema,
    outputSchema: z.object({
        media: z.object({ url: z.string() }).optional(),
    }),
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return { media };
  }
);
