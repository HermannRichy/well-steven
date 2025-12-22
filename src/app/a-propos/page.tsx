import Hero from "@/components/sections/Hero";
import AboutContent from "@/components/sections/AboutContent";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import EquipePage from "@/components/sections/Team";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutContent />
      <Stats />
      <Features />
      <WhyChooseUs />
      <EquipePage/>
      <Testimonials />
      <FAQ />
      <Blog />
    </main>
  );
}