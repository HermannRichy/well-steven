import Benefit from "@/components/sections/Benefit";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/ServiceTestimonials";
import WhyChooseUs from "@/components/sections/ServiceWhyUs";
import WhoWeAre from "@/components/sections/WhoWeAre";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <WhoWeAre />
                <Benefit />
                <WhyChooseUs />
                <Testimonials />
            </main>
        </>
    );
}
