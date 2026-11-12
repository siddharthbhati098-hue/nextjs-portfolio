'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { Github } from '@/components/Icons';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20">
            Portfolio Showcase
          </span>
          <h2 className="section-heading mt-6 text-white">
            Featured <span className="gradient-text">Work & Stores</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            A curated selection of high-performing e-commerce stores, custom Shopify themes, and web applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-56 sm:h-64 overflow-hidden border-b border-white/10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105 ${
                      index === 0
                        ? 'from-electric-600/40 via-purple-600/30 to-navy-950'
                        : index === 1
                        ? 'from-purple-600/40 via-electric-600/30 to-navy-950'
                        : index === 2
                        ? 'from-accent-cyan/30 via-electric-600/30 to-navy-950'
                        : 'from-accent-emerald/30 via-purple-600/30 to-navy-950'
                    }`}
                  />

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-slate-900/60 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Layers className="w-10 h-10 text-electric-400" />
                      </div>
                      <div className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-xl bg-gradient-to-br from-electric-500 to-purple-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">{project.id}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-xs text-white font-semibold shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-electric-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-xs sm:text-sm text-slate-200 font-mono border border-slate-700/60 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links Bar */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 border-t border-white/10 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-electric-500 to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-electric-500/20 transition-all text-center"
                >
                  <span>View Project / Repo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-slate-900/80 border border-white/15 text-white hover:text-electric-300 hover:border-electric-400 font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
