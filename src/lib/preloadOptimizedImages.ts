import { getImageProps } from "next/image";

/**
 * Précharge les images dans la version optimisée par Next.js
 * (même taille et même qualité que celles affichées par <Image />),
 * au lieu de télécharger les fichiers originaux en pleine taille.
 */
export function preloadOptimizedImages(
  sources: string[],
  { sizes, quality }: { sizes: string; quality: number },
) {
  sources.forEach((src) => {
    if (!src) return;

    const { props } = getImageProps({
      src,
      alt: "",
      fill: true,
      sizes,
      quality,
    });

    const preloadImage = new window.Image();
    if (props.sizes) preloadImage.sizes = props.sizes;
    if (props.srcSet) preloadImage.srcset = props.srcSet;
    preloadImage.src = props.src;
  });
}
