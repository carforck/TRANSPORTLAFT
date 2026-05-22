import {
  Scale,
  ShieldCheck,
  Search,
  FileCheck2,
  Users,
  Truck,
  ClipboardCheck,
  AlertTriangle,
  Gavel,
  FileX2,
  UserX,
  GraduationCap,
  Eye,
  Layers,
  Headphones,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                              Datos del Hero                                */
/* -------------------------------------------------------------------------- */

export const COMPANY = {
  name: "TRANSPORTLAFT S.A.S.",
  short: "TransportLAFT",
  slogan: "Cumplimiento que mueve su empresa",
  description:
    "Asesoría jurídica y cumplimiento normativo para empresas del sector transporte en Colombia.",
  longDescription:
    "Acompañamos a empresas de transporte de carga, pasajeros, transporte especial, operadores logísticos y demás sujetos obligados en la prevención del riesgo LA/FT/FP y en la implementación de sistemas de cumplimiento prácticos, jurídicos y ajustados a su operación real.",
  email: "contacto@transportlaft.com",
  linkedin: "TRANSPORTLAFT S.A.S.",
  coverage: "Colombia",
} as const;

export const SYSTEMS: string[] = ["SARLAFT", "RMS", "SAGRILAFT", "PTEE"];

/* -------------------------------------------------------------------------- */
/*                       Features hero (5 pilares)                            */
/* -------------------------------------------------------------------------- */

export interface Feature {
  icon: LucideIcon;
  title: string;
}

export const HERO_FEATURES: Feature[] = [
  { icon: Scale, title: "Asesoría jurídica especializada" },
  { icon: ClipboardCheck, title: "Cumplimiento normativo" },
  { icon: Search, title: "Gestión integral de riesgos" },
  { icon: ShieldCheck, title: "Prevención LA/FT/FP" },
  { icon: Users, title: "Acompañamiento experto y cercano" },
];

/* -------------------------------------------------------------------------- */
/*                       Metodología T-LAFT 5C                                */
/* -------------------------------------------------------------------------- */

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    number: "1",
    title: "Conocer",
    icon: Search,
    description:
      "Entendemos la operación, las rutas, los terceros y el nivel de exposición.",
  },
  {
    number: "2",
    title: "Clasificar",
    icon: ClipboardCheck,
    description:
      "Identificamos riesgos y priorizamos focos críticos de cumplimiento.",
  },
  {
    number: "3",
    title: "Construir",
    icon: FileCheck2,
    description:
      "Diseñamos políticas, matrices, procedimientos y controles documentales.",
  },
  {
    number: "4",
    title: "Capacitar",
    icon: GraduationCap,
    description:
      "Formamos al equipo para aplicar el sistema en la práctica.",
  },
  {
    number: "5",
    title: "Controlar",
    icon: Eye,
    description:
      "Acompañamos el seguimiento, la mejora continua y la trazabilidad.",
  },
];

/* -------------------------------------------------------------------------- */
/*                       Diferenciadores                                      */
/* -------------------------------------------------------------------------- */

export interface Differentiator {
  icon: LucideIcon;
  title: string;
}

export const DIFFERENTIATORS: Differentiator[] = [
  { icon: Layers, title: "Sistemas de cumplimiento a la medida" },
  { icon: Truck, title: "Enfoque especializado en transporte" },
  { icon: Scale, title: "Soporte jurídico y técnico" },
  { icon: FileCheck2, title: "Documentación trazable y útil" },
];

/* -------------------------------------------------------------------------- */
/*                       Riesgos prevenidos                                   */
/* -------------------------------------------------------------------------- */

export interface Risk {
  icon: LucideIcon;
  title: string;
}

export const RISKS: Risk[] = [
  { icon: UserX, title: "Vinculación de terceros sin control" },
  { icon: AlertTriangle, title: "Señales de alerta no atendidas" },
  { icon: FileX2, title: "Fallas documentales" },
  { icon: Gavel, title: "Riesgo sancionatorio" },
];

/* -------------------------------------------------------------------------- */
/*                       Planes de servicio                                   */
/* -------------------------------------------------------------------------- */

export interface ServicePlan {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICE_PLANS: ServicePlan[] = [
  {
    number: "01",
    title: "Diagnóstico Inicial",
    icon: Search,
    description:
      "Revisión de obligaciones, riesgos, documentos y brechas. Entrega de informe y hoja de ruta.",
  },
  {
    number: "02",
    title: "Implementación Integral",
    icon: Layers,
    description:
      "Construcción documental, matrices de riesgo, políticas, procedimientos y capacitación del personal.",
  },
  {
    number: "03",
    title: "Acompañamiento Mensual",
    icon: Headphones,
    description:
      "Seguimiento, actualización, soporte jurídico y fortalecimiento continuo del sistema de cumplimiento.",
  },
];

/* -------------------------------------------------------------------------- */
/*                       Clientes ideales                                     */
/* -------------------------------------------------------------------------- */

export const IDEAL_CLIENTS: string[] = [
  "Empresas de transporte de carga",
  "Operadores logísticos",
  "Empresas generadoras de carga",
  "Propietarios de flotas",
  "Cooperativas",
  "Terminales",
];

/* -------------------------------------------------------------------------- */
/*                       Navegación                                           */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#planes", label: "Planes" },
  { href: "#contacto", label: "Contacto" },
] as const;
