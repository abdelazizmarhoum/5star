export interface MenuItem {
  id: string;
  category: "shawarma" | "sandwiches" | "plates" | "sides" | string;
  title_ar: string;
  title_fr: string;
  description_ar: string;
  description_fr: string;
  price: number;
  image_url: string;
  is_available: boolean;
  is_popular: boolean;
  is_spicy: boolean;

  // Backwards-compatible aliases for existing components & Cart
  name_ar?: string;
  name_fr?: string;
  desc_ar?: string;
  desc_fr?: string;
  image?: string;
  popular?: boolean;
  spicy?: boolean;
}

const rawMenuItems = [
  // Shawarma
  {
    id: "chicken-shawarma",
    category: "shawarma",
    name_ar: "شاورما دجاج",
    name_fr: "Shawarma Poulet",
    desc_ar: "دجاج متبل مشوي، خبز طازج، صلصة ثوم، خيار ومخلل",
    desc_fr: "Poulet mariné grillé, pain frais, sauce à l'ail, concombre et cornichons",
    price: 35,
    image: "https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    popular: true,
  },
  {
    id: "beef-shawarma",
    category: "shawarma",
    name_ar: "شاورما لحم",
    name_fr: "Shawarma Boeuf",
    desc_ar: "لحم بقري متبل، طماطم، بصل، صلصة خاصة، خبز محمص",
    desc_fr: "Boeuf mariné, tomates, oignons, sauce spéciale, pain grillé",
    price: 40,
    image: "https://images.pexels.com/photos/10572741/pexels-photo-10572741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    spicy: true,
  },
  {
    id: "mixed-shawarma-plate",
    category: "shawarma",
    name_ar: "طبق شاورما مشكل",
    name_fr: "Assiette Shawarma Mixte",
    desc_ar: "شاورما دجاج ولحم، بطاطس مقلية، سلطة، صلصة ثوم",
    desc_fr: "Shawarma poulet et boeuf, frites, salade, sauce à l'ail",
    price: 65,
    image: "https://images.pexels.com/photos/7564714/pexels-photo-7564714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    popular: true,
  },
  // Sandwiches & Burgers
  {
    id: "kebab-sandwich",
    category: "sandwiches",
    name_ar: "سندويتش كباب",
    name_fr: "Sandwich Kebab",
    desc_ar: "كباب مشوي على الفحم، خبز، طماطم، بصل، صلصة حارة",
    desc_fr: "Kebab grillé au charbon, pain, tomates, oignons, sauce piquante",
    price: 38,
    image: "https://images.pexels.com/photos/16423838/pexels-photo-16423838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    spicy: true,
  },
  {
    id: "crispy-chicken-burger",
    category: "sandwiches",
    name_ar: "برغر دجاج مقرمش",
    name_fr: "Burger Poulet Croustillant",
    desc_ar: "دجاج مقرمش، خبز برغر، جبن، خس، صلصة خاصة، بطاطس",
    desc_fr: "Poulet croustillant, pain burger, fromage, salade, sauce spéciale, frites",
    price: 42,
    image: "https://images.pexels.com/photos/20003237/pexels-photo-20003237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    popular: true,
  },
  {
    id: "tacos",
    category: "sandwiches",
    name_ar: "طاكوس",
    name_fr: "Tacos",
    desc_ar: "طاكوس محشو باللحم، صلصة الجبن، بطاطس مقلية داخل الخبز",
    desc_fr: "Tacos garni de viande, sauce fromage, frites à l'intérieur",
    price: 45,
    image: "https://images.pexels.com/photos/9258712/pexels-photo-9258712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    spicy: true,
  },
  // Plates & Mix Grills
  {
    id: "plat-shawarma",
    category: "plates",
    name_ar: "طبق شاورما",
    name_fr: "Plat Shawarma",
    desc_ar: "شاورما دجاج، أرز، بطاطس، سلطة، صلصة ثوم وخبز",
    desc_fr: "Shawarma poulet, riz, frites, salade, sauce à l'ail et pain",
    price: 55,
    image: "https://images.pexels.com/photos/11286814/pexels-photo-11286814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "mixed-meat-plate",
    category: "plates",
    name_ar: "طبق لحم مشكل",
    name_fr: "Plat Mixte Viande",
    desc_ar: "كباب وكفتة وشيش طاووق، أرز، بطاطس، مخلل وخبز",
    desc_fr: "Kebab, kofta et chich taouk, riz, frites, cornichons et pain",
    price: 85,
    image: "https://images.pexels.com/photos/32986489/pexels-photo-32986489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    popular: true,
  },
  {
    id: "mixed-grill-platter",
    category: "plates",
    name_ar: "صينية مشاوي مشكلة",
    name_fr: "Plateau Grillades Mixtes",
    desc_ar: "تشكيلة مشاوي، أرز، خضار مشوية، صلصات متعددة، خبز",
    desc_fr: "Assortiment de grillades, riz, légumes grillés, sauces variées, pain",
    price: 100,
    image: "https://images.pexels.com/photos/4899799/pexels-photo-4899799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  // Sides & Drinks
  {
    id: "french-fries",
    category: "sides",
    name_ar: "بطاطس مقلية",
    name_fr: "Frites",
    desc_ar: "بطاطس ذهبية مقرمشة مع رشة ملح وبهارات",
    desc_fr: "Frites dorées et croustillantes avec sel et épices",
    price: 20,
    image: "https://images.pexels.com/photos/5041473/pexels-photo-5041473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "garlic-sauce",
    category: "sides",
    name_ar: "صلصة ثوم",
    name_fr: "Sauce à l'Ail",
    desc_ar: "صلصة ثوم كريمية منزلية",
    desc_fr: "Sauce à l'ail crémeuse maison",
    price: 10,
    image: "https://images.pexels.com/photos/27758755/pexels-photo-27758755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "soda",
    category: "sides",
    name_ar: "مشروب غازي",
    name_fr: "Soda",
    desc_ar: "كوكا كولا، فانتا أو سبرايت — بارد",
    desc_fr: "Coca Cola, Fanta ou Sprite — bien frais",
    price: 12,
    image: "https://images.pexels.com/photos/17650224/pexels-photo-17650224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "water",
    category: "sides",
    name_ar: "ماء معدني",
    name_fr: "Eau Minérale",
    desc_ar: "زجاجة ماء معدني 50cl",
    desc_fr: "Bouteille d'eau minérale 50cl",
    price: 8,
    image: "https://images.pexels.com/photos/327022/pexels-photo-327022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export const menuItems: MenuItem[] = rawMenuItems.map((item) => ({
  ...item,
  title_ar: item.name_ar,
  title_fr: item.name_fr,
  description_ar: item.desc_ar,
  description_fr: item.desc_fr,
  image_url: item.image,
  is_available: true,
  is_popular: Boolean(item.popular),
  is_spicy: Boolean(item.spicy),
}));

