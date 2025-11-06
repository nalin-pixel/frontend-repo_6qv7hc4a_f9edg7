import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-900 via-sky-800 to-slate-900">
      {/* 3D Ocean Spline */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/40 via-sky-900/30 to-slate-950/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            Ocean • Nature • Calm
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
            Embrace the Poetry of the Ocean
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sky-100/90 sm:text-lg">
            A serene digital escape celebrating waves, wind, and the timeless rhythm of nature.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#gallery"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-900/20 transition hover:translate-y-[-1px] hover:bg-sky-100"
            >
              Explore Gallery
            </a>
            <a
              href="#highlights"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Discover Highlights
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
