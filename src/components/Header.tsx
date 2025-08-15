
"use client";

import Link from 'next/link';
import { Smartphone, ShoppingCart, Phone as PhoneIcon } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);


export function Header() {
  const { itemCount } = useCart();
  const phoneNumber = "+243991687092";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Smartphone className="h-6 w-6" />
          <span className="font-bold font-headline sm:inline-block">
            CIMO STORE
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/shop"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Boutique
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <div className="hidden sm:flex items-center gap-2 text-sm font-medium">
             <a href={`tel:${phoneNumber}`} className="hover:text-primary transition-colors flex items-center gap-1">
               <PhoneIcon className="h-4 w-4" />
               <span>{phoneNumber}</span>
             </a>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" aria-label="Contacter sur WhatsApp">
              <WhatsAppIcon className="h-5 w-5 text-green-500" />
            </a>
          </Button>
           <Button variant="ghost" size="icon" asChild className="sm:hidden">
            <a href={`tel:${phoneNumber}`} aria-label="Appeler le vendeur">
              <PhoneIcon className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge 
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center p-0"
                >
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Panier</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
