import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { WhatWeDo, About, Founders, Projects, Contact } from "./components/Sections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
