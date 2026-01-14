import { Calendar, Clock, Music, Users, Utensils, PartyPopper } from "lucide-react";

interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface DaySchedule {
  date: string;
  day: string;
  events: ScheduleEvent[];
}

const schedule: DaySchedule[] = [
  {
    date: "13. Februar",
    day: "Freitag",
    events: [
      {
        time: "18:00",
        title: "Einlass & Empfang",
        description: "Willkommensgetränk und erste Begegnungen",
        icon: <Users className="w-5 h-5" />,
      },
      {
        time: "19:00",
        title: "Eröffnungszeremonie",
        description: "40 Jahre Deutsche Carneval Verein",
        icon: <PartyPopper className="w-5 h-5" />,
      },
      {
        time: "20:00",
        title: "Live-Musik & Tanz",
        description: "Traditionelle Karnevalsmusik",
        icon: <Music className="w-5 h-5" />,
      },
      {
        time: "22:00",
        title: "Festbuffet",
        description: "Kulinarische Köstlichkeiten",
        icon: <Utensils className="w-5 h-5" />,
      },
    ],
  },
  {
    date: "14. Februar",
    day: "Samstag",
    events: [
      {
        time: "14:00",
        title: "Kinderkarneval",
        description: "Spaß und Spiele für die Kleinen",
        icon: <PartyPopper className="w-5 h-5" />,
      },
      {
        time: "17:00",
        title: "Kostümwettbewerb",
        description: "Die schönsten Verkleidungen",
        icon: <Users className="w-5 h-5" />,
      },
      {
        time: "19:00",
        title: "Große Karnevalsgala",
        description: "Höhepunkt des Jubiläums",
        icon: <Music className="w-5 h-5" />,
      },
      {
        time: "23:00",
        title: "Abschlussfeier",
        description: "Gemeinsamer Ausklang",
        icon: <PartyPopper className="w-5 h-5" />,
      },
    ],
  },
];

const Schedule = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Programm
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Zwei Tage voller Freude, Musik und unvergesslicher Momente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((day, dayIndex) => (
            <div
              key={day.date}
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
                    key={event.time}
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
                        {event.time} Uhr
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
