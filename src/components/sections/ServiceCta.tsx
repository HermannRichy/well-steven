"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative h-[650px] flex items-center overflow-hidden">
      {/* Background Image with precise dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80" 
          alt="Support comptable" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-10"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/90 block">
            Cabinet d'Assistance Comptable, Fiscale et de Formation
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Besoin d'un soutien comptable fiable ? Contactez notre équipe.
          </h2>
          
          <motion.button 
            whileHover={{ scale: 1.03, backgroundColor: '#ff9c2d' }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#ffac4d] text-slate-900 px-12 py-5 rounded-full font-bold text-base flex items-center gap-3 transition-colors shadow-2xl"
          >
            Planifiez une consultation
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
