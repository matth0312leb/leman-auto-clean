# Léman Auto Clean

Site de Léman Auto Clean, nettoyage automobile premium à domicile (Chablais, Genève, Haute-Savoie) : https://www.leman-autoclean.com

Site Next.js hébergé sur Vercel : chaque mise à jour de la branche `main` est mise en ligne automatiquement, et les autres branches donnent un lien d'aperçu.

## Où modifier quoi

- `src/data/business.ts` : téléphone, e-mail, délai de réponse, note Google, SIRET
- `src/data/prestations.ts` : formules, tarifs et options
- `src/data/villes.ts` : villes mises en avant (une page par ville)
- `src/data/siteImages.ts` : photos (accueil, avant/après, réalisations)
- `src/components/Testimonials.tsx` : avis clients

## Lancer en local

```bash
npm install
npm run dev
```
