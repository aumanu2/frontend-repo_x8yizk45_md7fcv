import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-4 py-2 text-sm md:text-[15px] text-white/80 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4">
      <nav
        className={`w-full max-w-6xl transition-all duration-300 ${
          scrolled ? 'bg-white/5 shadow-2xl shadow-blue-500/5' : 'bg-white/10'
        } backdrop-blur-xl border border-white/10 rounded-full`}
      >
        <div className="flex items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-white">Untrustnova</span>
          </a>

          <div className="hidden md:flex items-center">
            <NavLink href="#what-we-do">What We Do</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#founders">Founders</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full bg-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-5 pb-4">
            <div className="grid gap-2 pt-2">
              <NavLink href="#what-we-do" onClick={close}>What We Do</NavLink>
              <NavLink href="#about" onClick={close}>About</NavLink>
              <NavLink href="#founders" onClick={close}>Founders</NavLink>
              <NavLink href="#projects" onClick={close}>Projects</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
