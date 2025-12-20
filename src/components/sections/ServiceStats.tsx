"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Stats: React.FC = () => {
  const stats = [
    {
      value: "5k+",
      label: "Déclarations fiscales déposées"
    },
    {
      value: "2k+",
      label: "Clients servis"
    },
    {
      value: "12 ans et plus",
      label: "Des années d'expérience"
    },
    {
      value: "95%",
      label: "taux de fidélisation de la clientèle"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] 
      } 
    }
  };

  return (
    <section className="bg-white py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4 md:px-2 lg:container lg:mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`py-6 md:py-10 lg:py-16 px-2 lg:px-12 flex flex-col justify-start items-start
                ${index < stats.length - 1 ? 'border-r border-slate-200' : ''}
                ${index % 2 === 0 && index < stats.length - 1 ? 'md:border-r border-slate-200' : ''}
                ${index < 2 ? 'border-b md:border-b-0 border-slate-200' : ''}
                ${index === 2 ? 'lg:border-b-0' : ''}
              `}
            >
              <h4 className="text-2xl font-momo md:text-[46px] lg:text-[58px] font-bold text-[#0f172a] mb-3 md:mb-6 tracking-tighter leading-none">
                {stat.value}
              </h4>
              <p className="text-[#0f172a] font-normal text-sm md:text-[16px] lg:text-[18px] max-w-[150px] md:max-w-[200px] leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;