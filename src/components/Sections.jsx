import { motion } from 'framer-motion';
import { Rocket, Users, Briefcase, Mail } from 'lucide-react';

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative container mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs mb-4">
            <Rocket className="w-3.5 h-3.5 text-blue-400" /> What We Do
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">Design, build, and launch modern web experiences</h2>
          <p className="mt-4 text-white/70">We focus on clean aesthetics, performance, subtle motion, and interactive depth with 3D when it elevates the story.</p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {["UI/UX & Brand", "Web Apps", "3D & Motion"].map((title, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-semibold">{title}</div>
              <p className="mt-2 text-white/70 text-sm">Concise description about capability and outcomes.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant} className="max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
          <p className="mt-4 text-white/70">Untrustnova is a studio crafting elegant digital products. This template is intentionally minimal so you can adapt copy and visuals later.</p>
        </motion.div>
      </div>
    </section>
  );
}

export function Founders() {
  const founders = [
    { name: 'Founder One', role: 'Design', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop', },
    { name: 'Founder Two', role: 'Engineering', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop', },
    { name: 'Founder Three', role: 'Strategy', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop', },
  ];

  return (
    <section id="founders" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant}>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Users className="w-4 h-4 text-blue-400" /> Founders
          </div>
          <h3 className="mt-2 text-white text-2xl sm:text-3xl font-semibold">People behind the work</h3>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {founders.map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] bg-neutral-900">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{f.name}</div>
                <div className="text-white/60 text-sm">{f.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const items = [
    { title: 'Project A', tag: 'Web', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Project B', tag: 'Brand', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Project C', tag: '3D', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant} className="text-white text-3xl sm:text-4xl font-bold tracking-tight">Recent Projects</motion.h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a key={p.title} href="#" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 block">
              <div className="aspect-video bg-neutral-900 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{p.title}</div>
                  <div className="text-white/60 text-sm">{p.tag}</div>
                </div>
                <Briefcase className="w-5 h-5 text-blue-400" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariant} className="max-w-2xl">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Mail className="w-4 h-4 text-blue-400" /> Contact
          </div>
          <h3 className="mt-2 text-white text-2xl sm:text-3xl font-semibold">Let’s build something great</h3>
          <p className="mt-3 text-white/70">Edit this section later with your preferred contact method or connect a form to a backend.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:hello@untrustnova.com" className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white hover:bg-white/10 transition-colors">hello@untrustnova.com</a>
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white hover:bg-white/10 transition-colors">@untrustnova</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
