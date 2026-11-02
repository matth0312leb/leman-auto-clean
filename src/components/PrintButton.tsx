"use client";

import { FiDownload } from "react-icons/fi";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-500 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
    >
      <FiDownload aria-hidden="true" />
      {label}
    </button>
  );
}
