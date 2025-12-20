import ServiceHero from "@/components/sections/ServiceHero";
import ServicePage from "@/components/sections/ServiceAbout";
import ServiceSpeciaux from "@/components/sections/ServiceSpeciaux";
import Stats from "@/components/sections/ServiceStats";
import FeaturesGrid from "@/components/sections/ServiceFeatures";
import WhyChooseUs from "@/components/sections/ServiceWhyUs";
import Testimonials from "@/components/sections/ServiceTestimonials";
import CTASection from "@/components/sections/ServiceCta";

export default function Home() {
    return (
        <>
            <main>
                <ServiceHero />
                <ServicePage/>
                <ServiceSpeciaux/>
                <Stats/>
                <FeaturesGrid/>
                <WhyChooseUs/>
                <Testimonials/>
                <CTASection/>
            </main>
        </>
    );
}

