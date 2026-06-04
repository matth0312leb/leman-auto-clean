import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import "./globals.css";

const siteUrl = "https://www.leman-autoclean.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Léman Auto Clean | Nettoyage automobile premium à domicile",
    template: "%s | Léman Auto Clean",
  },
  description:
    "Nettoyage automobile premium à domicile, lavage voiture à domicile et detailing à domicile dans le Chablais, Douvaine, Thonon-les-Bains, Genève et Haute-Savoie.",
  keywords: [
    "Léman Auto Clean",
    "nettoyage automobile premium",
    "nettoyage auto à domicile",
    "lavage voiture à domicile",
    "detailing à domicile",
    "detailing automobile",
    "nettoyage voiture à domicile",
    "Chablais",
    "Douvaine",
    "Thonon-les-Bains",
    "Genève",
    "Haute-Savoie",
  ],
  applicationName: "Léman Auto Clean",
  authors: [{ name: "Léman Auto Clean" }],
  creator: "Léman Auto Clean",
  publisher: "Léman Auto Clean",
  category: "Automotive",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Léman Auto Clean | Nettoyage auto à domicile premium",
    description:
      "Nettoyage automobile premium, lavage voiture à domicile et detailing à domicile dans le Chablais, Douvaine, Thonon-les-Bains, Genève et Haute-Savoie.",
    url: siteUrl,
    siteName: "Léman Auto Clean",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Léman Auto Clean - nettoyage automobile premium à domicile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Léman Auto Clean | Nettoyage automobile premium",
    description:
      "Nettoyage auto à domicile, lavage voiture à domicile et detailing à domicile dans le Chablais, Genève et Haute-Savoie.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  "@id": `${siteUrl}/#localbusiness`,
  name: "Léman Auto Clean",
  alternateName: "L.A.C",
  url: siteUrl,
  image: `${siteUrl}/hero.png`,
  logo: `${siteUrl}/logo.png`,
  description:
    "Nettoyage automobile premium à domicile, lavage voiture à domicile et detailing à domicile dans le Chablais, Douvaine, Thonon-les-Bains, Genève et Haute-Savoie.",
  telephone: "+33604475205",
  email: "lemanautoclean@gmail.com",
  founder: {
    "@type": "Person",
    name: "Matthieu Lebourg",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue du Foron",
    postalCode: "74140",
    addressLocality: "Sciez",
    addressCountry: "FR",
  },
  areaServed: [
    "Chablais",
    "Douvaine",
    "Thonon-les-Bains",
    "Genève",
    "Haute-Savoie",
  ],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://instagram.com/LemanAutoClean",
    "https://www.tiktok.com/@lemanautoclean1",
    "https://www.facebook.com/people/L%C3%A9man-Auto-Clean-LAC/61577427215915/?locale=fr_FR",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Nettoyage auto à domicile",
      description:
        "Nettoyage intérieur et extérieur à domicile, sur rendez-vous.",
    },
    {
      "@type": "Offer",
      name: "Detailing à domicile",
      description:
        "Prestations de finition et nettoyage automobile premium à domicile.",
    },
    {
      "@type": "Offer",
      name: "Lavage voiture à domicile",
      description:
        "Lavage extérieur premium avec soin des jantes, vitres et finition.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Avez-vous besoin d'eau et d'électricité chez le client ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Pour intervenir dans de bonnes conditions, il faut idéalement une prise électrique à moins de 20 mètres du véhicule. En cas de lavage extérieur, un robinet d'eau accessible est également nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous à Thonon-les-Bains ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Léman Auto Clean intervient à Thonon-les-Bains et dans le Chablais pour le nettoyage automobile premium, le lavage voiture à domicile et le detailing à domicile.",
      },
    },
    {
      "@type": "Question",
      name: "Dans quelles villes vous déplacez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Déplacement dans le Chablais, Douvaine, Thonon-les-Bains, Genève et plus largement en Haute-Savoie.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on réserver un detailing à domicile ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Vous pouvez réserver une prestation de detailing à domicile ou une formule complète intérieur + extérieur via la page de réservation.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </body>
    </html>
  );
}
