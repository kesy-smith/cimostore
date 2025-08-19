"use client";

import { useState, useMemo, Suspense } from 'react';
import { getPhones } from '@/lib/phones';
import { ProductCard } from '@/components/ProductCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

const allProducts = getPhones();
const allBrands = [...new Set(allProducts.map(p => p.brand))];
const maxPrice = Math.max(...allProducts.map(p => p.price));

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i}>
          <Skeleton className="aspect-square w-full" />
          <CardContent className="p-6 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
          </CardContent>
          <CardFooter className="p-6 pt-0">
             <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default function ShopPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number]>([maxPrice]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const priceMatch = product.price <= priceRange[0];
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return brandMatch && priceMatch && searchMatch;
    });
  }, [selectedBrands, priceRange, searchTerm]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Notre Collection</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Trouvez le produit Apple parfait qui correspond à votre vie et à votre budget.
        </p>
      </div>
      
      <div className="mb-8 max-w-lg mx-auto">
        <Input 
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Filtres</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Marque</h3>
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
                <h3 className="font-semibold mb-4">Gamme de prix</h3>
                <div className="space-y-4">
                  <Slider
                    max={maxPrice}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number])}
                  />
                  <div className="text-center text-muted-foreground">
                    Jusqu'à ${priceRange[0]}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-3">
           <Suspense fallback={<ProductGridSkeleton />}>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((phone) => (
                    <ProductCard key={phone.id} phone={phone} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full bg-card rounded-lg p-8">
                    <p className="text-xl font-semibold">Aucun produit trouvé</p>
                    <p className="text-muted-foreground mt-2">Essayez d'ajuster vos filtres ou votre recherche.</p>
                </div>
              )}
           </Suspense>
        </main>
      </div>
    </div>
  );
}
