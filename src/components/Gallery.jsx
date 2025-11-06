import React from 'react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Turquoise wave cresting at golden hour',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
    alt: 'Rocky shoreline with mist and cliffs',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    alt: 'Soft ripples across a calm sea',
  },
  {
    src: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Sunset over distant mountains and water',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Forest by the lake with gentle fog',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
    alt: 'Minimal seascape with horizon line',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Gallery</h2>
          <p className="mt-2 text-slate-600">A curated selection of calming scenes from earth and sea.</p>
        </div>
        <a
          href="#top"
          className="hidden rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:block"
        >
          Back to top
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <div key={p.src} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              src={p.src}
              alt={p.alt}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-3 text-sm text-slate-600">{p.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
