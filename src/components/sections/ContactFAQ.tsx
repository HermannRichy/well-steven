"use client";

import { useState } from 'react';
import { Plus, Minus } from "lucide-react";

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Proposez-vous des services de comptabilité et fiscalité en ligne ou sur site ?",
      answer: "Oui, nous proposons à la fois des services en ligne pour une gestion à distance et des services sur site pour un accompagnement plus personnalisé."
    },
    {
      question: "Quels types d'entreprises ou organisations accompagnez-vous ?",
      answer: "Nous accompagnons tous types d'entreprises, des TPE aux PME, ainsi que des associations et des professionnels libéraux, dans divers secteurs d'activité."
    },
    {
      question: "Comment se déroulent vos formations professionnelles et à qui sont-elles destinées ?",
      answer: "Nos formations s'adressent aussi bien aux débutants qu'aux professionnels expérimentés. Elles sont disponibles en présentiel ou en ligne, avec un suivi personnalisé."
    },
    {
      question: "Pouvez-vous m'aider avec mes déclarations fiscales et sociales ?",
      answer: "Absolument, notre équipe d'experts peut vous accompagner dans toutes vos démarches fiscales et sociales, de la préparation à la déclaration."
    },
    {
      question: "Offrez-vous un accompagnement lors d'un contrôle fiscal ou audit comptable ?",
      answer: "Oui, nous fournissons un accompagnement complet lors des contrôles fiscaux et audits, y compris la préparation et le suivi des dossiers."
    },
    {
      question: "Comment puis-je m'inscrire à vos services ou formations ?",
      answer: "Vous pouvez nous contacter via notre formulaire en ligne, par téléphone ou par email pour discuter de vos besoins et convenir d'un premier rendez-vous."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-4">Foire aux questions</p>
        <h2 className="text-3xl font-normal font-momo">
          Des réponses claires<br />à vos questions essentielles
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div 
              onClick={() => toggleFAQ(idx)}
              className="p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-slate-800 text-sm md:text-base">
                {faq.question}
              </span>
              {activeIndex === idx ? (
                <Minus size={20} className="text-gray-600" />
              ) : (
                <Plus size={20} className="text-gray-400" />
              )}
            </div>
            {activeIndex === idx && (
              <div className="px-6 pb-6 pt-2 text-sm text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}