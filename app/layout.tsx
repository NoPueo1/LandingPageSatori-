import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Satori Sushi — Equilibrio y Sabor | Delivery Quillón",
  description:
    "Sushi delivery en Quillón. Promos desde $7.990, Rolls individuales, Premium y Signature Salmon. Pedidos por WhatsApp. Viernes a Domingo.",
  keywords: [
    "sushi quillón",
    "delivery sushi",
    "satori sushi",
    "sushi delivery quillon",
    "rolls sushi chile",
  ],
  openGraph: {
    title: "Satori Sushi — Equilibrio y Sabor",
    description: "El mejor sushi delivery de Quillón. Pide por WhatsApp.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${notoSansJP.variable}`}>
      <body className="bg-[#0d0d0d] text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

