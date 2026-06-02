import { motion } from "framer-motion";
import { ShieldCheck, Boxes, Headphones, PackageCheck, Truck, MessageCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Repuestos originales", desc: "Piezas OEM Mitsubishi con código y garantía de fábrica." },
  { icon: PackageCheck, title: "Repuestos alternativos", desc: "Alternativas de marcas reconocidas con la misma calidad." },
  { icon: Headphones, title: "Atención especializada", desc: "Asesoría técnica para identificar el repuesto correcto." },
  { icon: Boxes, title: "Amplio stock", desc: "Más de 2.500 referencias disponibles en almacén." },
  { icon: Truck, title: "Envíos a toda Venezuela", desc: "Logística confiable a domicilio o por encomienda." },
  { icon: MessageCircle, title: "Respuesta rápida por WhatsApp", desc: "Cotizamos y confirmamos disponibilidad al instante." },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[var(--graphite-soft)] py-28 sm:py-36">
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[var(--brand-red)]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">04 — Beneficios</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Por qué elegir</span>
            <br />
            <span className="text-gradient-red">MITSUJAS GUAYANA.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-[var(--brand-red)]/60 hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-red)]/0 blur-2xl transition-all duration-700 group-hover:bg-[var(--brand-red)]/20" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-[var(--brand-red)] transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--brand-red)]">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}