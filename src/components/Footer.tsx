import { Star, Phone, MapPin, Instagram, Facebook, Music2, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { RESTAURANT } from "@/data/restaurant";
import { ZelligePattern, OrnamentDivider, ZelligeStar } from "@/components/ZelligePattern";

export default function Footer() {
  const { t, lang } = useLanguage();

  const quickLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#menu", label: t.nav.menu },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#location", label: t.nav.location },
  ];

  return (
    <footer id="contact" className="pt-16 pb-8 relative overflow-hidden" style={{ backgroundColor: "#1A120B" }}>
      {/* Zellige texture overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <ZelligePattern color="#D97706" opacity={0.04} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} style={{ fill: "#D97706", color: "#D97706" }} />
              ))}
            </div>
            <h3 className="text-2xl font-black text-[#FBF8F1] mb-2 heading-font">
              {lang === "ar" ? RESTAURANT.name_ar : RESTAURANT.name_fr}
            </h3>
            <p className="text-[#FBF8F1]/40 text-sm mb-5 body-font">{t.footer.tagline}</p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <span className="text-[#FBF8F1]/35 text-sm body-font">{t.footer.followUs}:</span>
              {[
                { href: RESTAURANT.instagram, icon: Instagram },
                { href: RESTAURANT.facebook, icon: Facebook },
                { href: RESTAURANT.tiktok, icon: Music2 },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[#FBF8F1] transition-all"
                    style={{
                      backgroundColor: "rgba(217, 119, 6, 0.1)",
                      border: "1px solid rgba(217, 119, 6, 0.15)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#C85A32";
                      e.currentTarget.style.borderColor = "#C85A32";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(217, 119, 6, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(217, 119, 6, 0.15)";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FBF8F1] font-bold mb-4 heading-font">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[#FBF8F1]/45 hover:text-[#D97706] transition-colors text-sm body-font flex items-center gap-2"
                  >
                    <ZelligeStar size={10} color="#C85A32" opacity={0.5} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#FBF8F1] font-bold mb-4 heading-font">{t.footer.contactUs}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#D97706" }} />
                <span className="text-[#FBF8F1]/45 text-sm body-font">{t.location.addressValue}</span>
              </li>
              <li>
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="flex items-center gap-3 text-[#FBF8F1]/45 hover:text-[#D97706] transition-colors text-sm body-font"
                >
                  <Phone size={18} className="flex-shrink-0" style={{ color: "#D97706" }} />
                  {RESTAURANT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-[#FBF8F1] transition-all body-font btn-terracotta mt-2"
                >
                  <MapPin size={16} />
                  {t.location.getDirections}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-6">
          <OrnamentDivider color="#D97706" />
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(217, 119, 6, 0.08)" }}
        >
          <p className="text-[#FBF8F1]/30 text-sm body-font">
            © {new Date().getFullYear()} {lang === "ar" ? RESTAURANT.name_ar : RESTAURANT.name_fr}. {t.footer.rights}
          </p>
          <p className="text-[#FBF8F1]/30 text-sm flex items-center gap-1.5 body-font">
            {t.footer.madeWith} <Heart size={14} style={{ fill: "#C85A32", color: "#C85A32" }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
