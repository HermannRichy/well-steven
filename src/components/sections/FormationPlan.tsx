"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
import { 
  Check, 
  BookOpen, 
  PenTool, 
  Users, 
  Globe, 
  Monitor,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface FormationPlan {
  id: string;
  title: string;
  badge?: string;
  description: string;
  price: string;
  regFee: string;
  duration?: string;
  modules: string[];
  documents: string[];
  isPopular?: boolean;
  icon: React.ElementType;
  mode: string;
  targetAudience: string[];
  attestation?: string;
}

const trainings: FormationPlan[] = [
  {
    id: "gestion-comptable",
    title: "Certification Professionnelle en Gestion Comptable et Fiscale d'Entreprise",
    badge: "Certification",
    isPopular: true,
    description: "Former des professionnels capables de mettre en place, tenir, analyser et contrôler la comptabilité d'une entreprise, tout en assurant une gestion fiscale et sociale conforme et optimisée.",
    price: "100 000",
    regFee: "5 000",
    duration: "04 mois de formation intensive",
    mode: "Présentiel et en ligne",
    icon: BookOpen,
    modules: [
      "Module I : Organisation et mise en place pratique de la comptabilité d'une entreprise",
      "Module II : Techniques de traitement et de classement des pièces comptables",
      "Module III : Gestion et réalisation des travaux de fin d'exercice comptable",
      "Module IV : Utilisation avancée des logiciels comptables (Perfecto, Hypersoft)",
      "Module V : Élaboration et points de contrôle des états financiers (Entités à but lucratif et entités à but non lucratif)",
      "Module VI : Gestion fiscale et sociale de l'entreprise",
      "Module VII : Maîtrise des télédéclarations fiscales et sociales",
      "Module VIII : Gestion des relations fiscales et sociales de l'entreprise"
    ],
    documents: [
      "Copie du dernier diplôme",
      "Copie de la pièce d'identité",
      "Copie de l'acte de naissance sécurisé",
      "Fiche d'inscription à retirer au secrétariat",
      "Un paquet de papier RAM"
    ],
    targetAudience: [
      "étudiants et jeunes diplômés",
      "professionnels en activité",
      "entrepreneurs et dirigeants",
      "personnels administratifs et comptables"
    ]
  },
  {
    id: "secretariat",
    title: "Certification Professionnelle en Secrétariat Comptable",
    badge: "Polyvalent",
    description: "Former des secrétaires comptables polyvalents, capables d'assurer efficacement la gestion administrative, comptable et fiscale d'une entreprise.",
    price: "100 000",
    regFee: "5 000",
    duration: "04 mois de formation intensive",
    mode: "Présentiel et en ligne",
    icon: PenTool,
    modules: [
      "Module I : Organisation administrative du secrétariat",
      "Module II : Utilisation avancée du Pack Office (Word, Excel, PowerPoint)",
      "Module III : Communication et gestion administrative du secrétariat",
      "Module IV : Rédaction administrative et professionnelle",
      "Module V : Traitement et gestion des pièces comptables",
      "Module VI : Utilisation des logiciels comptables (Perfecto, Hypersoft)",
      "Module VII : Élaboration des états financiers selon le SYSCOHADA révisé",
      "Module VIII : Maîtrise des déclarations fiscales et sociales"
    ],
    documents: [
      "Copie du dernier diplôme",
      "Copie de la pièce d'identité", 
      "Copie de l'acte de naissance sécurisé",
      "Fiche d'inscription à retirer au secrétariat",
      "Un paquet de papier RAM"
    ],
    targetAudience: [
      "étudiants et jeunes diplômés",
      "professionnels en activité",
      "entrepreneurs et dirigeants",
      "personnels administratifs et comptables"
    ]
  },
  {
    id: "rh",
    title: "Formation en Ressources Humaines",
    description: "Former des professionnels capables de gérer efficacement le personnel, depuis le recrutement jusqu'à la gestion de la paie et des relations professionnelles.",
    price: "100 000",
    regFee: "5 000",
    duration: "Formation intensive",
    mode: "Présentiel et en ligne",
    icon: Users,
    modules: [
      "Module I : Stratégies de recrutement et d'intégration du personnel",
      "Module II : Techniques de gestion administrative du personnel",
      "Module III : Gestion des performances et évaluation des rendements",
      "Module IV : Processus de licenciement et fin de contrat",
      "Module V : Gestion des conflits et résolution des problèmes professionnels",
      "Module VI : Gestion informatisée de la paie avec Sage Paie RH"
    ],
    documents: [
      "Copie du dernier diplôme",
      "Copie de la pièce d'identité",
      "Copie de l'acte de naissance sécurisé",
      "Fiche d'inscription à retirer au secrétariat",
      "Un paquet de papier RAM"
    ],
    targetAudience: [
      "étudiants et jeunes diplômés",
      "professionnels en activité",
      "entrepreneurs et dirigeants",
      "personnels administratifs et comptables"
    ]
  },
  {
    id: "ebnl",
    title: "Formation Spécialiste en Gestion Comptable et Fiscale des Entités à But Non Lucratif",
    badge: "Spécialisation",
    description: "Maîtriser la comptabilité et la fiscalité des ONG et associations, gérer les ressources financières des projets, élaborer les états financiers spécifiques, respecter les exigences des bailleurs.",
    price: "150 000",
    regFee: "10 000",
    mode: "Présentiel et en ligne",
    icon: Globe,
    modules: [
      "Module I : CADRE JURIDIQUE ET INSTITUTIONNEL DE EBNL",
      "Module II : TENUE DE LA COMPTABILITE ET GESTION FINANCIERE DES EBNL",
      "Module III : GESTION FISCALE ET SOCIALE DES EBNL",
      "Module IV : GESTION BUDGETAIRE ET CONTROLE INTERNE DANS EBNL",
      "Module V : MONTAGE ET GESTION DES APPELS A PROJETS",
      "Module VI : Montage et rédaction de projet gagnant",
      "Module VII : LEVE DE FONDS ET MOBILISATION DES RESSOURCES"
    ],
    documents: [
      "Copie du dernier diplôme",
      "Copie de la pièce d'identité",
      "Copie de l'acte de naissance sécurisé",
      "Fiche d'inscription à retirer au secrétariat",
      "Un paquet de papier RAM"
    ],
    targetAudience: [
      "Agents d'ONG",
      "Gestionnaires de projets",
      "Responsables financiers"
    ],
    attestation: "Certificat de spécialisation"
  },
  {
    id: "logiciels",
    title: "Formation en Logiciels de Gestion Comptable",
    description: "Formation pratique sur les logiciels Perfecto, Hypersoft, Sage Comptabilité. Permettre aux apprenants de maîtriser les outils informatisés de gestion comptable utilisés en entreprise.",
    price: "70 000",
    regFee: "5 000",
    mode: "Présentiel et en ligne",
    icon: Monitor,
    modules: [
      "Perfecto",
      "Hypersoft", 
      "Sage Comptabilité",
      "35 000 FCFA par module ; 70 000 FCFA pour les trois logiciels ensemble"
    ],
    documents: [
      "Copie du dernier diplôme",
      "Copie de la pièce d'identité",
      "Copie de l'acte de naissance sécurisé",
      "Fiche d'inscription à retirer au secrétariat",
      "Un paquet de papier RAM"
    ],
    targetAudience: [
      "étudiants et jeunes diplômés",
      "professionnels en activité",
      "entrepreneurs et dirigeants",
      "personnels administratifs et comptables"
    ]
  }
];

const FormationPlan: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [expandedDocs, setExpandedDocs] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleDocuments = (trainingId: string) => {
    setExpandedDocs(prev => ({
      ...prev,
      [trainingId]: !prev[trainingId]
    }));
  };

  const generateWhatsAppMessage = (plan: FormationPlan) => {
    const message = `Bonjour, j'espère que vous allez bien ! 

Je suis intéressé(e) par votre formation : 

**${plan.title}**

**Objectif :** ${plan.description}

**Mode de formation :** ${plan.mode}
**Durée :** ${plan.duration || 'Formation intensive'}
${plan.attestation ? `**Attestation :** ${plan.attestation}` : ''}

**Public cible :** ${plan.targetAudience.join(', ')}

**Prix :** ${plan.price} FCFA
**Frais d'inscription :** ${plan.regFee} FCFA

Je souhaiterais m'inscrire à cette formation. Pourriez-vous me donner plus d'informations sur les modalités d'inscription ?

Merci d'avance !`;

    return encodeURIComponent(message);
  };

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

          {/* Toggle Switch */}
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

        {/* Grid des formations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
          {trainings.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={!isMobile ? { y: -8 } : {}}
              className={`rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 flex flex-col relative transition-all duration-300 border shadow-sm ${
                plan.isPopular 
                ? 'bg-[#0f172a] border-slate-800 text-white' 
                : 'bg-white border-slate-100 text-slate-900'
              }`}
              style={{ minHeight: '900px' }}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div className={`p-3 sm:p-4 rounded-2xl ${plan.isPopular ? 'bg-white/10' : 'bg-slate-50'}`}>
                  <plan.icon size={isMobile ? 24 : 28} strokeWidth={1.5} />
                </div>
                {plan.badge && (
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap ${
                    plan.isPopular ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">{plan.title}</h3>
                <p className={`text-sm sm:text-[15px] leading-relaxed font-light ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                
                {/* Durée et Mode */}
                <div className="flex flex-wrap gap-3">
                  {plan.duration && (
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium ${
                      plan.isPopular ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <span>⏱️</span>
                      <span>{plan.duration}</span>
                    </div>
                  )}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium ${
                    plan.isPopular ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <span>📍</span>
                    <span>{plan.mode}</span>
                  </div>
                </div>

                {/* Public Cible */}
                <div className={`mt-3 p-3 sm:p-4 rounded-lg ${plan.isPopular ? 'bg-white/5' : 'bg-slate-50'}`}>
                  <p className={`text-xs font-bold uppercase mb-2 ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                    PUBLIC CIBLE
                  </p>
                  <p className={`text-sm ${plan.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.targetAudience.join(', ')}
                  </p>
                </div>

                {/* Attestation pour EBNL */}
                {plan.attestation && (
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold ${
                    plan.isPopular ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-600'
                  }`}>
                    <span>🏆</span>
                    <span>{plan.attestation}</span>
                  </div>
                )}
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                      <span className="text-lg font-bold">FCFA</span>
                    </div>
                    <span className={`text-sm font-bold mt-1 ${plan.isPopular ? 'text-orange-300' : 'text-[#ff5c00]'}`}>
                      + {plan.regFee} FCFA inscription
                    </span>
                    {plan.id === "logiciels" && (
                      <p className={`text-xs mt-1 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        35 000 FCFA par module ; 70 000 FCFA pour les trois logiciels ensemble
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Modules de formation */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`text-base sm:text-lg font-bold ${plan.isPopular ? 'text-white' : 'text-slate-800'}`}>
                    Modules de formation ({plan.modules.length})
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {plan.modules.map((module, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg ${plan.isPopular ? 'bg-white/5' : 'bg-slate-50'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${plan.isPopular ? 'bg-orange-400' : 'bg-orange-500'}`} />
                        <span className={`text-sm ${plan.isPopular ? 'text-slate-300' : 'text-slate-700'}`}>
                          {module}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION BOUTON */}
              <div className="mt-auto pt-4">
                <InteractiveHoverButton 
                                  onClick={() => redirectToWhatsApp(plan)}
                                  className="bg-secondary text-slate-900 text-sm py-3 font-bold w-full"
                                >
                                  S&apos;inscrire maintenant
                                </InteractiveHoverButton>
              </div>

              {/* Dossier d'inscription */}
              <div className={`mt-6 pt-6 border-t ${plan.isPopular ? 'border-white/10' : 'border-slate-200'}`}>
                <button
                  onClick={() => toggleDocuments(plan.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl hover:opacity-90 transition-all ${
                    plan.isPopular ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${plan.isPopular ? 'bg-orange-400/20' : 'bg-orange-100'}`}>
                      <FileText size={20} className={plan.isPopular ? 'text-orange-300' : 'text-orange-600'} />
                    </div>
                    <div className="text-left">
                      <h4 className={`font-bold text-base ${plan.isPopular ? 'text-white' : 'text-slate-800'}`}>
                        Dossier d&apos;inscription
                      </h4>
                      <p className={`text-sm ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {plan.documents.length} documents requis
                      </p>
                    </div>
                  </div>
                  {expandedDocs[plan.id] ? (
                    <ChevronUp size={20} className={`flex-shrink-0 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`} />
                  ) : (
                    <ChevronDown size={20} className={`flex-shrink-0 ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`} />
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
                      <div className={`p-4 space-y-3 ${plan.isPopular ? 'bg-white/5' : 'bg-slate-50'} rounded-xl mt-3`}>
                        {plan.documents.map((doc, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                              plan.isPopular ? 'bg-orange-400/20 text-orange-300' : 'bg-orange-100 text-orange-600'
                            }`}>
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span className={`text-sm font-medium ${plan.isPopular ? 'text-slate-300' : 'text-slate-700'}`}>
                              {doc}
                            </span>
                          </div>
                        ))}
                        <div className={`mt-4 p-3 rounded-lg text-sm ${plan.isPopular ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
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