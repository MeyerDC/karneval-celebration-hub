import { Heart } from "lucide-react";

const sponsors = [
  "Brauerei Müller",
  "Stadtwerke",
  "Autohaus Schmidt",
  "Bäckerei Wagner",
  "Metzgerei Hoffmann",
  "Blumen Schneider",
  "Café Central",
  "Druckerei Weber",
  "Optik Meyer",
  "Apotheke am Markt",
  "Sporthaus Fritz",
  "Modehaus Klein",
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

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor}
              className="bg-card rounded-xl p-6 shadow-card flex items-center justify-center font-display text-lg md:text-xl text-foreground hover:scale-105 hover:shadow-festival transition-all duration-300 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {sponsor}
            </div>
          ))}
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
            <a href="mailto:sponsoring@deutsche-carneval.de" className="text-primary hover:underline font-medium">
              Kontaktieren Sie uns
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
