import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-parts.jpg";

const WHATSAPP = "https://wa.me/584264054560?text=Hola%20MITSUJAS%20GUAYANA%2C%20necesito%20informaci%C3%B3n%20sobre%20repuestos";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={heroImg}
          alt="Repuestos Mitsubishi premium"
          className="h-full w-full object-cover opacity-80"
          width={1920}
          height={1080}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,oklch(0.58_0.24_27/0.25),transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[var(--brand-red)]/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-red)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-red)]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Puerto Ordaz · Estado Bolívar · Venezuela
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.6rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight"
        >
          <span className="block text-gradient">MITSUJAS</span>
          <span className="block text-gradient-red">GUAYANA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Especialistas en <span className="text-foreground">repuestos originales y alternativos</span> para vehículos Mitsubishi. Stock amplio, atención profesional y envíos en toda Venezuela.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#catalogo"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--gradient-red)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[var(--shadow-red)] transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
            Ver Catálogo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-card/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur-md transition-all duration-300 hover:border-[var(--brand-red)] hover:bg-card/60"
          >
            <MessageCircle className="h-4 w-4 text-[var(--brand-red)]" />
            Contactar por WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
        >
          {[
            { v: "+2.500", l: "Repuestos en stock" },
            { v: "100%", l: "Garantía original" },
            { v: "24h", l: "Respuesta WhatsApp" },
            { v: "Venezuela", l: "Cobertura nacional" },
          ].map((s) => (
            <div key={s.l} className="bg-card/80 px-5 py-4 backdrop-blur-md">
              <div className="font-display text-xl font-bold text-foreground sm:text-2xl">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
}