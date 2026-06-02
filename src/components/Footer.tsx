import { Instagram, MessageCircle } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#marcas", label: "Modelos" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background pt-20 pb-10">
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--brand-red)]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rotate-45 bg-[var(--brand-red)]" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} />
                <div className="absolute inset-1.5 rotate-45 bg-background" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} />
              </div>
              <div>
                <div className="font-display text-base font-bold tracking-[0.18em] text-foreground">MITSUJAS GUAYANA</div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">RIF · J-409236005</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Venta de autopartes y repuestos originales y alternativos para vehículos Mitsubishi en Puerto Ordaz, Estado Bolívar, Venezuela.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/584264054560" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"><MessageCircle className="h-4 w-4" /></a>
              <a href="https://instagram.com/mitsujasguayana" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"><Instagram className="h-4 w-4" /></a>
              <a href="https://tiktok.com/@mitsujas.guayana" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full border border-border px-4 font-mono text-[11px] uppercase tracking-wider text-foreground transition-all hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">TikTok</a>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Navegación</div>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="text-sm text-foreground/80 transition-colors hover:text-[var(--brand-red)]">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Contacto</div>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li>CC Tirado, Local 1 y 2</li>
              <li>Unare 1, Puerto Ordaz</li>
              <li>Estado Bolívar — Venezuela</li>
              <li className="pt-2 font-mono">+58 426-4054560</li>
              <li className="font-mono">+58 424-9344776</li>
              <li className="break-all">mitsujasguayana@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">© {new Date().getFullYear()} MITSUJAS GUAYANA C.A · Todos los derechos reservados</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Puerto Ordaz · Venezuela</div>
        </div>
      </div>
    </footer>
  );
}