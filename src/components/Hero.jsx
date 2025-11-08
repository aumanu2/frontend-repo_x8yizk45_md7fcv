import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-28 flex items-center overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8l6lcq0Hkm4pW4mW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl"
        >
          Untrustnova
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-white/70 max-w-2xl"
        >
          Modern web experiences with clean aesthetics, subtle motion, and interactive 3D.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#what-we-do" className="px-5 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">Explore</a>
          <a href="#projects" className="px-5 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 transition-colors">See Projects</a>
        </motion.div>
      </div>
    </section>
  );
}
