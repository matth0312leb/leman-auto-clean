/**
 * Suivi des prises de contact dans Google Analytics (uniquement après accord cookies).
 *
 * Événements envoyés (visibles dans GA : Rapports > Engagement > Événements) :
 * - clic_whatsapp : clic vers WhatsApp
 * - clic_appel    : clic sur le numéro de téléphone
 * - clic_email    : clic sur l'adresse e-mail
 * - clic_reserver : clic vers la page Contact (boutons Réserver, Nous contacter…)
 * - envoi_formulaire : envoi d'un formulaire de demande
 * - clic_avis     : clic vers le formulaire d'avis Google
 * La page d'origine est jointe automatiquement par Google Analytics.
 */

type Gtag = (command: "event", name: string, params?: Record<string, string>) => void;

function send(name: string, params: Record<string, string> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

function classify(href: string): string | null {
  if (href.includes("wa.me") || href.includes("whatsapp")) return "clic_whatsapp";
  if (href.startsWith("tel:")) return "clic_appel";
  if (href.startsWith("mailto:")) return "clic_email";
  if (href.includes("writereview") || href.includes("/laisser-un-avis")) return "clic_avis";

  try {
    const url = new URL(href, window.location.href);
    if (
      url.origin === window.location.origin &&
      (url.pathname === "/contact" || url.pathname === "/contact-professionnel" || url.pathname === "/en/contact")
    ) {
      return "clic_reserver";
    }
  } catch {
    // lien invalide : ignoré
  }

  return null;
}

/** Démarre l'écoute des clics et des formulaires. Renvoie la fonction d'arrêt. */
export function startClickTracking() {
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest?.("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") ?? "";
    const name = classify(href);
    if (!name) return;

    const label = (link.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 60);
    send(name, label ? { libelle: label } : {});
  };

  const onSubmit = (event: SubmitEvent) => {
    const form = event.target as HTMLFormElement | null;
    if (!form?.action?.includes("formsubmit.co")) return;

    const type =
      form.querySelector<HTMLInputElement>('input[name="Type de demande"]')?.value ?? "Particulier";
    send("envoi_formulaire", { type_demande: type });
    send("generate_lead", { type_demande: type });
  };

  document.addEventListener("click", onClick, true);
  document.addEventListener("submit", onSubmit, true);

  return () => {
    document.removeEventListener("click", onClick, true);
    document.removeEventListener("submit", onSubmit, true);
  };
}
