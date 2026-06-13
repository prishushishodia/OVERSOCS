/**
 * OVERSOCKS catalog — single source of truth.
 * Every page (Shop, Product Detail, Latest Drop, New In) reads from here,
 * so names / prices / imagery stay consistent across the site.
 *
 * Images are imported (not string paths) so Vite fingerprints + bundles them.
 */
import imgA from "../assets/a.jpg";
import imgB from "../assets/b.jpg";
import imgC from "../assets/c.jpg";
import imgD from "../assets/d.jpg";
import imgKpop from "../assets/kpop.jpg";
import imgMnop from "../assets/mnop.jpg";
import imgWhite from "../assets/white.jpg";
import imgMng from "../assets/mng.jpg";

export const products = [
  {
    id: 1,
    name: "Sienna Ribbed Crew",
    price: 349,
    tag: "Bestseller",
    season: "alltime",
    category: "men",
    length: "full-length",
    activity: "everyday",
    colors: ["#9c5a2c", "#2c1f14", "#f6efe2"],
    image: imgA,
    blurb:
      "A ribbed crew in our signature sienna. Combed cotton, reinforced heel, zero slouch.",
  },
  {
    id: 2,
    name: "Espresso No-Show",
    price: 249,
    tag: "New",
    season: "summers",
    category: "men",
    length: "no-show",
    activity: "everyday",
    colors: ["#2c1f14", "#6c5944"],
    image: imgB,
    blurb:
      "Invisible under any shoe, impossible to ignore in comfort. Silicone heel-grip keeps it locked.",
  },
  {
    id: 3,
    name: "Ochre Field Crew",
    price: 399,
    tag: "Limited",
    season: "alltime",
    category: "women",
    length: "full-length",
    activity: "everyday",
    colors: ["#c79a45", "#2c1f14"],
    image: imgC,
    blurb:
      "A warm ochre stripe on sand. The pair that makes the rest of your fit jealous.",
  },
  {
    id: 4,
    name: "Walnut Streetlux",
    price: 379,
    tag: "Bestseller",
    season: "alltime",
    category: "men",
    length: "ankle-length",
    activity: "sports",
    colors: ["#2c1f14", "#9c5a2c"],
    image: imgD,
    blurb:
      "Cushioned footbed, compression arch, deep walnut tone. Built for the long way home.",
  },
  {
    id: 5,
    name: "Frostline Thermal",
    price: 449,
    tag: "Winter",
    season: "winters",
    category: "women",
    length: "full-length",
    activity: "everyday",
    colors: ["#dccbaf", "#2c1f14"],
    image: imgKpop,
    blurb:
      "Brushed merino blend that traps heat without the bulk. Cold mornings, meet your match.",
  },
  {
    id: 6,
    name: "Clay Pulse Ankle",
    price: 279,
    tag: "New",
    season: "summers",
    category: "women",
    length: "ankle-length",
    activity: "sports",
    colors: ["#b5764b", "#f6efe2"],
    image: imgMnop,
    blurb:
      "Breathable mesh zones and a snug ankle cuff. Engineered for movement, styled for the street.",
  },
  {
    id: 7,
    name: "Bonewhite Lowcut",
    price: 259,
    tag: "Essential",
    season: "summers",
    category: "men",
    length: "low-cut",
    activity: "work",
    colors: ["#f6efe2", "#dccbaf"],
    image: imgWhite,
    blurb:
      "The clean low-cut you reach for daily. Pima cotton, hand-linked toe, no seam to feel.",
  },
  {
    id: 8,
    name: "Terra Stripe Crew",
    price: 369,
    tag: "Limited",
    season: "alltime",
    category: "women",
    length: "full-length",
    activity: "everyday",
    colors: ["#9c5a2c", "#2c1f14", "#c79a45"],
    image: imgMng,
    blurb:
      "Bold horizontal stripes in sienna, espresso and ochre. Earthy on purpose.",
  },
  {
    id: 9,
    name: "Mini Acorn (Kids)",
    price: 199,
    tag: "Kids",
    season: "alltime",
    category: "kids",
    length: "ankle-length",
    activity: "everyday",
    colors: ["#c79a45", "#9c5a2c"],
    image: imgA,
    blurb:
      "Tiny feet, huge energy. Stretch cuff that actually stays up and survives the wash.",
  },
  {
    id: 10,
    name: "Court Compression",
    price: 429,
    tag: "Performance",
    season: "alltime",
    category: "men",
    length: "full-length",
    activity: "sports",
    colors: ["#2c1f14", "#c79a45"],
    image: imgD,
    blurb:
      "Graduated compression and targeted cushioning for game day and the gym floor.",
  },
  {
    id: 11,
    name: "Monsoon Grip",
    price: 309,
    tag: "All-season",
    season: "winters",
    category: "women",
    length: "ankle-length",
    activity: "everyday",
    colors: ["#6c5944", "#9c5a2c"],
    image: imgC,
    blurb:
      "Quick-dry yarn and anti-slip sole bands. Made for the in-between weather.",
  },
  {
    id: 12,
    name: "Mini Terra (Kids)",
    price: 209,
    tag: "Kids",
    season: "alltime",
    category: "kids",
    length: "full-length",
    activity: "everyday",
    colors: ["#9c5a2c", "#f6efe2"],
    image: imgB,
    blurb:
      "The kids' cut of our Terra Stripe. Same attitude, pint-sized.",
  },
];

/** Currency helper — keeps the rupee formatting consistent everywhere. */
export const formatPrice = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const getProductById = (id) =>
  products.find((p) => String(p.id) === String(id));

/** Filters used by the Shop page sidebar. */
export const filterGroups = [
  {
    key: "category",
    title: "Wear",
    options: [
      ["men", "Men"],
      ["women", "Women"],
      ["kids", "Kids"],
    ],
  },
  {
    key: "length",
    title: "Length",
    options: [
      ["no-show", "No Show"],
      ["low-cut", "Low Cut"],
      ["ankle-length", "Ankle"],
      ["full-length", "Full Length"],
    ],
  },
  {
    key: "activity",
    title: "Activity",
    options: [
      ["everyday", "Everyday"],
      ["sports", "Sport"],
      ["work", "Work"],
    ],
  },
  {
    key: "season",
    title: "Season",
    options: [
      ["summers", "Summer"],
      ["winters", "Winter"],
      ["alltime", "All Season"],
    ],
  },
];
