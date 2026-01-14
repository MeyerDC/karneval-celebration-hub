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
    "sponsors.title": "Werden Sie Partner",
    "sponsors.subtitle": "Unterstützen Sie unser 40-jähriges Jubiläum und werden Sie Teil der Feierlichkeiten",
    "sponsors.cta": "Ihr Logo hier",
    "sponsors.ctaDesc": "Präsentieren Sie Ihr Unternehmen vor unserer Gemeinschaft",
    "sponsors.benefits": "Vorteile",
    "sponsors.benefit1": "Logo auf allen Materialien",
    "sponsors.benefit2": "Erwähnung bei Veranstaltungen",
    "sponsors.benefit3": "Networking-Möglichkeiten",
    "sponsors.together": "Gemeinsam Feiern",
    "sponsors.description": "Wir suchen lokale Unternehmen und Partner, die uns helfen, die Tradition des deutschen Karnevals am Leben zu erhalten. Werden Sie Teil unseres 40-jährigen Jubiläums!",
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
    "sponsors.title": "Become a Partner",
    "sponsors.subtitle": "Support our 40th anniversary and become part of the celebration",
    "sponsors.cta": "Your Logo Here",
    "sponsors.ctaDesc": "Present your business to our community",
    "sponsors.benefits": "Benefits",
    "sponsors.benefit1": "Logo on all materials",
    "sponsors.benefit2": "Mention at events",
    "sponsors.benefit3": "Networking opportunities",
    "sponsors.together": "Celebrating Together",
    "sponsors.description": "We are looking for local businesses and partners to help us keep the tradition of German carnival alive. Become part of our 40th anniversary celebration!",
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
