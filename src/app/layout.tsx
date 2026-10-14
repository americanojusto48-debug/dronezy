import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CashOnDeliveryModal } from "@/components/cart/CashOnDeliveryModal";
import { StickyAddToCart } from "@/components/cro/StickyAddToCart";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dronezy™ Colombia | Drone Falcon Antigolpes Indestructible ($129.000 COP)",
  description:
    "¡Deja el celular, vuela ya! Dronezy Falcon 2108 antigolpes con control ergonómico de 1 mano, jaula deformable y hélices blindadas. Paga al recibir en casa con Envío Gratis.",
  keywords: [
    "drone antigolpes",
    "drone para niños",
    "drone falcon 2108",
    "drone indestructible colombia",
    "drone contra entrega",
  ],
  openGraph: {
    title: "Dronezy™ Falcon | El Dron Antigolpes Indestructible",
    description: "¡Deja el celular, vuela ya! Envío Gratis a toda Colombia y Pago Contra Entrega.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        {/* Global Cart Slide-over */}
        <CartDrawer />
        {/* Global Cash on Delivery 1-Click Form */}
        <CashOnDeliveryModal />
        {/* Mobile Sticky Add To Cart CTA Bar */}
        <StickyAddToCart />
        {/* Floating WhatsApp Support Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
