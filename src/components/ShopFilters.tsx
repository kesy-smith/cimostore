"use client";

import { useState, useTransition } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

export function ShopFilters({ allBrands, maxPrice }: { allBrands: string[], maxPrice: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [selectedBrands, setSelectedBrands] = useState<string[]>(searchParams.get('brands')?.split(',') || []);
  const [priceRange, setPriceRange] = useState<[number]>([parseInt(searchParams.get('price') || `${maxPrice}`, 10)]);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  const updateParams = (updates: { [key: string]: string | null }) => {
    const newParams = new URLSearchParams(searchParams.toString());
    for (const key in updates) {
      const value = updates[key];
      if (value === null || value === '') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    }
    startTransition(() => {
        router.replace(`${pathname}?${newParams.toString()}`);
    });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
    updateParams({ brands: newBrands.length > 0 ? newBrands.join(',') : null });
  };
  
  const handlePriceChange = (value: [number]) => {
    setPriceRange(value);
  }

  const handlePriceCommit = (value: [number]) => {
     updateParams({ price: value[0].toString() });
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      updateParams({ q: e.target.value });
  }


  return (
    <>
       <div className="mb-8 max-w-lg mx-auto lg:hidden">
        <Input 
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full"
          disabled={isPending}
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-xl">Filtres</CardTitle>
        </CardHeader>
         <CardContent className="space-y-6">
           <div className='hidden lg:block'>
             <Input 
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full"
              disabled={isPending}
            />
           </div>
          <div>
            <h3 className="font-semibold mb-4">Marque</h3>
            <div className="space-y-2">
              {allBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                    disabled={isPending}
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
                onValueChange={handlePriceChange}
                onValueCommit={handlePriceCommit}
                disabled={isPending}
              />
              <div className="text-center text-muted-foreground">
                Jusqu'à ${priceRange[0]}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {isPending && <div className="fixed inset-0 bg-background/80 z-50 flex items-center justify-center"><p>Mise à jour des produits...</p></div>}
    </>
  );
}
