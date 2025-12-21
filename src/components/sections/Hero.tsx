"use client";

import { TrendingUp } from "lucide-react";
import { ImagesSlider } from "../ui/images-slider";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
    const images = ["/images/hero-alt1.jpeg", "/images/hero-alt2.jpeg"];
    return (
        <section className="lg:mt-2">
            <ImagesSlider
                images={images}
                className="min-h-[85vh] max-w-6xl mx-auto lg:rounded-4xl overflow-hidden relative"
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col gap-y-4 w-4/5 max-w-xl absolute bottom-10 left-5 bg-primary/80 rounded-xl p-4 lg:p-6 lg:bottom-10 lg:left-10"
                >
                    <motion.p
                        className="text-xl md:text-3xl bg-clip-text text-transparent 
                        bg-linear-to-b from-neutral-50 to-neutral-400"
                    >
                        Nous accompagnons les entreprises, établissements
                        scolaires, ONG, associations et professionnels dans une
                        gestion comptable rigoureuse et une conformité fiscale
                        parfaitement maîtrisée{" "}
                        <span className="inline-flex bg-white/30 items-center justify-center rounded-full p-2 ml-2">
                            <TrendingUp className="text-green-500 w-6 h-6" />
                        </span>
                    </motion.p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <InteractiveHoverButton className="bg-secondary text-sm w-fit">
                            <Link href="/services">Nos services</Link>
                        </InteractiveHoverButton>
                        <InteractiveHoverButton className="bg-secondary text-sm w-fit">
                            <Link href="/formations">Nos formations</Link>
                        </InteractiveHoverButton>
                    </div>
                </motion.div>
            </ImagesSlider>
        </section>
    );
}
