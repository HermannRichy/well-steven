"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
import { 
  Check, 
  ArrowUpRight, 
  BookOpen, 
  PenTool, 
  Users, 
  Globe, 
  Monitor,
  FileText,
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';

interface FormationPlan {
  id: string;
  title: string;
  badge?: string;
  description: string;
  price: string;
  regFee: string;
  duration?: string;
  modules: {
    title: string;
    details: string[];
  }[];
  documents: string[];
  isPopular?: boolean;
  icon: React.ElementType;
}

const trainings: FormationPlan[] = [
  {
    id: "gestion-comptable",
    title: "Gestion Comptable et Fiscale",
    badge: "Plus complet",
    isPopular: true,
    description: "Formation intensive pour maîtriser l'organisation, le traitement et le contrôle de la comptabilité d'entreprise.",
    price: "100 000",
    regFee: "5 000",
    duration: "4 mois",
    icon: BookOpen,
    modules: [
      {
        title: "Organisation pratique",
        details: ["Système comptable OHADA", "Organisation des dossiers clients/fournisseurs", "Plan comptable général"]
      },
      {
        title: "Travaux de fin d'exercice",
        details: ["Établissement des états financiers", "Calcul et analyse des ratios", "Clôture et réouverture des comptes"]
      },
      {
        title: "Logiciels avancés",
        details: ["Perfecto Comptabilité", "Sage 100", "Automatisation des processus"]
      },
      {
        title: "Télédéclarations",
        details: ["Déclaration TVA en ligne", "Déclarations fiscales numériques", "Télépaiement des impôts"]
      }
    ],
    documents: [
      "Copie du BAC ou équivalent",
      "CV détaillé",
      "Lettre de motivation",
      "2 photos d'identité",
      "Copie CNIB"
    ]
  },
  {
    id: "secretariat",
    title: "Secrétariat Comptable",
    badge: "Polyvalence",
    description: "Devenez un profil polyvalent capable d'allier gestion administrative, comptable et fiscale.",
    price: "100 000",
    regFee: "5 000",
    duration: "4 mois",
    icon: PenTool,
    modules: [
      {
        title: "Pack Office avancé",
        details: ["Excel avancé (formules, tableaux croisés)", "Word professionnel", "PowerPoint pour présentations"]
      },
      {
        title: "Rédaction professionnelle",
        details: ["Courriers administratifs", "Procès-verbaux", "Comptes rendus de réunion"]
      },
      {
        title: "SYSCOHADA révisé",
        details: ["Principes fondamentaux", "Application pratique", "Cas concrets d'entreprise"]
      },
      {
        title: "Déclarations sociales",
        details: ["Déclaration CNPS", "Gestion des bulletins de paie", "Droit social appliqué"]
      }
    ],
    documents: [
      "Diplôme de fin d'études secondaires",
      "CV à jour",
      "Photocopie de l'acte de naissance",
      "4 photos 4x4",
      "Reçu de paiement des frais"
    ]
  },
  {
    id: "rh",
    title: "Ressources Humaines",
    description: "Gérez efficacement le capital humain, du recrutement à la paie informatisée.",
    price: "100 000",
    regFee: "5 000",
    duration: "Intensif",
    icon: Users,
    modules: [
      {
        title: "Stratégies de recrutement",
        details: ["Analyse des besoins", "Techniques d'entretien", "Tests de sélection"]
      },
      {
        title: "Sage Paie RH",
        details: ["Paramétrage du logiciel", "Calcul des salaires", "Éditions des bulletins"]
      },
      {
        title: "Gestion des conflits",
        details: ["Techniques de médiation", "Communication non-violente", "Résolution de problèmes"]
      },
      {
        title: "Licenciements",
        details: ["Procédures légales", "Calcul des indemnités", "Accompagnement social"]
      }
    ],
    documents: [
      "Diplôme universitaire (tout domaine)",
      "CV avec expériences",
      "Lettre de recommandation",
      "Copie du dernier diplôme",
      "Pièce d'identité"
    ]
  },
  {
    id: "ebnl",
    title: "Spécialiste EBNL",
    badge: "Spécialisation",
    description: "Maîtrisez la comptabilité spécifique aux ONG, associations et projets de développement.",
    price: "150 000",
    regFee: "10 000",
    icon: Globe,
    modules: [
      {
        title: "Cadre juridique EBNL",
        details: ["Statuts associatifs", "Régime fiscal spécifique", "Obligations légales"]
      },
      {
        title: "Appels à projets",
        details: ["Rédaction de projets", "Élaboration de budgets", "Suivi et évaluation"]
      },
      {
        title: "Levée de fonds",
        details: ["Stratégies de fundraising", "Partenariats institutionnels", "Crowdfunding"]
      },
      {
        title: "Bailleurs de fonds",
        details: ["Procédures des bailleurs", "Rapportage financier", "Audit des projets"]
      }
    ],
    documents: [
      "BAC+2 minimum",
      "CV orienté projet/ONG",
      "Projet personnel (optionnel)",
      "Copie légalisée du diplôme",
      "Attestation de travail si applicable"
    ]
  },
  {
    id: "logiciels",
    title: "Logiciels de Gestion",
    description: "Formation pratique et rapide sur les outils informatisés standards du marché.",
    price: "70 000",
    regFee: "5 000",
    icon: Monitor,
    modules: [
      {
        title: "Perfecto",
        details: ["Installation et paramétrage", "Gestion des écritures", "Édition des états"]
      },
      {
        title: "Hypersoft",
        details: ["Module comptable", "Module commercial", "Module de paie"]
      },
      {
        title: "Sage Comptabilité",
        details: ["Interface utilisateur", "Saisie des opérations", "Clôture mensuelle"]
      },
      {
        title: "Maîtrise complète",
        details: ["Migration des données", "Sauvegarde et restauration", "Résolution d'erreurs"]
      }
    ],
    documents: [
      "Bases en comptabilité",
      "CV mentionnant les compétences informatiques",
      "Diplôme de fin d'études",
      "2 photos d'identité",
      "Pièce d'identité"
    ]
  }
];

const FormationPlan: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [expandedModule, setExpandedModule] = useState<Record<string, number | null>>({});
  const [expandedDocs, setExpandedDocs] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleModule = (trainingId: string, moduleIndex: number) => {
    setExpandedModule(prev => ({
      ...prev,
      [trainingId]: prev[trainingId] === moduleIndex ? null : moduleIndex
    }));
  };

  const toggleDocuments = (trainingId: string) => {
    setExpandedDocs(prev => ({
      ...prev,
      [trainingId]: !prev[trainingId]
    }));
  };

  // Fonction pour générer le message WhatsApp personnalisé
  const generateWhatsAppMessage = (plan: FormationPlan) => {
    const message = `Bonjour, j'espère que vous allez bien ! 

Je suis intéressé(e) par votre formation : 

${plan.title}

Prix: ${plan.price} FCFA
Frais d'inscription: ${plan.regFee} FCFA
Durée : ${plan.duration || 'À déterminer'}

Description : ${plan.description}

Je souhaiterais m'inscrire à cette formation. Pourriez-vous me donner plus d'informations sur les modalités d'inscription ?

Merci d'avance !`;

    return encodeURIComponent(message);
  };

  // Fonction pour rediriger vers WhatsApp
  const redirectToWhatsApp = (plan: FormationPlan) => {
    const phoneNumber = "2290190479512"; 
    const message = generateWhatsAppMessage(plan);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24 selection:bg-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4 w-full lg:w-2/3">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-500 block">
              NOTRE PLAN FORMATION
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Formations abordables avec un suivi de qualité supérieure
            </h1>
          </div>

          {/* Toggle Switch - Optimisé pour mobile */}
          <div className="w-full lg:w-auto mt-4 lg:mt-0">
            <div className="bg-white border border-slate-200 rounded-full p-1.5 sm:p-2 flex items-center justify-between shadow-sm max-w-md lg:max-w-none mx-auto lg:mx-0">
              <button 
                onClick={() => setIsOnline(false)}
                className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold transition-all flex-1 ${!isOnline ? 'bg-[#ffac4d] text-slate-900' : 'text-slate-500'}`}
              >
                Présentiel
              </button>
              <div className="px-3 sm:px-4 md:px-6 text-[10px] xs:text-xs text-slate-400 font-medium text-center whitespace-nowrap">
                {isMobile ? (
                  <span>4 mois</span>
                ) : (
                  <>
                    Mode de formation :<br />4 mois intensif
                  </>
                )}
              </div>
              <button 
                onClick={() => setIsOnline(true)}
                className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold transition-all flex-1 ${isOnline ? 'bg-[#ffac4d] text-slate-900' : 'text-slate-500'}`}
              >
                En ligne
              </button>
            </div>
          </div>
        </div>

        {/* Grid Optimisé pour tous les écrans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
          {trainings.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={!isMobile ? { y: -10 } : {}}
              className={`rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col relative transition-all duration-300 border shadow-sm ${
                plan.isPopular 
                ? 'bg-[#0f172a] border-slate-800 text-white' 
                : 'bg-white border-slate-100 text-slate-900'
              }`}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6 sm:mb-8 lg:mb-10">
                <div className={`p-3 sm:p-4 rounded-2xl ${plan.isPopular ? 'bg-white/10' : 'bg-slate-50'}`}>
                  <plan.icon size={isMobile ? 24 : 28} strokeWidth={1.5} />
                </div>
                {plan.badge && (
                  <span className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] xs:text-[11px] font-black uppercase tracking-widest whitespace-nowrap ${
                    plan.isPopular ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">{plan.title}</h3>
                <p className={`text-sm sm:text-[15px] leading-relaxed font-light ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                {plan.duration && (
                  <div className={`inline-flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                    plan.isPopular ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <span>⏱️</span>
                    <span>{plan.duration}</span>
                  </div>
                )}
              </div>

              {/* Price Section - Optimisé pour mobile */}
              <div className="flex items-baseline gap-2 mb-6 sm:mb-8 lg:mb-10">
                <span className={`text-lg sm:text-xl md:text-2xl font-bold opacity-30 line-through ${plan.isPopular ? 'text-white' : 'text-slate-400'}`}>
                  {parseInt(plan.price.replace(/\s/g, '')) + 25000} FCFA
                </span>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{plan.price}</span>
                    <span className="text-base sm:text-lg md:text-lg font-bold">FCFA</span>
                    <span className={`text-xs sm:text-sm opacity-60 ml-1 font-medium hidden xs:inline`}>
                      / formation
                    </span>
                  </div>
                  <span className={`text-[10px] xs:text-[11px] font-bold uppercase tracking-wider mt-1 ${plan.isPopular ? 'text-orange-400' : 'text-[#ff5c00]'}`}>
                    + {plan.regFee} FCFA Inscription
                  </span>
                </div>
              </div>

              {/* MODIFICATION ICI : Bouton avec redirection WhatsApp */}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <button
                  onClick={() => redirectToWhatsApp(plan)}
                  className="bg-secondary text-slate-900 px-6 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity w-full"
                >
                  <span>S&apos;inscrire maintenant</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Modules de formation */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h4 className={`text-base sm:text-lg font-bold ${plan.isPopular ? 'text-white' : 'text-slate-800'}`}>
                    {isMobile ? "Modules" : "Modules de formation"}
                  </h4>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    plan.isPopular ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {plan.modules.length}
                  </span>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {plan.modules.map((module, index) => (
                    <div 
                      key={index}
                      className={`rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
                        plan.isPopular ? 'bg-white/5' : 'bg-slate-50'
                      }`}
                    >
                      <button
                        onClick={() => toggleModule(plan.id, index)}
                        className={`w-full p-3 sm:p-4 flex items-center justify-between text-left hover:opacity-90 transition-opacity ${
                          expandedModule[plan.id] === index ? (plan.isPopular ? 'bg-white/10' : 'bg-slate-100') : ''
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            plan.isPopular ? 'bg-orange-400/20 text-orange-300' : 'bg-orange-100 text-orange-600'
                          }`}>
                            <span className="font-bold text-xs sm:text-sm">{index + 1}</span>
                          </div>
                          <span className={`font-medium text-sm sm:text-base truncate ${plan.isPopular ? 'text-white' : 'text-slate-700'}`}>
                            {isMobile && module.title.length > 25 ? `${module.title.substring(0, 25)}...` : module.title}
                          </span>
                        </div>
                        {expandedModule[plan.id] === index ? (
                          <ChevronUp size={isMobile ? 16 : 18} className={`flex-shrink-0 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`} />
                        ) : (
                          <ChevronDown size={isMobile ? 16 : 18} className={`flex-shrink-0 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`} />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedModule[plan.id] === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className={`px-3 sm:px-4 pb-3 sm:pb-4 pt-2 ${
                              plan.isPopular ? 'border-t border-white/10' : 'border-t border-slate-200'
                            }`}>
                              <ul className="space-y-1.5 sm:space-y-2">
                                {module.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                                    <span className={`text-xs sm:text-sm ${plan.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                                      {isMobile && detail.length > 50 ? `${detail.substring(0, 50)}...` : detail}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dossier d'inscription */}
              <div className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t ${
                plan.isPopular ? 'border-white/10' : 'border-slate-200'
              }`}>
                <button
                  onClick={() => toggleDocuments(plan.id)}
                  className={`w-full flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl hover:opacity-90 transition-all ${
                    plan.isPopular ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                      plan.isPopular ? 'bg-orange-400/20' : 'bg-orange-100'
                    }`}>
                      <FileText size={isMobile ? 18 : 20} className={plan.isPopular ? 'text-orange-300' : 'text-orange-600'} />
                    </div>
                    <div className="text-left min-w-0">
                      <h4 className={`font-bold text-sm sm:text-base truncate ${plan.isPopular ? 'text-white' : 'text-slate-800'}`}>
                        Dossier d&apos;inscription
                      </h4>
                      <p className={`text-xs sm:text-sm ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'} truncate`}>
                        {plan.documents.length} documents requis
                      </p>
                    </div>
                  </div>
                  {expandedDocs[plan.id] ? (
                    <ChevronUp size={isMobile ? 18 : 20} className={`flex-shrink-0 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`} />
                  ) : (
                    <ChevronDown size={isMobile ? 18 : 20} className={`flex-shrink-0 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`} />
                  )}
                </button>

                <AnimatePresence>
                  {expandedDocs[plan.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-3 sm:p-4 space-y-2 sm:space-y-3 ${
                        plan.isPopular ? 'bg-white/5' : 'bg-slate-50'
                      } rounded-lg sm:rounded-xl mt-2`}>
                        {plan.documents.map((doc, index) => (
                          <div key={index} className="flex items-start gap-2 sm:gap-3">
                            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                              plan.isPopular ? 'bg-orange-400/20 text-orange-300' : 'bg-orange-100 text-orange-600'
                            }`}>
                              <Check size={isMobile ? 10 : 12} strokeWidth={3} />
                            </div>
                            <span className={`text-xs sm:text-sm font-medium ${plan.isPopular ? 'text-slate-300' : 'text-slate-700'}`}>
                              {isMobile && doc.length > 40 ? `${doc.substring(0, 40)}...` : doc}
                            </span>
                          </div>
                        ))}
                        <div className={`mt-3 p-2 sm:p-3 rounded-lg text-xs sm:text-sm ${plan.isPopular ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                          📍 Rendez-vous au secrétariat pour retirer la fiche d&apos;inscription officielle.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormationPlan;