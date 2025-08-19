import type { Phone } from "@/lib/types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Phone[] }) {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-card rounded-lg p-8">
                <p className="text-xl font-semibold">Aucun produit trouvé</p>
                <p className="text-muted-foreground mt-2">Essayez d'ajuster vos filtres ou votre recherche.</p>
            </div>
        );
    }
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((phone) => (
                <ProductCard key={phone.id} phone={phone} />
            ))}
        </div>
    );
}
