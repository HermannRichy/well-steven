"use client";

import {
    Mail,
    MapPin,
    Phone,
    Facebook,
    MessageCircle,
    Instagram,
    Copyright,
} from "lucide-react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            {/* Main Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* CTA Block */}
                    <div className="flex flex-col justify-between">
                        <h3 className="text-2xl font-bold">Prêt à démarrer?</h3>
                        <p className="text-neutral-300">
                            Contactez-nous pour discuter de vos besoins en
                            comptabilité et fiscalité.
                        </p>
                        <InteractiveHoverButton className="bg-secondary text-sm w-fit">
                            <Link href="#contact">Nous contacter</Link>
                        </InteractiveHoverButton>
                    </div>

                    {/* Contact Block */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Entrer en contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                                <p className="text-neutral-300">
                                    Adresse de votre cabinet
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 shrink-0" />
                                <div className="space-y-1">
                                    <Link
                                        href="tel:+22901904795 12"
                                        className="block text-neutral-300 hover:text-white"
                                    >
                                        01 90 47 95 12
                                    </Link>
                                    <Link
                                        href="tel:+22901473613 47"
                                        className="block text-neutral-300 hover:text-white"
                                    >
                                        01 47 36 13 47
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 shrink-0" />
                                <Link
                                    href="mailto:wellservicefiscale@gmail.com"
                                    className="text-neutral-300 hover:text-white"
                                >
                                    wellservicefiscale@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Liens rapides</h3>
                        <nav className="space-y-2">
                            <Link
                                href="/"
                                className="block text-neutral-300 hover:text-white"
                            >
                                Accueil
                            </Link>
                            <Link
                                href="/a-propos"
                                className="block text-neutral-300 hover:text-white"
                            >
                                A propos de nous
                            </Link>
                            <Link
                                href="/services"
                                className="block text-neutral-300 hover:text-white"
                            >
                                Services
                            </Link>
                            <Link
                                href="/formations"
                                className="block text-neutral-300 hover:text-white"
                            >
                                Formations
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-neutral-300 hover:text-white"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-neutral-300">
                            <Copyright className="w-3 h-3 inline mr-2" />
                            2025 <span className="font-momo">WELL STEVEN</span>.
                            Tous droits réservés.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-300 hover:text-white transition"
                        >
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://wa.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-300 hover:text-white transition"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-300 hover:text-white transition"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
