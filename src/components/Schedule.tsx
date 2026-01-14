import { Calendar, Clock, Music, PartyPopper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Schedule = () => {
  const { t } = useLanguage();

  const schedule = [
    {
      date: t("schedule.feb13"),
      day: t("schedule.friday"),
      events: [
        {
          time: "18:30",
          title: t("schedule.buettenabend"),
          description: t("schedule.buettenabend.desc"),
          icon: <Music className="w-5 h-5" />,
        },
      ],
    },
    {
      date: t("schedule.feb14"),
      day: t("schedule.saturday"),
      events: [
        {
          time: "18:30",
          title: t("schedule.international"),
          description: t("schedule.international.desc"),
          icon: <PartyPopper className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            {t("schedule.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("schedule.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-card rounded-2xl shadow-card p-6 md:p-8 animate-fade-in"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-12 h-12 gradient-festival rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground">{day.day}</h3>
                  <p className="text-muted-foreground">{day.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {event.icon}
                      </div>
                      {eventIndex < day.events.length - 1 && (
                        <div className="w-0.5 h-full mt-2 bg-border" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Clock className="w-4 h-4" />
                        {event.time} {t("schedule.time")}
                      </div>
                      <h4 className="font-semibold text-foreground">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
