import { Flame, Clock, Star, ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { RESTAURANT } from "@/data/restaurant";
import { ZelligePattern, MoroccanArch, ZelligeStarIcon } from "@/components/ZelligePattern";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden atlas-texture">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/40262789/pexels-photo-40262789.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Shawarma wraps"
          className="w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,18,11,0.82) 0%, rgba(26,18,11,0.6) 50%, rgba(44,29,17,0.8) 100%)",
          }}
        />
      </div>

      {/* Zellige pattern overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ZelligePattern color="#D97706" opacity={0.07} />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ZelligePattern color="#1E3A8A" opacity={0.04} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl door-content-reveal">
          {/* Seal Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full mb-6 seal-badge"
          >
            <ZelligeStarIcon size={16} color="#F59E0B" rotateOnHover />
            <span className="text-[#FBF8F1] text-sm font-semibold body-font">
              {lang === "ar" ? "جودة وتراث مغربي • مفتوح حتى 1 دليل" : "Qualité & Héritage Marocain • Ouvert jusqu'à 1h"}
            </span>
          </div>

          {/* Title with Moroccan arch frame */}
          <div className="relative">
            {/* Arch decoration */}
            <div className="absolute -top-4 left-0 right-0 h-3 opacity-30 pointer-events-none">
              <MoroccanArch strokeColor="#D97706" strokeWidth={1.5} opacity={0.4} />
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5 heading-font"
              style={{
                color: "#FBF8F1",
                padding: "0.5rem 0",
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              {t.hero.title}
            </h1>
            {/* Gold underline ornament */}
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, transparent, #D97706)" }} />
              <div className="flex items-center gap-1">
                <ZelligeStarIcon size={12} color="#D97706" className="zellige-spin-slow" />
                {[...Array(3)].map((_, i) => (
                  <Star key={i} size={10} style={{ fill: "#D97706", color: "#D97706" }} />
                ))}
                <ZelligeStarIcon size={12} color="#D97706" className="zellige-spin-slow" style={{ animationDirection: "reverse" } as React.CSSProperties} />
              </div>
              <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, #D97706, transparent)" }} />
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-[#FBF8F1]/75 mb-8 max-w-2xl body-font"
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={RESTAURANT.glovoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-[#FBF8F1] text-lg body-font btn-terracotta shimmer-sweep relative"
            >
              <Flame size={22} />
              {t.hero.orderGlovo}
            </a>
            <a
              href={RESTAURANT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-[#FBF8F1] text-lg body-font btn-zellige"
            >
              {t.hero.orderWhatsApp}
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-wrap items-center gap-4 text-[#FBF8F1]/70 text-sm body-font">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    style={{
                      fill: i < 4 ? "#D97706" : "rgba(217,119,6,0.3)",
                      color: i < 4 ? "#D97706" : "rgba(217,119,6,0.3)",
                    }}
                  />
                ))}
              </div>
              <span className="font-semibold">4.1 · 22+ Google</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#D97706]/40" />
            <div className="flex items-center gap-1.5">
              <Clock size={15} style={{ color: "#D97706" }} />
              <span>{lang === "ar" ? "مفتوح حتى 1 صباحاً" : "Ouvert jusqu'à 1h"}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#D97706]/40" />
            <span style={{ color: "#D97706" }}>MAD 50-100 · {lang === "ar" ? "للشخص" : "par personne"}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#FBF8F1]/50 hover:text-[#D97706] transition-colors"
      >
        <span className="text-xs font-medium body-font">{t.hero.scrollMenu}</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
