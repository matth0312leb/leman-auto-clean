"use client";

import { usePathname } from "next/navigation";

/** Langue de la page affichée : anglais pour tout ce qui est sous /en. */
export function useLang(): "fr" | "en" {
  const pathname = usePathname() ?? "/";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}
