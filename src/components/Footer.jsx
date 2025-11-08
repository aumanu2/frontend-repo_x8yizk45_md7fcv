export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">Untrustnova</h3>
          <p className="mt-2 text-white/70 max-w-md">A modern team and startup crafting software, design, networking, cyber, photography, editing and more.</p>
        </div>
        <div>
          <p className="text-white/70">Navigation</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#what-we-do" className="hover:text-white">What We Do</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#founders" className="hover:text-white">Founders</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white/70">Contact</p>
          <p className="mt-2 text-sm text-white/70">hello@untrustnova.com</p>
          <p className="text-sm text-white/70">Worldwide • Remote‑first</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Untrustnova. All rights reserved.</p>
          <p>Built with Tailwind, Framer Motion, Lenis, and Three.js</p>
        </div>
      </div>
    </footer>
  );
}
