import mango from "@/assets/p-mango.jpg";
import lemon from "@/assets/p-lemon.jpg";
import gongura from "@/assets/p-gongura.jpg";
import amla from "@/assets/p-amla.jpg";
import redchili from "@/assets/p-redchili.jpg";
import ginger from "@/assets/p-ginger.jpg";
import garlic from "@/assets/p-garlic.jpg";
import cauliflower from "@/assets/p-cauliflower.jpg";
import tamarind from "@/assets/p-tamarind.jpg";
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

export type Category =
  | "Veg Pickles"
  | "Non-Veg Pickles"
  | "Homemade Powders"
  | "Traditional Snacks & Sweets";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  unit: string;
};

export const products: Product[] = [
  { id: "mango", name: "Mango Pickle", price: 400, image: mango, category: "Veg Pickles", unit: "1 Kg" },
  { id: "lemon", name: "Lemon Pickle", price: 400, image: lemon, category: "Veg Pickles", unit: "1 Kg" },
  { id: "gongura", name: "Gongura Pickle", price: 400, image: gongura, category: "Veg Pickles", unit: "1 Kg" },
  { id: "amla", name: "Amla Pickle", price: 400, image: amla, category: "Veg Pickles", unit: "1 Kg" },
  { id: "pandumirapakaya", name: "Pandumirapakaya", price: 400, image: redchili, category: "Veg Pickles", unit: "1 Kg" },
  { id: "ginger", name: "Ginger Pickle", price: 400, image: ginger, category: "Veg Pickles", unit: "1 Kg" },
  { id: "garlic", name: "Garlic Pickle", price: 400, image: garlic, category: "Veg Pickles", unit: "1 Kg" },
  { id: "cauliflower", name: "Cauliflower Pickle", price: 400, image: cauliflower, category: "Veg Pickles", unit: "1 Kg" },
  { id: "tamarind", name: "Tamarind Pickle", price: 400, image: tamarind, category: "Veg Pickles", unit: "1 Kg" },

  { id: "karivepaku", name: "Karivepaku Podi", price: 500, image: karivepaku, category: "Homemade Powders", unit: "1 Kg" },
  { id: "pappula", name: "Pappula Podi", price: 500, image: pappula, category: "Homemade Powders", unit: "1 Kg" },
  { id: "moringa", name: "Moringa Podi", price: 500, image: moringa, category: "Homemade Powders", unit: "1 Kg" },
  { id: "karam", name: "Karam Podi", price: 500, image: karam, category: "Homemade Powders", unit: "1 Kg" },

  { id: "chicken", name: "Chicken Pickle", price: 1500, image: chicken, category: "Non-Veg Pickles", unit: "1 Kg" },
  { id: "mutton", name: "Mutton Pickle", price: 2200, image: mutton, category: "Non-Veg Pickles", unit: "1 Kg" },
  { id: "prawns", name: "Prawns Pickle", price: 1800, image: prawn, category: "Non-Veg Pickles", unit: "1 Kg" },
  { id: "fish", name: "Fish Pickle", price: 1600, image: fish, category: "Non-Veg Pickles", unit: "1 Kg" },

  { id: "ariselu", name: "Ariselu", price: 600, image: ariselu, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "sunnundalu", name: "Bellam Sunnundalu", price: 1100, image: sunnundalu, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "gavvalu", name: "Bellam Gavvalu", price: 500, image: gavvalu, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "kajjikayalu", name: "Kajjikayalu", price: 800, image: kajjikayalu, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "boondiladdu", name: "Boondi Laddu", price: 500, image: boondiladdu, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "janthikalu", name: "Janthikalu", price: 600, image: janthikalu, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "karapusa", name: "Karapusa", price: 600, image: karapusa, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "mixture", name: "Mixture", price: 600, image: mixture, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "boondi", name: "Boondi", price: 600, image: boondi, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "chekkalu", name: "Chekkalu", price: 600, image: chekkalu, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
  { id: "ribbonpakodi", name: "Ribbon Pakodi", price: 600, image: ribbon, category: "Traditional Snacks & Sweets", unit: "1 Kg" },
];

export const categories: Category[] = [
  "Veg Pickles",
  "Non-Veg Pickles",
  "Homemade Powders",
  "Traditional Snacks & Sweets",
];

export const PHONE = "72076 18866";
export const PHONE_ALT = "92949 29949";
export const WHATSAPP = "917207618866";
export const EMAIL = "redbitepickles@gmail.com";
export const ADDRESS =
  "D.No: 25/2/518 New Military Colony, 5th Cross Rd, Near Bhargavi Nursing College, Pubi Setty Enclave Ground Floor, Vedayapalem, Nellore, Andhra Pradesh – 524004";