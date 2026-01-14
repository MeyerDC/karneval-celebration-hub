import { PartyPopper, Music, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: <PartyPopper className="w-8 h-8" />,
    title: "40 Jahre",
    subtitle: "Tradition",
    description: "Vier Jahrzehnte voller unvergesslicher Karnevalsmomente",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Live Musik",
    subtitle: "& Tanz",
    description: "Traditionelle Karnevalsmusik und moderne Hits",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Gemeinschaft",
    subtitle: "& Freunde",
    description: "Gemeinsam feiern, vereint in Freude",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Kostüm",
    subtitle: "Wettbewerb",
    description: "Zeigen Sie Ihre kreativste Verkleidung",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Highlights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Was Sie bei unserem Jubiläumsfest erwartet
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 bg-card rounded-2xl shadow-card hover:shadow-festival transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 gradient-festival opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
                
                <h3 className="font-display text-2xl text-foreground leading-tight">
                  {item.title}
                  <br />
                  <span className="text-primary">{item.subtitle}</span>
                </h3>
                
                <p className="mt-3 text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
