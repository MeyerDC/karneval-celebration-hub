import { Button } from "@/components/ui/button";
import Countdown from "./Countdown";
import { Sparkles, Calendar, MapPin } from "lucide-react";
import heroLogo from "@/assets/hero-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              hsl(var(--primary)) 0px,
              hsl(var(--primary)) 2px,
              transparent 2px,
              transparent 20px
            )`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-4 md:right-10 w-24 md:w-40 h-24 md:h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 md:mb-10 animate-scale-in relative">
          <div className="absolute inset-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[520px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[520px] mx-auto bg-secondary/30 rounded-full blur-3xl" />
          <div className="relative w-[200px] sm:w-[300px] md:w-[400px] lg:w-[520px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[520px] mx-auto bg-card rounded-full shadow-festival flex items-center justify-center border-2 md:border-4 border-secondary/50 animate-pulse-glow">
            <img 
              src={heroLogo} 
              alt="Deutsche Carneval Verein 40 Jahre Logo" 
              className="w-[180px] sm:w-[280px] md:w-[380px] lg:w-[500px] h-[180px] sm:h-[280px] md:h-[380px] lg:h-[500px] object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Anniversary Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/20 rounded-full mb-4 sm:mb-8 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
          <span className="font-semibold text-secondary text-sm sm:text-base">{t("hero.anniversary")}</span>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">Deutscher</span>
          <br />
          <span className="text-gradient-festival">Carnevals Verein</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {t("hero.subtitle")}
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-card rounded-full shadow-card">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base">13. - 14. February 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-card rounded-full shadow-card">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <span className="font-medium text-xs sm:text-base">Deutsche Internationale Schule Pretoria</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a href="https://www.howler.co.za/DCV2026Friday" target="_blank" rel="noopener noreferrer">
            <Button variant="festival" size="xl" className="text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto">
              {t("hero.ticketsFriday")}
            </Button>
          </a>
          <a href="https://www.howler.co.za/DCV2026IntlAbend" target="_blank" rel="noopener noreferrer">
            <Button variant="festival" size="xl" className="text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto">
              {t("hero.ticketsIntl")}
            </Button>
          </a>
        </div>

        {/* Countdown */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-4 md:mb-6 uppercase tracking-widest text-xs sm:text-sm">
            {t("hero.countdown")}
          </p>
          <Countdown />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-muted/50"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
