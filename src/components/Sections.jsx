import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Github, ArrowUpRight } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

function SectionTitle({ id, eyebrow, title, desc }) {
  return (
    <div id={id} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs uppercase tracking-widest text-blue-300/80">{eyebrow}</p>
      <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-white">{title}</h2>
      {desc && <p className="mt-3 max-w-3xl text-white/70">{desc}</p>}
    </div>
  );
}

export function WhatWeDo() {
  const stacks = [
    { group: 'Core Web', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Go', 'Laravel', 'Next.js', 'Vite', 'Express.js', 'Elysia', 'Node.js', 'WordPress'] },
    { group: 'UI & Motion', items: ['Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Lenis', 'Electron.js', 'Lightning CSS'] },
    { group: 'Data', items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis', 'Firebase', 'Supabase'] },
    { group: 'Dev & Ops', items: ['Docker', 'Git', 'VS Code', 'Ngrok', 'Apache', 'Nginx', 'Postman', 'GitHub Actions'] },
    { group: 'Creative & Systems', items: ['Adobe Premiere', 'Photoshop', 'Illustrator', 'After Effects', 'Canva', 'Blender', 'Mikrotik', 'Grafana', 'Proxmox', 'Windows', 'Linux'] },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-[#0b1020] text-white">
      <SectionTitle id="what-we-do" eyebrow="What We Do" title="Full‑stack digital from code to content" desc="We design, build and ship across web apps, infrastructure, brand design, and media production." />
      <div className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Capabilities</h3>
          <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
            <li>Product strategy, prototyping, and UX/UI design</li>
            <li>Front‑end and back‑end engineering</li>
            <li>Cloud, networking, security hardening</li>
            <li>Branding, motion, photo/video production</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Tech Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {stacks.flatMap(({ group, items }) => [
              <Badge key={group}>{group}</Badge>,
              ...items.map((i) => <Badge key={group + i}>{i}</Badge>)
            ])}
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="relative bg-[#0b1020] text-white">
      <SectionTitle id="about" eyebrow="About" title="We’re engineers, designers and makers" desc="Untrustnova is a studio and startup shaping reliable software and delightful visuals. We work with startups and enterprises to launch, iterate and scale." />
      <div className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-800/30" />
            <h3 className="mt-4 text-lg font-semibold">Enterprise‑grade builds</h3>
            <p className="mt-2 text-sm text-white/70">From system design to pixel‑perfect interfaces, we obsess over quality and maintainability.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const SocialButton = ({ href, children, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/90 hover:border-white/30 hover:bg-white/5"
  >
    <Icon size={14} /> {children}
  </a>
);

const FounderCard = ({ name, role, img }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-blue-600/40 to-blue-900/40 overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <h4 className="mt-4 text-lg font-semibold text-white">{name}</h4>
    <p className="text-sm text-white/70">{role}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      <SocialButton href="#" Icon={Linkedin}>LinkedIn</SocialButton>
      <SocialButton href="#" Icon={Instagram}>Instagram</SocialButton>
      <SocialButton href="mailto:hello@untrustnova.com" Icon={Mail}>Email</SocialButton>
      <SocialButton href="#" Icon={Github}>GitHub</SocialButton>
    </div>
  </div>
);

export function Founders() {
  const founders = [
    { name: 'Alex Nova', role: 'Full‑stack Engineer', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Raya Trust', role: 'Designer & Producer', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Kai Orion', role: 'Infra & Security', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <section className="relative bg-[#0b1020] text-white">
      <SectionTitle id="founders" eyebrow="Founders" title="The team behind Untrustnova" />
      <div className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-3 gap-6">
        {founders.map((f) => (
          <FounderCard key={f.name} {...f} />
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  const items = [
    { title: 'Realtime Admin Dashboard', desc: 'Next.js + Supabase + Tailwind', href: '#' },
    { title: 'Design System & Brand', desc: 'Figma, tokens, components', href: '#' },
    { title: 'Edge‑ready APIs', desc: 'Go, Elysia, PostgreSQL', href: '#' },
  ];

  return (
    <section className="relative bg-[#0b1020] text-white">
      <SectionTitle id="projects" eyebrow="Recent Projects" title="Selected work" />
      <div className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <a key={p.title} href={p.href} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-800/30 mb-4" />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold">{p.title}</h4>
                <p className="text-sm text-white/70">{p.desc}</p>
              </div>
              <ArrowUpRight className="text-white/60 group-hover:text-white" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="relative bg-[#0b1020] text-white">
      <SectionTitle id="contact" eyebrow="Contact" title="Let’s build something remarkable" desc="Tell us about your idea, and we’ll get back within 24–48 hours." />
      <div className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-2 gap-6">
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input placeholder="Company / Organization" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Project details" rows={5} className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-medium text-white">Send Message</button>
        </form>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-lg font-semibold">Reach us</h4>
          <p className="mt-2 text-white/70">Email: hello@untrustnova.com</p>
          <p className="text-white/70">We’re available for product builds, design systems, infrastructure, and media.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Next.js','Go','Laravel','Framer Motion','Three.js','Docker','MongoDB'].map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
