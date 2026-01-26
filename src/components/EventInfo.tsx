import { Trophy, MapPin, Car, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EventInfo = () => {
  const { t } = useLanguage();

  const infoItems = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: t("eventInfo.prizes"),
      details: [
        t("eventInfo.prizesDesc"),
        t("eventInfo.theme"),
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("eventInfo.venue"),
      details: [
        t("eventInfo.venueLocation"),
      ],
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: t("eventInfo.parking"),
      details: [
        t("eventInfo.parkingLocation"),
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("eventInfo.ageReq"),
      details: [
        t("eventInfo.ageAlcohol"),
        t("eventInfo.ageSupervision"),
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            {t("eventInfo.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("eventInfo.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card p-6 animate-fade-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 gradient-festival rounded-xl flex items-center justify-center text-primary-foreground">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
              </div>
              <ul className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
