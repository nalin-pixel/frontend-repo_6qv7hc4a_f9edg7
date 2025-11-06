import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-800 antialiased">
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-20 px-4 py-10 sm:px-6">
        <Hero />
        <Highlights />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
