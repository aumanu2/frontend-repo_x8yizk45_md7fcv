export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {year} Untrustnova. All rights reserved.</div>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#what-we-do" className="hover:text-white">What We Do</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
