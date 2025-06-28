import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone } from 'lucide-react';
import { getPhones } from '@/lib/phones';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const allPhones = getPhones();
  const featuredPhones = allPhones.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
              Welcome to CIMO STORE
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              Discover the latest smartphones, unbeatable deals, and top-notch customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-headline">
                <Link href="/shop">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-headline">
                <Link href="/shop">
                  Explore Deals
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              Featured Products
            </h2>
            <p className="max-w-2xl text-foreground/70 md:text-lg">
              Check out our hand-picked selection of the best smartphones available right now.
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
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Why Choose Us?</div>
              <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Your Trusted Partner in Mobile Tech</h2>
              <p className="text-foreground/70">
                At CIMO STORE, we're passionate about connecting you with the technology that matters. We offer a curated selection of the best phones, competitive pricing, and an AI-powered assistant to help you make the perfect choice.
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
