'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '@/data/portfolio';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm sm:text-base text-slate-200 font-semibold group-hover:text-white transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3 }}
          className="text-xs sm:text-sm text-electric-400 font-mono font-bold px-2.5 py-1 rounded-md bg-electric-500/10 border border-electric-500/20"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 rounded-full bg-slate-950/80 p-0.5 border border-white/10 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-electric-500 via-purple-500 to-accent-cyan relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-accent-cyan font-mono text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
            Skills & Stack
          </span>
          <h2 className="section-heading mt-6 text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            Battle-tested technologies and workflows I use to build scalable products
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {skills.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`relative px-6 py-3 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer shadow-md ${
                activeCategory === index
                  ? 'text-white bg-gradient-to-r from-electric-500 to-purple-500 shadow-electric-500/25'
                  : 'glass-card text-slate-300 hover:text-white hover:border-electric-500/40'
              }`}
            >
              <span className="relative z-10">{category.category}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl"
          >
            <div className="space-y-6 sm:space-y-7">
              {skills[activeCategory].items.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill overview cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 sm:mt-16 max-w-5xl mx-auto"
        >
          {[
            { label: 'Core Languages', value: '5+', desc: 'HTML, CSS, JS, TS, Liquid' },
            { label: 'Modern Frameworks', value: '4+', desc: 'React, Next.js, Tailwind' },
            { label: 'E-Comm Tools', value: '8+', desc: 'Shopify CLI, Git, APIs' },
            { label: 'Production Stores', value: '15+', desc: 'High-performance stores' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 sm:p-7 rounded-2xl text-center border border-white/10 hover:border-electric-500/30 transition-all shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
