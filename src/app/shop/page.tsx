"use client";

import { useState, useMemo } from 'react';
import { getPhones, getPhoneBrands } from '@/lib/phones';
import { ProductCard } from '@/components/ProductCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import type { Phone } from '@/lib/types';

const allPhones = getPhones();
const allBrands = getPhoneBrands();
const maxPrice = Math.max(...allPhones.map(p => p.price));

export default function ShopPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number]>([maxPrice]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredPhones = useMemo(() => {
    return allPhones.filter((phone) => {
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(phone.brand);
      const priceMatch = phone.price <= priceRange[0];
      return brandMatch && priceMatch;
    });
  }, [selectedBrands, priceRange]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Our Collection</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find the perfect phone that fits your life and your budget.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Brand</h3>
                <div className="space-y-2">
                  {allBrands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                      />
                      <Label htmlFor={`brand-${brand}`} className="cursor-pointer">{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    max={maxPrice}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number])}
                  />
                  <div className="text-center text-muted-foreground">
                    Up to ${priceRange[0]}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-3">
          {filteredPhones.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPhones.map((phone) => (
                <ProductCard key={phone.id} phone={phone} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full bg-card rounded-lg p-8">
                <p className="text-xl font-semibold">No products found</p>
                <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
