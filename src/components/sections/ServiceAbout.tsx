"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Lightbulb, 
  Network, 
  MonitorCheck, 
  HandHelping,
} from 'lucide-react';
import Link from 'next/link';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const ServicePage: React.FC = () => {
  const services = [
  {
    title: "Solutions personnalisées",
    description: "Nous analysons votre situation en profondeur afin de concevoir des solutions adaptées à votre structure, vos objectifs et vos contraintes, pour une gestion efficace et durable.",
    icon: Lightbulb
  },
  {
    title: "Rapports transparents",
    description: "Nous mettons à votre disposition des rapports financiers clairs et structurés, facilitant la compréhension de vos performances et la prise de décisions stratégiques.",
    icon: Network
  },
  {
    title: "Professionnels expérimentés",
    description: "Notre cabinet s'appuie sur une équipe qualifiée et expérimentée, capable de vous accompagner avec rigueur, fiabilité et expertise à chaque étape de votre activité.",
    icon: MonitorCheck
  },
  {
    title: "Conformité réglementaire",
    description: "Nous assurons le respect des obligations comptables, fiscales et légales afin de sécuriser votre entreprise et prévenir tout risque réglementaire.",
    icon: HandHelping
  }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Animation du cercle  
  const circleVariants: Variants = {
    initial: { 
      scale: 0,
      opacity: 0.7,
      backgroundColor: "#ff5c00",
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 25
      }
    },
    hover: { 
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 250, 
        damping: 15
      }
    }
  };

  const iconVariants: Variants = {
    initial: { color: "#0f172a", scale: 1 },
    hover: { 
      color: "#ffffff",
      scale: 1.1,
      transition: { 
        delay: 0.1,
        duration: 0.3 
      }
    }
  };

  return (
    <div className="bg-white min-h-screen mb-20 lg:mb-50 selection:bg-orange-100">
      <section className="max-w-6xl mx-auto pt-12 lg:pt-24 pb-8 lg:pb-16 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex flex-col">
              <span className="text-[10px] font-momo font-black uppercase tracking-[0.3em] text-slate-900 mb-1">
                Nos expertises & accompagnements
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-8"
          >
            <h1 className="text-2xl font-momo lg:text-4xl font-medium text-slate-900 leading-[1.05] tracking-tighter">
              Nous accompagnons les particuliers et les entreprises avec des solutions comptables, fiscales et financières pensées pour la performance et la conformité.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="mx-auto px-4 lg:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-100"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              animate="visible"
              className={`py-8 lg:py-16 xl:py-20 px-4 lg:px-0 xl:px-10 group border-b lg:border-b-0 border-slate-100 relative transition-colors duration-700 hover:bg-slate-50/30 ${
                index !== 0 ? 'lg:border-l border-slate-100' : ''
              }`}
            >
              {/* Animated Icon Container */}
              <div className="relative mb-8 lg:mb-14 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                 <motion.div 
                  variants={circleVariants}
                  className="absolute inset-0 z-0 rounded-full"
                  style={{ transformOrigin: "center center" }}
                />
                
                {/* Icône */}
                <motion.div 
                  variants={iconVariants}
                  className="relative z-10"
                >
                  <service.icon className="w-8 h-8 lg:w-10 lg:h-10 stroke-[1.1]" />
                </motion.div>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg font-momo lg:text-xl font-semibold text-slate-900 tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm lg:text-[16px] font-light max-w-full lg:max-w-[280px]">
                  {service.description}
                </p>
                  <InteractiveHoverButton className="bg-secondary text-sm">
                    <Link href="/formations">Découvrir</Link>
                  </InteractiveHoverButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ServicePage;