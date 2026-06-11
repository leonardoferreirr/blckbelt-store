import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import ProductImage from "./ProductImage";

const BADGE_LABEL: Record<string, string> = {
  new: "NOVO",
  sale: "OFF",
  last: "ÚLTIMAS",
};

export default function ProductCard({ product }: { product: Product }) {
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = onSale
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : 0;
  const hover = product.images[1] ?? product.images[0];

  return (
    <Link href={`/produto/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-[#f3f3f4]">
        {/* imagem principal */}
        <ProductImage src={product.images[0]} alt={product.name} className="absolute inset-0 h-full w-full transition-opacity duration-300 group-hover:opacity-0" />
        {/* segunda foto no hover */}
        <ProductImage src={hover} alt={`${product.name} — verso`} className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 z-10 px-2 py-1 text-[10px] font-semibold tracking-widest ${
              product.badge === "sale" || product.badge === "last"
                ? "bg-sale text-paper"
                : "bg-ink text-paper"
            }`}
          >
            {product.badge === "sale" && onSale ? `${discount}% ${BADGE_LABEL.sale}` : BADGE_LABEL[product.badge]}
          </span>
        )}
      </div>
      <div className="pt-3">
        <h3 className="font-display text-[13px] font-medium uppercase tracking-tight text-ink leading-snug group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-sm font-medium text-ink">{formatPrice(product.price)}</span>
          {onSale && (
            <span className="text-xs text-muted line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
