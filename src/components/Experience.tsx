'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Building2, CheckCircle2, Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <section id="experience" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-purple-400 font-mono text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
            Work History
          </span>
          <h2 className="section-heading mt-6 text-white">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            2+ years of hands-on experience building high-converting Shopify stores and frontend solutions
          </p>
        </motion.div>

        {/* Experience Cards Stack */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-electric-500/10 to-transparent rounded-bl-full pointer-events-none" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-500/20 to-purple-500/20 border border-electric-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-electric-500/10">
                    <Building2 className="w-7 h-7 text-electric-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-electric-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-electric-400">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs sm:text-sm text-slate-300 font-medium">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="my-6">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-electric-400" /> Key Contributions & Achievements
                </p>
                <ul className="space-y-3.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Technologies Used:</p>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-xs sm:text-sm text-slate-200 font-mono border border-slate-700/60 shadow-sm hover:border-electric-500/40 hover:text-white transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
