"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Proposez-vous des services comptables en ligne ou à distance ?",
      answer: "Oui, nous proposons des services comptables complets en ligne et à distance. Grâce à notre plateforme sécurisée, vous pouvez nous transmettre vos documents numériquement et bénéficier d'un suivi personnalisé, où que vous soyez."
    },
    {
      question: "Quels types de clients accompagnez-vous ?",
      answer: "Nous accompagnons une large gamme de clients, des auto-entrepreneurs aux PME, dans divers secteurs d'activité. Que vous soyez une entreprise de services, de commerce ou de production, nous adaptons notre expertise à vos besoins spécifiques."
    },
    {
      question: "Comment sont calculés vos tarifs pour vos services ?",
      answer: "Nos tarifs sont établis en fonction de la nature et de la complexité de vos besoins. Nous proposons des forfaits adaptés à chaque situation. Contactez-nous pour une analyse personnalisée et un devis détaillé."
    },
    {
      question: "Pouvez-vous m'aider avec la déclaration et la conformité fiscale ?",
      answer: "Absolument. Notre équipe d'experts fiscaux se charge de toutes vos obligations déclaratives et s'assure de votre conformité aux réglementations en vigueur, vous permettant de vous concentrer sur votre cœur de métier en toute sérénité."
    },
    {
      question: "Pouvez-vous m'aider à préparer un audit ?",
      answer: "Oui, nous proposons un accompagnement complet pour la préparation de vos audits. Notre équipe vous aide à rassembler et organiser les documents nécessaires, et à vous préparer aux éventuelles questions des auditeurs."
    },
    {
      question: "Comment puis-je démarrer avec vos services ?",
      answer: "C'est simple ! Contactez-nous via notre formulaire en ligne ou par téléphone pour une première consultation gratuite. Nous évaluerons ensemble vos besoins et vous proposerons la solution la plus adaptée à votre situation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">
            QUESTIONS FRÉQUEMMENT POSÉES
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Réponses claires à toutes vos questions clés
          </h2>
        </div>

        {/* Liste des questions */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="p-5 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between items-center"
              >
                <span className="text-slate-800 font-medium text-sm">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus 
                    size={18} 
                    className="text-gray-400 group-hover:text-slate-900 transition-colors" 
                  />
                ) : (
                  <Plus 
                    size={18} 
                    className="text-gray-400 group-hover:text-slate-900 transition-colors" 
                  />
                )}
              </div>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-2 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}