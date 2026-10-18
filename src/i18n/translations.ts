export type Lang = "ar" | "fr";

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type Dict = {
  nav: { home: string; menu: string; reviews: string; location: string; contact: string; orderNow: string };
  hero: { title: string; subtitle: string; orderGlovo: string; orderWhatsApp: string; trustBadge: string; scrollMenu: string };
  menu: { title: string; subtitle: string; categories: { all: string; shawarma: string; sandwiches: string; plates: string; sides: string }; addToOrder: string; added: string; unavailable: string; retry: string; loadingMenu: string; errorLoading: string };
  cart: { title: string; empty: string; emptyHint: string; total: string; item: string; items: string; orderWhatsApp: string; orderGlovo: string; clear: string; remove: string; continueShopping: string; qty: string };
  reviews: { title: string; subtitle: string; googleRating: string; basedOn: string };
  location: { title: string; subtitle: string; address: string; addressValue: string; hours: string; hoursValue: string; phone: string; phoneValue: string; callNow: string; getDirections: string; orderApps: string };
  footer: { tagline: string; quickLinks: string; contactUs: string; followUs: string; rights: string; madeWith: string };
};

export const translations: Record<Lang, DeepReadonly<Dict>> = {
  ar: {
    // Nav
    nav: {
      home: "الرئيسية",
      menu: "القائمة",
      reviews: "التقييمات",
      location: "الموقع والأوقات",
      contact: "اتصل بنا",
      orderNow: "أطلب الآن",
    },
    // Hero
    hero: {
      title: "الذ الحقيقي للشاورما والمشويات في الدار البيضاء",
      subtitle: "جودة عالية، توصيل سريع، مفتوح حتى الواحدة بعد منتصف الليل",
      orderGlovo: "اطلب عبر Glovo",
      orderWhatsApp: "اطلب عبر واتساب",
      trustBadge: "⭐ 4.1 تقييم (22+ تقييم على Google) • توصيل سريع • مفتوح حتى 1 صباحاً",
      scrollMenu: "تصفح القائمة",
    },
    // Menu
    menu: {
      title: "قائمتنا",
      subtitle: "اختر من أشهى الأطباق العربية",
      categories: {
        all: "الكل",
        shawarma: "شاورما",
        sandwiches: "سندويتشات وبرغر",
        plates: "أطباق ومشاوي",
        sides: "إضافات ومشروبات",
      },
      addToOrder: "أضف للطلب",
      added: "تمت الإضافة",
      unavailable: "غير متوفر",
      retry: "إعادة المحاولة",
      loadingMenu: "جاري تحميل قائمة الطعام...",
      errorLoading: "تعذر تحميل قائمة الطعام. يرجى المحاولة مرة أخرى.",
    },
    // Cart
    cart: {
      title: "سلة الطلب",
      empty: "سلتك فارغة",
      emptyHint: "أضف بعض الأطباق اللذيذة للبدء",
      total: "المجموع",
      item: "صنف",
      items: "أصناف",
      orderWhatsApp: "اطلب عبر واتساب",
      orderGlovo: "اطلب عبر Glovo",
      clear: "إفراغ السلة",
      remove: "حذف",
      continueShopping: "متابعة التسوق",
      qty: "الكمية",
    },
    // Reviews
    reviews: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "تقييمات حقيقية من زبائننا",
      googleRating: "تقييم Google",
      basedOn: "بناءً على 22+ تقييم",
    },
    // Location
    location: {
      title: "الموقع والأوقات",
      subtitle: "زرنا أو اتصل بنا",
      address: "العنوان",
      addressValue: "شارع جورج ساند، فال فلوري، الدار البيضاء 20100",
      hours: "أوقات العمل",
      hoursValue: "الإثنين - الأحد: 12:00 ظهراً - 1:00 صباحاً",
      phone: "الهاتف",
      phoneValue: "06 09 08 65 71",
      callNow: "اتصل الآن",
      getDirections: "احصل على الاتجاهات",
      orderApps: "اطلب عبر التطبيقات",
    },
    // Footer
    footer: {
      tagline: "الذ شاورما ومشويات في الدار البيضاء",
      quickLinks: "روابط سريعة",
      contactUs: "تواصل معنا",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة",
      madeWith: "صُنع بشغف في الدار البيضاء",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      menu: "Menu",
      reviews: "Avis",
      location: "Localisation",
      contact: "Contact",
      orderNow: "Commander",
    },
    hero: {
      title: "Le Vrai Goût de la Shawarma & Grillades à Casablanca",
      subtitle: "Qualité supérieure, livraison rapide, ouvert jusqu'à 1h du matin",
      orderGlovo: "Commander sur Glovo",
      orderWhatsApp: "Commander par WhatsApp",
      trustBadge: "⭐ 4.1 Note (22+ avis Google) • Livraison rapide • Ouvert jusqu'à 1h",
      scrollMenu: "Voir le Menu",
    },
    menu: {
      title: "Notre Menu",
      subtitle: "Choisissez parmi nos meilleurs plats arabes",
      categories: {
        all: "Tout",
        shawarma: "Shawarma",
        sandwiches: "Sandwichs & Burgers",
        plates: "Plats & Grillades",
        sides: "Accompagnements & Boissons",
      },
      addToOrder: "Ajouter",
      added: "Ajouté",
      unavailable: "Épuisé",
      retry: "Réessayer",
      loadingMenu: "Chargement du menu...",
      errorLoading: "Impossible de charger le menu. Veuillez réessayer.",
    },
    cart: {
      title: "Panier",
      empty: "Votre panier est vide",
      emptyHint: "Ajoutez des plats délicieux pour commencer",
      total: "Total",
      item: "article",
      items: "articles",
      orderWhatsApp: "Commander sur WhatsApp",
      orderGlovo: "Commander sur Glovo",
      clear: "Vider le panier",
      remove: "Retirer",
      continueShopping: "Continuer mes achats",
      qty: "Quantité",
    },
    reviews: {
      title: "Avis de nos Clients",
      subtitle: "Témoignages authentiques de nos clients",
      googleRating: "Note Google",
      basedOn: "Basé sur 22+ avis",
    },
    location: {
      title: "Localisation & Horaires",
      subtitle: "Rendez-nous visite ou appelez-nous",
      address: "Adresse",
      addressValue: "Rue Georges Sand, Val Fleuri, Casablanca 20100",
      hours: "Horaires",
      hoursValue: "Lundi - Dimanche: 12h00 – 01h00",
      phone: "Téléphone",
      phoneValue: "06 09 08 65 71",
      callNow: "Appeler maintenant",
      getDirections: "Obtenir l'itinéraire",
      orderApps: "Commander via apps",
    },
    footer: {
      tagline: "La meilleure shawarma et grillades à Casablanca",
      quickLinks: "Liens rapides",
      contactUs: "Contactez-nous",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés",
      madeWith: "Fait avec passion à Casablanca",
    },
  },
};

export type TranslationKeys = DeepReadonly<Dict>;
