import { Suspense } from 'react';
import { getPhones } from '@/lib/phones';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductGrid } from '@/components/ProductGrid';
import type { Phone } from '@/lib/types';
import { Card } from '@/components/ui/card';

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
         <Card key={i}>
          <Skeleton className="aspect-square w-full" />
          <div className="p-6 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          <div className="p-6 pt-0">
             <Skeleton className="h-10 w-full" />
          </div>
        </Card>
      ))}
    </div>
  )
}

export default function ShopPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }}) {
  const allProducts = getPhones();
  
  const selectedBrands = typeof searchParams.brands === 'string' ? searchParams.brands.split(',') : [];
  const priceRange = typeof searchParams.price === 'string' ? [parseInt(searchParams.price, 10)] : undefined;
  const searchTerm = typeof searchParams.q === 'string' ? searchParams.q : '';

  const filteredProducts = allProducts.filter((product: Phone) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch = priceRange ? product.price <= priceRange[0] : true;
    const searchMatch = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    return brandMatch && priceMatch && searchMatch;
  });

  return (
    <main className="lg:col-span-3">
        <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={filteredProducts} />
        </Suspense>
    </main>
  );
}