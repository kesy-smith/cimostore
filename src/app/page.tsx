import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone } from 'lucide-react';
import { getPhones } from '@/lib/phones';
import { ProductCard } from '@/components/ProductCard';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import React from 'react';

export default function Home() {
  const allPhones = getPhones();
  const featuredPhones = allPhones.slice(0, 3);
  const heroPhone = featuredPhones[0];

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl space-y-4 text-center md:text-left">
                <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
                Bienvenue chez CIMO STORE
                </h1>
                <p className="text-lg text-foreground/80 md:text-xl">
                Découvrez les derniers smartphones, des offres imbattables et un service client de premier ordre.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="font-headline">
                    <Link href="/shop">
                    Acheter maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-headline">
                    <Link href="/shop">
                    Découvrir les offres
                    </Link>
                </Button>
                </div>
            </div>
            <div className="relative aspect-video rounded-xl shadow-2xl">
                 <Card className='h-full w-full'>
                    <CardContent className='p-0 h-full w-full relative'>
                       <Image 
                         src={heroPhone.images[0]} 
                         alt={heroPhone.name} 
                         fill 
                         className="object-contain rounded-lg p-4"
                         priority 
                       />
                    </CardContent>
                 </Card>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              Produits en vedette
            </h2>
            <p className="max-w-2xl text-foreground/70 md:text-lg">
              Découvrez notre sélection des meilleurs smartphones disponibles actuellement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhones.map((phone) => (
              <ProductCard key={phone.id} phone={phone} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Pourquoi nous choisir ?</div>
              <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Votre partenaire de confiance en technologie mobile</h2>
              <p className="text-foreground/70">
                Chez CIMO STORE, nous sommes passionnés par le fait de vous connecter avec la technologie qui compte. Nous offrons une sélection soignée des meilleurs téléphones, des prix compétitifs et un assistant alimenté par l'IA pour vous aider à faire le choix parfait.
              </p>
            </div>
            <div className="flex justify-center">
              <Smartphone className="w-48 h-48 text-primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}