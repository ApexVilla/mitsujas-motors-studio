import LogoImage from "@/assets/logo.png";
import { WhatsAppIcon, InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/SocialIcons";

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
            <div className="mb-4">
              <div className="overflow-hidden" style={{height:'72px', width:'320px', display:'flex', alignItems:'center', justifyContent:'start'}}>
                <img
                  src={LogoImage}
                  alt="MITSUJAS GUAYANA"
                  style={{
                    width:'100%',
                    height:'100%',
                    objectFit:'contain',
                    transform: 'scale(1.95)',
                    transformOrigin: 'left center'
                  }}
                />
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">RIF · J-505419978</div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Venta de autopartes y repuestos originales y alternativos para vehículos Mitsubishi en Puerto Ordaz, Estado Bolívar, Venezuela.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/584264054560"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] hover:scale-105"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/mitsujasguayana"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-[#ee2a7b] hover:bg-[#ee2a7b]/10 hover:text-[#ee2a7b] hover:scale-105"
              >
                <InstagramIcon className="h-4 w-4 stroke-current" />
              </a>
              <a
                href="https://tiktok.com/@mitsujas.guayana"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-white hover:bg-white/10 hover:text-white hover:scale-105"
              >
                <TikTokIcon className="h-4 w-4 fill-current" />
              </a>
              <a
                href="https://facebook.com/mitsujasguayana"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:scale-105"
              >
                <FacebookIcon className="h-4 w-4 fill-current" />
              </a>
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