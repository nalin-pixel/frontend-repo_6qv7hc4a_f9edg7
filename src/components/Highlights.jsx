import React from 'react';
import { Leaf, Sun, Camera } from 'lucide-react';

const features = [
  {
    title: 'Living Blues',
    desc: 'Gentle gradients inspired by the sea — calm, deep, and endlessly inviting.',
    Icon: Leaf,
  },
  {
    title: 'Light & Air',
    desc: 'Sun-kissed palettes and soft shadows capture coastal serenity.',
    Icon: Sun,
  },
  {
    title: 'Moments in Motion',
    desc: 'Waves, foam, and textures preserved in crisp, cinematic frames.',
    Icon: Camera,
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Nature in three quiet stories
        </h2>
        <p className="mt-4 text-slate-600">
          An ode to oceanscapes — minimal, thoughtful, and soothing. Designed for moments of pause.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-200/40 blur-2xl transition group-hover:bg-sky-300/40" />
            <div className="relative">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
