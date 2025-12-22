"use client";

import { Check } from "lucide-react";

export default function Avantages() {
  const avantages = [
    {
      title: "Expertise sectorielle approfondie",
      description: "Une parfaite maîtrise des réalités comptables et fiscales des entreprises, établissements scolaires, ONG, associations et professionnels."
    },
    {
      title: "Des experts qualifiés et expérimentés",
      description: "Une équipe de professionnels rigoureux, engagés et à jour des exigences réglementaires et fiscales."
    },
    {
      title: "Assistance comptable et fiscale digitalisée (cloud)",
      description: "Un suivi moderne, sécurisé et accessible en temps réel pour une meilleure prise de décision."
    },
    {
      title: "Solutions comptables et fiscales sur mesure",
      description: "Des dispositifs adaptés à votre statut juridique, à votre secteur d'activité et à vos objectifs stratégiques."
    },
    {
      title: "Accompagnement client dédié et personnalisé",
      description: "Un suivi de proximité, des conseils stratégiques continus et une réelle disponibilité pour vos enjeux."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-normal font-momo text-gray-900 mb-6">
            Bâtir des organisations solides<br />
            grâce à une gestion comptable et fiscale d'excellence
          </h2>
        </div>

        <div className="space-y-6">
          {avantages.map((avantage, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{avantage.title}</h3>
                  <p className="mt-2 text-gray-600">
                    {avantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}