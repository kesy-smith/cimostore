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

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const zip = formData.get("zip") as string;

    const sellerPhoneNumber = "243991687092"; // Numéro du vendeur sans le '+'

    const itemsSummary = cart.map(item => `${item.name} (x${item.quantity})`).join('\n- ');
    
    const message = `
*Nouvelle Commande CIMO STORE*

Un client vient de passer une commande.

*Détails de la commande :*
- ${itemsSummary}

*Total :* $${totalPrice.toFixed(2)}

*Informations de livraison :*
- *Nom complet :* ${name}
- *Email :* ${email}
- *Adresse :* ${address}
- *Ville :* ${city}
- *Code postal :* ${zip}

Veuillez préparer la livraison.
    `;

    const whatsappUrl = `https://wa.me/${sellerPhoneNumber}?text=${encodeURIComponent(message.trim())}`;
    
    // Redirige l'utilisateur vers WhatsApp
    window.location.href = whatsappUrl;

    // Affiche une notification et vide le panier après une courte pause
    setTimeout(() => {
        clearCart();
        toast({
            title: "Redirection vers WhatsApp",
            description: "Votre commande est en cours de finalisation. Veuillez envoyer le message sur WhatsApp.",
        });
        router.push('/');
    }, 2000); // 2 secondes de délai
  };
  
  if (itemCount === 0) {
      return null;
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
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input id="address" name="address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Input id="city" name="city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">Code postal</Label>
                <Input id="zip" name="zip" required />
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
            Passer la commande via WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
}
