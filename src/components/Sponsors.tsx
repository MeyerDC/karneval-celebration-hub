import { Heart, Sparkles, Star, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Sponsors = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            {t("sponsors.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("sponsors.subtitle")}
          </p>
        </div>

        {/* Sponsor Opportunity Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Main CTA Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-card rounded-2xl border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-2 group-hover:border-primary/50 transition-colors">
                <Building2 className="w-12 h-12 text-muted-foreground/50 group-hover:text-primary/70 transition-colors" />
                <span className="text-sm text-muted-foreground font-medium">{t("sponsors.cta")}</span>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  {t("sponsors.ctaDesc")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("sponsors.description")}
                </p>
                <a 
                  href="mailto:contact@dcvpretoria.co.za" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  {t("sponsors.contact")}
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <h4 className="font-display text-xl text-foreground">{t("sponsors.benefits")}</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 fill-primary/20" />
                <span className="text-muted-foreground">{t("sponsors.benefit1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 fill-primary/20" />
                <span className="text-muted-foreground">{t("sponsors.benefit2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 fill-primary/20" />
                <span className="text-muted-foreground">{t("sponsors.benefit3")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="text-center bg-card rounded-2xl shadow-card p-8 md:p-12 border border-border">
          <Heart className="w-10 h-10 text-primary mx-auto mb-4 fill-primary/20" />
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            {t("sponsors.together")}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {t("sponsors.description")}
          </p>
          <p className="text-sm text-muted-foreground">
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
