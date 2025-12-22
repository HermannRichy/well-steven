"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ServiceSpeciaux: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const services = [
    {
      id: 0,
      title: "Stratégie fiscale & conformité",
      description: "Nous vous accompagnons dans l'anticipation, l'organisation et le respect de vos obligations fiscales, en mettant en place des solutions adaptées à votre situation et à votre secteur d'activité."
    },
    {
      id: 1,
      title: "Gestion de la paie & obligations sociales",
      description: "Nous assurons une gestion fluide et conforme de la paie et des déclarations sociales, afin de garantir la sérénité de vos équipes et la conformité de votre entreprise."
    },
    {
      id: 2,
      title: "Pilotage comptable",
      description: "Au-delà de la tenue des comptes, nous vous offrons une lecture claire de vos données financières pour mieux suivre vos performances et orienter vos décisions stratégiques."
    },
    {
      id: 3,
      title: "Contrôle, audit & fiabilité financière",
      description: "Nous analysons vos processus financiers pour renforcer la transparence, détecter les risques potentiels et améliorer la fiabilité globale de votre organisation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto pb-12 lg:pb-32 px-4 lg:container lg:max-w-6xl lg:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-16">
          
          {/* Left Side - Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] md:h-[450px] lg:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden"
            >
              <Image
                src="/Services/service-4.jpg"
                alt="Finance illustration"
                fill
                className="object-cover rounded-2xl lg:rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7 mt-6 lg:mt-0">
            {/* Grand titre et sous-titre */}
            <div className="mb-6 lg:mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-momo lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 lg:mb-4"
              >
                Nos Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-base lg:text-lg max-w-lg"
              >
                Des fondations financières solides pour une croissance maîtrisée.
              </motion.p>
            </div>

            <div className="space-y-3 lg:space-y-4 relative">
              {services.map((service, index) => {
                const isActive = activeItem === service.id;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-gradient-to-b from-orange-400 to-orange-500`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />

                    {/* Button container */}
                    <button
                      onMouseEnter={() => setActiveItem(service.id)}
                      onClick={() => setActiveItem(service.id)}
                      className={`w-full text-left p-4 lg:p-6 xl:p-8 rounded-lg lg:rounded-xl transition-all duration-300 pl-4 lg:pl-6 ${
                        isActive ? 'bg-slate-50' : 'hover:bg-slate-50/50'
                      }`}
                    >
                      <h3 className={`text-lg font-momo lg:text-xl xl:text-xl font-medium tracking-tight ${
                        isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {service.title}
                      </h3>

                      {/* Animated Description */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", height: { duration: 0.3 } }}
                            className="overflow-hidden text-slate-600 text-sm lg:text-base xl:text-lg"
                          >
                            {service.description}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServiceSpeciaux;