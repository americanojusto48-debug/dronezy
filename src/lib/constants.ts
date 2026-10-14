import { ShopifyProduct } from "@/types/shopify";

export const STAR_PRODUCT_DEFAULT: ShopifyProduct = {
  id: "gid://shopify/Product/dronezy-star-falcon",
  title: "Dronezy™ Falcon 2108 Antigolpes Indestructible",
  handle: "drone-antigolpes-dronezy-falcon",
  description:
    "El dron antigolpes definitivo diseñado en forma de avión caza Falcon. Construido con espuma de polímero EPP deformable de alta absorción que rebota contra paredes y techos sin romperse. Hélices 100% blindadas en conductos de seguridad para total tranquilidad de los padres y control ergonómico de 1 mano para aprender a volar en 60 segundos.",
  availableForSale: true,
  priceRange: {
    minVariantPrice: {
      amount: "129000",
      currencyCode: "COP",
    },
    maxVariantPrice: {
      amount: "129000",
      currencyCode: "COP",
    },
  },
  compareAtPriceRange: {
    minVariantPrice: {
      amount: "199000",
      currencyCode: "COP",
    },
  },
  featuredImage: {
    url: "/images/products/drone-banner.webp",
    altText: "Deja el celular, vuela ya - Dronezy Falcon Antigolpes $129.000 COP",
  },
  images: {
    edges: [
      {
        node: {
          url: "/images/products/drone-banner.webp",
          altText: "Promo Dronezy Falcon Antigolpes $129.000 COP con Envío Gratis",
        },
      },
      {
        node: {
          url: "/images/products/drone-blue.jpg",
          altText: "Dronezy Falcon Azul Eléctrico con control ergonómico",
        },
      },
      {
        node: {
          url: "/images/products/drone-orange.jpg",
          altText: "Dronezy Falcon Naranja Fuego con control ergonómico",
        },
      },
      {
        node: {
          url: "/images/products/drone-green.jpg",
          altText: "Dronezy Falcon Verde Neón con control ergonómico",
        },
      },
    ],
  },
  variants: {
    edges: [
      {
        node: {
          id: "gid://shopify/ProductVariant/dronezy-v-blue",
          title: "Azul Eléctrico",
          availableForSale: true,
          price: {
            amount: "129000",
            currencyCode: "COP",
          },
          compareAtPrice: {
            amount: "199000",
            currencyCode: "COP",
          },
          selectedOptions: [{ name: "Color", value: "Azul Eléctrico" }],
          image: {
            url: "/images/products/drone-blue.jpg",
            altText: "Dronezy Falcon Azul Eléctrico",
          },
        },
      },
      {
        node: {
          id: "gid://shopify/ProductVariant/dronezy-v-orange",
          title: "Naranja Fuego",
          availableForSale: true,
          price: {
            amount: "129000",
            currencyCode: "COP",
          },
          compareAtPrice: {
            amount: "199000",
            currencyCode: "COP",
          },
          selectedOptions: [{ name: "Color", value: "Naranja Fuego" }],
          image: {
            url: "/images/products/drone-orange.jpg",
            altText: "Dronezy Falcon Naranja Fuego",
          },
        },
      },
      {
        node: {
          id: "gid://shopify/ProductVariant/dronezy-v-green",
          title: "Verde Neón",
          availableForSale: true,
          price: {
            amount: "129000",
            currencyCode: "COP",
          },
          compareAtPrice: {
            amount: "199000",
            currencyCode: "COP",
          },
          selectedOptions: [{ name: "Color", value: "Verde Neón" }],
          image: {
            url: "/images/products/drone-green.jpg",
            altText: "Dronezy Falcon Verde Neón",
          },
        },
      },
    ],
  },
  tags: ["antigolpes", "ninos", "drones", "falcon", "destacado", "envio-gratis"],
};

