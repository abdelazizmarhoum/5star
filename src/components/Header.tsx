import { useState, useEffect } from "react";
import { Star, ShoppingBag, Menu as MenuIcon, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import { RESTAURANT } from "@/data/restaurant";
import { ZelligeStar } from "@/components/ZelligePattern";

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const { totalItems, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#menu", label: t.nav.menu },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#location", label: t.nav.location },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const headerBg = scrolled ? "rgba(26, 18, 11, 0.95)" : "transparent";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md"
      style={{
        backgroundColor: headerBg,
        boxShadow: scrolled ? "0 2px 20px rgba(200, 90, 50, 0.1)" : "none",
        borderBottom: scrolled ? "1px solid rgba(217, 119, 6, 0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavClick("#home")}>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    style={{ fill: "#D97706", color: "#D97706" }}
                  />
                ))}
              </div>
              <span
                className="text-lg md:text-2xl font-bold text-[#FBF8F1] mt-0.5 heading-font"
                style={{ letterSpacing: lang === "ar" ? "0" : "0.05em" }}
              >
                {lang === "ar" ? RESTAURANT.name_ar : RESTAURANT.name_fr}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-[#FBF8F1]/80 hover:text-[#D97706] transition-colors body-font"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#FBF8F1] text-sm font-semibold body-font transition-all"
              style={{
                backgroundColor: "rgba(217, 119, 6, 0.15)",
                border: "1px solid rgba(217, 119, 6, 0.2)",
              }}
            >
              <Globe size={15} style={{ color: "#D97706" }} />
              <span>{lang === "ar" ? "FR" : "ع"}</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 rounded-lg text-[#FBF8F1] transition-all"
              style={{
                backgroundColor: "rgba(217, 119, 6, 0.15)",
                border: "1px solid rgba(217, 119, 6, 0.2)",
              }}
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-[#FBF8F1] animate-scale-in"
                  style={{ backgroundColor: "#C85A32", border: "1px solid rgba(245, 158, 11, 0.3)" }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Order CTA */}
            <a
              href={RESTAURANT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center px-4 py-2 rounded-xl text-sm font-bold text-[#FBF8F1] btn-terracotta shimmer-sweep animate-pulse-glow"
            >
              {t.nav.orderNow}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#FBF8F1]"
              style={{
                backgroundColor: "rgba(217, 119, 6, 0.15)",
                border: "1px solid rgba(217, 119, 6, 0.2)",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 shadow-2xl animate-fade-in atlas-texture"
          style={{ borderBottom: "1px solid rgba(217, 119, 6, 0.15)" }}
        >
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-right px-4 py-3.5 rounded-xl text-[#FBF8F1]/90 hover:bg-[rgba(217,119,6,0.1)] transition-colors font-semibold body-font"
              >
                {link.label}
              </button>
            ))}
            <a
              href={RESTAURANT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold text-[#FBF8F1] btn-terracotta body-font"
            >
              <ZelligeStar size={16} color="#FBF8F1" opacity={0.6} />
              {t.nav.orderNow}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
