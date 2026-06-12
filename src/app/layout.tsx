import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";
import { CartProvider } from "@/components/cart/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blckbelt.com.br"),
  title: `${BRAND.name} · ${BRAND.tagline}`,
  description: `${BRAND.name} — ${BRAND.tagline}. Peças em tiragem limitada.`,
  openGraph: {
    title: `${BRAND.name} · ${BRAND.tagline}`,
    description: `${BRAND.name} — ${BRAND.tagline}. Peças em tiragem limitada.`,
    url: "https://blckbelt.com.br",
    siteName: BRAND.name,
    images: [
      {
        url: "/banners/banner-1-desktop.webp",
        width: 1920,
        height: 1080,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} · ${BRAND.tagline}`,
    description: `${BRAND.name} — ${BRAND.tagline}. Peças em tiragem limitada.`,
    images: ["/banners/banner-1-desktop.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
