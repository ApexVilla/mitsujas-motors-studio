import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { useMagnetic } from "@/hooks/useMagnetic";

const WHATSAPP = "https://wa.me/584264054560?text=Hola%20MITSUJAS%20GUAYANA%2C%20quiero%20hablar%20con%20un%20asesor";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const containerRef = useMagnetic<HTMLDivElement>(0.4, 80);

  useEffect(() => { const t = setTimeout(() => setShow(true), 1500); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
          <motion.a href={WHATSAPP} target="_blank" rel="noreferrer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            initial={{ opacity: 0, scale: 0.6, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-center gap-3" aria-label="Hablar con un asesor por WhatsApp">
            <AnimatePresence>
              {hover && (
                <motion.span initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  className="hidden rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-foreground shadow-lg backdrop-blur-md sm:inline-block">
                  Hablar con un asesor
                </motion.span>
              )}
            </AnimatePresence>
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5)] transition-transform duration-300 group-hover:scale-110">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
              <WhatsAppIcon className="relative h-7 w-7 fill-current" />
            </span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}