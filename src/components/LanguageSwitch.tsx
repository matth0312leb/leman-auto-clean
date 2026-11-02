"use client";

/** Cookie mémorisant la langue choisie (lu par src/proxy.ts). */
export const LANG_COOKIE = "lac-lang";

function FlagFR() {
  return (
    <svg viewBox="0 0 3 2" aria-hidden="true" className="h-full w-full">
      <rect width="1" height="2" x="0" fill="#0055A4" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#EF4135" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true" className="h-full w-full">
      <clipPath id="gb-clip">
        <rect width="60" height="40" />
      </clipPath>
      <g clipPath="url(#gb-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8" />
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="3" />
        <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
      </g>
    </svg>
  );
}

const languages = [
  { code: "fr", href: "/", label: "Français", Flag: FlagFR },
  { code: "en", href: "/en", label: "English", Flag: FlagGB },
] as const;

export default function LanguageSwitch({
  current,
  onSelect,
  className = "",
}: {
  current: "fr" | "en";
  onSelect?: () => void;
  className?: string;
}) {
  const choose = (code: "fr" | "en") => {
    // Mémorise le choix pendant un an pour ne plus rediriger automatiquement.
    document.cookie = `${LANG_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
    onSelect?.();
  };

  return (
    <div
      role="group"
      aria-label="Langue / Language"
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl ${className}`}
    >
      {languages.map(({ code, href, label, Flag }) => {
        const active = current === code;

        return (
          <a
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            aria-label={label}
            aria-current={active ? "true" : undefined}
            onClick={() => choose(code)}
            className={`grid h-7 w-7 place-items-center rounded-full transition sm:h-8 sm:w-8 ${
              active
                ? "bg-blue-500/25 ring-1 ring-blue-400/70"
                : "opacity-45 grayscale hover:opacity-100 hover:grayscale-0"
            }`}
          >
            <span className="block h-[13px] w-[19px] overflow-hidden rounded-[3px] shadow-sm sm:h-[14px] sm:w-[21px]">
              <Flag />
            </span>
          </a>
        );
      })}
    </div>
  );
}
