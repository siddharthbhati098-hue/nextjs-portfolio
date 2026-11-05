'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '@/data/portfolio';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-xs text-slate-500 font-mono"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-electric-500 to-purple-500 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan font-mono text-sm tracking-wider uppercase">
            — Skills
          </span>
          <h2 className="section-heading mt-4 text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            Technologies I work with on a daily basis
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === index
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white bg-white/[0.02] border border-white/5 hover:border-white/10'
              }`}
            >
              {activeCategory === index && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-500/20 to-purple-500/20 border border-electric-500/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category.category}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 sm:p-8 hover:transform-none"
          >
            <div className="space-y-5">
              {skills[activeCategory].items.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
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
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: 'Languages', value: '5+', color: 'from-electric-500/10 to-electric-500/5' },
            { label: 'Frameworks', value: '4+', color: 'from-purple-500/10 to-purple-500/5' },
            { label: 'Tools', value: '8+', color: 'from-accent-cyan/10 to-accent-cyan/5' },
            { label: 'Platforms', value: '3+', color: 'from-accent-emerald/10 to-accent-emerald/5' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`text-center p-4 rounded-xl bg-gradient-to-b ${stat.color} border border-white/5`}
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
