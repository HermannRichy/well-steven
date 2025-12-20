export default function Blog() {
  const posts = [
    {
      title: "5 financial planning mistakes small business",
      date: "July 4, 2025",
      img: "https://images.unsplash.com/photo-1454165833767-027ffea9e41b?auto=format&fit=crop&q=80"
    },
    {
      title: "Making sense of numbers: expert guidance for business owners",
      date: "June 25, 2025",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
    },
    {
      title: "Smart insights on accounting, tax, and finance to grow your business",
      date: "June 12, 2025",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">OUR BLOG</p>
          <h2 className="text-3xl font-semibold text-slate-900">Expert accounting insights for business success</h2>
        </div>

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