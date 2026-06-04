"use client";

import { useMemo, useState } from "react";
import OptionsMultiSelect from "@/components/OptionsMultiSelect";

type ContactFormProps = {
  selectedFormula: string;
};

const options = [
  "Poils d'animaux",
  "Shampoing des sièges, 5 places",
  "Nourrissage des cuirs",
  "Nettoyage approfondi du coffre",
  "Décontamination carrosserie",
  "Cire hydrophobe / protectrice",
];

const prestationPrices = {
  Essentiel: {
    Citadine: 100,
    Berline: 110,
    "SUV / Break": 130,
    Monospace: 150,
  },
  Équilibre: {
    Citadine: 60,
    Berline: 70,
    "SUV / Break": 80,
    Monospace: 90,
  },
  Élégance: {
    Citadine: 150,
    Berline: 170,
    "SUV / Break": 200,
    Monospace: 230,
  },
} as const;

const optionPrices = {
  "Poils d'animaux": { min: 10, max: 20 },
  "Shampoing des sièges, 5 places": { min: 60, max: 60 },
  "Nourrissage des cuirs": { min: 20, max: 20 },
  "Nettoyage approfondi du coffre": { min: 10, max: 10 },
  "Décontamination carrosserie": { min: 20, max: 20 },
  "Cire hydrophobe / protectrice": { min: 20, max: 20 },
} as const;

const standardPrestations = ["Essentiel", "Équilibre", "Élégance"] as const;

function isStandardPrestation(
  prestation: string,
): prestation is keyof typeof prestationPrices {
  return standardPrestations.includes(
    prestation as keyof typeof prestationPrices,
  );
}

function formatEstimate(min: number, max: number) {
  if (min === max) return `${min}€`;
  return `${min} à ${max}€`;
}

export default function ContactForm({ selectedFormula }: ContactFormProps) {
  const [vehicleType, setVehicleType] = useState("");
  const [prestation, setPrestation] = useState(selectedFormula);
  const [vehicleCount, setVehicleCount] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const estimate = useMemo(() => {
    if (!prestation || !vehicleType) {
      return {
        label: "Sélectionnez une prestation et un type de véhicule",
        detail: "Le montant estimatif s'affichera automatiquement.",
        hiddenValue: "Non calculé",
      };
    }

    if (!isStandardPrestation(prestation)) {
      return {
        label: "Sur devis",
        detail:
          "Les abonnements sont personnalisés selon le véhicule, la fréquence et les besoins.",
        hiddenValue: "Sur devis",
      };
    }

    const basePrice =
      prestationPrices[prestation][vehicleType as keyof typeof prestationPrices[typeof prestation]];

    if (!basePrice) {
      return {
        label: "Sélectionnez un type de véhicule",
        detail: "Le montant estimatif s'affichera automatiquement.",
        hiddenValue: "Non calculé",
      };
    }

    const optionsTotal = selectedOptions.reduce(
      (total, option) => {
        const price = optionPrices[option as keyof typeof optionPrices];
        if (!price) return total;

        return {
          min: total.min + price.min,
          max: total.max + price.max,
        };
      },
      { min: 0, max: 0 },
    );

    const count = Math.max(1, vehicleCount || 1);
    const minTotal = (basePrice + optionsTotal.min) * count;
    const maxTotal = (basePrice + optionsTotal.max) * count;

    return {
      label: formatEstimate(minTotal, maxTotal),
      detail:
        count > 1
          ? `Estimation pour ${count} véhicules, hors supplément éventuel.`
          : "Estimation pour 1 véhicule, hors supplément éventuel.",
      hiddenValue: formatEstimate(minTotal, maxTotal),
    };
  }, [prestation, selectedOptions, vehicleCount, vehicleType]);

  return (
    <form
      action="https://formsubmit.co/lemanautoclean@gmail.com"
      method="POST"
      className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-7 md:p-8 md:backdrop-blur-xl"
    >
      <input type="hidden" name="_subject" value="Nouvelle demande Léman Auto Clean" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="Estimation tarifaire" value={estimate.hiddenValue} />

      <div className="mb-8">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-blue-400 md:text-sm md:tracking-[0.45em]">
          FORMULAIRE
        </p>

        <h2 className="text-2xl font-black uppercase sm:text-3xl md:text-4xl">
          Demande de contact
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            Nom *
          </span>
          <input
            required
            name="Nom"
            type="text"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
            placeholder="Votre nom"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            Prénom
          </span>
          <input
            name="Prénom"
            type="text"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
            placeholder="Votre prénom"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            E-mail *
          </span>
          <input
            required
            name="E-mail"
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
            placeholder="votre@email.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            Numéro de téléphone
          </span>
          <input
            name="Numéro de téléphone"
            type="tel"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
            placeholder="+33 6 ..."
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            Type de véhicule *
          </span>
          <select
            required
            name="Type de véhicule"
            value={vehicleType}
            onChange={(event) => setVehicleType(event.target.value)}
            className="h-[50px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-400"
          >
            <option value="" disabled>
              À choisir
            </option>
            <option value="Citadine">Citadine</option>
            <option value="Berline">Berline</option>
            <option value="SUV / Break">SUV / Break</option>
            <option value="Monospace">Monospace</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            Nombre de véhicules
          </span>
          <input
            name="Nombre de véhicules"
            type="number"
            min="1"
            value={vehicleCount}
            onChange={(event) => {
              setVehicleCount(Number(event.target.value) || 1);
            }}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            Prestation souhaitée *
          </span>
          <select
            required
            name="Prestation souhaitée"
            value={prestation}
            onChange={(event) => setPrestation(event.target.value)}
            className="h-[50px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-blue-400"
          >
            <option value="" disabled>
              À choisir
            </option>
            <option value="Essentiel">Essentiel</option>
            <option value="Équilibre">Équilibre</option>
            <option value="Élégance">Élégance</option>
            <option value="Abonnement intérieur">Abonnement intérieur</option>
            <option value="Abonnement intérieur + extérieur">
              Abonnement intérieur + extérieur
            </option>
          </select>
        </label>

        <OptionsMultiSelect options={options} onChange={setSelectedOptions} />
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-zinc-300">
          Commentaire
        </span>
        <textarea
          name="Commentaire"
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400"
          placeholder="Décrivez votre véhicule, son état actuel, les options souhaitées... Si vous avez plusieurs véhicules, précisez les modèles et prestations souhaitées pour chacun."
        />
      </label>

      <div className="mt-6 rounded-3xl border border-blue-400/25 bg-blue-500/[0.08] p-5 shadow-lg shadow-blue-500/10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Estimation
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {estimate.detail}
            </p>
          </div>

          <p className="text-3xl font-black text-blue-400 sm:text-4xl">
            {estimate.label}
          </p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          Tarif indicatif calculé selon les informations sélectionnées. Le devis
          final peut être ajusté selon l'état réel du véhicule, les options, la
          distance ou les demandes particulières.
        </p>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400 sm:w-auto"
      >
        Envoyer ma demande
      </button>

      <p className="mt-4 text-sm leading-relaxed text-zinc-500">
        * Champs obligatoires. Vos données ne sont jamais revendues. Réponse sous
        24h.
      </p>
    </form>
  );
}
