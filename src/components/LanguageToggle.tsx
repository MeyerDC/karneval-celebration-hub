import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-card/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all shadow-card"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === "de" ? "EN" : "DE"}
    </Button>
  );
};

export default LanguageToggle;
