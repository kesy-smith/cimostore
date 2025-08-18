import Link from 'next/link';
import Image from 'next/image';
import type { Phone } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AddToCartButton } from './AddToCartButton';
import { generatePhoneImage } from '@/ai/flows/generate-phone-image';
import React from 'react';
import { Zap } from 'lucide-react';

interface ProductCardProps {
  phone: Phone;
  generateImage?: boolean;
}

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
                fill
                className="object-cover"
                data-ai-hint="phone product"
            />
            <div className="absolute bottom-2 right-2 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-bold py-1 px-2 rounded-full flex items-center gap-1 z-10">
                <Zap className="h-3 w-3" />
                <span>Générée par IA</span>
            </div>
        </>
    );
  }

export function ProductCard({ phone, generateImage = false }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Link href={`/products/${phone.id}`} className="block aspect-square w-full relative">
            {generateImage ? (
                <React.Suspense fallback={<div className="aspect-square w-full bg-muted animate-pulse" />}>
                    <GeneratedProductImage productName={phone.name} />
                </React.Suspense>
            ) : (
                <Image
                    src={phone.images[0]}
                    alt={phone.name}
                    fill
                    className="object-cover"
                    data-ai-hint="phone product"
                />
            )}
        </Link>
        {phone.originalPrice && (
          <Badge variant="destructive" className="absolute top-4 right-4 z-10">
            PROMO
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle className="mb-1 text-lg font-headline">
              <Link href={`/products/${phone.id}`}>{phone.name}</Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{phone.brand}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">${phone.price}</p>
            {phone.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">${phone.originalPrice}</p>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <AddToCartButton phone={phone} className="w-full" />
      </CardFooter>
    </Card>
  );
}
