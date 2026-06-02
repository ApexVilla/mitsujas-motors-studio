import { motion } from "framer-motion";

const brands = ["Lancer", "Outlander", "Montero", "ASX", "L200", "Mirage", "Eclipse", "Galant", "Pajero", "Space Star"];

export function Brands() {
  return (
    <section id="marcas" className="relative overflow-hidden border-y border-border bg-background py-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">
              03 — Modelos
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-gradient">Modelos Mitsubishi compatibles.</span>
            </h2>
          </div>
          <div className="max-w-xs text-sm text-muted-foreground">
            Trabajamos con toda la gama Mitsubishi, desde sedanes urbanos hasta SUVs y camionetas 4x4.
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex aspect-[5/3] flex-col items-center justify-center gap-2 bg-card transition-all duration-500 hover:bg-secondary"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-[var(--brand-red)]">
                Mitsubishi
              </div>
              <div className="font-display text-xl font-bold text-muted-foreground transition-all duration-500 group-hover:scale-105 group-hover:text-foreground sm:text-2xl">
                {b}
              </div>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[var(--brand-red)] transition-all duration-500 group-hover:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}