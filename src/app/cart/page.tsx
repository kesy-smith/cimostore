"use client";

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, ShoppingBag, Zap } from "lucide-react"
import { generatePhoneImage } from "@/ai/flows/generate-phone-image"
import React from "react"


function GeneratedCartItemImage({ productName, onImageLoad }: { productName: string; onImageLoad: (url: string) => void }) {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function generate() {
      try {
        const { media } = await generatePhoneImage({
          prompt: `Un rendu photoréaliste de haute qualité du smartphone ${productName} sur un fond de studio propre et minimaliste, vue de face.`,
        });
        if (media?.url) {
          setImageUrl(media.url);
          onImageLoad(media.url);
        }
      } catch (error) {
        console.error("Failed to generate image", error);
      } finally {
        setIsLoading(false);
      }
    }
    generate();
  }, [productName, onImageLoad]);

  if (isLoading) {
    return <div className="rounded-md bg-muted animate-pulse w-[80px] h-[80px]" />;
  }

  if (!imageUrl) {
    return <div className="w-[80px] h-[80px] bg-muted flex items-center justify-center text-xs text-center text-muted-foreground">Image non disp.</div>;
  }

  return (
      <div className="relative w-[80px] h-[80px]">
        <Image
          src={imageUrl}
          alt={productName}
          width={80}
          height={80}
          className="rounded-md object-cover"
          data-ai-hint="cart item"
        />
        <div className="absolute bottom-1 right-1 bg-primary/80 backdrop-blur-sm text-primary-foreground text-[8px] font-bold py-0.5 px-1 rounded-full flex items-center gap-0.5 z-10">
          <Zap className="h-2 w-2" />
          <span>IA</span>
      </div>
    </div>
  );
}


export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, itemCount, updateItemImage } = useCart()

  if (itemCount === 0) {
    return (
      <div className="container mx-auto py-24 text-center">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-8 text-3xl font-bold font-headline">Votre panier est vide</h1>
        <p className="mt-4 text-muted-foreground">Il semble que vous n'ayez encore rien ajouté à votre panier.</p>
        <Button asChild className="mt-8">
          <Link href="/shop">Commencer les achats</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl lg:text-4xl font-bold font-headline mb-8">Votre Panier</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Produit</TableHead>
                    <TableHead>Détails</TableHead>
                    <TableHead className="text-center">Quantité</TableHead>
                    <TableHead className="text-right">Prix</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                         <GeneratedCartItemImage 
                           productName={item.name} 
                           onImageLoad={(url) => updateItemImage(item.id, [url])}
                         />
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.brand}</p>
                      </TableCell>
                      <TableCell className="text-center">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                          className="w-20 mx-auto"
                        />
                      </TableCell>
                      <TableCell className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Supprimer l'article</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Résumé de la commande</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">Passer à la caisse</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
