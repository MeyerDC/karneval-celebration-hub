import { Heart } from "lucide-react";

interface Sponsor {
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  { name: "Brauerei Müller", logo: "🍺" },
];

const pendingSponsors: Sponsor[] = [
  { name: "Sponsor 2", logo: "🤝" },
  { name: "Sponsor 3", logo: "🤝" },
];

const Sponsors = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Unsere Partner
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ein herzliches Dankeschön an alle Sponsoren und Unterstützer, die dieses Jubiläum ermöglichen
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className="bg-card rounded-xl p-6 shadow-card flex flex-col items-center justify-center gap-4 hover:scale-105 hover:shadow-festival transition-all duration-300 animate-fade-in border border-border min-w-[200px] min-h-[200px]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 bg-muted rounded-xl flex items-center justify-center text-4xl md:text-5xl">
                {sponsor.logo}
              </div>
              <span className="font-medium text-sm md:text-base text-foreground text-center">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

        {/* Pending Sponsors */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">Weitere Partner folgen</p>
          <div className="flex flex-wrap justify-center gap-6">
            {pendingSponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className="bg-muted/30 rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-dashed border-border min-w-[200px] min-h-[200px] opacity-60"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 bg-muted/50 rounded-xl flex items-center justify-center text-4xl md:text-5xl">
                  {sponsor.logo}
                </div>
                <span className="font-medium text-sm md:text-base text-muted-foreground text-center">
                  Demnächst
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="text-center bg-card rounded-2xl shadow-card p-8 md:p-12 border border-border">
          <Heart className="w-10 h-10 text-primary mx-auto mb-4 fill-primary/20" />
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Gemeinsam Feiern
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Ohne die großzügige Unterstützung unserer Sponsoren und Partner wäre dieses 40-jährige Jubiläum nicht möglich. 
            Wir danken allen Unternehmen und Einzelpersonen, die uns helfen, die Tradition des deutschen Karnevals am Leben zu erhalten.
          </p>
          <p className="text-sm text-muted-foreground">
            Interesse an einer Partnerschaft?{" "}
            <a href="mailto:contact@dcvpretoria.co.za" className="text-primary hover:underline font-medium">
              Kontaktieren Sie uns
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
