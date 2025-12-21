export default function Testimonials() {
  const reviews = [
    {
      name: "Nisha Devish",
      role: "Gestionnaire de comptes",
      text: "WELL STEVEN nous accompagne avec professionnalisme et rigueur. Leur suivi comptable et fiscal est fiable et adapté à nos besoins.",
      img: "/images/Nisha.jpg"
    },
    {
      name: "Herman Gorshkov",
      role: "Partenaire senior",
      text: "Le service de WELL STEVEN est précis et efficace. Nous recommandons leur expertise pour toute entreprise souhaitant structurer sa gestion.",
      img: "/images/Herman.jpg"
    },
    {
      name: "Louise",
      role: "Partenaire en conseil fiscal",
      text: "WELL STEVEN propose un accompagnement comptable sérieux et efficace, essentiel pour toute entreprise souhaitant une gestion financière maîtrisée.",
      img: "/images/foto.jpg"
    },
    {
      name: "Jean Dupont",
      role: "PDG de FinancesPro",
      text: "L'équipe de WELL STEVEN a révolutionné notre gestion financière. Leur expertise et leur réactivité sont exceptionnelles.",
      img: "/images/Jean Dupont.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase text-gray-400">Avis clients</p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">
          Une expertise de confiance, un service recommandé
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl flex gap-6 shadow-sm border border-gray-100">
            <img src={r.img} alt={r.name} className="w-20 h-24 object-cover rounded-xl" />
            <div>
              <span className="text-orange-400 text-4xl font-serif">“</span>
              <p className="text-gray-600 text-sm italic mb-4 -mt-4">{r.text}</p>
              <h4 className="font-bold text-slate-900">{r.name}</h4>
              <p className="text-xs text-gray-400">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}