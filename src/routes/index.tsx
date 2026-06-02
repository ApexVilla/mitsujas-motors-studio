import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Catalog } from "@/components/Catalog";
import { Brands } from "@/components/Brands";
import { Benefits } from "@/components/Benefits";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MITSUJAS GUAYANA — Repuestos Mitsubishi en Puerto Ordaz, Venezuela" },
      { name: "description", content: "Venta de repuestos originales y alternativos para vehículos Mitsubishi en Puerto Ordaz, Estado Bolívar. Lancer, Montero, Outlander, ASX, L200 y más." },
      { property: "og:title", content: "MITSUJAS GUAYANA — Repuestos Mitsubishi" },
      { property: "og:description", content: "Especialistas en repuestos originales y alternativos para vehículos Mitsubishi en Puerto Ordaz." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Brands />
        <Benefits />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
