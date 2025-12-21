import { ArrowUpRight } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

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
        <p className="font-poppins uppercase tracking-widest text-sm mb-4">
          Contactez WELL STEVEN
        </p>

        <h1 className="font-poppins font-normal text-3xl md:text-5xl mb-8 leading-tight">
          <span className="font-momo font-normal">Sécurisez vos obligations, structurez votre gestion,</span>
          <br /> <span className="font-momo font-normal">et développez vos compétences dès aujourd&apos;hui !</span>
        </h1>

        {/* Bouton CTA interactif */}
        <InteractiveHoverButton className="bg-[#f9a44e] text-black font-poppins font-semibold px-8 py-4 rounded-full flex items-center gap-2">
          <span>Planifiez une consultation gratuite</span>
          <ArrowUpRight size={9} />
        </InteractiveHoverButton>
      </div>
    </section>
  );
}
