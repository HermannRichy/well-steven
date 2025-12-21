"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function AboutContent() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-500 uppercase mb-4">
            À PROPOS DE WELL STEVEN
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            <span className="block">Sécuriser vos obligations.</span>
            <span className="block">Structurer votre gestion.</span>
            <span className="block">Développer vos compétences.</span>
          </h2>
          
          <div className="w-20 h-1 bg-orange-500 mx-auto my-6"></div>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            WELL STEVEN est un cabinet spécialisé en assistance comptable et fiscale et en formation professionnelle, dédié à l'accompagnement des entreprises, organisations et porteurs de projets à chaque étape de leur développement.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={fadeInUp}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre positionnement</h3>
            <p className="text-gray-600 mb-4">
              Partenaire technique de confiance, nous vous accompagnons dans :
            </p>
            <motion.ul className="space-y-2 text-gray-600">
              {[
                "Sécurisation des obligations comptables et fiscales",
                "Structuration de l'organisation financière",
                "Maîtrise des indicateurs clés",
                "Développement de compétences pratiques"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={listItem}
                >
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={fadeInUp}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre mission</h3>
            <p className="text-gray-600 mb-4">
              Apporter une assistance comptable et fiscale fiable tout en formant des professionnels compétents.
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100">
              <p className="text-sm text-gray-600 italic">
                « Nous nous engageons à fournir des solutions sur mesure pour une gestion financière optimale et une formation professionnelle d'excellence. »
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={fadeInUp}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9m11 4v5h-5m5 0l-2.5-2.5M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre vision</h3>
            <p className="text-gray-600 mb-4">
              Devenir une référence reconnue pour :
            </p>
            <motion.ul className="space-y-2 text-gray-600">
              {[
                "L'excellence de nos services",
                "La qualité de nos formations",
                "Notre approche personnalisée",
                "Notre impact sur la professionnalisation"
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={listItem}
                >
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 font-medium text-sm shadow-lg shadow-orange-100/50 hover:shadow-xl hover:shadow-orange-200/50"
          >
            Contactez-nous
            <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <p className="mt-6 text-sm text-gray-500">
            Prêt à transformer votre gestion financière ? Parlons de votre projet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
