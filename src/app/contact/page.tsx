import ContactHero from "@/components/sections/ContactHero";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ContactDetails from "@/components/sections/ContactDetails";
import ContactFAQ from "@/components/sections/ContactFAQ";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactFormSection />
      <ContactDetails />
      <ContactFAQ />
    </main>
  );
}