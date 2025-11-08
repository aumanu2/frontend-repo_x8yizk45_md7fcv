import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Home, Info, Users, Briefcase, Mail } from 'lucide-react';

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav
        className={
          `backdrop-blur-xl border border-white/10 flex items-center justify-between w-[94%] max-w-5xl px-4 sm:px-6 ${
            scrolled ? 'bg-black/50 shadow-lg shadow-black/20' : 'bg-black/30'
          } rounded-full transition-colors`
        }
      >
        <div className="flex items-center gap-2 py-2">
          <div className="p-2 rounded-full bg-blue-500/20 border border-blue-400/30">
            <Rocket className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-white font-semibold tracking-wide">Untrustnova</span>
        </div>
        <div className="hidden md:flex items-center">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#what-we-do">What We Do</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#founders">Founders</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-full text-white/90 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed md:hidden z-50 top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-md rounded-3xl border border-white/10 bg-neutral-900/95 overflow-hidden transition-all ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <div className="p-2 divide-y divide-white/5">
          <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 text-white/90 hover:bg-white/5 rounded-2xl">
            <Home className="w-5 h-5 text-blue-400" /> Home
          </a>
          <a href="#what-we-do" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 text-white/90 hover:bg-white/5 rounded-2xl">
            <StarIcon /> What We Do
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 text-white/90 hover:bg-white/5 rounded-2xl">
            <Info className="w-5 h-5 text-blue-400" /> About
          </a>
          <a href="#founders" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 text-white/90 hover:bg-white/5 rounded-2xl">
            <Users className="w-5 h-5 text-blue-400" /> Founders
          </a>
          <a href="#projects" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 text-white/90 hover:bg-white/5 rounded-2xl">
            <Briefcase className="w-5 h-5 text-blue-400" /> Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="flex items-center gap-3 p-4 text-white/90 hover:bg-white/5 rounded-2xl">
            <Mail className="w-5 h-5 text-blue-400" /> Contact
          </a>
        </div>
      </div>
    </header>
  );
}

function StarIcon() {
  // Using a simple SVG star to avoid potential icon name mismatch
  return (
    <svg
      className="w-5 h-5 text-blue-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}
