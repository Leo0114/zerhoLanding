export interface SeoMetadata {
  title: string;
  metaDescription: string;
  keywords: string[];
}

export interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
}

export interface CommercialPhrase {
  title: string;
  copy: string;
}

export interface ContactInfo {
  sectionTitle: string;
  closingMessage: string;
  phone: string;
  website: string;
  email: string;
  contactPerson: string;
}

export interface HomeData {
  seo: SeoMetadata;
  hero: {
    preTitle: string;
    title: string;
    valueProposition: string;
    ctaPrimary: string;
    specialties: string[];
  };
  commercialPhrases: CommercialPhrase[];
  services: ServiceDetail[];
  warrantyAndValue: {
    title: string;
    description: string;
    years: number;
    benefits: string[];
  };
  contact: ContactInfo;
}

export const homeData: HomeData = {
  seo: {
    title:
      "Zerho | Arquitectura, Construcción e Interiorismo Residencial de Lujo | Cero Sorpresas",
    metaDescription:
      "Creamos residencias extraordinarias mediante diseño, construcción e interiorismo integral. Precio cerrado por contrato, garantía de 5 años y cero sorpresas.",
    keywords: [
      "Arquitectos residenciales de lujo",
      "Diseño, construcción e interiorismo",
      "Construcción a precio alzado",
      "Casas de lujo México",
      "Arquitectura e interiorismo personalizado",
      "Constructora con garantía estructural",
    ],
  },
  hero: {
    preTitle: "Arquitectura, Construcción e Interiorismo de Vanguardia",
    title: "Certeza absoluta creando hogares extraordinarios",
    valueProposition:
      "Creemos que un hogar no se habita, se sueña y se construye alrededor de tus anhelos más profundos; por eso transformamos tu estilo de vida, momentos e historias en arquitectura, construcción e interiorismo que inspiran todos los días, protegiendo tu patrimonio y dándote la tranquilidad de ver crecer a tu familia en el espacio perfecto para su vida.",
    ctaPrimary: "Iniciar mi proyecto",
    specialties: ["Diseño", "Construcción", "Interiorismo"],
  },
  commercialPhrases: [
    {
      title: "Nuestra promesa, tu garantía",
      copy: "Te garantizamos la residencia que soñaste al Precio Pactado o te regalamos el diseño de interiorismo gratis.",
    },
    {
      title: "Paz Mental en la Inversión",
      copy: "Olvídate de presupuestos interminables y retrasos: entregamos tu residencia a precio cerrado por contrato y en la fecha exacta de mudanza.",
    },
    {
      title: "Cero Sorpresas en Obra",
      copy: "Un proyecto residencial no debe quitarte el sueño ni tu tiempo; nos encargamos de todo el proceso con transparencia absoluta y 0 sobrecostos.",
    },
    {
      title: "La Certeza que Tu Patrimonio Merece",
      copy: "Diseñamos espacios que evolucionan con tu familia, blindados con un contrato a precio alzado y respaldados por 5 años de garantía estructural.",
    },
    {
      title: "Del Render a la Realidad",
      copy: "Eliminamos la incertidumbre del diseño: garantizamos por contrato que la calidad y los acabados que apruebas en pantalla son los que recibes.",
    },
    {
      title: "Construcción en Piloto Automático",
      copy: "Vive la emoción de edificar el hogar de tus sueños sin sufrir el caos operativo; gestionamos cada detalle para que solo disfrutes el avance.",
    },
    {
      title: "Control Financiero Total",
      copy: "Di adiós a los anticipos a fondo perdido: aportas capital únicamente contra avances de obra reales, auditados y comprobados.",
    },
    {
      title: "Valor Patrimonial Garantizado",
      copy: "Protegemos tu inversión frente a la inflación y la mala ejecución con una garantía extendida y acabados de lujo que aseguran tu plusvalía.",
    },
  ],
  services: [
    {
      title: "01. Diseño + Construcción e Interiorismo",
      description:
        "Servicio integral que abarca desde la conceptualización creativa hasta el último detalle de acabado.",
      features: [
        "Concepción Creativa: Arquitectura, diseño e interiorismo personalizados adaptados a las dinámicas de tu familia.",
        "Gestión Integral: Desde la conceptualización y permisos hasta el último detalle de acabado.",
        "Coordinación Única: Un solo punto de contacto responsable de todo el proyecto.",
      ],
    },
    {
      title: "02. Construcción",
      description:
        "Materialización de proyectos con control financiero total y máxima calidad.",
      features: [
        "Fidelidad al Proyecto: Materializamos los planos respetando al 100% la visión estética.",
        "Ingeniería de Valor: Optimización de procesos para garantizar la más alta calidad en acabados.",
        "Control Financiero - Precio Alzado: Presupuesto definitivo sin variaciones durante la ejecución.",
        "Control Financiero - Precio Unitario: Presupuesto flexible donde pagas únicamente por el volumen exacto de obra ejecutado.",
      ],
    },
  ],
  warrantyAndValue: {
    title: "Inversión Protegida y Plusvalía",
    description:
      "Tu patrimonio exige resultados impecables. Operamos bajo procesos que te brindan absoluta certidumbre de costos y tiempos de entrega. Maximizamos la plusvalía de tu terreno y aseguramos que cada peso invertido se refleje en calidad superior, estatus y seguridad para los tuyos.",
    years: 5,
    benefits: [
      "Control Total. Cero Sorpresas.",
      "Garantía y Respaldo de 5 Años: Largo plazo para proteger tu patrimonio y asegurar plusvalía.",
      "Nuestro compromiso no termina al entregar las llaves.",
    ],
  },
  contact: {
    sectionTitle: "Hablemos de tu próximo hogar extraordinario",
    closingMessage:
      "Creemos en la lealtad, no en la competencia. Trato directo y ejecutivo: sin intermediarios ni desinformación, comunicación clara y resolutiva con la gerencia para tomar decisiones ágiles que respetan tu agenda.",
    phone: "+52 (81) 1965 8330",
    website: "zerho.mx",
    email: "atrevino@zerho.mx",
    contactPerson: "Arq. Ana Treviño Gaona",
  },
};
