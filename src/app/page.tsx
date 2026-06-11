import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { PRODUCTS, newIn } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import HeroBanners from "@/components/HeroBanners";

export default function Home() {
  const novidades = newIn();

  return (
    <>
      {/* HERO — banners do cliente, sem texto sobreposto */}
      <HeroBanners />

      {/* NOVIDADES */}
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-16 lg:px-6">
        <div className="flex items-end justify-between pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Drop atual</span>
            <h2 className="font-display mt-1 text-3xl font-bold uppercase tracking-tight sm:text-4xl">New In</h2>
          </div>
          <Link href="/colecoes/new-in" className="uline text-sm text-ink hover:text-accent">Ver tudo</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
          {novidades.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* FAIXA manifesto */}
      <section className="my-20 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">{BRAND.name}</span>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
            Quem treina, <span className="text-accent">veste.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-paper/70">
            Camisetas oversized em malha pesada, feitas pra quem vive o tatame e leva a faixa pra rua.
          </p>
          <Link
            href="/colecoes/camisetas"
            className="mt-8 inline-block bg-paper px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink hover:bg-accent hover:text-paper transition-colors"
          >
            Ver todas as camisetas
          </Link>
        </div>
      </section>

      {/* CATÁLOGO completo */}
      <section className="mx-auto max-w-7xl px-4 pb-10 lg:px-6">
        <div className="flex items-end justify-between pb-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">Camisetas</h2>
          <Link href="/colecoes/camisetas" className="uline text-sm text-ink hover:text-accent">Ver tudo</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
