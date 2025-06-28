import Link from 'next/link';
import { Smartphone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Mobile Boutique</span>
          </div>
          <nav className="flex gap-4 sm:gap-6 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <Link href="/cart" className="hover:text-primary transition-colors">Cart</Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mobile Boutique. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
