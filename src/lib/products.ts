import mango from "@/assets/p-mango.jpg";
import lemon from "@/assets/p-lemon.jpg";
import gongura from "@/assets/p-gongura.jpg";
import amla from "@/assets/p-amla.jpg";
import redchili from "@/assets/p-redchili.jpg";
import ginger from "@/assets/p-ginger.jpg";
import garlic from "@/assets/p-garlic.jpg";
import cauliflower from "@/assets/p-cauliflower.jpg";
import tamarind from "@/assets/p-tamarind.jpg";
import drumstick from "@/assets/drumstickpickle.webp";
import bittergourd from "@/assets/bittergourpickle.webp";
import karivepaku from "@/assets/p-karivepaku.jpg";
import pappula from "@/assets/p-pappula.jpg";
import moringa from "@/assets/p-moringa.jpg";
import karam from "@/assets/p-karam.jpg";
import chicken from "@/assets/p-chicken.jpg";
import mutton from "@/assets/p-mutton.jpg";
import prawn from "@/assets/p-prawn.jpg";
import fish from "@/assets/p-fish.jpg";
import ariselu from "@/assets/p-ariselu.jpg";
import sunnundalu from "@/assets/p-sunnundalu.jpg";
import gavvalu from "@/assets/p-gavvalu.jpg";
import kajjikayalu from "@/assets/p-kajjikayalu.jpg";
import boondiladdu from "@/assets/p-boondiladdu.jpg";
import janthikalu from "@/assets/p-janthikalu.jpg";
import karapusa from "@/assets/p-karapusa.jpg";
import mixture from "@/assets/p-mixture.jpg";
import boondi from "@/assets/p-boondi.jpg";
import chekkalu from "@/assets/p-chekkalu.jpg";
import ribbon from "@/assets/p-ribbon.jpg";
import cowghee from "@/assets/cowghee.jpeg";
import buffaloghee from "@/assets/buffaloghee.webp";

export type Category =
  | "Veg Pickles"
  | "Non-Veg Pickles"
  | "Homemade Powders"
  | "Ghee"
  | "Traditional Snacks & Sweets";

export type WeightVariant = {
  weight: string; // e.g., "250gm", "500gm", "1kg"
  price: number;
};

export type Product = {
  id: string;
  name: string;
  price: number; // 1kg price (base price)
  image: string;
  category: Category;
  unit: string;
  variants?: WeightVariant[]; // For pickles with multiple weight options
};

