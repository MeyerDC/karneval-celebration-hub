import Confetti from "@/components/Confetti";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <LanguageToggle />
        <Confetti />
        <Hero />
        <Highlights />
        <Schedule />
        <Sponsors />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
