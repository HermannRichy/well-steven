"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const FeaturesGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* Première section avec container */}
      <section className="py-12 lg:py-24 bg-white overflow-hidden">
        <div className="mx-auto px-4 lg:container lg:mx-auto lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-16 space-y-3 lg:space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 block">
              Notre positionnement
            </span>
            <h2 className="text-2xl font-momo lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Un partenaire technique de confiance, pas un simple prestataire
            </h2>
          </div>

          {/* Grid Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-4 lg:gap-6"
          >
            {/* Card 1: Notre mission */}
            <motion.div 
              variants={cardVariants}
              className="bg-[#0b1727] rounded-2xl lg:rounded-[2.5rem] p-6 lg:p-10 h-auto lg:h-[520px] relative overflow-hidden flex flex-col group flex-1 min-w-0"
            >
              <div className="relative z-10 space-y-3 lg:space-y-4">
                <h3 className="text-white text-lg lg:text-xl font-bold">Notre mission</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm lg:text-base max-w-full lg:max-w-[240px]">
                  Apporter une assistance comptable et fiscale fiable, tout en formant des professionnels compétents, capables de gérer efficacement les réalités financières et administratives des organisations.
                </p>
              </div>
              
              {/* Abstract Graphic Element */}
              <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700 hidden lg:block">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-64 h-64 fill-slate-500">
                      <path d="M 0,200 L 200,200 L 200,0 Z" />
                  </svg>
              </div>

              <div className="mt-6 lg:mt-auto relative z-10">
                <span className="text-white font-bold text-xs lg:text-sm tracking-wide">WELL STEVEN • Engagement</span>
              </div>
            </motion.div>

            {/* Card 2: Notre approche */}
            <motion.div 
              variants={cardVariants}
              className="bg-[#f3f4f6] rounded-2xl lg:rounded-[2.5rem] p-6 lg:p-10 h-auto lg:h-[520px] flex flex-col relative overflow-hidden flex-1 min-w-0 mt-4 lg:mt-0"
            >
              <div className="space-y-3 lg:space-y-4 mb-4">
                <h3 className="text-slate-900 text-lg lg:text-xl font-bold">Notre méthodologie</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm lg:text-base max-w-full lg:max-w-[240px]">
                  ✔ Diagnostic précis des besoins<br/>
                  ✔ Approche personnalisée<br/>
                  ✔ Application des normes et règles en vigueur<br/>
                  ✔ Suivi rigoureux des dossiers<br/>
                  ✔ Transmission claire des connaissances
                </p>
              </div>

              <div className="relative flex justify-center items-center h-32 lg:h-40 my-4 lg:my-4">
                  <div className="w-24 h-24 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl absolute -translate-x-8 lg:-translate-x-12 z-10">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/Services/service-3.jpg" 
                          alt="Consultation comptable"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 96px, 144px"
                        />
                      </div>
                  </div>
                  <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl absolute translate-x-8 lg:translate-x-12">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/Services/service-1.jpg" 
                          alt="Formation professionnelle"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80px, 112px"
                        />
                      </div>
                  </div>
              </div>

              {/* Bouton CTA */}
              <InteractiveHoverButton className="bg-secondary text-sm">
                <Link href="/contact">Planifiez une consultation</Link>
              </InteractiveHoverButton>
              <div className="flex-1 hidden lg:block"></div>
            </motion.div>

            {/* Card 3: Orange Style - Pourquoi nous choisir */}
            <motion.div 
              variants={cardVariants}
              className="bg-[#ffac4d] rounded-2xl lg:rounded-[2.5rem] p-4 lg:p-6 flex flex-col h-auto lg:h-[520px] flex-1 lg:flex-[2] min-w-0 mt-4 lg:mt-0"
            >
              <div className="w-full h-48 lg:h-64 rounded-xl lg:rounded-[1.8rem] overflow-hidden mb-4 lg:mb-8 shadow-inner">
                <div className="relative w-full h-full">
                  <Image 
                    src="/Services/service-2.jpg" 
                    alt="Équipe Well Steven" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Pourquoi nous choisir? */}
              <div className="px-2 lg:px-4 space-y-4 lg:space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-slate-900 text-lg lg:text-2xl font-bold leading-snug mb-2 lg:mb-4">
                    Pourquoi faire confiance à WELL STEVEN ?
                  </h3>
                  <p className="text-slate-800/80 font-light leading-relaxed text-sm lg:text-base">
                    ✔ Cabinet spécialisé et structuré<br/>
                    ✔ Maîtrise des réalités comptables et fiscales locales<br/>
                    ✔ Formations basées sur des cas réels<br/>
                    ✔ Approche pratique et orientée solution<br/>
                    ✔ Engagement sur la qualité et le respect des délais
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative h-[400px] lg:h-[550px] xl:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src="/Services/tresorerie.jpg" 
              alt="Support comptable Well Steven"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="mx-auto px-4 lg:container lg:mx-auto lg:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-6 lg:space-y-10"
          >
            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] text-white/90 block">
              Cabinet d&apos;Assistance Comptable, Fiscale et de Formation
            </span>
            <h2 className="text-2xl font-momo lg:text-3xl xl:text-4xl 2xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Sécuriser vos obligations. Structurer votre gestion. Développer vos compétences.
            </h2>
            
            <InteractiveHoverButton className="bg-secondary text-sm">
              <Link href="/contact">Planifiez une consultation</Link>
            </InteractiveHoverButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;