"use client";

import { useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type OptionsMultiSelectProps = {
  options: string[];
};

export default function OptionsMultiSelect({ options }: OptionsMultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const label = useMemo(() => {
    if (selectedOptions.length === 0) {
      return "Aucune option";
    }

    if (selectedOptions.length === 1) {
      return selectedOptions[0];
    }

    return `${selectedOptions.length} options sélectionnées`;
  }, [selectedOptions]);

  const toggleOption = (option: string) => {
    setSelectedOptions((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  };

  return (
    <div className="flex flex-col">
      <input
        type="hidden"
        name="Options souhaitées"
        value={selectedOptions.length > 0 ? selectedOptions.join(", ") : "Aucune option"}
      />

      <span className="mb-2 block text-sm font-semibold text-zinc-300">
        Options souhaitées
      </span>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="flex h-[50px] w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 text-left text-white outline-none transition hover:border-blue-400 focus:border-blue-400"
        >
          <span className="min-w-0 truncate">{label}</span>
          <FiChevronDown
            aria-hidden="true"
            className={`shrink-0 transition ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black">
            <div className="max-h-72 overflow-auto p-2">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/5"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="h-4 w-4 accent-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
