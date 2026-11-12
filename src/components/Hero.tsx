'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-36 pb-20 px-4 sm:px-6"
    >
      {/* Background Orbs */}
      <div className="orb w-[500px] h-[500px] bg-electric-500 top-[-100px] left-[-100px]" />
      <div className="orb w-[400px] h-[400px] bg-purple-500 bottom-[-50px] right-[-50px]" style={{ animationDelay: '-7s' }} />
      <div className="orb w-[300px] h-[300px] bg-accent-cyan top-[40%] right-[20%]" style={{ animationDelay: '-14s' }} />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-electric-400" />
          <span className="text-xs sm:text-sm text-slate-300 font-medium">Available for exciting opportunities</span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl text-slate-400 mb-4 font-mono"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 break-words"
        >
          <span className="text-white">{personalData.name}</span>
          <span className="gradient-text">.</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 break-words"
        >
          <span className="gradient-text">{personalData.title}</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalData.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('#projects')}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-500 to-purple-500 text-white font-semibold text-lg shadow-2xl shadow-electric-500/25 hover:shadow-electric-500/40 transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalData.resumeUrl}
            download="Siddharth_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer shadow-lg"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 max-w-2xl mx-auto"
        >
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '15+', label: 'Projects Completed' },
            { value: '10+', label: 'Happy Clients' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-5 sm:p-6 rounded-2xl text-center border border-white/10 hover:border-electric-500/30 transition-all shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 rounded-full bg-electric-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
