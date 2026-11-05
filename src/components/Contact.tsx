'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin, Twitter } from '@/components/Icons';
import { personalData } from '@/data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    }

    setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
  };

  const inputClasses =
    "w-full px-5 py-4 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-electric-400 focus:bg-slate-900 focus:ring-2 focus:ring-electric-400/20 transition-all duration-300 text-sm sm:text-base shadow-inner";

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-accent-emerald font-mono text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/20">
            Let&apos;s Connect
          </span>
          <h2 className="section-heading mt-6 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mt-4 mx-auto">
            Have an e-commerce project in mind, need Shopify consulting, or want to explore opportunities?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: personalData.email, href: `mailto:${personalData.email}` },
                  { icon: Phone, label: 'Phone', value: personalData.phone, href: `tel:${personalData.phone}` },
                  { icon: MapPin, label: 'Location', value: personalData.location, href: '#' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group p-3 -m-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center shrink-0 group-hover:border-electric-400 group-hover:bg-electric-500/20 transition-all shadow-sm">
                      <item.icon className="w-5 h-5 text-electric-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">{item.label}</div>
                      <div className="text-sm sm:text-base text-slate-200 font-medium group-hover:text-white transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Follow & Network</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalData.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalData.linkedin, label: 'LinkedIn' },
                  { icon: Twitter, href: personalData.twitter, label: 'Twitter' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-13 h-13 rounded-2xl bg-slate-900/80 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-electric-400 hover:bg-electric-500/20 transition-all shadow-md"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-8">Fill out the form below and I will respond within 24 hours.</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Siddharth"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className={inputClasses}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-xl mb-4 text-sm ${
                    status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    status.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                    'bg-electric-500/10 text-electric-400 border border-electric-500/20'
                  }`}
                >
                  {status.type === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status.type === 'success' && <CheckCircle2 className="w-4 h-4" />}
                  {status.type === 'error' && <AlertCircle className="w-4 h-4" />}
                  {status.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-electric-500 to-purple-500 text-white font-semibold text-base shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
