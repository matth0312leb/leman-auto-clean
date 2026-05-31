import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leman-autoclean.com"),
  title: {
    default: "Léman Auto Clean | Nettoyage automobile premium à domicile",
    template: "%s | Léman Auto Clean",
  },
  description:
    "Nettoyage automobile haut de gamme à domicile dans le Chablais, Douvaine, Thonon-les-Bains, Genève et Haute-Savoie. Detailing automobile et nettoyage premium sur rendez-vous.",
  keywords: [
    "Léman Auto Clean",
    "nettoyage automobile",
    "nettoyage premium",
    "detailing automobile",
    "nettoyage voiture à domicile",
    "Douvaine",
    "Thonon-les-Bains",
    "Chablais",
    "Genève",
    "Haute-Savoie",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Léman Auto Clean | Nettoyage automobile premium",
    description:
      "Nettoyage automobile haut de gamme à domicile dans le Chablais, Genève et Haute-Savoie.",
    url: "https://www.leman-autoclean.com",
    siteName: "Léman Auto Clean",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Léman Auto Clean - nettoyage automobile premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Léman Auto Clean | Nettoyage automobile premium",
    description:
      "Nettoyage automobile haut de gamme à domicile dans le Chablais, Genève et Haute-Savoie.",
    images: ["/hero.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
