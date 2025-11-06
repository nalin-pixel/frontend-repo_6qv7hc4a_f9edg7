import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/30 border-b border-white/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-500 group-hover:scale-125 transition-transform" />
            <span className="font-semibold tracking-tight text-slate-900">Oceanic</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#highlights" className="hover:text-slate-900">Highlights</a>
            <a href="#gallery" className="hover:text-slate-900">Gallery</a>
            <a href="#about" className="hover:text-slate-900">About</a>
          </nav>
          <a
            href="#gallery"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-slate-800"
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
