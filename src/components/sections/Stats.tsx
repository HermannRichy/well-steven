export default function Stats() {
  const stats = [
    { label: "Déclarations fiscales déposées", value: "500+" },
    { label: "Clients accompagnés", value: "500+" },
    { label: "Taux de satisfaction client", value: "95%" },
  ];

  return (
    <section className="py-16 border-b border-gray-100">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}