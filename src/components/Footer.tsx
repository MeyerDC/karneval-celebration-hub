import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-festival-black text-festival-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <h3 className="font-display text-3xl text-secondary mb-4">
              Deutsche Carneval Verein
            </h3>
            <p className="text-festival-cream/70 mb-4">
              Seit 1986 bringen wir Freude und Gemeinschaft durch traditionellen deutschen Karneval zusammen.
            </p>
            <div className="flex items-center gap-2 text-secondary">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">40 Jahre Tradition</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="mailto:info@deutsche-carneval.de" className="flex items-center gap-3 text-festival-cream/70 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                info@deutsche-carneval.de
              </a>
              <a href="tel:+4912345678" className="flex items-center gap-3 text-festival-cream/70 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5" />
                +49 123 456 78
              </a>
              <div className="flex items-start gap-3 text-festival-cream/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Festsaalstraße 1<br />
                  12345 Musterstadt
                </span>
              </div>
            </div>
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
