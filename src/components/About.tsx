'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { User, MapPin, Briefcase, Calendar } from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20">
            About Me
          </span>
          <h2 className="section-heading mt-6 text-white">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            Passionate developer building cutting-edge digital storefronts and web apps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left — Avatar/Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="relative my-4">
              {/* Decorative glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-electric-500/25 via-purple-500/25 to-pink-500/25 blur-2xl opacity-75" />
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-navy-900 to-slate-950 flex items-center justify-center shadow-2xl group">
                <Image
                  src={personalData.avatarUrl || "/profile.jpg"}
                  alt={personalData.name}
                  width={280}
                  height={280}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-white/10 flex items-center gap-2 shadow-md">
                <Briefcase className="w-4 h-4 text-electric-400" />
                <span className="text-xs sm:text-sm text-white font-medium">2+ Years Exp</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-white/10 flex items-center gap-2 shadow-md">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-white font-medium">{personalData.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Engineering High-Converting <span className="gradient-text">E-Commerce Stores</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {personalData.bio}
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: User, label: 'Name', value: personalData.name },
                { icon: MapPin, label: 'Location', value: personalData.location },
                { icon: Briefcase, label: 'Experience', value: '2+ Years Developer' },
                { icon: Calendar, label: 'Availability', value: 'Open to Opportunities' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-electric-500/30 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">{item.label}</div>
                    <div className="text-sm text-white font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech highlight */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Specialized in:</p>
              <div className="flex flex-wrap gap-2.5">
                {['Shopify', 'Liquid', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900/70 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:border-electric-400 hover:text-white transition-all shadow-sm"
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
