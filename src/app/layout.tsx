import type { Metadata } from "next";
import { Outfit, Momo_Trust_Display } from "next/font/google";
import Header from "@/components/sections/Header";
import "./globals.css";

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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${outfit.variable} ${momoTrustDisplay.variable} antialiased font-outfit`}
            >
                <Header /> 
                {children}
            </body>
        </html>
    );
}
