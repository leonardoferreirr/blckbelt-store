export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number; // em centavos
  compareAtPrice?: number; // preço cheio (para promo)
  collections: string[]; // slugs de coleção
  sizes: string[];
  images: string[]; // ordem definida pelo cliente (1, 2)
  badge?: "new" | "sale" | "last";
  description: string;
  details: string[];
};

export type Collection = {
  slug: string;
  title: string;
  subtitle?: string;
};

export const COLLECTIONS: Collection[] = [
  { slug: "new-in", title: "New In", subtitle: "Os últimos drops da BLCK BELT" },
  { slug: "camisetas", title: "Camisetas", subtitle: "Oversized pesada, modelagem street" },
];

const SIZES = ["P", "M", "G", "GG"];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "black-belt",
    name: "BLACK BELT",
    price: 13990,
    collections: ["new-in", "camisetas"],
    sizes: SIZES,
    images: ["/products/black-belt-1.webp", "/products/black-belt-2.webp"],
    badge: "new",
    description:
      "Camiseta oversized BLACK BELT em malha pesada. Estampa frontal discreta no peito e arte completa nas costas. Pra quem vive o tatame.",
    details: ["Malha 100% algodão penteado 240g", "Modelagem oversized", "Gola careca reforçada", "Estampa em silk de alta durabilidade"],
  },
  {
    id: "2",
    slug: "eat-sleep-grappling-repeat",
    name: "EAT SLEEP GRAPPLING REPEAT",
    price: 13990,
    collections: ["new-in", "camisetas"],
    sizes: SIZES,
    images: ["/products/eat-sleep-grappling-1.webp", "/products/eat-sleep-grappling-2.webp"],
    badge: "new",
    description:
      "O lema de quem não para. EAT SLEEP GRAPPLING REPEAT com lettering nas costas em vermelho e branco. Oversized, caimento pesado.",
    details: ["Malha 100% algodão penteado 240g", "Modelagem oversized", "Estampa grande nas costas", "Toque macio, não craquela"],
  },
  {
    id: "3",
    slug: "off-white-belt",
    name: "OFF WHITE BELT",
    price: 13990,
    collections: ["new-in", "camisetas"],
    sizes: SIZES,
    images: ["/products/off-white-belt-1.webp", "/products/off-white-belt-2.webp"],
    badge: "new",
    description:
      "A versão off white da casa. Camiseta clara com a pegada BLCK BELT, perfeita pra treino e pro dia a dia. Oversized.",
    details: ["Malha 100% algodão penteado 240g", "Modelagem oversized", "Cor off white", "Estampa frontal + costas"],
  },
];

// ---- helpers ----
export const formatPrice = (cents: number) =>
  (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const getCollection = (slug: string) => COLLECTIONS.find((c) => c.slug === slug);

export const productsInCollection = (slug: string) =>
  PRODUCTS.filter((p) => p.collections.includes(slug));

export const newIn = () => PRODUCTS.filter((p) => p.badge === "new");

export const relatedTo = (p: Product, n = 4) =>
  PRODUCTS.filter((x) => x.id !== p.id).slice(0, n);

// menu principal (catálogo enxuto)
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "New In", href: "/colecoes/new-in" },
  { label: "Camisetas", href: "/colecoes/camisetas" },
];
