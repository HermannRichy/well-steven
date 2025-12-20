import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    "Proposez-vous des services comptables en ligne ou à distance ?",
    "Quels types de clients accompagnez-vous ?",
    "Comment sont calculés vos tarifs pour vos services ?",
    "Pouvez-vous m’aider avec la déclaration et la conformité fiscale ?",
    "Pouvez-vous m’aider à préparer un audit ?",
    "Comment puis-je démarrer avec vos services ?"
  ];

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
          {faqs.map((q, i) => (
            <div
              key={i}
              className="group border border-gray-100 rounded-xl p-5 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between items-center"
            >
              <span className="text-slate-800 font-medium text-sm">{q}</span>
              <Plus size={18} className="text-gray-400 group-hover:text-slate-900 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}