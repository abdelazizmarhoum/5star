import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ZelligePattern, OrnamentDivider } from "@/components/ZelligePattern";

interface Review {
  id: number;
  name: string;
  rating: number;
  text_ar: string;
  text_fr: string;
  date_ar: string;
  date_fr: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "زبون دائم",
    rating: 5,
    text_ar: "هادشي زوين بَارَك الله الله يعطيكم العافيه",
    text_fr: "C'est vraiment délicieux, que Dieu vous bénisse!",
    date_ar: "قبل أسبوع",
    date_fr: "Il y a une semaine",
  },
  {
    id: 2,
    name: "Kevin O.",
    rating: 5,
    text_ar: "طعام عربي لذيذ جداً والناس ودودون - أنصح به بشدة!",
    text_fr: "Really nice arabic food. And friendly people - highly recommended!",
    date_ar: "قبل أسبوعين",
    date_fr: "Il y a deux semaines",
  },
  {
    id: 3,
    name: "PIKACHU FF",
    rating: 5,
    text_ar: "الطعام لذيذ جداً والأجواء كانت رائعة للعشاء",
    text_fr: "Very tasty food and the atmosphere was amazing for dinner.",
    date_ar: "قبل شهر",
    date_fr: "Il y a un mois",
  },
  {
    id: 4,
    name: "Ahmed B.",
    rating: 4,
    text_ar: "شاورما ممتازة والتوصيل سريع، شكراً لكم",
    text_fr: "Excellente shawarma et livraison rapide, merci!",
    date_ar: "قبل 3 أيام",
    date_fr: "Il y a 3 jours",
  },
  {
    id: 5,
    name: "Sara M.",
    rating: 5,
    text_ar: "أفضل طاكوس في الدار البيضاء، سأعود بالتأكيد",
    text_fr: "Les meilleurs tacos de Casablanca, je reviendrai sûrement!",
    date_ar: "قبل 5 أيام",
    date_fr: "Il y a 5 jours",
  },
  {
    id: 6,
    name: "Youssef E.",
    rating: 4,
    text_ar: "المشاوي رائعة والأسعار معقولة جداً",
    text_fr: "Les grillades sont excellentes et les prix très raisonnables",
    date_ar: "قبل أسبوعين",
    date_fr: "Il y a deux semaines",
  },
];

export default function Reviews() {
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="py-20 md:py-28 atlas-texture relative overflow-hidden">
      {/* Zellige overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <ZelligePattern color="#D97706" opacity={0.05} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5"
            style={{
              backgroundColor: "rgba(217, 119, 6, 0.1)",
              border: "1px solid rgba(217, 119, 6, 0.2)",
            }}
          >
            <Star size={14} style={{ fill: "#D97706", color: "#D97706" }} />
            <span className="text-sm font-bold body-font" style={{ color: "#D97706" }}>
              {lang === "ar" ? "آراء العملاء" : "Avis Clients"}
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-black text-[#FBF8F1] mb-3 heading-font"
          >
            {t.reviews.title}
          </h2>
          <div className="flex justify-center mb-3">
            <OrnamentDivider color="#D97706" />
          </div>
          <p className="text-lg body-font text-[#FBF8F1]/55">{t.reviews.subtitle}</p>

          {/* Rating Badge */}
          <div
            className="inline-flex items-center gap-5 mt-6 px-7 py-5 rounded-2xl"
            style={{
              backgroundColor: "rgba(217, 119, 6, 0.06)",
              border: "1px solid rgba(217, 119, 6, 0.2)",
              boxShadow: "inset 0 0 0 1px rgba(200, 90, 50, 0.1)",
            }}
          >
            <div className="text-center">
              <div className="text-4xl font-black heading-font" style={{ color: "#D97706" }}>4.1</div>
              <div className="flex items-center gap-0.5 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    style={{
                      fill: i < 4 ? "#D97706" : "rgba(217,119,6,0.25)",
                      color: i < 4 ? "#D97706" : "rgba(217,119,6,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="w-px h-14" style={{ backgroundColor: "rgba(217, 119, 6, 0.15)" }} />
            <div className="text-left">
              <div className="text-[#FBF8F1] font-bold body-font">{t.reviews.googleRating}</div>
              <div className="text-[#FBF8F1]/40 text-sm body-font">{t.reviews.basedOn}</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="relative rounded-2xl p-6 animate-tile-reveal card-hover"
              style={{
                backgroundColor: "rgba(247, 241, 229, 0.04)",
                border: "1px solid rgba(217, 119, 6, 0.12)",
                animationDelay: `${index * 0.08}s`,
                opacity: 0,
                backdropFilter: "blur(8px)",
              }}
            >
              <Quote
                size={36}
                className="absolute top-4 right-4 opacity-10"
                style={{ color: "#D97706" }}
              />
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{
                      fill: i < review.rating ? "#D97706" : "rgba(217,119,6,0.15)",
                      color: i < review.rating ? "#D97706" : "rgba(217,119,6,0.15)",
                    }}
                  />
                ))}
              </div>
              <p
                className="text-[#FBF8F1]/80 text-sm leading-relaxed mb-4 body-font"
                style={{ fontFamily: lang === "ar" ? "'Tajawal', sans-serif" : "'Plus Jakarta Sans', sans-serif" }}
              >
                "{lang === "ar" ? review.text_ar : review.text_fr}"
              </p>
              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid rgba(217, 119, 6, 0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#FBF8F1] text-sm body-font"
                    style={{
                      background: "linear-gradient(135deg, #C85A32, #B45309)",
                      border: "1px solid rgba(245, 158, 11, 0.2)",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#FBF8F1] font-semibold text-sm body-font">{review.name}</div>
                    <div className="text-[#FBF8F1]/35 text-xs body-font">
                      {lang === "ar" ? review.date_ar : review.date_fr}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
