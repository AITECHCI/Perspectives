import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

// Configuration de Book Antiqua
const fontBookAntiqua = localFont({
  src: [
    {
      path: "../public/fonts/book antiqua/Book-Antiqua.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/book antiqua/Book-Antiqua.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/book antiqua/Book-Antiqua.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/book antiqua/Book-Antiqua.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-book-antiqua",
  display: "swap", // Améliore le chargement (évite le texte invisible)
});

export const metadata: Metadata = {
  title: "Perspectives",
  description: "Perspectives", // Corrige la typo "Persectives"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("font-bookAntiqua", fontBookAntiqua.variable)}
      >
        {children}
      </body>
    </html>
  );
}