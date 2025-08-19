'use server';
/**
 * @fileOverview Un flux Genkit pour générer des images de téléphones.
 *
 * - generatePhoneImage - Une fonction qui génère une image à partir d'une invite de texte.
 * - GeneratePhoneImageInput - Le type d'entrée pour la fonction generatePhoneImage.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { cache } from 'react';

const GeneratePhoneImageInputSchema = z.object({
  prompt: z.string().describe('Le texte à utiliser pour générer l\'image du téléphone.'),
});
export type GeneratePhoneImageInput = z.infer<typeof GeneratePhoneImageInputSchema>;

// Créer un cache en mémoire pour stocker les images générées.
const imageCache = new Map<string, { media: { url: string; } | undefined; }>();

const generatePhoneImageFlow = ai.defineFlow(
  {
    name: 'generatePhoneImageFlow',
    inputSchema: GeneratePhoneImageInputSchema,
    outputSchema: z.object({
        media: z.object({ url: z.string() }).optional(),
    }),
  },
  async (input) => {
    // Vérifier si l'image pour cette invite est déjà dans le cache.
    if (imageCache.has(input.prompt)) {
      return imageCache.get(input.prompt)!;
    }

    // Si elle n'est pas dans le cache, la générer.
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    const result = { media };
    // Stocker le résultat dans le cache.
    imageCache.set(input.prompt, result);

    return result;
  }
);

// Utiliser React.cache pour dédupliquer les requêtes au sein d'un même rendu côté serveur.
export const generatePhoneImage = cache(async (input: GeneratePhoneImageInput): Promise<{ media: { url: string; } | undefined; }> => {
  return generatePhoneImageFlow(input);
});
