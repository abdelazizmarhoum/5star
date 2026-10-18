import { MapPin, Clock, Phone, Navigation, Flame, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { RESTAURANT } from "@/data/restaurant";
import { ZelligePattern, OrnamentDivider } from "@/components/ZelligePattern";

export default function Location() {
  const { t, lang } = useLanguage();

  const infoItems = [
    {
      icon: MapPin,
      label: t.location.address,
      value: t.location.addressValue,
      color: "#C85A32",
    },
    {
      icon: Clock,
      label: t.location.hours,
      value: t.location.hoursValue,
      color: "#1E3A8A",
    },
    {
      icon: Phone,
      label: t.location.phone,
      value: t.location.phoneValue,
      color: "#D97706",
      href: `tel:${RESTAURANT.phone}`,
    },
  ];

  return (
    <section id="location" className="py-20 md:py-28 tadelakt relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none zellige-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5"
            style={{
              backgroundColor: "rgba(30, 58, 138, 0.08)",
              border: "1px solid rgba(30, 58, 138, 0.15)",
            }}
          >
            <MapPin size={14} style={{ color: "#1E3A8A" }} />
            <span className="text-sm font-bold body-font" style={{ color: "#1E3A8A" }}>
              {lang === "ar" ? "زورنا" : "Nous Visiter"}
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-black mb-3 heading-font"
            style={{ color: "#1A120B" }}
          >
            {t.location.title}
          </h2>
          <div className="flex justify-center mb-3">
            <OrnamentDivider color="#1E3A8A" />
          </div>
          <p className="text-lg body-font" style={{ color: "#3D2B1E", opacity: 0.6 }}>{t.location.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map with ornate brass frame */}
          <div className="ornate-frame h-[400px] lg:h-full min-h-[400px] relative">
            <iframe
              src={RESTAURANT.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location"
            />
          </div>

          {/* Info Grid */}
          <div className="flex flex-col gap-4">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 moroccan-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                    style={{
                      backgroundColor: `${item.color}12`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-1 body-font" style={{ color: "#3D2B1E", opacity: 0.5 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold hover:underline heading-font" style={{ color: "#1A120B" }}>
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-lg font-bold heading-font" style={{ color: "#1A120B" }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#FBF8F1] transition-all body-font btn-terracotta"
              >
                <Phone size={18} />
                <span className="text-sm">{t.location.callNow}</span>
              </a>
              <a
                href={RESTAURANT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#FBF8F1] transition-all body-font btn-zellige"
              >
                <Navigation size={18} />
                <span className="text-sm">{t.location.getDirections}</span>
              </a>
            </div>

            {/* Order Apps — Atlas midnight panel */}
            <div
              className="p-5 rounded-2xl relative overflow-hidden"
              style={{
                backgroundColor: "#1A120B",
                border: "1px solid rgba(217, 119, 6, 0.15)",
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <ZelligePattern color="#D97706" opacity={0.15} />
              </div>
              <div className="relative flex items-center gap-2 mb-4">
                <Flame size={18} style={{ color: "#D97706" }} />
                <span className="text-[#FBF8F1] font-bold text-sm body-font">{t.location.orderApps}</span>
              </div>
              <div className="relative flex gap-3">
                <a
                  href={RESTAURANT.glovoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#FBF8F1] text-sm font-bold flex-1 justify-center body-font transition-all"
                  style={{
                    backgroundColor: "rgba(217, 119, 6, 0.1)",
                    border: "1px solid rgba(217, 119, 6, 0.2)",
                  }}
                >
                  Glovo
                  <ExternalLink size={14} />
                </a>
                <a
                  href={RESTAURANT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[#FBF8F1] text-sm font-bold flex-1 justify-center transition-all body-font btn-terracotta"
                >
                  WhatsApp
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
