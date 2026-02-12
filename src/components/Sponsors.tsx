import { useState } from "react";
import { Heart, Building2, Phone, Mail, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import bravoplexLogo from "@/assets/sponsors/bravoplex415.jpg";
import wmwspicesLogo from "@/assets/sponsors/wmwspices.jpg";
import lunasolLogo from "@/assets/sponsors/lunasol.jpg";
import elandsheimLogo from "@/assets/sponsors/elandsheim.jpg";

interface Sponsor {
  name: string;
  logo: string;
  contact: string;
  phone: string;
  email: string;
  website?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Bravoplex415 (PTY) Ltd",
    logo: bravoplexLogo,
    contact: "Hennie de Jager",
    phone: "079 876 1784",
    email: "accounts@bravoplex415.co.za",
  },
  {
    name: "WMW Spices",
    logo: wmwspicesLogo,
    contact: "",
    phone: "",
    email: "",
    website: "https://wmwspices.co.za",
  },
  {
    name: "LunaSol Holistic Wellness Day Spa",
    logo: lunasolLogo,
    contact: "",
    phone: "",
    email: "",
    website: "https://instagram.com/lunasol.spa",
  },
  {
    name: "Elandsheim Guest Farm & Elandsview Guest House",
    logo: elandsheimLogo,
    contact: "",
    phone: "",
    email: "",
    website: "https://www.elandsheim.co.za",
  },
];

const Sponsors = () => {
  const { t } = useLanguage();
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  const handleSponsorClick = (sponsor: Sponsor) => {
    if (sponsor.website) {
      window.open(sponsor.website, "_blank", "noopener,noreferrer");
    } else {
      setSelectedSponsor(sponsor);
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 md:mb-4">
            {t("sponsors.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-2">
            {t("sponsors.subtitle")}
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="mb-8 md:mb-12">
          <h3 className="font-display text-xl sm:text-2xl text-foreground text-center mb-6">
            {t("sponsors.ourSponsors")}
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            {t("sponsors.thankYou")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <button
                key={index}
                onClick={() => handleSponsorClick(sponsor)}
                className="bg-card rounded-xl md:rounded-2xl shadow-card p-6 sm:p-8 border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-20 sm:h-24 md:h-28 object-contain group-hover:opacity-90 transition-opacity"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Sponsor Details Modal */}
        <Dialog open={!!selectedSponsor} onOpenChange={() => setSelectedSponsor(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center font-display text-xl">
                {selectedSponsor?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedSponsor && (
              <div className="flex flex-col items-center gap-6 py-4">
                <img
                  src={selectedSponsor.logo}
                  alt={selectedSponsor.name}
                  className="h-24 sm:h-32 object-contain"
                />
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <User className="w-5 h-5 text-primary" />
                    <span>{selectedSponsor.contact}</span>
                  </div>
                  <a
                    href={`tel:${selectedSponsor.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>{selectedSponsor.phone}</span>
                  </a>
                  <a
                    href={`mailto:${selectedSponsor.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span>{selectedSponsor.email}</span>
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Sponsor Opportunity Card */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-12 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-300 group mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-card rounded-xl md:rounded-2xl border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-1 md:gap-2 group-hover:border-primary/50 transition-colors">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-muted-foreground/50 group-hover:text-primary/70 transition-colors" />
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">{t("sponsors.cta")}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-2">
                {t("sponsors.ctaDesc")}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 max-w-xl mx-auto">
                {t("sponsors.description")}
              </p>
              <a 
                href="mailto:contact@dcvpretoria.co.za" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-primary/90 transition-colors"
              >
                <Heart className="w-4 h-4" />
                {t("sponsors.contact")}
              </a>
            </div>
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="text-center bg-card rounded-xl md:rounded-2xl shadow-card p-5 sm:p-6 md:p-12 border border-border">
          <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-3 md:mb-4 fill-primary/20" />
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-3 md:mb-4">
            {t("sponsors.together")}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-4 md:mb-6 px-2">
            {t("sponsors.description")}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t("sponsors.partnership")}{" "}
            <a href="mailto:contact@dcvpretoria.co.za" className="text-primary hover:underline font-medium">
              {t("sponsors.contact")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
