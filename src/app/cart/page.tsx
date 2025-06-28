"use client";

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, itemCount } = useCart()

  if (itemCount === 0) {
    return (
      <div className="container mx-auto py-24 text-center">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-8 text-3xl font-bold font-headline">Your cart is empty</h1>
        <p className="mt-4 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-8">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl lg:text-4xl font-bold font-headline mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                          data-ai-hint="cart item"
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
                          <span className="sr-only">Remove item</span>
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
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
