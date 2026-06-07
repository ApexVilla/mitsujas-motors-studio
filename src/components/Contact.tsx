import { useEffect, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/SocialIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PHONES = ["+58 426-4054560", "+58 424-9344776"];
const EMAIL = "mitsujasguayana@gmail.com";
const WHATSAPP = "https://wa.me/584264054560";
const MAP_URL = "https://maps.google.com/maps?q=CC%20Tirado%20Unare%20Puerto%20Ordaz&t=&z=15&ie=UTF8&iwloc=&output=embed";

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group spotlight-card relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[var(--brand-red)]/60"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-red)]/0 blur-2xl transition-all duration-700 group-hover:bg-[var(--brand-red)]/20" />
      <div className="relative flex items-start gap-4">
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Left column fade in
      gsap.fromTo(
        ".contact-left-fade",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right column (map) fade in
      gsap.fromTo(
        ".contact-right-fade",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contacto" className="relative overflow-hidden bg-[var(--graphite-soft)] py-28 sm:py-36">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="contact-header opacity-0">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">06 — Contacto</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Visítanos o escríbenos.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">Estamos en el corazón de Puerto Ordaz. Atención de lunes a sábado.</p>
        </div>

        <div className="contact-grid mt-14 grid gap-6 lg:grid-cols-5">
          <div className="contact-left-fade opacity-0 space-y-4 lg:col-span-2">
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
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110">
                <WhatsAppIcon className="h-4 w-4 fill-current" /> WhatsApp
              </a>
              <a href="https://instagram.com/mitsujasguayana" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-5 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(238,42,123,0.5)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110">
                <InstagramIcon className="h-4 w-4 stroke-current" /> Instagram
              </a>
              <a href="https://tiktok.com/@mitsujas.guayana" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black border border-neutral-800 px-5 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-[1.02] hover:border-neutral-700 hover:shadow-[0_8px_24px_-8px_rgba(254,9,121,0.4)]">
                <TikTokIcon className="h-4 w-4 fill-current" /> TikTok
              </a>
              <a href="https://facebook.com/mitsujasguayana" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1877F2] px-5 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(24,119,242,0.5)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110">
                <FacebookIcon className="h-4 w-4 fill-current" /> Facebook
              </a>
            </div>
          </div>

          <div className="contact-right-fade opacity-0 overflow-hidden rounded-3xl border border-border bg-card lg:col-span-3">
            <div className="relative h-[500px] w-full">
              <iframe title="Ubicación MITSUJAS GUAYANA" src={MAP_URL} className="absolute inset-0 h-full w-full grayscale [filter:invert(0.92)_hue-rotate(180deg)_grayscale(0.5)]" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}