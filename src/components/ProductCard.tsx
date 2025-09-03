import Link from 'next/link';
import Image from 'next/image';
import type { Phone } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AddToCartButton } from './AddToCartButton';
import React from 'react';

interface ProductCardProps {
  phone: Phone;
}

export function ProductCard({ phone }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Link href={`/products/${phone.id}`} className="block aspect-square w-full relative">
            <Image
                src={phone.images[0]}
                alt={phone.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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
