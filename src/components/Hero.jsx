import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.5),transparent_50%)]" />

        <div className="mx-auto max-w-6xl px-6 pt-36 pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Building trusted digital experiences
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">with Untrustnova</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 max-w-2xl text-white/80"
          >
            A modern team crafting software, design, infrastructure, and content. We blend engineering discipline with creative exploration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-blue-600/30">
              View Recent Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 text-white px-6 py-3 text-sm font-medium backdrop-blur">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
