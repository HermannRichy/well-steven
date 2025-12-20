export default function Testimonials() {
  const reviews = [
    {
      name: "Nisha Devish",
      role: "Account manager",
      text: "Lorem ipsum dolor sit amet consectetur. Velit accumsan natoque rhoncus integer at eget. Tempus gravida nec diam viverra.",
      img: "/api/placeholder/100/100"
    },
    {
      name: "Herman Gorshkov",
      role: "Senior partner",
      text: "Viverra morbi odio, am viverra morbi odio. Habitant dui vel pulvinar integer.",
      img: "/api/placeholder/100/100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20">
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase text-gray-400">Client Reviews</p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Experience you can trust, service you'll recommend</h2>
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