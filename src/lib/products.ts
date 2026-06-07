import brakeDisc from "@/assets/product-brake-disc.png";
import pistons from "@/assets/product-pistons.png";
import airFilter from "@/assets/product-air-filter.png";
import shockAbsorber from "@/assets/product-shock-absorber.png";
import sparkPlugs from "@/assets/product-spark-plugs.png";
import alternatorNew from "@/assets/product-alternator-new.png";
import clutchKit from "@/assets/product-clutch-kit.png";
import brakePads from "@/assets/product-brake-pads.png";

// Legacy imports (fallback for additional products)
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
  category: "Frenos" | "Motor" | "Filtros" | "Suspensión" | "Eléctrico" | "Transmisión" | "Refrigeración" | "Dirección";
  type: "Original" | "Alternativo";
  models: string[];
  years: string;
  available: boolean;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  badge?: string;
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
    image: brakeDisc,
    badge: "Más vendido",
    description:
      "Disco de freno delantero ventilado fabricado en hierro fundido GG20 de alta densidad. Diseño perforado y ranurado para máxima disipación de calor y rendimiento en frenadas de alta exigencia.",
    specs: [
      { label: "Diámetro", value: "294 mm" },
      { label: "Espesor", value: "26 mm" },
      { label: "Pernos", value: "5 × M12" },
      { label: "Material", value: "Hierro GG20" },
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
    image: pistons,
    badge: "Alto rendimiento",
    description:
      "Set completo de pistones forjados en aleación 2618-T6 con anillos de cromo duro y pasadores de acero para motores 4G63T y 4B11T. Ideal para motores preparados o con turbo.",
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
    image: airFilter,
    description:
      "Filtro de aire cónico de alto flujo, lavable y reutilizable. Aumenta el caudal de aire al motor hasta un 18% sobre el filtro de fábrica mejorando la respuesta al acelerador.",
    specs: [
      { label: "Tipo", value: "Cónico universal" },
      { label: "Flujo", value: "+18% vs OEM" },
      { label: "Lavable", value: "Sí — reutilizable" },
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
    image: shockAbsorber,
    description:
      "Amortiguador trasero a gas de doble tubo KYB, calibrado originalmente por Mitsubishi para uso mixto urbano y todoterreno. Absorción de impactos progresiva y control total.",
    specs: [
      { label: "Tipo", value: "Doble tubo a gas" },
      { label: "Carrera", value: "210 mm" },
      { label: "Diámetro", value: "36 mm" },
      { label: "Aplicación", value: "Eje trasero" },
    ],
  },
  {
    id: "p5",
    name: "Set Bujías Iridium Premium",
    code: "MD-360491",
    category: "Eléctrico",
    type: "Original",
    models: ["Lancer", "ASX", "Outlander", "Mirage"],
    years: "2010–2024",
    available: true,
    image: sparkPlugs,
    badge: "100k km garantía",
    description:
      "Set de 4 bujías de iridio de larga duración certificadas por Mitsubishi. Electrodo de iridio puro 0.4 mm para encendido preciso, menor consumo de combustible y hasta 100.000 km de vida útil.",
    specs: [
      { label: "Electrodo", value: "Iridio 0.4 mm" },
      { label: "Vida útil", value: "100.000 km" },
      { label: "Cantidad", value: "4 unidades" },
      { label: "Resistor", value: "Sí — antiinterferencias" },
    ],
  },
  {
    id: "p6",
    name: "Alternador 110A Remanufacturado",
    code: "MR-922145",
    category: "Eléctrico",
    type: "Alternativo",
    models: ["Lancer", "Outlander"],
    years: "2008–2018",
    available: false,
    image: alternatorNew,
    description:
      "Alternador de 110 amperios remanufacturado con bobinado de cobre 100% nuevo, regulador de voltaje de última generación y rodamientos FAG. Incluye 6 meses de garantía escrita.",
    specs: [
      { label: "Amperaje", value: "110A pico" },
      { label: "Voltaje", value: "12V / 14.4V carga" },
      { label: "Polea", value: "6 estrías serpentín" },
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
    image: clutchKit,
    description:
      "Kit de embrague completo con disco cerámico-orgánico reforzado, prensa de membrana de alta presión y collarín de desacoplamiento. Sistema calibrado para uso intensivo y tráfico venezolano.",
    specs: [
      { label: "Ø disco", value: "225 mm" },
      { label: "Estrías", value: "22 dientes" },
      { label: "Material", value: "Cerámico-orgánico" },
      { label: "Incluye", value: "Disco, prensa, collarín" },
    ],
  },
  {
    id: "p8",
    name: "Pastillas de Freno Cerámicas",
    code: "MR-129883",
    category: "Frenos",
    type: "Original",
    models: ["Lancer", "ASX", "Mirage"],
    years: "2012–2024",
    available: true,
    image: brakePads,
    badge: "Low dust",
    description:
      "Pastillas de freno cerámicas premium de baja emisión de polvo, desarrolladas con compuesto cerámico multicapa. Frenado progresivo y silencioso con excelente mordida inicial en frío.",
    specs: [
      { label: "Material", value: "Cerámico multicapa" },
      { label: "Espesor", value: "16 mm nuevo" },
      { label: "Cantidad", value: "4 unidades" },
      { label: "Sensor desgaste", value: "Incluido" },
    ],
  },
  // ─── Productos adicionales ────────────────────────────────
  {
    id: "p9",
    name: "Bomba de Agua Original",
    code: "MD-997635",
    category: "Refrigeración",
    type: "Original",
    models: ["Lancer", "Outlander", "ASX"],
    years: "2007–2022",
    available: true,
    image: filter,
    description:
      "Bomba de agua fabricada por Mitsubishi OEM. Rodamiento sellado de por vida, impulsor metálico de alta eficiencia y junta de silicona moldeada. Instalación directa sin modificaciones.",
    specs: [
      { label: "Caudal", value: "80 L/min" },
      { label: "Impulsor", value: "Metálico forjado" },
      { label: "Junta", value: "Silicona OEM" },
      { label: "Accionamiento", value: "Correa de distribución" },
    ],
  },
  {
    id: "p10",
    name: "Correa de Distribución Kit",
    code: "MD-368929",
    category: "Motor",
    type: "Original",
    models: ["Lancer", "Outlander", "Mirage"],
    years: "2008–2024",
    available: true,
    image: piston,
    badge: "Kit completo",
    description:
      "Kit de distribución completo con correa Gates, tensor hidráulico, polea guía y sello de cigüeñal. Sustitución preventiva recomendada cada 90.000 km o 6 años.",
    specs: [
      { label: "Marca correa", value: "Gates OEM" },
      { label: "Dientes", value: "129 dientes" },
      { label: "Tensores", value: "Hidráulico + guía" },
      { label: "Intervalo", value: "90.000 km" },
    ],
  },
  {
    id: "p11",
    name: "Filtro de Aceite Original",
    code: "MZ-690109",
    category: "Filtros",
    type: "Original",
    models: ["Lancer", "Lancer Evo", "ASX", "Outlander", "Mirage"],
    years: "2005–2024",
    available: true,
    image: filter,
    description:
      "Filtro de aceite original certificado Mitsubishi. Papel filtrante de alta densidad que retiene partículas desde 10 micrones. Válvula antidrenaje integrada para protección al arranque.",
    specs: [
      { label: "Filtración", value: "10 micrones" },
      { label: "Presión", value: "Hasta 10 bar" },
      { label: "Válvula bypass", value: "Integrada" },
      { label: "Cambio", value: "Cada 5.000 km" },
    ],
  },
  {
    id: "p12",
    name: "Brazo Inferior Delantero",
    code: "MR-589769",
    category: "Suspensión",
    type: "Alternativo",
    models: ["Lancer", "ASX"],
    years: "2009–2020",
    available: true,
    image: shock,
    description:
      "Brazo inferior de suspensión delantera fabricado en acero estampado reforzado. Compatible con rótula y buje de poliuretano OEM. Mayor durabilidad en pavimento irregular.",
    specs: [
      { label: "Material", value: "Acero SAE 1045" },
      { label: "Rótula", value: "Incluida" },
      { label: "Buje", value: "Poliuretano OEM" },
      { label: "Lado", value: "Der. / Izq. (seleccionar)" },
    ],
  },
  {
    id: "p13",
    name: "Sensor MAP Motor 4B11",
    code: "MD-628177",
    category: "Eléctrico",
    type: "Original",
    models: ["Lancer Evo", "Outlander"],
    years: "2008–2015",
    available: true,
    image: alternator,
    description:
      "Sensor de presión absoluta del colector de admisión (MAP) para motores 4B11 MIVEC. Señal de voltaje lineal de alta precisión para gestión exacta de la mezcla aire-combustible.",
    specs: [
      { label: "Señal", value: "0.5–4.5V analógica" },
      { label: "Presión max.", value: "300 kPa" },
      { label: "Conector", value: "3 pines Bosch" },
      { label: "Motor", value: "4B11 / 4B12" },
    ],
  },
  {
    id: "p14",
    name: "Kit Juntas Motor 4G93",
    code: "MD-975963",
    category: "Motor",
    type: "Original",
    models: ["Lancer", "Eclipse"],
    years: "2000–2012",
    available: false,
    image: piston,
    description:
      "Set completo de juntas para motor 4G93 1.8L SOHC/DOHC. Incluye junta de cabeza multicapa de acero (MLS), retenes de cigüeñal y árbol, y todas las juntas de distribución.",
    specs: [
      { label: "Junta cabeza", value: "MLS 3 capas" },
      { label: "Motor", value: "4G93 1.8L" },
      { label: "Material", value: "Acero inox + elastómero" },
      { label: "Incluye", value: "Juego completo 62 pzs" },
    ],
  },
  {
    id: "p15",
    name: "Radiador Aluminio Montero",
    code: "MR-460265",
    category: "Refrigeración",
    type: "Alternativo",
    models: ["Montero", "L200"],
    years: "2003–2018",
    available: true,
    image: filter,
    badge: "Doble fila",
    description:
      "Radiador de aluminio de doble fila de alta eficiencia para Mitsubishi Montero Sport y L200 V6 y diésel. Mayor capacidad de disipación que el radiador original para climas cálidos como Bolívar.",
    specs: [
      { label: "Core", value: "Aluminio doble fila" },
      { label: "Tanques", value: "Aluminio soldado TIG" },
      { label: "Capacidad", value: "+22% vs OEM" },
      { label: "Conexiones", value: "2 × manguera OEM" },
    ],
  },
  {
    id: "p16",
    name: "Cremallera de Dirección",
    code: "MR-333503",
    category: "Dirección",
    type: "Alternativo",
    models: ["Lancer", "Outlander"],
    years: "2008–2016",
    available: false,
    image: shock,
    description:
      "Cremallera de dirección hidráulica remanufacturada con todos los sellos nuevos y prueba de presión certificada. Incluye 3 meses de garantía de instalación. Opción económica sin sacrificar seguridad.",
    specs: [
      { label: "Tipo", value: "Hidráulica HPS" },
      { label: "Relación", value: "15.9:1" },
      { label: "Presión test", value: "120 bar certificado" },
      { label: "Garantía", value: "3 meses" },
    ],
  },
];

export const allCategories = [
  "Todos",
  "Frenos",
  "Motor",
  "Filtros",
  "Suspensión",
  "Eléctrico",
  "Transmisión",
  "Refrigeración",
  "Dirección",
] as const;

export const allModels = [
  "Todos",
  "Lancer",
  "Lancer Evo",
  "Outlander",
  "Montero",
  "ASX",
  "L200",
  "Mirage",
  "Eclipse",
] as const;

export const allTypes = ["Todos", "Original", "Alternativo"] as const;