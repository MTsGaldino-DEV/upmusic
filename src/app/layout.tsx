import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "UPMusic GV - Centro de Capacitação Musical",
  description: "Juntos em busca da realização do seu sonho! Aprenda um instrumento de verdade, evoluindo rápido, sem métodos chatos e complicados.",
  keywords: ["escola de música", "Governador Valadares", "UPMusic", "aulas de violão", "aulas de teclado", "aulas de bateria", "aulas de canto", "aulas de ukulele"],
  openGraph: {
    title: "UPMusic GV - Centro de Capacitação Musical",
    description: "Aprenda tocando desde a primeira aula. Agende sua aula experimental gratuita!",
    url: "https://upmusicgv.com.br", // Placeholder
    siteName: "UPMusic GV",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
