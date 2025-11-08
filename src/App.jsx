import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { WhatWeDo, About, Founders, Projects, Contact } from './components/Sections';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.12,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
}

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <About />
      <Founders />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
