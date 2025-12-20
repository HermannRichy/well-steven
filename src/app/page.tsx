import Benefit from "@/components/sections/Benefit";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <WhoWeAre />
                <Benefit />
            </main>
        </>
    );
}
