import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, ArrowRight, Check, ZoomIn, Star, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { products, allCategories, allModels, allTypes, type Product } from "@/lib/products";
import vehicleLancer from "@/assets/vehicle-lancer.png";
import vehicleMontero from "@/assets/vehicle-montero.png";
import vehicleOutlander from "@/assets/vehicle-outlander.png";
import vehicleL200 from "@/assets/vehicle-l200.png";
import vehicleAsx from "@/assets/vehicle-asx.png";
import vehicleMirage from "@/assets/vehicle-mirage.png";
import vehicleEclipseCross from "@/assets/vehicle-eclipse-cross.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHATSAPP_BASE = "https://wa.me/584264054560";

const SUPPORTED_VEHICLES = [
  { name: "Lancer / Evo",    filterKey: "Lancer",    years: "2000–2024", image: vehicleLancer,      parts: "+800 refs.", tipo: "Sedán / Sport" },
  { name: "Montero Sport",   filterKey: "Montero",   years: "2003–2024", image: vehicleMontero,     parts: "+600 refs.", tipo: "SUV Off-Road" },
  { name: "Outlander",       filterKey: "Outlander", years: "2007–2024", image: vehicleOutlander,   parts: "+500 refs.", tipo: "SUV / PHEV" },
  { name: "L200 Triton",     filterKey: "L200",      years: "2005–2024", image: vehicleL200,        parts: "+450 refs.", tipo: "Pick-up 4×4" },
  { name: "ASX",             filterKey: "ASX",       years: "2010–2024", image: vehicleAsx,         parts: "+350 refs.", tipo: "SUV Compacto" },
  { name: "Mirage G4",       filterKey: "Mirage",    years: "2012–2024", image: vehicleMirage,      parts: "+300 refs.", tipo: "Sedán" },
  { name: "Eclipse Cross",   filterKey: "Eclipse",   years: "2017–2024", image: vehicleEclipseCross,parts: "+280 refs.", tipo: "SUV Coupé" },
];

function Pill({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
        active
          ? "border-[var(--brand-red)] bg-[var(--brand-red)] text-white shadow-[var(--shadow-red)]"
          : "border-border bg-card/40 text-muted-foreground hover:border-[var(--brand-red)]/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function FilterRow({ label, options, active, onSelect }: { label: string; options: string[]; active: string; onSelect: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <div className="flex w-28 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <Filter className="h-3 w-3" />
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <Pill key={opt} active={active === opt} onClick={() => onSelect(opt)}>{opt}</Pill>
        ))}
      </div>
    </div>
  );
}

