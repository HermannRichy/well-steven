"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const FormationCta: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Image 1 : Top Left (Vient du centre-droit vers le haut-gauche)
  const x1 = useTransform(scrollYProgress, [0, 0.45], [600, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.45], [400, 0]);
  
  // Image 2 : Top Right (Vient du centre-gauche vers le haut-droite)
  const x2 = useTransform(scrollYProgress, [0, 0.45], [-600, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.45], [400, 0]);
  
  // Image 3 : Bottom Left (Vient du centre-droit vers le bas-gauche)
  const x3 = useTransform(scrollYProgress, [0, 0.45], [800, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.45], [-400, 0]);
  
  // Image 4 : Bottom Right (Vient du centre-gauche vers le bas-droite)
  const x4 = useTransform(scrollYProgress, [0, 0.45], [-700, 0]);
  const y4 = useTransform(scrollYProgress, [0, 0.45], [-500, 0]);

  // Opacité et échelle pour l'effet "éclosion"
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.3, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#020b16] py-32"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
             backgroundSize: '80px 80px' 
           }}>
      </div>

      {/* Floating Images */}
      
      {/* 1. Top Left */}
      <motion.div 
        style={{ x: x1, y: y1, opacity, scale }}
        className="absolute top-[5%] left-[5%] w-56 h-56 rounded-[3rem] overflow-hidden shadow-2xl z-10 hidden lg:block"
      >
        <div className="relative w-full h-full">
          <Image 
            src="/formations/formations-2.jpg" 
            alt="Finance" 
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, 224px"
          />
        </div>
      </motion.div>

      {/* 2. Top Right  */}
      <motion.div 
        style={{ x: x2, y: y2, opacity, scale }}
        className="absolute top-[15%] -right-12 w-[350px] h-[350px] rounded-[4rem] overflow-hidden shadow-2xl z-10 hidden lg:block"
      >
        <div className="relative w-full h-full">
          <Image 
            src="/formations/formations-1.jpg" 
            alt="Équipe de formation" 
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, 450px"
          />
        </div>
      </motion.div>

      {/* 3. Bottom Left */}
      <motion.div 
        style={{ x: x3, y: y3, opacity, scale }}
        className="absolute bottom-[2%] -left-16 w-[300px] h-[400px] rounded-[4.5rem] overflow-hidden shadow-2xl z-10 hidden lg:block"
      >
        <div className="relative w-full h-full">
          <Image 
            src="/formations/formations-3.jpg" 
            alt="Consultation formation" 
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, 420px"
          />
        </div>
      </motion.div>

      {/* 4. Bottom Right */}
      <motion.div 
        style={{ x: x4, y: y4, opacity, scale }}
        className="absolute -bottom-10 right-[10%] w-64 h-64 rounded-[3rem] overflow-hidden shadow-2xl z-10 hidden lg:block"
      >
        <div className="relative w-full h-full">
          <Image 
            src="/formations/formations-4.jpg" 
            alt="Formation informatique" 
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, 320px"
          />
        </div>
      </motion.div>

      {/* Central Content */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto space-y-12"
        >
          {/* Badge Label */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Plus size={20} className="text-[#020b16] stroke-[3]" />
            </div>
            <span className="text-[14px] font-black uppercase tracking-[0.5em] text-[#ffac4d]">
              Cabinet Comptable
            </span>
          </div>
          
          <h2 className="text-2xl font-momo md:text-3xl lg:text-3xl font-bold text-white leading-[0.98] tracking-tight">
            Vous recherchez un soutien comptable fiable ? <br /> Contactez notre équipe dès aujourd&apos;hui !
          </h2>
          
          {/* Button */}
          <div className="pt-8">
            <InteractiveHoverButton className="bg-secondary text-sm">
              <Link href="#">Planifiez une consultation</Link>
            </InteractiveHoverButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationCta;