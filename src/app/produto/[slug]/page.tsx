import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, relatedTo, PRODUCTS, getCollection } from "@/lib/products";
import { BRAND } from "@/lib/brand";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p ? `${p.name} · ${BRAND.name}` : BRAND.name };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedTo(product);
  const firstCol = getCollection(product.collections[0]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <nav className="pb-6 text-xs text-muted">
        <Link href="/" className="hover:text-accent">Loja</Link>
        <span className="px-1">/</span>
        {firstCol && (
          <>
            <Link href={`/colecoes/${firstCol.slug}`} className="hover:text-accent">{firstCol.title}</Link>
            <span className="px-1">/</span>
          </>
        )}
        <span className="text-ink">{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display pb-6 text-2xl font-bold uppercase tracking-tight">
            Você também vai gostar
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
