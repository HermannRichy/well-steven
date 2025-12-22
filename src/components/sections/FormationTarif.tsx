"use client";
import React from 'react';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const FormationTarif: React.FC = () => {
  const plans = [
    { 
      id: "gestion-comptable",
      name: " Gestion Comptable", 
      description: "Former des professionnels capables de mettre en place et contrôler la comptabilité",
      price: "100 000", 
      reg: "5 000",
      badge: "Certification",
      duration: "04 mois intensif",
      mode: "Présentiel et en ligne"
    },
    { 
      id: "ebnl",
      name: "Spécialiste EBNL", 
      description: "Maîtriser la comptabilité et fiscalité des ONG, associations et projets",
      price: "150 000", 
      reg: "10 000",
      badge: "Spécialisation",
      duration: "Formation spécialisée",
      mode: "Présentiel et en ligne"
    },
    { 
      id: "logiciels",
      name: "Formation Logiciels", 
      description: "Formation pratique sur Perfecto, Hypersoft, Sage Comptabilité",
      price: "70 000", 
      reg: "5 000",
      badge: "Essentiel",
      duration: "Formation intensive",
      mode: "Présentiel et en ligne"
    }
  ];

  const features = [
    { 
      name: "Support de cours numériques", 
      gestion: true, 
      ebnl: true, 
      logiciels: true 
    },
    { 
      name: "Attestation de fin de formation", 
      gestion: true, 
      ebnl: true, 
      logiciels: true 
    },
    { 
      name: "Accès aux logiciels (Perfecto/Hypersoft/Sage)", 
      gestion: true, 
      ebnl: true, 
      logiciels: true 
    },
    { 
      name: "Projets pratiques réels", 
      gestion: true, 
      ebnl: true, 
      logiciels: false 
    },
    { 
      name: "Accompagnement post-formation", 
      gestion: true, 
      ebnl: true, 
      logiciels: false 
    },
    { 
      name: "Télédéclarations fiscales réelles", 
      gestion: true, 
      ebnl: false, 
      logiciels: false 
    },
    { 
      name: "Spécialisation Bailleurs de fonds", 
      gestion: false, 
      ebnl: true, 
      logiciels: false 
    },
    { 
      name: "Gestion spécifique ONG/Associations", 
      gestion: false, 
      ebnl: true, 
      logiciels: false 
    },
  ];

  const CheckIcon = () => (
    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1e293b] rounded-full flex items-center justify-center mx-auto">
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  const CrossIcon = () => (
    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L11 11M11 1L1 11" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );

  const generateWhatsAppMessage = (plan: typeof plans[0]) => {
    const message = `Bonjour, j'espère que vous allez bien ! 

Je suis intéressé(e) par votre formation : 

**${plan.name}**

**Description :** ${plan.description}

**Mode de formation :** ${plan.mode}
**Durée :** ${plan.duration}

**Prix :** ${plan.price} FCFA
**Frais d'inscription :** ${plan.reg} FCFA
${plan.id === "logiciels" ? 'ou 35 000 FCFA par module' : ''}

Je souhaiterais m'inscrire à cette formation. Pourriez-vous me donner plus d'informations sur les modalités d'inscription ?

Merci d'avance !`;

    return encodeURIComponent(message);
  };

  const redirectToWhatsApp = (plan: typeof plans[0]) => {
    const phoneNumber = "2290190479512"; 
    const message = generateWhatsAppMessage(plan);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        {/* Table Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-2 md:space-y-3">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-500 block">
            COMPARAISON DES FORMATIONS
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Choisissez la formation adaptée à vos objectifs professionnels
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-t border-slate-200">
                <th className="py-8 px-6 lg:px-8 text-left text-lg lg:text-xl font-bold text-slate-900 w-1/4 align-middle bg-white rounded-tl-2xl">
                  <span className="text-slate-500 text-sm font-normal block mb-2">FONCTIONNALITÉS</span>
                  Ce qui est inclus
                </th>
                {plans.map((plan, i) => (
                  <th key={i} className={`py-8 px-6 lg:px-8 text-center border-l border-slate-200 w-1/4 bg-white`}>
                    <div className="space-y-3">
                      <div className="flex flex-col items-center">
                        {plan.badge && (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                            i === 0 ? 'bg-[#ff5c00] text-white' : 
                            i === 1 ? 'bg-blue-500 text-white' : 
                            'bg-slate-900 text-white'
                          }`}>
                            {plan.badge}
                          </span>
                        )}
                        <span className="text-slate-900 text-xl lg:text-2xl font-bold block">{plan.name}</span>
                        <span className="text-slate-600 text-sm mt-1">{plan.description}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center gap-1 lg:gap-2">
                          <span className="text-3xl lg:text-4xl font-black text-slate-900">{plan.price}</span>
                          <span className="text-lg font-bold text-slate-900">FCFA</span>
                        </div>
                        <span className="text-xs lg:text-[13px] text-[#ff5c00] font-bold block">
                          + {plan.reg} FCFA d&apos;inscription
                        </span>
                        {plan.id === "logiciels" && (
                          <p className="text-xs text-slate-500 mt-1">
                            35 000 FCFA par module
                          </p>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className={`border-t border-slate-200 group hover:bg-white transition-colors`}>
                  <td className="py-4 px-6 lg:px-8 text-base lg:text-lg font-medium text-slate-900 bg-white">
                    {feature.name}
                  </td>
                  <td className="py-4 px-6 lg:px-8 text-center border-l border-slate-200 bg-white">
                    {feature.gestion ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="py-4 px-6 lg:px-8 text-center border-l border-slate-200">
                    {feature.ebnl ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="py-4 px-6 lg:px-8 text-center border-l border-slate-200">
                    {feature.logiciels ? <CheckIcon /> : <CrossIcon />}
                  </td>
                </tr>
              ))}
              
              <tr className="border-t border-slate-200">
                <td className="py-6 px-6 lg:px-8 text-base lg:text-lg font-medium text-slate-900 bg-slate-50/50 rounded-bl-2xl">
                  Action
                </td>
                {plans.map((plan, i) => (
                  <td key={i} className={`py-6 px-6 lg:px-8 text-center border-l border-slate-200 ${i === 2 ? 'rounded-br-2xl' : ''}`}>
                <InteractiveHoverButton 
                  onClick={() => redirectToWhatsApp(plan)}
                  className="bg-secondary text-slate-900 text-sm py-3 font-bold w-fit px-6"
                >
                  S&apos;inscrire maintenant
                </InteractiveHoverButton>
              
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tablet & Mobile Cards */}
        <div className="lg:hidden space-y-6 md:space-y-8">
          {plans.map((plan, planIndex) => (
            <div key={planIndex} className={`rounded-2xl border border-slate-200 overflow-hidden bg-white`}>
              {/* Plan Header */}
              <div className={`p-4 sm:p-6 text-center ${
                planIndex === 0 ? 'bg-[#ff5c00]/10' : 
                planIndex === 1 ? 'bg-blue-500/10' : 
                'bg-slate-100'
              }`}>
                <div className="flex flex-col items-center">
                  {plan.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                      planIndex === 0 ? 'bg-[#ff5c00] text-white' : 
                      planIndex === 1 ? 'bg-blue-500 text-white' : 
                      'bg-slate-900 text-white'
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-1">{plan.description}</p>
                  
                  <div className="mt-4 sm:mt-5 space-y-1">
                    <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900">{plan.price}</span>
                      <span className="text-lg sm:text-xl font-bold text-slate-900">FCFA</span>
                    </div>
                    <span className="text-sm text-[#ff5c00] font-bold block">
                      + {plan.reg} FCFA d&apos;inscription
                    </span>
                    {plan.id === "logiciels" && (
                      <p className="text-xs text-slate-500 mt-1">
                        35 000 FCFA par module
                      </p>
                    )}
                  </div>

                  {/* Durée et Mode */}
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    <span className="text-xs sm:text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      ⏱️ {plan.duration}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      📍 {plan.mode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-5">
                  Fonctionnalités incluses
                </h4>
                <div className="space-y-3">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-between py-2 sm:py-2.5 border-b border-slate-100 last:border-b-0">
                      <span className="text-sm sm:text-base text-slate-700 font-medium pr-4">
                        {feature.name}
                      </span>
                      <div className="flex-shrink-0">
                        {(planIndex === 0 && feature.gestion) || 
                         (planIndex === 1 && feature.ebnl) || 
                         (planIndex === 2 && feature.logiciels) ? 
                         <CheckIcon /> : <CrossIcon />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <InteractiveHoverButton 
                  onClick={() => redirectToWhatsApp(plan)}
                  className="bg-secondary text-slate-900 text-sm py-3 font-bold w-fit px-6"
                >
                  S&apos;inscrire maintenant
                </InteractiveHoverButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationTarif;