import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    "Do you offer virtual or online accounting services?",
    "What types of clients do you work with?",
    "How do you price your services?",
    "Can you help me with tax filing and compliance?",
    "Can you help me prepare for an audit?",
    "How do I get started with your services?"
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="text-3xl font-semibold text-slate-900">Insightful answers to all your key questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((q, i) => (
            <div key={i} className="group border border-gray-100 rounded-xl p-5 hover:bg-gray-50 transition-colors cursor-pointer flex justify-between items-center">
              <span className="text-slate-800 font-medium text-sm">{q}</span>
              <Plus size={18} className="text-gray-400 group-hover:text-slate-900 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}