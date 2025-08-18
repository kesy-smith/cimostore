import { getPhoneById } from '@/lib/phones';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, CheckCircle, Zap } from 'lucide-react';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { generatePhoneImage } from '@/ai/flows/generate-phone-image';


async function GeneratedProductImage({ productName }: { productName: string }) {
  const { media } = await generatePhoneImage({
    prompt: `Un rendu photoréaliste de haute qualité du smartphone ${productName} sur un fond de studio propre et minimaliste, vue de face.`,
  });
  if (!media?.url) {
    return (
      <div className="aspect-square w-full bg-muted flex items-center justify-center text-muted-foreground">
          Image non disponible
      </div>
    );
  }
  return (
      <>
          <Image
              src={media.url}
              alt={`Image de ${productName} générée par IA`}
              width={600}
              height={600}
              className="object-cover rounded-lg"
              data-ai-hint="phone detail"
          />
          <div className="absolute bottom-2 right-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1 z-10">
              <Zap className="h-3 w-3" />
              <span>Générée par IA</span>
          </div>
      </>
  );
}


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const phone = getPhoneById(Number(params.id));

  if (!phone) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
           <Card className="relative">
            <CardContent className="flex aspect-square items-center justify-center p-0">
               <React.Suspense fallback={<div className="aspect-square w-full bg-muted animate-pulse rounded-lg" />}>
                  <GeneratedProductImage productName={phone.name} />
                </React.Suspense>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-bold font-headline">{phone.name}</h1>
            <p className="text-muted-foreground text-lg">{phone.brand}</p>
          </div>
          <p className="text-foreground/80">{phone.description}</p>
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold text-primary">${phone.price}</span>
            {phone.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">${phone.originalPrice}</span>
            )}
          </div>
          <AddToCartButton phone={phone} size="lg" className="w-full md:w-auto" />
        </div>
      </div>
      
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-headline">Caractéristiques Clés</h2>
          <ul className="space-y-3">
            {phone.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-headline">Spécifications</h2>
           <Table>
            <TableBody>
              {Object.entries(phone.specs).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

       <div className="mt-16">
        <h2 className="text-2xl font-bold font-headline mb-6">Avis des clients</h2>
        <div className="space-y-6">
          {phone.reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">{review.author}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">{review.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
