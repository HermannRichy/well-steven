"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
            <h2 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
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
            {/* Card 1: Dark Style - Notre mission */}
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

            {/* Card 2: Neutral Style with Circles - Notre approche */}
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

              {/* Overlapping Circles Visual - Position ajustée */}
              <div className="relative flex justify-center items-center h-32 lg:h-40 my-4 lg:my-4">
                  <div className="w-24 h-24 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl absolute -translate-x-8 lg:-translate-x-12 z-10">
                      <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Consultation comptable" />
                  </div>
                  <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl absolute translate-x-8 lg:translate-x-12">
                      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Formation professionnelle" />
                  </div>
              </div>

              {/* Bouton CTA maintenant bien visible */}
              <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-slate-300/50">
                <span className="inline-block bg-[#0b1727] text-white text-[10px] lg:text-[11px] font-black uppercase tracking-widest px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:bg-slate-800 transition-colors duration-300 cursor-pointer">
                  Pratique • Rigoureux • Résultats
                </span>
              </div>

              {/* Espacement supplémentaire pour pousser le bouton vers le bas */}
              <div className="flex-1 hidden lg:block"></div>
            </motion.div>

            {/* Card 3: Orange Style - Pourquoi nous choisir */}
            <motion.div 
              variants={cardVariants}
              className="bg-[#ffac4d] rounded-2xl lg:rounded-[2.5rem] p-4 lg:p-6 flex flex-col h-auto lg:h-[520px] flex-1 lg:flex-[2] min-w-0 mt-4 lg:mt-0"
            >
              {/* Image en haut - reste horizontale */}
              <div className="w-full h-48 lg:h-64 rounded-xl lg:rounded-[1.8rem] overflow-hidden mb-4 lg:mb-8 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
                  alt="Équipe Well Steven" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Contenu en dessous */}
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
                
                <div className="mt-4 lg:mt-0">
                  <button className="bg-[#0b1727] text-white text-xs lg:text-sm font-bold uppercase tracking-wider px-4 py-2.5 lg:px-8 lg:py-3.5 rounded-full hover:bg-slate-900 transition-colors duration-300 w-full lg:w-auto">
                    Découvrir nos solutions
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Image Full Width - EN DEHORS du container, 100% largeur */}
      <section className="relative h-[400px] lg:h-[550px] xl:h-[650px] flex items-center overflow-hidden">
        {/* Background Image with precise dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80" 
            alt="Support comptable Well Steven" 
            className="w-full h-full object-cover"
          />
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
              Cabinet d'Assistance Comptable, Fiscale et de Formation
            </span>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Sécuriser vos obligations. Structurer votre gestion. Développer vos compétences.
            </h2>
            
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: '#ff9c2d' }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#ffac4d] text-slate-900 px-6 py-3 lg:px-12 lg:py-5 rounded-full font-bold text-sm lg:text-base flex items-center gap-2 lg:gap-3 transition-colors shadow-2xl"
            >
              Planifiez une consultation
              <ArrowUpRight size={18} className="lg:size-20" strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;