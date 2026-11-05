'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Briefcase, Calendar } from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase">
            — About Me
          </span>
          <h2 className="section-heading mt-4 text-white">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Avatar/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-electric-500/20 to-purple-500/20 blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-white/10">
                {/* Placeholder avatar with gradient */}
                <div className="w-full h-full bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-electric-500 to-purple-500 flex items-center justify-center mb-4">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-slate-400 text-sm font-mono">{'<Developer />'}</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-navy-800 border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-electric-400" />
                  <span className="text-sm text-white font-medium">2+ Years</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-navy-800 border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white font-medium">{personalData.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              {personalData.bio}
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: User, label: 'Name', value: personalData.name },
                { icon: MapPin, label: 'Location', value: personalData.location },
                { icon: Briefcase, label: 'Experience', value: '2+ Years' },
                { icon: Calendar, label: 'Availability', value: 'Open to work' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500/10 to-purple-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech highlight */}
            <div className="pt-4">
              <p className="text-sm text-slate-500 mb-3">Specialized in:</p>
              <div className="flex flex-wrap gap-2">
                {['Shopify', 'Liquid', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300 hover:border-electric-500/30 hover:text-electric-400 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