export const BUNDLES = [
  {
    id: "bundle-1",
    title: "1x Dronezy Falcon Antigolpes",
    subtitle: "Ideal para 1 niño o principiante",
    price: 129000,
    originalPrice: 199000,
    discountBadge: "35% OFF",
    isPopular: false,
    shippingText: "Envío Gratis Nacional",
    features: [
      "1 Drone Falcon Antigolpes (Fuselaje EPP)",
      "1 Control Ergonómico de 1 Mano",
      "1 Batería Recargable USB de Alto Rendimiento",
      "Protectores antigolpes en las 4 hélices",
      "Cable cargador rápido USB",
    ],
  },
  {
    id: "bundle-2",
    title: "2x Pack Batalla / Hermanos",
    subtitle: "¡El más vendido! Evita peleas y vuela en parejas",
    price: 219000,
    originalPrice: 398000,
    discountBadge: "45% OFF - AHORRAS $39.000",
    isPopular: true,
    shippingText: "Envío Prioritario Gratis",
    features: [
      "2 Drones Dronezy Falcon (Colores a elección)",
      "2 Controles de 1 Mano Independientes (Sin interferencia 2.4GHz)",
      "2 Baterías Recargables USB",
      "Garantía extendida de 60 días",
    ],
  },
];

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Carlos Mario Restrepo",
    city: "Medellín, Antioquia",
    rating: 5,
    title: "¡Literalmente indestructible contra la pared!",
    comment:
      "Mi hijo de 7 años lo estrelló contra la pared de la sala y el techo varias veces en su primer vuelo. El material tipo avión caza absorbe todo el impacto y sigue volando como si nada. ¡Excelente!",
    date: "Hace 2 días",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Paola Andrea Gómez",
    city: "Bogotá, D.C.",
    rating: 5,
    title: "Llegó súper rápido y pagué en efectivo en la puerta",
    comment:
      "El póster decía 'Deja el celular, vuela ya' y fue tal cual: mi sobrino soltó la tablet inmediatamente. Pagué contra entrega al mensajero de Coordinadora. El control de una sola mano es comodísimo.",
    date: "Hace 4 días",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Andrés Felipe Mendoza",
    city: "Cali, Valle del Cauca",
    rating: 5,
    title: "Totalmente seguro para los dedos",
    comment:
      "Las hélices están dentro de los 4 túneles del avión, por lo que es imposible que los dedos del niño toquen las aspas. Muy seguro y las piruetas en el aire son una locura.",
    date: "Hace 1 semana",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Yolanda Martínez",
    city: "Barranquilla, Atlántico",
    rating: 5,
    title: "Compré el paquete de 2 para mis nietos",
    comment:
      "Compré el paquete de 2 unidades en azul y verde. Vuelan juntos en el patio sin interferencias. Las luces se ven espectaculares. ¡Valió cada centavo!",
    date: "Hace 1 semana",
    verified: true,
  },
];

export const FAQS = [
  {
    question: "¿Es realmente antigolpes? ¿De qué material está hecho?",
    answer:
      "Sí. El Dronezy Falcon 2108 está fabricado en polímero de espuma EPP deformable de grado aeromodelismo. Este material absorbe la energía de choques contra paredes, techos o muebles a alta velocidad y rebota intacto sin rajarse ni quebrar la estructura.",
  },
  {
    question: "¿Es peligroso para los dedos de los niños?",
    answer:
      "Para nada. Sus 4 hélices van totalmente encapsuladas en conductos internos en el cuerpo del avión, impidiendo físicamente que los dedos pequeños de los niños toquen las aspas en movimiento.",
  },
  {
    question: "¿Cómo funciona el control de 1 sola mano?",
    answer:
      "Es el sistema más intuitivo del mercado: diseñado para sostenerse cómodamente en una sola mano con un joystick omnidireccional y botones de despegue y aterrizaje automático. Un niño de 6 años aprende a volarlo en 60 segundos.",
  },
  {
    question: "¿Cómo funciona el Pago Contra Entrega?",
    answer:
      "Es muy sencillo: haces tu pedido en nuestra página completando tus datos de entrega y NO tienes que pagar nada por adelantado. Te enviamos el paquete por Coordinadora o Servientrega y le pagas en efectivo al transportador cuando llegue a tu casa.",
  },
  {
    question: "¿Cuánto tarda en llegar mi pedido?",
    answer:
      "Despachamos el mismo día hábil. En ciudades principales (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga) la entrega toma entre 24 y 48 horas. En el resto del país tarda de 2 a 4 días hábiles con flete 100% gratis.",
  },
  {
    question: "¿Tiene garantía?",
    answer:
      "Absolutamente. Cuentas con 10 días de garantía total contra cualquier defecto de fábrica y soporte técnico permanente por WhatsApp.",
  },
];
