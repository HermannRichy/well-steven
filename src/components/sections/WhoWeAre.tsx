"use client";
import Image from "next/image";
import { TextReveal } from "../ui/text-reveal";

export default function WhoWeAre() {
    return (
        <section
            id="who-we-are"
            className="max-w-6xl mx-auto mt-20 space-y-4 lg:space-y-10 p-4"
        >
            <aside className="mx-auto max-w-lg lg:mx-0 lg:max-w-2xl space-y-4">
                <p className="text-center lg:text-left uppercase">
                    Qui sommes-nous?
                </p>
                <h2 className="text-center lg:text-left text-base lg:text-lg font-momo">
                    WELL STEVEN est un cabinet spécialisé en assistance
                    comptable et fiscale et en formation professionnelle, dédié
                    au suivi des PME, organisations et porteurs de projets à
                    chaque étape de leur développement.
                </h2>
            </aside>
            <aside className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                <div className="grid grid-cols-2 gap-4 lg:w-2/3">
                    {/* Première image avec cercle orange animé */}
                    <div className="relative w-full rounded-4xl overflow-hidden group">
                        <Image
                            src="/images/hero1.jpg"
                            alt="Qui sommes-nous?"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Cercle orange animé au survol */}
                        <div className="absolute bottom-2 right-1 w-10 h-10 rounded-full bg-primary shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                            {/* Effet de lumière intérieure */}
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/50"></div>
                            {/* Animation de pulsation légère */}
                            <div className="absolute inset-0 rounded-full animate-pulse-slow bg-amber-400 opacity-30"></div>
                        </div>
                        {/* Glow effect autour du cercle */}
                        <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full animate-ping bg-orange-400 opacity-20"></div>
                    </div>
                    
                    {/* Deuxième image avec cercle orange animé */}
                    <div className="relative w-full rounded-4xl overflow-hidden group">
                        <Image
                            src="/images/hero2.jpg"
                            alt="Qui sommes-nous?"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Cercle orange animé au survol */}
                        <div className="absolute bottom-2 right-1 w-10 h-10 rounded-full bg-primary shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                            {/* Effet de lumière intérieure */}
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/50"></div>
                            {/* Animation de pulsation légère */}
                            <div className="absolute inset-0 rounded-full animate-pulse-slow bg-amber-400 opacity-30"></div>
                        </div>
                        {/* Glow effect autour du cercle */}
                        <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full animate-ping bg-orange-400 opacity-20"></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:w-1/3">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 pb-4 lg:w-full lg:justify-between border-b border-gray-300">
                        <span className="text-xl">+500</span>
                        <span>Clients accompagnés</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 pb-4 lg:w-full lg:justify-between border-b border-gray-300">
                        <span className="text-xl">+10</span>
                        <span>Années d&apos;expérience</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 pb-4 lg:w-full lg:justify-between border-b border-gray-300">
                        <span className="text-xl">+1K</span>
                        <span>Formations délivrées</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 pb-4 lg:w-full lg:justify-between border-b border-gray-300">
                        <span className="text-xl">95%</span>
                        <span>Clients satisfaits</span>
                    </div>
                </div>
            </aside>
            
            {/* Ajouter une animation personnalisée dans le CSS global si besoin */}
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </section>
    );
}