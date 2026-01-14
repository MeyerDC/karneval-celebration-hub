import { Button } from "@/components/ui/button";
import Countdown from "./Countdown";
import { Sparkles, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
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
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* Anniversary Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-8 animate-scale-in">
          <Sparkles className="w-5 h-5 text-secondary" />
          <span className="font-semibold text-secondary">40 Jahre Jubiläum</span>
          <Sparkles className="w-5 h-5 text-secondary" />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-fade-in">
          <span className="text-foreground">Deutsche</span>
          <br />
          <span className="text-gradient-festival">Carneval Verein</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Feiern Sie mit uns vier Jahrzehnte Tradition, Freude und Gemeinschaft
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">13. - 14. Februar 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Festsaal</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="festival" size="xl">
            Tickets Sichern
          </Button>
          <Button variant="festivalOutline" size="xl">
            Mehr Erfahren
          </Button>
        </div>

        {/* Countdown */}
        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground mb-6 uppercase tracking-widest text-sm">
            Countdown zum Fest
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
