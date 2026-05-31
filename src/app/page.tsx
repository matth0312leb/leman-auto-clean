import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Prestations from "@/components/Prestations";
import BeforeAfter from "@/components/BeforeAfter";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import WhatsappButton from "@/components/WhatsappButton";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";
import FAQAssistant from "@/components/FAQAssistant";

export const metadata: Metadata = {
  title: "Nettoyage automobile premium à domicile",
  description:
    "Léman Auto Clean propose le nettoyage auto à domicile, le lavage voiture à domicile et le detailing à domicile dans le Chablais, Douvaine, Thonon-les-Bains, Genève et Haute-Savoie.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <Prestations />
      <WhyUs />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <FAQAssistant />
      <FinalCTA />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
