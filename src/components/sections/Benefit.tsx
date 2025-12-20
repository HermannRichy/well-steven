import { Asterisk } from "lucide-react";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

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
                        <Link href="#contact-us">Contactez-nous</Link>
                    </InteractiveHoverButton>
                </div>
            </aside>
        </section>
    );
}
