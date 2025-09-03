import { getPhoneBrands, getPhones } from "@/lib/phones";
import { ShopFilters } from "@/components/ShopFilters";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const allProducts = getPhones();
  const allBrands = getPhoneBrands();
  const maxPrice = Math.max(...allProducts.map(p => p.price));

  return (
     <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Notre Collection</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Trouvez le produit parfait qui correspond à votre vie et à votre budget.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
            <ShopFilters allBrands={allBrands} maxPrice={maxPrice} />
        </aside>
        {children}
      </div>
    </div>
  )
}
