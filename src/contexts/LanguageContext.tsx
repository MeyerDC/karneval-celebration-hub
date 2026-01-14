import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Hero
    "hero.anniversary": "40 Jahre Jubiläum",
    "hero.subtitle": "Feiern Sie mit uns vier Jahrzehnte Tradition, Freude und Gemeinschaft",
    "hero.tickets": "Tickets Coming Soon",
    "hero.countdown": "Countdown zum Fest",
    
    // Countdown
    "countdown.days": "Tage",
    "countdown.hours": "Stunden",
    "countdown.minutes": "Minuten",
    "countdown.seconds": "Sekunden",
    
    // Highlights
    "highlights.title": "Highlights",
    "highlights.subtitle": "Was Sie bei unserem Jubiläumsfest erwartet",
    "highlights.40years.title": "40 Jahre",
    "highlights.40years.subtitle": "Tradition",
    "highlights.40years.description": "Vier Jahrzehnte voller unvergesslicher Karnevalsmomente",
    "highlights.music.title": "Live Musik",
    "highlights.music.subtitle": "& Tanz",
    "highlights.music.description": "Traditionelle Karnevalsmusik und moderne Hits",
    "highlights.community.title": "Gemeinschaft",
    "highlights.community.subtitle": "& Freunde",
    "highlights.community.description": "Gemeinsam feiern, vereint in Freude",
    "highlights.costume.title": "Kostüm",
    "highlights.costume.subtitle": "Wettbewerb",
    "highlights.costume.description": "Zeigen Sie Ihre kreativste Verkleidung",
    
    // Schedule
    "schedule.title": "Programm",
    "schedule.subtitle": "Zwei Tage voller Freude, Musik und unvergesslicher Momente",
    "schedule.friday": "Freitag",
    "schedule.saturday": "Samstag",
    "schedule.feb13": "13. Februar",
    "schedule.feb14": "14. Februar",
    "schedule.buettenabend": "Büttenabend",
    "schedule.buettenabend.desc": "German Evening – Einlass 18:30, Beginn 19:00",
    "schedule.international": "International Evening",
    "schedule.international.desc": "Internationale Feier – Einlass 18:30, Beginn 19:00",
    "schedule.time": "Uhr",
    
    // Sponsors
    "sponsors.title": "Unsere Partner",
    "sponsors.subtitle": "Ein herzliches Dankeschön an alle Sponsoren und Unterstützer, die dieses Jubiläum ermöglichen",
    "sponsors.pending": "Weitere Partner folgen",
    "sponsors.comingSoon": "Demnächst",
    "sponsors.together": "Gemeinsam Feiern",
    "sponsors.description": "Ohne die großzügige Unterstützung unserer Sponsoren und Partner wäre dieses 40-jährige Jubiläum nicht möglich. Wir danken allen Unternehmen und Einzelpersonen, die uns helfen, die Tradition des deutschen Karnevals am Leben zu erhalten.",
    "sponsors.partnership": "Interesse an einer Partnerschaft?",
    "sponsors.contact": "Kontaktieren Sie uns",
    
    // Footer
    "footer.about": "Seit 1986 bringen wir Freude und Gemeinschaft durch traditionellen deutschen Karneval zusammen.",
    "footer.tradition": "40 Jahre Tradition",
    "footer.contact": "Kontakt",
    "footer.venue": "Veranstaltungsort",
    "footer.rights": "Alle Rechte vorbehalten.",
  },
  en: {
    // Hero
    "hero.anniversary": "40th Anniversary",
    "hero.subtitle": "Celebrate with us four decades of tradition, joy, and community",
    "hero.tickets": "Tickets Coming Soon",
    "hero.countdown": "Countdown to the Festival",
    
    // Countdown
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    
    // Highlights
    "highlights.title": "Highlights",
    "highlights.subtitle": "What to expect at our anniversary celebration",
    "highlights.40years.title": "40 Years",
    "highlights.40years.subtitle": "of Tradition",
    "highlights.40years.description": "Four decades of unforgettable carnival moments",
    "highlights.music.title": "Live Music",
    "highlights.music.subtitle": "& Dance",
    "highlights.music.description": "Traditional carnival music and modern hits",
    "highlights.community.title": "Community",
    "highlights.community.subtitle": "& Friends",
    "highlights.community.description": "Celebrating together, united in joy",
    "highlights.costume.title": "Costume",
    "highlights.costume.subtitle": "Competition",
    "highlights.costume.description": "Show off your most creative outfit",
    
    // Schedule
    "schedule.title": "Schedule",
    "schedule.subtitle": "Two days of joy, music, and unforgettable moments",
    "schedule.friday": "Friday",
    "schedule.saturday": "Saturday",
    "schedule.feb13": "February 13",
    "schedule.feb14": "February 14",
    "schedule.buettenabend": "Büttenabend",
    "schedule.buettenabend.desc": "German Evening – Doors 18:30, Start 19:00",
    "schedule.international": "International Evening",
    "schedule.international.desc": "International Celebration – Doors 18:30, Start 19:00",
    "schedule.time": "",
    
    // Sponsors
    "sponsors.title": "Our Partners",
    "sponsors.subtitle": "A heartfelt thank you to all sponsors and supporters who make this anniversary possible",
    "sponsors.pending": "More partners coming soon",
    "sponsors.comingSoon": "Coming Soon",
    "sponsors.together": "Celebrating Together",
    "sponsors.description": "Without the generous support of our sponsors and partners, this 40th anniversary would not be possible. We thank all companies and individuals who help us keep the tradition of German carnival alive.",
    "sponsors.partnership": "Interested in a partnership?",
    "sponsors.contact": "Contact us",
    
    // Footer
    "footer.about": "Since 1986, we bring joy and community together through traditional German carnival.",
    "footer.tradition": "40 Years of Tradition",
    "footer.contact": "Contact",
    "footer.venue": "Venue",
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