function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-background/85 backdrop-blur-2xl sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-6xl overflow-hidden rounded-t-3xl border border-border bg-card shadow-[var(--shadow-card)] sm:rounded-3xl lg:grid-cols-2"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-square overflow-hidden bg-background lg:aspect-auto">
              <motion.img
                key={product.image}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                src={product.image}
                alt={product.name}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex gap-2">
                <span className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md ${product.type === "Original" ? "bg-[var(--brand-red)] text-white" : "bg-card/80 text-foreground border border-border"}`}>
                  {product.type === "Original" ? "✦ Original Mitsubishi" : product.type}
                </span>
                <span className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md ${product.available ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-card/80 text-muted-foreground border border-border"}`}>
                  {product.available ? "● En stock" : "◌ Bajo pedido"}
                </span>
              </div>
            </div>

            <div className="flex max-h-[80vh] flex-col overflow-y-auto p-7 sm:p-10">
              {product.badge && (
                <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--brand-red)]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--brand-red)]">
                  <Star className="h-3 w-3 fill-current" />
                  {product.badge}
                </div>
              )}
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {product.category} · Cód. {product.code}
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                {product.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="mt-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">Especificaciones técnicas</div>
                <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                  {product.specs.map((s) => (
                    <div key={s.label} className="bg-card px-4 py-3">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                      <div className="mt-1 text-sm font-medium text-foreground">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">Compatibilidad de modelos</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.models.map((m) => (
                    <span key={m} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
                      <Check className="h-3 w-3 text-[var(--brand-red)]" /> Mitsubishi {m}
                    </span>
                  ))}
                </div>
                <div className="mt-3 font-mono text-[11px] text-muted-foreground">Años: {product.years}</div>
              </div>

              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Hola MITSUJAS GUAYANA, me interesa el repuesto *${product.name}* (Cód. ${product.code}). ¿Está disponible y cuál es el precio?`)}`}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
              >
                <WhatsAppIcon className="h-4 w-4 fill-current" /> Consultar precio por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function VehicleCarousel({ onSelectModel, activeModel }: { onSelectModel: (m: string) => void; activeModel: string }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = SUPPORTED_VEHICLES.length;

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    timerRef.current = setInterval(next, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const pause = () => { if (timerRef.current) clearInterval(timerRef.current); };
  const resume = () => { timerRef.current = setInterval(next, 3500); };

  const v = SUPPORTED_VEHICLES[active];

  return (
    <div className="catalog-vehicles opacity-0 mt-14">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Modelos compatibles</div>
          <div className="font-mono text-[11px] text-muted-foreground mt-1">Haz clic en el vehículo para filtrar el catálogo</div>
        </div>
        <div className="flex items-center gap-2">
          {SUPPORTED_VEHICLES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[var(--brand-red)]" : "w-1.5 bg-border hover:bg-muted-foreground"}`}
              aria-label={`Modelo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-md cursor-pointer"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onClick={() => onSelectModel(v.filterKey)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative aspect-[21/9] sm:aspect-[21/8] overflow-hidden optimize-gpu"
          >
            <img
              src={v.image}
              alt={`Mitsubishi ${v.name}`}
              loading="lazy"
              className="h-full w-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">Mitsubishi</div>
                  <div className="font-display text-3xl font-bold text-foreground sm:text-5xl mt-1">{v.name}</div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-md">{v.tipo}</span>
                    <span className="rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur-md">{v.years}</span>
                    <span className="rounded-full bg-[var(--brand-red)]/20 border border-[var(--brand-red)]/30 px-3 py-1 font-mono text-[10px] text-[var(--brand-red)]">{v.parts}</span>
                  </div>
                </div>
                <div className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeModel === v.filterKey ? "bg-[var(--brand-red)] text-white" : "bg-card/80 text-foreground border border-border hover:border-[var(--brand-red)]/60 backdrop-blur-md"}`}>
                  {activeModel === v.filterKey ? "✦ Filtrando este modelo" : "Ver repuestos →"}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flechas */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-md transition-all hover:border-[var(--brand-red)]/60 hover:text-[var(--brand-red)]"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-md transition-all hover:border-[var(--brand-red)]/60 hover:text-[var(--brand-red)]"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Miniaturas */}
        <div className="absolute right-14 top-4 hidden sm:flex gap-2">
          {SUPPORTED_VEHICLES.map((sv, i) => (
            <button
              key={sv.name}
              onClick={(e) => { e.stopPropagation(); setActive(i); }}
              className={`h-14 w-20 overflow-hidden rounded-xl border transition-all duration-300 ${i === active ? "border-[var(--brand-red)] opacity-100" : "border-border opacity-50 hover:opacity-80"}`}
            >
              <img src={sv.image} alt={sv.name} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("Todos");
  const [model, setModel] = useState<string>("Todos");
  const [type, setType] = useState<string>("Todos");
  const [selected, setSelected] = useState<Product | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".catalog-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".catalog-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".catalog-vehicles",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".catalog-vehicles",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".catalog-filter-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".catalog-filter-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase()) ||
        p.models.some((m) => m.toLowerCase().includes(search.toLowerCase()));
      const matchCat = category === "Todos" || p.category === category;
      const matchModel = model === "Todos" || p.models.includes(model);
      const matchType = type === "Todos" || p.type === type;
      return matchSearch && matchCat && matchModel && matchType;
    });
  }, [search, category, model, type]);

  return (
    <section ref={containerRef} id="catalogo" className="relative overflow-hidden bg-[var(--graphite-soft)] py-28 sm:py-36">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-0 -z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--brand-red)]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ─── Header ─────────────────────────────────── */}
        <div className="catalog-header opacity-0 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">
              02 — Catálogo de Repuestos
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Repuestos Mitsubishi</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl">originales y alternativos.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Más de <span className="text-foreground font-semibold">2.500 referencias</span> para vehículos Mitsubishi. Filtra por modelo, categoría o tipo de pieza y consulta disponibilidad por WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-5 py-3 backdrop-blur-md">
            <Package className="h-4 w-4 text-[var(--brand-red)]" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Mostrando</div>
              <div className="font-display text-lg font-bold text-foreground">{filtered.length} <span className="text-sm text-muted-foreground font-normal">de {products.length}</span></div>
            </div>
          </div>
        </div>

        {/* ─── Carrusel de vehículos ─────────────────────── */}
        <VehicleCarousel onSelectModel={setModel} activeModel={model} />


        {/* ─── Filtros ─────────────────────────────────── */}
        <div className="catalog-filter-card opacity-0 mt-10 rounded-3xl border border-border glass-strong p-5 sm:p-7">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, código o modelo Mitsubishi..."
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
            />
            {search && (
              <button onClick={() => setSearch("")} aria-label="Limpiar búsqueda">
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          <div className="mt-5 space-y-4">
            <FilterRow label="Categoría" options={[...allCategories]} active={category} onSelect={setCategory} />
            <FilterRow label="Modelo" options={[...allModels]} active={model} onSelect={setModel} />
            <FilterRow label="Tipo" options={[...allTypes]} active={type} onSelect={setType} />
          </div>

          {(category !== "Todos" || model !== "Todos" || type !== "Todos" || search) && (
            <button
              onClick={() => { setCategory("Todos"); setModel("Todos"); setType("Todos"); setSearch(""); }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-red)]/40 bg-[var(--brand-red)]/10 px-4 py-1.5 text-xs font-medium text-[var(--brand-red)] transition-all hover:bg-[var(--brand-red)]/20"
            >
              <X className="h-3 w-3" /> Limpiar todos los filtros
            </button>
          )}
        </div>

        {/* ─── Grid de productos ─────────────────────────── */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              };

              return (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelected(p)}
                  onMouseMove={handleMouseMove}
                  className="group spotlight-card view-hover optimize-gpu relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-500 hover:border-[var(--brand-red)]/60 hover:shadow-[0_30px_60px_-30px_oklch(0.58_0.24_27/0.5)]"
                >
                  <div className="relative aspect-square overflow-hidden bg-background">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/0 to-transparent" />
                    <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                      <span className={`rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider backdrop-blur-md ${p.type === "Original" ? "bg-[var(--brand-red)] text-white" : "bg-card/80 text-foreground border border-border"}`}>
                        {p.type === "Original" ? "✦ Original" : "Alternativo"}
                      </span>
                      {p.badge && (
                        <span className="rounded-full bg-amber-500/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-black backdrop-blur-md">
                          {p.badge}
                        </span>
                      )}
                      {!p.available && (
                        <span className="rounded-full bg-background/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground backdrop-blur-md">
                          Bajo pedido
                        </span>
                      )}
                    </div>
                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.category} · {p.code}</div>
                      <div className="mt-1.5 font-display text-base font-semibold leading-tight text-foreground">{p.name}</div>
                    </div>
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
                      <div className="flex items-center gap-1.5">
                        <div className={`h-1.5 w-1.5 rounded-full ${p.available ? "bg-emerald-400" : "bg-amber-400"}`} />
                        <div className="text-[11px] text-muted-foreground line-clamp-1">
                          {p.available ? "En stock" : "Bajo pedido"} · {p.models.slice(0, 2).join(", ")}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[var(--brand-red)] transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 rounded-3xl border border-border bg-card/40 p-12 text-center">
            <div className="font-display text-xl font-semibold text-foreground">Sin resultados para tu búsqueda</div>
            <p className="mt-2 text-sm text-muted-foreground">Prueba ajustar los filtros o contáctanos directamente por WhatsApp. Tenemos más de 2.500 referencias disponibles.</p>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Hola MITSUJAS GUAYANA, busco el repuesto: "${search}" para mi Mitsubishi. ¿Lo tienen disponible?`)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" /> Preguntar por WhatsApp
            </a>
          </div>
        )}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}