"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Layers, ArrowUpRight } from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            icon: (
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
            ),
            title: "L'orientation client",
            description:
                "Cela implique une écoute active, une amélioration continue basée sur les retours d'information et la création de valeur.",
        },
        {
            icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />,
            title: "Collaboration",
            description:
                "Cela implique une écoute active, une amélioration continue basée sur les retours d'information et la création de valeur.",
        },
    ];

    return (
        <section className="py-12 md:py-24 lg:py-32 bg-white">
            <div className="mx-auto px-4 md:px-10 lg:container lg:mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 lg:space-y-12"
                    >
                        <div className="space-y-4 lg:space-y-6">
                            <span className="text-[10px] font-momo md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 block">
                                Pourquoi nous choisir ?
                            </span>
                            <h2 className="text-2xl font-momo md:text-3xl lg:text-2xl xl:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                                Des conseils d&apos;experts pour renforcer votre
                                confiance financière
                            </h2>
                        </div>

                        <div className="space-y-6 lg:space-y-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="space-y-6 lg:space-y-10"
                                >
                                    <div className="flex items-start gap-4 lg:gap-6">
                                        <div className="mt-1 flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div className="space-y-2 lg:space-y-4">
                                            <h3 className="text-lg lg:text-xl font-bold text-slate-900">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-500 leading-relaxed text-sm lg:text-base font-light max-w-md">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                    {index === 0 && (
                                        <div className="h-[1px] w-full bg-slate-200" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <InteractiveHoverButton className="bg-secondary text-sm">
                            <Link href="/contact">
                                Planifiez une consultation
                            </Link>
                        </InteractiveHoverButton>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[650px] w-full mt-8 lg:mt-0"
                    >
                        <div className="absolute inset-0 rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-xl lg:shadow-2xl">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/Services/comptable.jpg"
                                    alt="Expert financial analysis"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
