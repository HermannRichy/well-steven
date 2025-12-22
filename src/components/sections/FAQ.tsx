"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Expertise sectorielle approfondie",
      answer:
        "Une parfaite maîtrise des réalités comptables et fiscales des entreprises, établissements scolaires, ONG, associations et professionnels."
    },
    {
      question: "Des experts qualifiés et expérimentés",
      answer:
        "Une équipe de professionnels rigoureux, engagés et à jour des exigences réglementaires et fiscales."
    },
    {
      question: "Assistance comptable et fiscale digitalisée (cloud)",
      answer:
        "Un suivi moderne, sécurisé et accessible en temps réel pour une meilleure prise de décision."
    },
    {
      question: "Solutions comptables et fiscales sur mesure",
      answer:
        "Des dispositifs adaptés à votre statut juridique, à votre secteur d'activité et à vos objectifs stratégiques."
    },
    {
      question: "Accompagnement client dédié et personnalisé",
      answer:
        "Un suivi de proximité, des conseils stratégiques continus et une réelle disponibilité pour vos enjeux."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900">
            Bâtir des organisations solides
            <br />
            grâce à une gestion comptable et fiscale d&apos;excellence
          </h2>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="p-5 hover:bg-gray-50 transition cursor-pointer flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  {/* ✔ Icône shadcn */}
                  <CheckCircle className="h-5 w-5 text-green-600" />

                  <span className="text-slate-800 font-medium text-sm">
                    {faq.question}
                  </span>
                </div>

                {/* 🔽🔼 Flèche shadcn */}
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-700 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform" />
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