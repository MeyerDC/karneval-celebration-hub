import Confetti from "@/components/Confetti";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Schedule from "@/components/Schedule";
import EventInfo from "@/components/EventInfo";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <Confetti />
      <Hero />
      <Highlights />
      <Schedule />
      <EventInfo />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
