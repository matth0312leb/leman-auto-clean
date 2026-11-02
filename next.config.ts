import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 84, 86, 95],
    deviceSizes: [390, 640, 768, 1024, 1280, 1536],
    imageSizes: [96, 160, 260, 420],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactCompiler: true,
  async redirects() {
    return [
      {
        // Adresse courte du QR code : mène directement au formulaire d'avis Google.
        source: "/laisser-un-avis",
        destination:
          "https://search.google.com/local/writereview?placeid=ChIJNdFQjRvsSIwR-15U4siiNfo",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
