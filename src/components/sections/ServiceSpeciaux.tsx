"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ServiceSpeciaux: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const services = [
    {
      id: 0,
      title: "Assistance comptable",
      description: "Organisation et tenue de la comptabilité. Suivi comptable périodique. Élaboration et analyse des états financiers. Mise en place de procédures comptables. Assistance aux travaux de fin d'exercice. Appui au contrôle interne. 👉 Objectif : garantir des informations financières exactes et exploitables."
    },
    {
      id: 1,
      title: "Assistance fiscale",
      description: "Déclarations fiscales et sociales. Suivi des échéances fiscales. Assistance lors des contrôles fiscaux. Optimisation fiscale dans le respect des textes. Conseil en fiscalité des entreprises. 👉 Objectif : sécuriser la conformité fiscale et réduire les risques."
    },
    {
      id: 2,
      title: "Nos valeurs fondamentales",
      description: "Rigueur professionnelle - Confidentialité - Intégrité - Fiabilité - Pédagogie. Ces valeurs guident chacune de nos interventions."
    },
    {
      id: 3,
      title: "Nos résultats (chiffres clés)",
      description: "👥 +500 clients accompagnés 📅 +10 ans d'expérience cumulée 💼 +1 000 formations délivrées ⭐ 95 % de clients satisfaits"
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