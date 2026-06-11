"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BANNERS = [
  { desktop: "/banners/banner-1-desktop.webp", mobile: "/banners/banner-1-mobile.webp", href: "/produto/eat-sleep-grappling-repeat" },
  { desktop: "/banners/banner-2-desktop.webp", mobile: "/banners/banner-2-mobile.webp", href: "/produto/black-belt" },
  { desktop: "/banners/banner-3-desktop.webp", mobile: "/banners/banner-3-mobile.webp", href: "/produto/off-white-belt" },
];

export default function HeroBanners() {
  const [i, setI] = useState(0);
  const n = BANNERS.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);

  return (
    <section className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-ink">
      {/* mobile: proporção nativa do banner ; desktop: altura capada pra não engolir a tela */}
      <div className="relative aspect-[3571/5000] w-full sm:aspect-auto sm:h-[82vh] sm:max-h-[760px] sm:min-h-[460px]">
        {BANNERS.map((b, idx) => (
          <Link
            key={idx}
            href={b.href}
            aria-label={`Banner ${idx + 1}`}
            tabIndex={idx === i ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
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
          </Link>
        ))}

        {/* seta esquerda */}
        <button
          onClick={() => go(-1)}
          aria-label="Banner anterior"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors hover:bg-ink/70 sm:left-5 sm:h-12 sm:w-12"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* seta direita */}
        <button
          onClick={() => go(1)}
          aria-label="Próximo banner"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-paper backdrop-blur-sm transition-colors hover:bg-ink/70 sm:right-5 sm:h-12 sm:w-12"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* dots indicadores */}
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
      </div>
    </section>
  );
}
