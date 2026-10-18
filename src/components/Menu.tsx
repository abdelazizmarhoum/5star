import { useState } from "react";
import { Plus, Check, Flame, RotateCw, AlertCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/menu";
import { OrnamentDivider, ZelligeStarIcon } from "@/components/ZelligePattern";
import BabArchFrame from "@/components/BabArchFrame";
import { useMenu } from "@/hooks/useMenu";

type Category = "all" | MenuItem["category"];

export default function Menu() {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();
  const { items: menuItems, loading, error, refetch } = useMenu();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [animKey, setAnimKey] = useState(0);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t.menu.categories.all },
    { key: "shawarma", label: t.menu.categories.shawarma },
    { key: "sandwiches", label: t.menu.categories.sandwiches },
    { key: "plates", label: t.menu.categories.plates },
    { key: "sides", label: t.menu.categories.sides },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    if (!item.is_available) return;
    addItem(item);
    setAddedItems((prev) => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 1500);
  };

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setAnimKey((prev) => prev + 1);
  };

  return (
    <section id="menu" className="py-20 md:py-28 tadelakt relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none zellige-bg-dense" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5"
            style={{
              backgroundColor: "rgba(200, 90, 50, 0.08)",
              border: "1px solid rgba(200, 90, 50, 0.15)",
            }}
          >
            <ZelligeStarIcon size={14} color="#C85A32" rotateOnHover />
            <span className="text-sm font-bold body-font" style={{ color: "#C85A32" }}>
              {lang === "ar" ? "قائمة الطعام" : "Notre Carte"}
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-black mb-3 heading-font"
            style={{ color: "#1A120B" }}
          >
            {t.menu.title}
          </h2>
          <div className="flex justify-center mb-3">
            <OrnamentDivider color="#C85A32" />
          </div>
          <p className="text-lg body-font" style={{ color: "#3D2B1E", opacity: 0.6 }}>
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Tabs — Moroccan Arch Tiles with rotating star */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`group flex items-center gap-2 px-5 py-2.5 arch-tab text-sm font-bold transition-all body-font clay-plaque ${
                activeCategory === cat.key ? "active scale-105" : ""
              }`}
            >
              {activeCategory === cat.key && (
                <ZelligeStarIcon size={12} color="#F59E0B" rotateOnHover />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* 1. Loading Skeleton Screen with Moroccan Zellige Pattern Shimmer */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="moroccan-card flex flex-col overflow-hidden animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Skeleton Image with Arch Frame & Zellige Pattern */}
                <div className="relative w-full h-48 bg-[#EDE4D0]/60 overflow-hidden">
                  <div className="absolute inset-0 zellige-bg opacity-30" />
                  <div className="absolute inset-0 shimmer-sweep" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ZelligeStarIcon
                      size={28}
                      color="#D97706"
                      opacity={0.25}
                      className="zellige-spin-slow"
                    />
                  </div>
                  <BabArchFrame />
                </div>

                {/* Skeleton Body */}
                <div className="p-5 flex flex-col flex-1 space-y-4">
                  {/* Title & Price placeholder */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="h-6 w-3/5 rounded-lg bg-[#EDE4D0] animate-pulse" />
                    <div className="h-6 w-16 rounded-full bg-[#C85A32]/20 animate-pulse" />
                  </div>
                  {/* Description placeholders */}
                  <div className="space-y-2 flex-1">
                    <div className="h-3.5 w-full rounded bg-[#EDE4D0]/80 animate-pulse" />
                    <div className="h-3.5 w-4/5 rounded bg-[#EDE4D0]/60 animate-pulse" />
                  </div>
                  {/* Button placeholder */}
                  <div className="h-10 w-full rounded-xl bg-[#EDE4D0] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Error State with Graceful Clean Retry Button */}
        {!loading && error && menuItems.length === 0 && (
          <div className="max-w-md mx-auto text-center py-12 px-6 rounded-2xl bg-[#F7F1E5] border border-[#C85A32]/20 shadow-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#C85A32]/10 text-[#C85A32]">
              <AlertCircle size={28} />
            </div>
            <h3 className="text-xl font-bold heading-font text-[#1A120B] mb-2">
              {t.menu.errorLoading}
            </h3>
            <p className="text-sm body-font text-[#3D2B1E]/70 mb-6">
              {lang === "ar"
                ? "تأكد من الاتصال بالإنترنت ثم حاول ثانية"
                : "Veuillez vérifier votre connexion et réessayer."}
            </p>
            <button
              onClick={refetch}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-[#FBF8F1] transition-all body-font btn-terracotta shadow-sm"
            >
              <RotateCw size={16} />
              <span>{t.menu.retry}</span>
            </button>
          </div>
        )}

        {/* 3. Empty Category Fallback */}
        {!loading && !error && filteredItems.length === 0 && (
          <div className="max-w-md mx-auto text-center py-12 px-6 rounded-2xl bg-[#F7F1E5] border border-[#C85A32]/15">
            <p className="text-base body-font text-[#3D2B1E]/70 mb-4">
              {lang === "ar"
                ? "لا توجد أطباق متوفرة في هذا القسم حالياً."
                : "Aucun plat disponible dans cette catégorie pour le moment."}
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="px-5 py-2 rounded-xl text-sm font-bold text-[#FBF8F1] body-font btn-terracotta"
            >
              {lang === "ar" ? "عرض جميع الأطباق" : "Voir tous les plats"}
            </button>
          </div>
        )}

        {/* 4. Menu Grid — Live Data */}
        {!loading && (
          <div
            key={animKey}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => {
              const itemTitle =
                lang === "ar"
                  ? item.title_ar || item.name_ar
                  : item.title_fr || item.name_fr;
              const itemDesc =
                lang === "ar"
                  ? item.description_ar || item.desc_ar
                  : item.description_fr || item.desc_fr;
              const itemImage = item.image_url || item.image;
              const isPopular = item.is_popular ?? item.popular;
              const isSpicy = item.is_spicy ?? item.spicy;
              const isAvailable = item.is_available;

              return (
                <article
                  key={item.id}
                  className="group moroccan-card animate-mosaic-in relative flex flex-col"
                  style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
                >
                  {/* Top: Food photo with Moroccan Door Arch Frame overlay */}
                  <div className="relative w-full h-48 overflow-hidden arch-glow">
                    <img
                      src={itemImage}
                      alt={itemTitle}
                      className={`w-full h-48 object-cover arch-image-zoom transition-all duration-300 ${
                        !isAvailable ? "grayscale-[40%] opacity-70" : ""
                      }`}
                      loading="lazy"
                    />

                    {/* Moroccan Door (Bab) Arch Frame sitting ON TOP of the food photo */}
                    <BabArchFrame />

                    {/* "غير متوفر / Épuisé" overlay badge when item is unavailable */}
                    {!isAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <span
                          className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white body-font shadow-lg uppercase tracking-wider"
                          style={{
                            backgroundColor: "rgba(26, 18, 11, 0.85)",
                            border: "1.5px solid rgba(200, 90, 50, 0.7)",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          {lang === "ar" ? "غير متوفر" : "Épuisé"}
                        </span>
                      </div>
                    )}

                    {/* Badges — Popular & Spicy */}
                    {isPopular && isAvailable && (
                      <span
                        className="absolute top-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white body-font shadow-md"
                        style={{
                          left: lang === "ar" ? "auto" : "12px",
                          right: lang === "ar" ? "12px" : "auto",
                          backgroundColor: "rgba(26,18,11,0.65)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          border: "1px solid rgba(217,119,6,0.5)",
                          zIndex: 10,
                        }}
                      >
                        <ZelligeStarIcon size={10} color="#F59E0B" />
                        {lang === "ar" ? "الأكثر طلباً" : "Populaire"}
                      </span>
                    )}
                    {isSpicy && isAvailable && (
                      <span
                        className="absolute top-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white body-font shadow-md"
                        style={{
                          left: lang === "ar" ? "12px" : "auto",
                          right: lang === "ar" ? "auto" : "12px",
                          backgroundColor: "rgba(200,90,50,0.85)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          border: "1px solid rgba(245,158,11,0.45)",
                          zIndex: 10,
                        }}
                      >
                        <Flame size={11} />
                        {lang === "ar" ? "حار" : "Épicé"}
                      </span>
                    )}
                  </div>

                  {/* Body: Title row + description + action button */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Title row: Dish name + Price pill */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <ZelligeStarIcon
                          size={14}
                          color="#C85A32"
                          opacity={0.5}
                          rotateOnHover
                          className="shrink-0"
                        />
                        <h3
                          className="text-xl font-bold heading-font truncate"
                          style={{ color: "#1A120B" }}
                        >
                          {itemTitle}
                        </h3>
                      </div>
                      <span
                        className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full text-base num-font price-badge"
                        style={{
                          backgroundColor: isAvailable ? "#C85A32" : "#78716c",
                          color: "#FBF8F1",
                          border: "1px solid rgba(245,158,11,0.3)",
                          boxShadow: "0 2px 8px -2px rgba(200,90,50,0.3)",
                        }}
                      >
                        {item.price}
                        <span style={{ fontSize: "0.7em", opacity: 0.85 }}>
                          {lang === "ar" ? "د.م" : "MAD"}
                        </span>
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm desc-font line-clamp-2 mb-4 flex-1"
                      style={{ color: "#57534e", minHeight: "2.75rem" }}
                    >
                      {itemDesc}
                    </p>

                    {/* Action button: Disabled when is_available is false */}
                    <button
                      onClick={() => handleAdd(item)}
                      disabled={!isAvailable}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold transition-all body-font shadow-sm relative overflow-hidden ${
                        !isAvailable ? "cursor-not-allowed" : ""
                      }`}
                      style={{
                        backgroundColor: !isAvailable
                          ? "#EDE4D0"
                          : addedItems.has(item.id)
                          ? "#2E7D32"
                          : "#C85A32",
                        color: !isAvailable ? "rgba(26, 18, 11, 0.45)" : "#FBF8F1",
                        border: !isAvailable
                          ? "1px solid rgba(200, 90, 50, 0.15)"
                          : addedItems.has(item.id)
                          ? "1px solid #2E7D32"
                          : "1px solid #B84A28",
                        boxShadow: !isAvailable
                          ? "none"
                          : "0 2px 8px -2px rgba(200,90,50,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        if (isAvailable && !addedItems.has(item.id)) {
                          e.currentTarget.style.backgroundColor = "#B84A28";
                          e.currentTarget.style.transform = "translateY(-1px)";
                          e.currentTarget.style.boxShadow =
                            "0 6px 16px -4px rgba(200,90,50,0.4)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isAvailable && !addedItems.has(item.id)) {
                          e.currentTarget.style.backgroundColor = "#C85A32";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 2px 8px -2px rgba(200,90,50,0.3)";
                        }
                      }}
                    >
                      {!isAvailable ? (
                        <span>{t.menu.unavailable}</span>
                      ) : addedItems.has(item.id) ? (
                        <>
                          <Check size={17} />
                          {t.menu.added}
                        </>
                      ) : (
                        <>
                          <Plus size={17} />
                          {t.menu.addToOrder}
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
