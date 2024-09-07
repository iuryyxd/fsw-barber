import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Sua barbearia de confiança",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
