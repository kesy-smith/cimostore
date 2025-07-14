import type { Metadata } from 'next';
import './globals.css';
import { Poppins, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from "@/components/ui/toaster"
import Chatbot from '@/components/Chatbot';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
});

const fontPtSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'CIMO STORE',
  description: 'Votre boutique unique pour les derniers téléphones mobiles.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontPoppins.variable,
          fontPtSans.variable
        )}
      >
        <CartProvider>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Chatbot />
          </div>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
