import { useEffect, useRef } from "react";
import { ShieldCheck, Boxes, Headphones, PackageCheck, Truck } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  { icon: ShieldCheck, title: "Repuestos originales", desc: "Piezas OEM Mitsubishi con código y garantía de fábrica." },
  { icon: PackageCheck, title: "Repuestos alternativos", desc: "Alternativas de marcas reconocidas con la misma calidad." },
  { icon: Headphones, title: "Atención especializada", desc: "Asesoría técnica para identificar el repuesto correcto." },
  { icon: Boxes, title: "Amplio stock", desc: "Más de 2.500 referencias disponibles en almacén." },
  { icon: Truck, title: "Envíos a toda Venezuela", desc: "Logística confiable a domicilio o por encomienda." },
  { icon: WhatsAppIcon, title: "Respuesta rápida por WhatsApp", desc: "Cotizamos y confirmamos disponibilidad al instante." },
];

export function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".benefits-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".benefits-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Grid cards stagger animation
      gsap.fromTo(
        ".benefits-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".benefits-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[var(--graphite-soft)] py-28 sm:py-36">
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[var(--brand-red)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="benefits-header opacity-0 max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">04 — Beneficios</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Por qué elegir</span>
            <br />
            <span className="text-gradient-red">MITSUJAS GUAYANA.</span>
          </h2>
        </div>

        <div className="benefits-grid mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
            };

            return (
              <div
                key={it.title}
                onMouseMove={handleMouseMove}
                className="benefits-card opacity-0 group spotlight-card relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-[var(--brand-red)]/60 hover:-translate-y-1"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-red)]/0 blur-2xl transition-all duration-700 group-hover:bg-[var(--brand-red)]/20" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-[var(--brand-red)] transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--brand-red)]">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}