import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import facade from "@/assets/gallery-facade.jpg";
import service from "@/assets/gallery-service.jpg";
import stock from "@/assets/gallery-stock.jpg";
import warehouse from "@/assets/about-warehouse.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function GalleryItem({ src, alt, label, className }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <div
      className={`gallery-item opacity-0 group relative overflow-hidden rounded-2xl border border-border bg-card ${className ?? ""}`}
    >
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">{label}</div>
        <div className="mt-1 font-display text-sm font-semibold text-foreground">{alt}</div>
      </div>
    </div>
  );
}

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".gallery-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Gallery grid items stagger reveal
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="gallery-header opacity-0">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">05 — Galería</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Detrás del mostrador.</span>
          </h2>
        </div>

        <div className="gallery-grid mt-14 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:[grid-template-rows:280px_280px] lg:[grid-template-rows:340px_340px]">
          <GalleryItem src={facade} alt="Fachada MITSUJAS GUAYANA" label="Local · CC Tirado" className="sm:col-span-2 sm:row-span-1 h-[280px] lg:h-[340px]" />
          <GalleryItem src={stock} alt="Stock de repuestos" label="Almacén" className="sm:col-span-2 sm:row-span-2 h-[280px] sm:h-auto" />
          <GalleryItem src={warehouse} alt="Inventario organizado" label="Inventario" className="sm:col-span-1 sm:row-span-1 h-[280px] lg:h-[340px]" />
          <GalleryItem src={service} alt="Atención al cliente" label="Atención" className="sm:col-span-1 sm:row-span-1 h-[280px] lg:h-[340px]" />
        </div>
      </div>
    </section>
  );
}