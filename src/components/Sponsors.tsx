import { Heart } from "lucide-react";

interface Sponsor {
  name: string;
  tier: "gold" | "silver" | "bronze";
}

const sponsors: Sponsor[] = [
  { name: "Brauerei Müller", tier: "gold" },
  { name: "Stadtwerke", tier: "gold" },
  { name: "Autohaus Schmidt", tier: "gold" },
  { name: "Bäckerei Wagner", tier: "silver" },
  { name: "Metzgerei Hoffmann", tier: "silver" },
  { name: "Blumen Schneider", tier: "silver" },
  { name: "Café Central", tier: "silver" },
  { name: "Druckerei Weber", tier: "bronze" },
  { name: "Optik Meyer", tier: "bronze" },
  { name: "Apotheke am Markt", tier: "bronze" },
  { name: "Sporthaus Fritz", tier: "bronze" },
  { name: "Modehaus Klein", tier: "bronze" },
];

const tierStyles = {
  gold: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 text-festival-black",
  silver: "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 text-festival-black",
  bronze: "bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-festival-cream",
};

const tierSizes = {
  gold: "col-span-2 row-span-2 text-2xl md:text-3xl p-8",
  silver: "col-span-1 row-span-1 text-lg md:text-xl p-6",
  bronze: "col-span-1 row-span-1 text-base p-4",
};

const Sponsors = () => {
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");
  const bronzeSponsors = sponsors.filter((s) => s.tier === "bronze");

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

        {/* Gold Sponsors */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-yellow-500" />
            <span className="font-display text-xl text-secondary uppercase tracking-widest">Gold Partner</span>
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-yellow-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`${tierStyles.gold} rounded-2xl flex items-center justify-center font-display text-2xl md:text-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {sponsor.name}
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-gray-400" />
            <span className="font-display text-lg text-muted-foreground uppercase tracking-widest">Silber Partner</span>
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-gray-400" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`${tierStyles.silver} rounded-xl flex items-center justify-center font-display text-lg md:text-xl p-6 shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {sponsor.name}
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-amber-700" />
            <span className="font-display text-lg text-muted-foreground uppercase tracking-widest">Bronze Partner</span>
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {bronzeSponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className={`${tierStyles.bronze} rounded-lg flex items-center justify-center font-display text-base p-4 shadow hover:scale-105 transition-transform duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {sponsor.name}
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="text-center bg-card rounded-2xl shadow-card p-8 md:p-12">
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
