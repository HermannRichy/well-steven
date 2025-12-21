import { ArrowUpRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative h-[450px] w-full flex items-center px-6 md:px-20">
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bannier.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-white">
        <p className="uppercase tracking-widest text-sm mb-4">Contactez WELL STEVEN</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Sécurisez vos obligations, structurez votre gestion,<br /> et développez vos compétences dès aujourd'hui !
        </h1>
        <button className="bg-[#f9a44e] hover:bg-[#e8933d] text-black font-medium py-4 px-8 rounded-full flex items-center gap-2 transition-all">
          Planifiez une consultation gratuite <ArrowUpRight size={20} />
        </button>
      </div>
    </section>
  );
}