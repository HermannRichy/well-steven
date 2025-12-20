"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const CTASection: React.FC = () => {
  return (
    <section className="relative h-[650px] flex items-center overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/Services/tresorerie.jpg" 
            alt="Support comptable" 
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-6 lg:space-y-10"
        >
          <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white/90 block">
            Cabinet d&apos;Assistance Comptable, Fiscale et de Formation
          </span>
          <h2 className="text-2xl font-momo lg:text-3xl xl:text-4xl 2xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Sécuriser vos obligations. Structurer votre gestion. Développer vos compétences.
          </h2>
          <InteractiveHoverButton className="bg-secondary text-sm">
              <Link href="#">Planifiez une consultation</Link>
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;