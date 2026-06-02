import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react";

const PHONES = ["+58 426-4054560", "+58 424-9344776"];
const EMAIL = "mitsujasguayana@gmail.com";
const WHATSAPP = "https://wa.me/584264054560";
const MAP_URL = "https://maps.google.com/maps?q=CC%20Tirado%20Unare%20Puerto%20Ordaz&t=&z=15&ie=UTF8&iwloc=&output=embed";

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[var(--brand-red)]/60">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-border bg-secondary text-[var(--brand-red)] transition-colors group-hover:border-[var(--brand-red)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[var(--graphite-soft)] py-28 sm:py-36">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">06 — Contacto</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Visítanos o escríbenos.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">Estamos en el corazón de Puerto Ordaz. Atención de lunes a sábado.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-4 lg:col-span-2">
            <InfoCard icon={MapPin} title="Dirección">
              CC Tirado, Local 1 y 2<br />
              Unare 1, Puerto Ordaz<br />
              Estado Bolívar — Venezuela<br />
              <span className="font-mono text-xs text-muted-foreground">Código postal 8050</span>
            </InfoCard>
            <InfoCard icon={Phone} title="Teléfonos">
              {PHONES.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-foreground transition-colors hover:text-[var(--brand-red)]">{p}</a>
              ))}
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href={`mailto:${EMAIL}`} className="text-foreground transition-colors hover:text-[var(--brand-red)] break-all">{EMAIL}</a>
            </InfoCard>
            <div className="grid grid-cols-2 gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--gradient-red)] px-5 py-4 text-sm font-semibold text-white shadow-[var(--shadow-red)] transition-transform hover:scale-[1.02]">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="https://instagram.com/mitsujasguayana" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="overflow-hidden rounded-3xl border border-border bg-card lg:col-span-3">
            <div className="relative h-[500px] w-full">
              <iframe title="Ubicación MITSUJAS GUAYANA" src={MAP_URL} className="absolute inset-0 h-full w-full grayscale [filter:invert(0.92)_hue-rotate(180deg)_grayscale(0.5)]" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}