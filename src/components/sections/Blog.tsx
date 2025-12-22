export default function Blog() {
  const posts = [
  {
    title: "5 erreurs de planification financière pour les petites entreprises",
    date: "4 juillet 2025",
    img: "/images/planification.jpg"
  },
    {
      title: "Comprendre vos chiffres : conseils d’experts pour les entrepreneurs",
      date: "25 juin 2025",
      img: "/images/Comprendre.webp"
    },
    {
      title: "Perspectives intelligentes en comptabilité, fiscalité et finances pour développer votre entreprise",
      date: "12 juin 2025",
      img: "/images/Perspectives.webp"
    }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">NOTRE BLOG</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Conseils experts en comptabilité pour réussir votre entreprise
          </h2>
        </div>

        {/* Liste des articles */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-slate-900 leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-gray-400 uppercase font-medium">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}