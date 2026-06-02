import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, ArrowRight, Check, MessageCircle, ZoomIn } from "lucide-react";
import { products, allCategories, allModels, allTypes, type Product } from "@/lib/products";

const WHATSAPP_BASE = "https://wa.me/584264054560";

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
                  {product.type}
                </span>
                <span className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md ${product.available ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-card/80 text-muted-foreground border border-border"}`}>
                  {product.available ? "En stock" : "Bajo pedido"}
                </span>
              </div>
            </div>

            <div className="flex max-h-[80vh] flex-col overflow-y-auto p-7 sm:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {product.category} · Cód. {product.code}
              </div>
              <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                {product.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="mt-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">Especificaciones</div>
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
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand-red)]">Compatibilidad</div>
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
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Hola MITSUJAS GUAYANA, me interesa el repuesto ${product.name} (Cód. ${product.code}). ¿Está disponible?`)}`}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--gradient-red)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-[var(--shadow-red)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("Todos");
  const [model, setModel] = useState<string>("Todos");
  const [type, setType] = useState<string>("Todos");
  const [selected, setSelected] = useState<Product | null>(null);

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
    <section id="catalogo" className="relative overflow-hidden bg-[var(--graphite-soft)] py-28 sm:py-36">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-0 -z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--brand-red)]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--brand-red)]">
              02 — Catálogo
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Repuestos disponibles.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Explora nuestro stock. Filtra por modelo Mitsubishi, categoría o tipo de pieza.
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span className="text-foreground">{filtered.length}</span> de {products.length} productos
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-10 rounded-3xl border border-border glass-strong p-5 sm:p-7"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, código o modelo..."
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
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelected(p)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-500 hover:border-[var(--brand-red)]/60 hover:shadow-[0_30px_60px_-30px_oklch(0.58_0.24_27/0.5)]"
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
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className={`rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider backdrop-blur-md ${p.type === "Original" ? "bg-[var(--brand-red)] text-white" : "bg-card/80 text-foreground border border-border"}`}>
                      {p.type}
                    </span>
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
                    <div className="text-[11px] text-muted-foreground line-clamp-1">
                      {p.models.slice(0, 2).join(" · ")}
                    </div>
                    <ArrowRight className="h-4 w-4 text-[var(--brand-red)] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 rounded-3xl border border-border bg-card/40 p-12 text-center">
            <div className="font-display text-xl font-semibold text-foreground">Sin resultados</div>
            <p className="mt-2 text-sm text-muted-foreground">Prueba ajustar los filtros o contáctanos por WhatsApp.</p>
          </div>
        )}
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}