export const products: Product[] = [
  { 
    id: "mango", 
    name: "Mango Pickle", 
    price: 400, 
    image: mango, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "lemon", 
    name: "Lemon Pickle", 
    price: 400, 
    image: lemon, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "gongura", 
    name: "Gongura Pickle", 
    price: 400, 
    image: gongura, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "amla", 
    name: "Amla Pickle", 
    price: 400, 
    image: amla, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "pandumirapakaya", 
    name: "Pandumirapakaya", 
    price: 400, 
    image: redchili, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "ginger", 
    name: "Ginger Pickle", 
    price: 400, 
    image: ginger, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "garlic", 
    name: "Garlic Pickle", 
    price: 400, 
    image: garlic, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "cauliflower", 
    name: "Cauliflower Pickle", 
    price: 400, 
    image: cauliflower, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "tamarind", 
    name: "Tamarind Pickle", 
    price: 400, 
    image: tamarind, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "drumstick", 
    name: "Drumstick Pickle", 
    price: 400, 
    image: drumstick, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },
  { 
    id: "bittergourd", 
    name: "Bitter Gourd Pickle", 
    price: 400, 
    image: bittergourd, 
    category: "Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 100 },
      { weight: "500gm", price: 200 },
      { weight: "1kg", price: 400 }
    ]
  },

  { 
    id: "karivepaku", 
    name: "Karivepaku Podi", 
    price: 500, 
    image: karivepaku, 
    category: "Homemade Powders", 
    unit: "1 Kg",
    variants: [
      { weight: "100gm", price: 50 },
      { weight: "250gm", price: 125 },
      { weight: "500gm", price: 250 },
      { weight: "1kg", price: 500 }
    ]
  },
  { 
    id: "pappula", 
    name: "Pappula Podi", 
    price: 500, 
    image: pappula, 
    category: "Homemade Powders", 
    unit: "1 Kg",
    variants: [
      { weight: "100gm", price: 50 },
      { weight: "250gm", price: 125 },
      { weight: "500gm", price: 250 },
      { weight: "1kg", price: 500 }
    ]
  },
  { 
    id: "moringa", 
    name: "Moringa Podi", 
    price: 500, 
    image: moringa, 
    category: "Homemade Powders", 
    unit: "1 Kg",
    variants: [
      { weight: "100gm", price: 50 },
      { weight: "250gm", price: 125 },
      { weight: "500gm", price: 250 },
      { weight: "1kg", price: 500 }
    ]
  },
  { 
    id: "karam", 
    name: "Idly Karam", 
    price: 500, 
    image: karam, 
    category: "Homemade Powders", 
    unit: "1 Kg",
    variants: [
      { weight: "100gm", price: 50 },
      { weight: "250gm", price: 125 },
      { weight: "500gm", price: 250 },
      { weight: "1kg", price: 500 }
    ]
  },

  { 
    id: "chicken", 
    name: "Chicken Pickle", 
    price: 1500, 
    image: chicken, 
    category: "Non-Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 375 },
      { weight: "500gm", price: 750 },
      { weight: "1kg", price: 1500 }
    ]
  },
  { 
    id: "mutton", 
    name: "Mutton Pickle", 
    price: 2200, 
    image: mutton, 
    category: "Non-Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 550 },
      { weight: "500gm", price: 1100 },
      { weight: "1kg", price: 2200 }
    ]
  },
  { 
    id: "prawns", 
    name: "Prawns Pickle", 
    price: 1800, 
    image: prawn, 
    category: "Non-Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 450 },
      { weight: "500gm", price: 900 },
      { weight: "1kg", price: 1800 }
    ]
  },
  { 
    id: "fish", 
    name: "Fish Pickle", 
    price: 1600, 
    image: fish, 
    category: "Non-Veg Pickles", 
    unit: "1 Kg",
    variants: [
      { weight: "250gm", price: 400 },
      { weight: "500gm", price: 800 },
      { weight: "1kg", price: 1600 }
    ]
  },

  { 
    id: "ariselu", 
    name: "Ariselu", 
    price: 600, 
    image: ariselu, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 300 },
      { weight: "1kg", price: 600 }
    ]
  },
  { 
    id: "sunnundalu", 
    name: "Bellam Sunnundalu", 
    price: 1100, 
    image: sunnundalu, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 550 },
      { weight: "1kg", price: 1100 }
    ]
  },
  { 
    id: "gavvalu", 
    name: "Bellam Gavvalu", 
    price: 500, 
    image: gavvalu, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 250 },
      { weight: "1kg", price: 500 }
    ]
  },
  { 
    id: "kajjikayalu", 
    name: "Kajjikayalu", 
    price: 800, 
    image: kajjikayalu, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 400 },
      { weight: "1kg", price: 800 }
    ]
  },
  { 
    id: "boondiladdu", 
    name: "Boondi Laddu", 
    price: 500, 
    image: boondiladdu, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 250 },
      { weight: "1kg", price: 500 }
    ]
  },
  { 
    id: "janthikalu", 
    name: "Janthikalu", 
    price: 600, 
    image: janthikalu, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 300 },
      { weight: "1kg", price: 600 }
    ]
  },
  { 
    id: "karapusa", 
    name: "Karapusa", 
    price: 600, 
    image: karapusa, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 300 },
      { weight: "1kg", price: 600 }
    ]
  },
  { 
    id: "mixture", 
    name: "Mixture", 
    price: 600, 
    image: mixture, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 300 },
      { weight: "1kg", price: 600 }
    ]
  },
  { 
    id: "boondi", 
    name: "Boondi", 
    price: 600, 
    image: boondi, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 300 },
      { weight: "1kg", price: 600 }
    ]
  },
  { 
    id: "chekkalu", 
    name: "Chekkalu", 
    price: 600, 
    image: chekkalu, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 300 },
      { weight: "1kg", price: 600 }
    ]
  },
  { 
    id: "ribbonpakodi", 
    name: "Ribbon Pakodi", 
    price: 600, 
    image: ribbon, 
    category: "Traditional Snacks & Sweets", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 300 },
      { weight: "1kg", price: 600 }
    ]
  },

  { 
    id: "cowghee", 
    name: "Cow Ghee", 
    price: 800, 
    image: cowghee, 
    category: "Ghee", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 400 },
      { weight: "1kg", price: 800 }
    ]
  },
  { 
    id: "buffaloghee", 
    name: "Buffalo Ghee", 
    price: 900, 
    image: buffaloghee, 
    category: "Ghee", 
    unit: "1 Kg",
    variants: [
      { weight: "500gm", price: 450 },
      { weight: "1kg", price: 900 }
    ]
  },
];

export const categories: Category[] = [
  "Veg Pickles",
  "Non-Veg Pickles",
  "Homemade Powders",
  "Ghee",
  "Traditional Snacks & Sweets",
];

export const PHONE = "72076 18866";
export const PHONE_ALT = "92949 29949";
export const WHATSAPP = "917207618866";
export const EMAIL = "redbytepickles@gmail.com";
export const ADDRESS =
  "D.No: 25/2/518 New Military Colony, 5th Cross Rd, Near Bhargavi Nursing College, Pubi Setty Enclave Ground Floor, Vedayapalem, Nellore, Andhra Pradesh – 524004";