"use client";

import Link from 'next/link';
import { Smartphone, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Header() {
  const { itemCount } = useCart();

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
            Shop
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
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
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
