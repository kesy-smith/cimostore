"use client";

import { useCart } from "@/context/CartContext";
import type { Phone } from "@/lib/types";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps extends ButtonProps {
  phone: Phone;
}

export function AddToCartButton({ phone, className, ...props }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() => addToCart(phone)}
      className={cn("gap-2", className)}
      {...props}
    >
      <ShoppingCart className="h-4 w-4" />
      <span>Add to Cart</span>
    </Button>
  );
}
