import { useEffect, useRef } from "react";
import { Shield, Award, MapPin } from "lucide-react";
import warehouse from "@/assets/about-warehouse.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side image reveal
      gsap.fromTo(
        ".about-left",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-left",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right side staggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-right",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".about-right-fade",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="nosotros" className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="about-left opacity-0 relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={warehouse}
              alt="Almacén de repuestos MITSUJAS GUAYANA"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">RIF · J-409236005</div>
              <div className="mt-2 font-display text-lg font-semibold text-foreground">MITSUJAS GUAYANA C.A</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[var(--brand-red)] opacity-30 blur-[80px]" />
        </div>

        <div className="about-right flex flex-col justify-center">
          <div className="about-right-fade opacity-0 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">
            01 — Sobre Nosotros
          </div>
          <h2 className="about-right-fade opacity-0 mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Repuestos Mitsubishi</span>
            <br />
            <span className="text-muted-foreground">con autoridad técnica.</span>
          </h2>
          <p className="about-right-fade opacity-0 mt-7 text-base leading-relaxed text-muted-foreground">
            En <span className="text-foreground font-medium">MITSUJAS GUAYANA C.A</span> nos dedicamos a la venta de autopartes y repuestos originales y alternativos para vehículos Mitsubishi. Desde Puerto Ordaz atendemos a clientes profesionales y particulares en toda Venezuela.
          </p>

          <div className="about-right-fade opacity-0 mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Shield, label: "Originales y alternativos" },
              { icon: Award, label: "Atención especializada" },
              { icon: MapPin, label: "Puerto Ordaz, Bolívar" },
            ].map(({ icon: Icon, label }) => {
              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              };

              return (
                <div
                  key={label}
                  onMouseMove={handleMouseMove}
                  className="group spotlight-card flex flex-col gap-3 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-[var(--brand-red)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-red)]/10 text-[var(--brand-red)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-medium text-foreground">{label}</div>
                </div>
              );
            })}
          </div>

          <div className="about-right-fade opacity-0 mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border pt-8 sm:max-w-md">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Empresa</div>
              <div className="mt-1 font-medium text-foreground">MITSUJAS GUAYANA C.A</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">RIF</div>
              <div className="mt-1 font-mono font-medium text-foreground">J-409236005</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}