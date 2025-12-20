import { ArrowUpRight } from "lucide-react";

export default function AboutContent() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Surtitre */}
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          ABOUT Well Steven
        </p>

        {/* Titre Principal */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] leading-tight mb-8">
          Our smarter numbers better decisions, <br className="hidden md:block" /> 
          stronger business outcomes
        </h2>

        {/* Texte de description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur. Diam arcu dolor maecenas proin elit eu tempus. 
          Imperdiet eros malesuada commodo lectus vel donec at. Nibh magna augue malesuada 
          donec purus hendrerit vitae arcu nibh.
        </p>

        {/* Bouton Orange */}
        <div className="flex justify-center">
          <button className="bg-[#F39200] hover:bg-[#D98200] text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 font-medium text-sm shadow-lg shadow-orange-100/50">
            Schedule a consultation 
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}