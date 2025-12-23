import type { Metadata } from "next";
import { Outfit, Momo_Trust_Display } from "next/font/google";
import Header from "@/components/sections/Header";
import "./globals.css";
import Footer from "@/components/sections/Footer";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const momoTrustDisplay = Momo_Trust_Display({
    variable: "--font-momo-trust-display",
    weight: ["400"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Well Steven",
    description:
        "Cabinet d'assistance comptable, fiscale et de formation professionnelle.",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://well-steven.fr",
        title: "Well Steven",
        description:
            "Cabinet d'assistance comptable, fiscale et de formation professionnelle.",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Well Steven",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Well Steven",
        description:
            "Cabinet d'assistance comptable, fiscale et de formation professionnelle.",
        images: ["/logo.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${outfit.variable} ${momoTrustDisplay.variable} font-outfit antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
