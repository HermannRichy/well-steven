import Image from "next/image";

export default function ServiceHero() {
    return (
        <section className="w-full bg-white pt-20 md:pt-32 pb-12 md:pb-20">
            {/* Texte */}
            <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
                <span className="font-momo block text-xs md:text-sm font-semibold tracking-widest text-neutral-500">
                    CABINET D&apos;ASSISTANCE COMPTABLE, FISCALE ET DE FORMATION
                </span>

                <h1 className="font-momo mt-4 md:mt-6 text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight text-neutral-900">
                    Sécuriser vos obligations.
                    <br className="hidden md:block" />
                    Structurer votre gestion.
                    <br className="hidden md:block" />
                    Développer vos compétences.
                </h1>
            </div>

            {/* Image */}
            <div className="mx-auto mt-10 md:mt-20 px-4 md:px-0 w-full md:w-[calc(100%-3rem)] lg:w-[calc(100%-6rem)] overflow-hidden rounded-xl md:rounded-2xl">
                <div className="min-h-[50vh] md:min-h-[60vh] lg:min-h-[85vh] max-w-6xl mx-auto rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden relative">
                    <Image
                        src="/images/hero2.jpg"
                        alt="Équipe Well Steven - Cabinet comptable, fiscal et formation"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    />
                </div>
            </div>
        </section>
    );
}