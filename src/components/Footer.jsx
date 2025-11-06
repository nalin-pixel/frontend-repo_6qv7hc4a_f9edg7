import React from 'react';

const Footer = () => {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">About</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
              Crafted as a peaceful space to unwind. The ocean reminds us to breathe slower,
              listen deeper, and find rhythm in the present moment.
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Oceanic — All rights reserved.</p>
            <p className="mt-1 text-xs text-slate-400">Images courtesy of Unsplash photographers.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
