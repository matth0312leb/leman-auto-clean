import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Léman Auto Clean | Nettoyage automobile premium",
  description:
    "Nettoyage automobile haut de gamme à domicile. Déplacement dans le Chablais, Genève et Haute-Savoie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
