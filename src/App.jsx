import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">🌊</span>
            <span className="font-semibold tracking-wide">Oceanica</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a className="transition hover:text-white" href="#highlights">Highlights</a>
            <a className="transition hover:text-white" href="#gallery">Gallery</a>
          </nav>
          <a
            href="#gallery"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow shadow-sky-900/20 transition hover:translate-y-[-1px] hover:bg-sky-100"
          >
            Explore
          </a>
        </div>
      </header>

      <main className="space-y-24">
        <Hero />
        <Highlights />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
};

export default App;
