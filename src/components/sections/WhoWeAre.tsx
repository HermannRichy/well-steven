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
                    <Image
                        src="/images/hero1.jpg"
                        alt="Qui sommes-nous?"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-4xl"
                    />
                    <Image
                        src="/images/hero2.jpg"
                        alt="Qui sommes-nous?"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-4xl"
                    />
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
        </section>
    );
}
