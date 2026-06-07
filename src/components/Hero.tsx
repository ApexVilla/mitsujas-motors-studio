import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { useMagnetic } from "@/hooks/useMagnetic";
import gsap from "gsap";
import heroImg from "@/assets/hero-parts-store.png";

const WHATSAPP = "https://wa.me/584264054560?text=Hola%20MITSUJAS%20GUAYANA%2C%20necesito%20informaci%C3%B3n%20sobre%20repuestos";

export function Hero() {
  const cta1Ref = useMagnetic<HTMLAnchorElement>();
  const cta2Ref = useMagnetic<HTMLAnchorElement>();
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Zoom background image
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 0.85, duration: 2.2, ease: "power4.out" }
      );

      // Fade-up staggers
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        ".hero-fade-up",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power4.out" }
      );

      // Stagger stats cards
      tl.fromTo(
        ".hero-stat-card",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" },
        "-=0.6"
      );

      // Fade in bottom bounce chevron
      tl.fromTo(
        ".hero-chevron",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.4"
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="inicio" className="relative isolate min-h-screen overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          ref={imgRef}
          src={heroImg}
          alt="Repuestos Mitsubishi premium"
          className="h-full w-full object-cover opacity-80"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,oklch(0.58_0.24_27/0.25),transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]/40 particle-css"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              // @ts-ignore
              "--p-duration": `${4 + (i % 4)}s`,
              "--p-delay": `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 lg:px-10">
        <div className="hero-fade-up opacity-0 mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-red)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-red)]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Puerto Ordaz · Estado Bolívar · Venezuela
          </span>
        </div>

        <h1 className="hero-fade-up opacity-0 font-display text-[clamp(2.6rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight">
          <span className="block text-gradient">MITSUJAS</span>
          <span className="block text-gradient-red">GUAYANA</span>
        </h1>

        <p className="hero-fade-up opacity-0 mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Especialistas en <span className="text-foreground font-semibold">repuestos originales y alternativos</span> para vehículos Mitsubishi. Lancer, Montero, Outlander, L200 y más. Atención profesional con envíos a toda Venezuela.
        </p>

        <div className="hero-fade-up opacity-0 mt-10 flex flex-wrap items-center gap-4">
          <a
            ref={cta1Ref}
            href="#catalogo"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--gradient-red)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[var(--shadow-red)] transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
            Ver Catálogo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            ref={cta2Ref}
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-card/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur-md transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/10"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366] fill-current" />
            Contactar por WhatsApp
          </a>
        </div>

        <div className="hero-fade-up opacity-0 mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { v: "+2.500", l: "Referencias en stock" },
            { v: "100%", l: "Garantía en originales" },
            { v: "24h", l: "Respuesta WhatsApp" },
            { v: "Nacional", l: "Envíos Venezuela" },
          ].map((s) => (
            <div key={s.l} className="hero-stat-card opacity-0 bg-card/80 px-5 py-4 backdrop-blur-md">
              <div className="font-display text-xl font-bold text-foreground sm:text-2xl">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-chevron opacity-0 absolute bottom-6 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-5 w-5 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}