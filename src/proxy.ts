import { NextResponse, type NextRequest } from "next/server";

/**
 * Langue par défaut : français.
 * Un visiteur dont l'appareil est réglé en anglais arrivant sur l'accueil
 * est envoyé vers la version anglaise, sauf s'il a déjà choisi une langue
 * avec les drapeaux (cookie « lac-lang »).
 */
export function proxy(request: NextRequest) {
  const chosen = request.cookies.get("lac-lang")?.value;
  if (chosen === "fr" || chosen === "en") return NextResponse.next();

  const accept = request.headers.get("accept-language") ?? "";
  const primary = accept.split(",")[0]?.trim().toLowerCase() ?? "";

  if (primary.startsWith("en")) {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
