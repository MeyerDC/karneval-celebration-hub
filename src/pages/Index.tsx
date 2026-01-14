import Confetti from "@/components/Confetti";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Confetti />
      <Hero />
      <Highlights />
      <Schedule />
      <Footer />
    </div>
  );
};

export default Index;
