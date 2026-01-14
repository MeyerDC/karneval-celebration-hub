import { Heart, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import dcvLogo from "@/assets/dcv-logo.png";

const Footer = () => {
  return (
    <footer className="bg-festival-black text-festival-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={dcvLogo} alt="DCV Logo" className="w-12 h-12 object-contain" />
              <h3 className="font-display text-2xl text-secondary">
                Deutsche Carneval Verein
              </h3>
            </div>
            <p className="text-festival-cream/70 mb-4">
              Seit 1986 bringen wir Freude und Gemeinschaft durch traditionellen deutschen Karneval zusammen.
            </p>
            <div className="flex items-center gap-2 text-secondary mb-4">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">40 Jahre Tradition</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/dcv.pretoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-festival-cream/70 hover:text-secondary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/DCVPretoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-festival-cream/70 hover:text-secondary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="mailto:contact@dcvpretoria.co.za" className="flex items-center gap-3 text-festival-cream/70 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                contact@dcvpretoria.co.za
              </a>
              <div className="flex items-start gap-3 text-festival-cream/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Simon Vermooten Rd, The Willows,<br />
                  Pretoria, 0041
                </span>
              </div>
            </div>
            <h4 className="font-display text-xl mt-6 mb-2">Venue</h4>
            <p className="text-festival-cream/70">
              Deutsche Internationale Schule Pretoria (DSP)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">Links</h4>
            <div className="space-y-2">
              {["Über Uns", "Veranstaltungen", "Mitgliedschaft", "Galerie", "Kontakt"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-festival-cream/70 hover:text-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-festival-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-festival-cream/50 text-sm">
            © 2026 Deutsche Carneval Verein. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-festival-black border border-festival-cream/30" />
            <span className="w-4 h-4 bg-primary" />
            <span className="w-4 h-4 bg-secondary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
