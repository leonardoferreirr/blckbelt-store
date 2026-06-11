"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BANNERS = [
  { desktop: "/banners/banner-1-desktop.webp", mobile: "/banners/banner-1-mobile.webp" },
  { desktop: "/banners/banner-2-desktop.webp", mobile: "/banners/banner-2-mobile.webp" },
  { desktop: "/banners/banner-3-desktop.webp", mobile: "/banners/banner-3-mobile.webp" },
];

export default function HeroBanners() {
  const [i, setI] = useState(0);
  const n = BANNERS.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 5000);
    return () => clearInterval(t);
  }, [n]);

  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-ink">
      {/* mobile: proporção nativa 3571x5000 ; desktop: 1920x1080 (capado no tamanho da foto) */}
      <Link href="/colecoes/new-in" className="block" aria-label="Ver coleção">
        <div className="relative aspect-[3571/5000] w-full sm:aspect-[1920/1080]">
          {BANNERS.map((b, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
              aria-hidden={idx !== i}
            >
              {/* mobile */}
              <Image
                src={b.mobile}
                alt={`Banner ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center sm:hidden"
              />
              {/* desktop */}
              <Image
                src={b.desktop}
                alt={`Banner ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="hidden object-cover object-center sm:block"
              />
            </div>
          ))}
        </div>
      </Link>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir para banner ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-paper" : "w-1.5 bg-paper/50 hover:bg-paper/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
