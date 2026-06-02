import { motion } from "framer-motion";
import facade from "@/assets/gallery-facade.jpg";
import service from "@/assets/gallery-service.jpg";
import stock from "@/assets/gallery-stock.jpg";
import warehouse from "@/assets/about-warehouse.jpg";

function GalleryItem({ src, alt, label, delay, className }: { src: string; alt: string; label: string; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${className ?? ""}`}
    >
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">{label}</div>
        <div className="mt-1 font-display text-sm font-semibold text-foreground">{alt}</div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">05 — Galería</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Detrás del mostrador.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:[grid-template-rows:280px_280px] lg:[grid-template-rows:340px_340px]">
          <GalleryItem src={facade} alt="Fachada MITSUJAS GUAYANA" label="Local · CC Tirado" delay={0} className="sm:col-span-2 sm:row-span-1 h-[280px] lg:h-[340px]" />
          <GalleryItem src={stock} alt="Stock de repuestos" label="Almacén" delay={0.1} className="sm:col-span-2 sm:row-span-2 h-[280px] sm:h-auto" />
          <GalleryItem src={warehouse} alt="Inventario organizado" label="Inventario" delay={0.2} className="sm:col-span-1 sm:row-span-1 h-[280px] lg:h-[340px]" />
          <GalleryItem src={service} alt="Atención al cliente" label="Atención" delay={0.3} className="sm:col-span-1 sm:row-span-1 h-[280px] lg:h-[340px]" />
        </div>
      </div>
    </section>
  );
}