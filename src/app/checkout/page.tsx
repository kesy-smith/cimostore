"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart, itemCount } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (itemCount === 0) {
      router.push('/shop');
    }
  }, [itemCount, router]);
  

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle payment processing
    console.log("Placing order with items:", cart);

    clearCart();
    
    toast({
      title: "Commande passée !",
      description: "Merci pour votre achat. Nous avons bien reçu votre commande.",
    });

    router.push('/');
  };
  
  if (itemCount === 0) {
      return null; // or a loading spinner, or a redirect message
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl lg:text-4xl font-bold font-headline mb-8">Paiement</h1>
      <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Informations de livraison</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Input id="city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">Code postal</Label>
                <Input id="zip" required />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Votre Commande</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
          <Button type="submit" size="lg" className="w-full mt-8">
            Passer la commande
          </Button>
        </div>
      </form>
    </div>
  );
}
