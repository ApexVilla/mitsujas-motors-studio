import brake from "@/assets/product-brake.jpg";
import piston from "@/assets/product-piston.jpg";
import filter from "@/assets/product-filter.jpg";
import shock from "@/assets/product-shock.jpg";
import sparkplug from "@/assets/product-sparkplug.jpg";
import alternator from "@/assets/product-alternator.jpg";
import clutch from "@/assets/product-clutch.jpg";

export type Product = {
  id: string;
  name: string;
  code: string;
  category: "Frenos" | "Motor" | "Filtros" | "Suspensión" | "Eléctrico" | "Transmisión";
  type: "Original" | "Alternativo";
  models: string[];
  years: string;
  available: boolean;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Disco de Freno Ventilado",
    code: "MR-128974",
    category: "Frenos",
    type: "Original",
    models: ["Lancer", "Outlander"],
    years: "2008–2022",
    available: true,
    image: brake,
    description: "Disco de freno delantero ventilado, fabricado con hierro fundido de alta densidad para máxima disipación de calor.",
    specs: [
      { label: "Diámetro", value: "294 mm" },
      { label: "Espesor", value: "26 mm" },
      { label: "Pernos", value: "5" },
      { label: "Material", value: "Hierro fundido GG20" },
    ],
  },
  {
    id: "p2",
    name: "Kit de Pistones Forjados",
    code: "MD-308702",
    category: "Motor",
    type: "Original",
    models: ["Lancer Evo", "Eclipse"],
    years: "2003–2015",
    available: true,
    image: piston,
    description: "Set completo de pistones forjados con anillos y pasadores para motores 4G63 y 4B11.",
    specs: [
      { label: "Diámetro", value: "85 mm" },
      { label: "Compresión", value: "9.0:1" },
      { label: "Aleación", value: "2618-T6" },
      { label: "Incluye", value: "Anillos y pasadores" },
    ],
  },
  {
    id: "p3",
    name: "Filtro de Aire Deportivo",
    code: "MZ-690115",
    category: "Filtros",
    type: "Alternativo",
    models: ["Lancer", "ASX", "Outlander"],
    years: "2010–2024",
    available: true,
    image: filter,
    description: "Filtro de aire de alto flujo lavable y reutilizable. Mejora el rendimiento del motor.",
    specs: [
      { label: "Tipo", value: "Cónico universal" },
      { label: "Flujo", value: "+18% vs OEM" },
      { label: "Lavable", value: "Sí" },
      { label: "Vida útil", value: "Ilimitada" },
    ],
  },
  {
    id: "p4",
    name: "Amortiguador Trasero Gas",
    code: "MR-554789",
    category: "Suspensión",
    type: "Original",
    models: ["Montero", "L200"],
    years: "2006–2020",
    available: true,
    image: shock,
    description: "Amortiguador a gas de doble tubo, calibrado para uso mixto urbano y todoterreno.",
    specs: [
      { label: "Tipo", value: "Doble tubo a gas" },
      { label: "Carrera", value: "210 mm" },
      { label: "Diámetro", value: "36 mm" },
      { label: "Aplicación", value: "Trasero" },
    ],
  },
  {
    id: "p5",
    name: "Set de Bujías Iridium",
    code: "MD-360491",
    category: "Eléctrico",
    type: "Original",
    models: ["Lancer", "ASX", "Outlander", "Mirage"],
    years: "2010–2024",
    available: true,
    image: sparkplug,
    description: "Bujías de iridio de larga duración. Set de 4 unidades. Encendido optimizado y menor consumo.",
    specs: [
      { label: "Electrodo", value: "Iridio puro" },
      { label: "Vida útil", value: "100.000 km" },
      { label: "Cantidad", value: "4 unidades" },
      { label: "Resistor", value: "Sí" },
    ],
  },
  {
    id: "p6",
    name: "Alternador 110A",
    code: "MR-922145",
    category: "Eléctrico",
    type: "Alternativo",
    models: ["Lancer", "Outlander"],
    years: "2008–2018",
    available: false,
    image: alternator,
    description: "Alternador de 110 amperios remanufacturado con componentes nuevos. Garantía 6 meses.",
    specs: [
      { label: "Amperaje", value: "110A" },
      { label: "Voltaje", value: "12V" },
      { label: "Polea", value: "6 estrías" },
      { label: "Garantía", value: "6 meses" },
    ],
  },
  {
    id: "p7",
    name: "Kit de Embrague Completo",
    code: "MD-727811",
    category: "Transmisión",
    type: "Original",
    models: ["Lancer", "L200", "Montero"],
    years: "2005–2020",
    available: true,
    image: clutch,
    description: "Kit de embrague completo: disco, prensa y collarín. Sistema reforzado para uso intensivo.",
    specs: [
      { label: "Diámetro disco", value: "225 mm" },
      { label: "Estrías", value: "22" },
      { label: "Material", value: "Cerámico-orgánico" },
      { label: "Incluye", value: "Disco, prensa, collarín" },
    ],
  },
  {
    id: "p8",
    name: "Pastillas de Freno Cerámicas",
    code: "MR-129883",
    category: "Frenos",
    type: "Alternativo",
    models: ["Lancer", "ASX", "Mirage"],
    years: "2012–2024",
    available: true,
    image: brake,
    description: "Pastillas de freno cerámicas de baja emisión de polvo. Frenado suave y silencioso.",
    specs: [
      { label: "Material", value: "Cerámico premium" },
      { label: "Espesor", value: "16 mm" },
      { label: "Cantidad", value: "4 unidades" },
      { label: "Sensor", value: "Incluido" },
    ],
  },
];

export const allCategories = ["Todos", "Frenos", "Motor", "Filtros", "Suspensión", "Eléctrico", "Transmisión"] as const;
export const allModels = ["Todos", "Lancer", "Lancer Evo", "Outlander", "Montero", "ASX", "L200", "Mirage", "Eclipse"] as const;
export const allTypes = ["Todos", "Original", "Alternativo"] as const;