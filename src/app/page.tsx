import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Prestations from "@/components/Prestations";
import BeforeAfter from "@/components/BeforeAfter";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import WhatsappButton from "@/components/WhatsappButton";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Prestations />
      <WhyUs />
      <Stats />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsappButton />
    </main>
  );
}