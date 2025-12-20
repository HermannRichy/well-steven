import React from 'react';

const FormationTarif: React.FC = () => {
  const features = [
    { name: "Support de cours numériques", c1: true, c2: true, c3: true },
    { name: "Attestation de fin de formation", c1: true, c2: true, c3: true },
    { name: "Accès aux logiciels (Perfecto/Sage)", c1: true, c2: true, c3: true },
    { name: "Projets pratiques réels", c1: true, c2: true, c3: false },
    { name: "Accompagnement post-formation", c1: true, c2: true, c3: false },
    { name: "Télédéclarations fiscales réelles", c1: true, c2: false, c3: false },
    { name: "Spécialisation Bailleurs de fonds", c1: false, c2: true, c3: false },
  ];

  const plans = [
    { 
      name: "Certification Pro", 
      description: "Formations complètes en gestion",
      price: "100 000", 
      reg: "5 000",
      badge: "Populaire"
    },
    { 
      name: "Spécialiste EBNL", 
      description: "Spécialisation ONG & Associations",
      price: "150 000", 
      reg: "10 000",
      badge: "Spécialisé"
    },
    { 
      name: "Pack Logiciels", 
      description: "Formation logiciels uniquement",
      price: "70 000", 
      reg: "5 000",
      badge: "Essentiel"
    }
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

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        {/* Table Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-2 md:space-y-3">
          <span className="font-momo text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-500 block">
            COMPARAISON DES TARIFS
          </span>
          <h2 className="font-momo text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Bâtir des carrières solides grâce à une formation d&apos;excellence
          </h2>
        </div>

        {/* Desktop Table (hidden on mobile) */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-t border-slate-200">
                <th className="py-8 px-6 lg:px-8 text-left text-lg lg:text-xl font-bold text-slate-900 w-1/4 align-middle bg-white rounded-tl-2xl">
                  <span className="text-slate-500 text-sm font-normal block mb-2">COMPARAISON</span>
                  Nos fonctionnalités
                </th>
                {plans.map((plan, i) => (
                  <th key={i} className={`py-8 px-6 lg:px-8 text-center border-l border-slate-200 w-1/4 ${i === 0 ? 'bg-white' : 'bg-white'}`}>
                    <div className="space-y-3">
                      <div className="flex flex-col items-center">
                        {plan.badge && (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                            i === 0 ? 'bg-orange-500 text-white' : 
                            i === 1 ? 'bg-blue-500 text-white' : 
                            'bg-white text-slate-700'
                          }`}>
                            {plan.badge}
                          </span>
                        )}
                        <span className="text-slate-900 text-xl lg:text-2xl font-bold block">{plan.name}</span>
                        <span className="text-slate-600 text-sm mt-1">{plan.description}</span>
                      </div>
                      <div className="flex items-baseline justify-center gap-1 lg:gap-2">
                        <span className="text-3xl lg:text-4xl font-black text-slate-900">{plan.price}</span>
                        <span className="text-lg font-bold text-slate-900">FCFA</span>
                      </div>
                      <span className="text-xs lg:text-[13px] text-slate-500 font-medium block">
                        + {plan.reg} FCFA d&apos;inscription
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className={`border-t border-slate-200 group hover:bg-white transition-colors ${
                  idx === features.length - 1 ? 'rounded-b-2xl' : ''
                }`}>
                  <td className="py-4 px-6 lg:px-8 text-base lg:text-lg font-medium text-slate-900 bg-white">
                    {feature.name}
                  </td>
                  <td className="py-4 px-6 lg:px-8 text-center border-l border-slate-200 bg-white">
                    {feature.c1 ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="py-4 px-6 lg:px-8 text-center border-l border-slate-200">
                    {feature.c2 ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="py-4 px-6 lg:px-8 text-center border-l border-slate-200">
                    {feature.c3 ? <CheckIcon /> : <CrossIcon />}
                  </td>
                </tr>
              ))}
              
              <tr className="border-t border-slate-200">
                <td className="py-6 px-6 lg:px-8 text-base lg:text-lg font-medium text-slate-900 bg-slate-50/50 rounded-bl-2xl">
                  Action
                </td>
                {plans.map((plan, i) => (
                  <td key={i} className={`py-6 px-6 lg:px-8 text-center border-l border-slate-200 ${i === 2 ? 'rounded-br-2xl' : ''}`}>
                    <button className={`px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 ${
                      i === 0 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : i === 1
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}>
                      Choisir cette formation
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tablet & Mobile Cards (hidden on desktop) */}
        <div className="lg:hidden space-y-6 md:space-y-8">
          {plans.map((plan, planIndex) => (
            <div key={planIndex} className={`rounded-2xl border border-slate-200 overflow-hidden ${
              planIndex === 0 ? 'bg-orange-50/30' : 'bg-white'
            }`}>
              {/* Plan Header */}
              <div className={`p-4 sm:p-6 text-center ${
                planIndex === 0 ? 'bg-orange-500/10' : 
                planIndex === 1 ? 'bg-blue-500/10' : 
                'bg-slate-100'
              }`}>
                <div className="flex flex-col items-center">
                  {plan.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                      planIndex === 0 ? 'bg-orange-500 text-white' : 
                      planIndex === 1 ? 'bg-blue-500 text-white' : 
                      'bg-slate-200 text-slate-700'
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-1">{plan.description}</p>
                  
                  <div className="mt-4 sm:mt-5 flex items-baseline justify-center gap-1 sm:gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-lg sm:text-xl font-bold text-slate-900">FCFA</span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium mt-1 block">
                    + {plan.reg} FCFA d&apos;inscription
                  </span>
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
                        {planIndex === 0 && feature.c1 ? <CheckIcon /> : 
                         planIndex === 1 && feature.c2 ? <CheckIcon /> : 
                         planIndex === 2 && feature.c3 ? <CheckIcon /> : 
                         <CrossIcon />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-4 sm:p-6 pt-2 sm:pt-2">
                <button className={`w-full py-3 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all hover:scale-105 ${
                  planIndex === 0 
                    ? 'bg-orange-500 text-white hover:bg-orange-600' 
                    : planIndex === 1
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}>
                  Choisir cette formation
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationTarif;