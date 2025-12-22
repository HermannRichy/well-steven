"use client";
import { Asterisk } from "lucide-react";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Image from "next/image";

export default function Benefit() {
    return (
        <section className="bg-gray-200 mt-10">
            <aside className="max-w-6xl mx-auto py-10 lg:py-14 px-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                    <h2 className="text-xl lg:text-2xl font-momo mb-4 lg:w-1/2">
                        Des chiffres plus précis. De meilleures décisions. Des
                        résultats commerciaux plus performants{" "}
                        <span className="inline-flex bg-secondary items-center justify-center rounded-full p-2 ml-2">
                            <Asterisk className="text-primary w-6 h-6" />
                        </span>
                    </h2>
                    <InteractiveHoverButton className="bg-secondary w-fit h-fit">
                        <Link href="/contact">Contactez-nous</Link>
                    </InteractiveHoverButton>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6 mt-12">
                    {/* Notre expérience */}
                    <div
                        className="relative min-h-80 rounded-2xl overflow-hidden bg-cover bg-center lg:col-span-4"
                        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex items-end h-full p-6">
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
                                <h3 className="text-white font-momo text-lg">
                                    Notre expérience
                                </h3>
                                <p className="text-white/80 text-sm mt-2">
                                    Plus de 10 ans d'expertise en comptabilité,
                                    gestion financière et formations
                                    professionnelles.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Notre objectif */}
                    <div className="bg-primary rounded-2xl px-6 py-10 min-h-80 flex flex-col justify-between lg:col-span-3">
                        <h3 className="text-white font-momo text-lg">
                            Notre objectif
                        </h3>
                        <p className="text-white">
                            Accompagner votre croissance avec des solutions
                            comptables adaptées à vos enjeux.
                        </p>
                    </div>

                    {/* Notre approche */}
                    <div className="rounded-2xl overflow-hidden min-h-80 flex flex-col gap-4 p-6 bg-gray-100 lg:col-span-3">
                        <h3 className="font-momo text-lg">Notre approche</h3>
                        <p className=" text-gray-600 text-sm">
                            Une méthode personnalisée pour garantir la
                            conformité fiscale et optimiser votre stratégie
                            financière.
                        </p>
                        <div className="relative w-32 h-32">
                            <Image
                                src="/images/hero2.jpg"
                                alt="Approche"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <span className="inline-flex bg-secondary text-primary rounded-full px-3 py-1 text-sm font-semibold w-fit">
                            Fiscalité et conformité
                        </span>
                    </div>

                    {/* Expérience professionnelle */}
                    <div
                        className="relative min-h-80 rounded-2xl overflow-hidden bg-cover bg-center lg:col-span-3 group"
                        style={{ backgroundImage: "url('/images/hero1.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="relative z-10 flex items-end h-full p-6">
                            <p className="text-white text-2xl font-momo font-semibold">
                                Expérience professionnelle
                            </p>
                        </div>
                        {/* Cercle orange animé */}
                        <div className="absolute bottom-2 right-1 w-10 h-10 rounded-full bg-orange-500 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                            {/* Effet de lumière intérieure */}
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/50"></div>
                            {/* Animation de pulsation légère */}
                            <div className="absolute inset-0 rounded-full animate-pulse-slow bg-amber-400 opacity-30"></div>
                        </div>
                        {/* Glow effect autour du cercle */}
                        <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full animate-ping bg-orange-400 opacity-20"></div>
                    </div>

                    {/* Statistique clients */}
                    <div className="bg-primary rounded-2xl px-6 py-10 min-h-80 flex flex-col justify-between lg:col-span-3">
                        <div>
                            <span className="text-5xl font-bold text-white mb-2">
                                +100
                            </span>
                            <h3 className="text-white font-momo text-lg">
                                Clients accompagnés avec succès
                            </h3>
                        </div>
                        <p className="text-white/80 text-sm mt-4">
                            Grâce à notre expertise et notre engagement envers
                            l'excellence, nous avons aidé plus de 100 clients à
                            optimiser leur gestion financière et atteindre leurs
                            objectifs commerciaux.
                        </p>
                    </div>

                    {/* Image avec animation */}
                    <div className="rounded-2xl overflow-hidden min-h-80 lg:col-span-4 relative group">
                        <Image
                            src="/images/hero2.jpg"
                            alt="Galerie"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Cercle orange animé */}
                        <div className="absolute bottom-2 right-1 w-10 h-10 rounded-full bg-orange-500 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                            {/* Effet de lumière intérieure */}
                            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-white/50"></div>
                            {/* Animation de pulsation légère */}
                            <div className="absolute inset-0 rounded-full animate-pulse-slow bg-amber-400 opacity-30"></div>
                        </div>
                        {/* Glow effect autour du cercle */}
                        <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full animate-ping bg-orange-400 opacity-20"></div>
                    </div>
                </div>
            </aside>
            
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