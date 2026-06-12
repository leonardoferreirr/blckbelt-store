import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/brand";
import { NAV_LINKS } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/brand/logo-white.png" alt={BRAND.name} width={1181} height={171} className="h-6 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-paper/60">{BRAND.tagline}. Camisetas pra quem treina, feitas no Brasil.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/50">Loja</p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/70 hover:text-accent">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/50">Ajuda</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/70">
              <li><Link href="#" className="hover:text-accent">Trocas e devoluções</Link></li>
              <li><Link href="#" className="hover:text-accent">Tabela de medidas</Link></li>
              <li><Link href="#" className="hover:text-accent">Rastrear pedido</Link></li>
              <li><Link href={`https://instagram.com/${BRAND.instagram}`} className="hover:text-accent">@{BRAND.instagram}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-paper/50">Newsletter</p>
            <p className="mt-3 text-sm text-paper/70">Entre na lista e receba os próximos drops em primeira mão.</p>
            <div className="mt-3 flex border border-paper/20">
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-paper/40"
              />
              <button type="button" className="bg-accent px-4 text-sm font-semibold uppercase">OK</button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 md:flex-row">
          <span>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</span>
          <span>Pagamento e CNPJ a configurar</span>
        </div>
      </div>
    </footer>
  );
}
