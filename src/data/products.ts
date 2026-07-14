// Mock product data. Replace with API calls to your Node/Express/MongoDB backend later.
// The shape here matches a typical `/api/products` response so the swap is minimal.

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Linen Lounge Chair",
    price: 489,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    description: "Hand-crafted oak frame with natural linen upholstery. Made to last decades.",
    featured: true,
  },
  {
    id: "2",
    name: "Ceramic Vase Set",
    price: 72,
    category: "Decor",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    description: "Set of three hand-thrown stoneware vases in warm earth tones.",
    featured: true,
  },
  {
    id: "3",
    name: "Wool Throw Blanket",
    price: 128,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=800&q=80",
    description: "100% merino wool, woven in Portugal. Impossibly soft.",
    featured: true,
  },
  {
    id: "4",
    name: "Walnut Side Table",
    price: 340,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1533377088493-11c4a6f7a3e8?w=800&q=80",
    description: "Solid walnut with hand-rubbed oil finish. A quiet everyday piece.",
    featured: true,
  },
  {
    id: "5",
    name: "Brass Table Lamp",
    price: 215,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    description: "Antiqued brass with linen shade. Warm dimmable LED.",
  },
  {
    id: "6",
    name: "Stoneware Dinner Set",
    price: 168,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=800&q=80",
    description: "Twelve-piece dinner set. Dishwasher and microwave safe.",
  },
];

export const categories = [
  { name: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { name: "Decor", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80" },
  { name: "Lighting", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80" },
  { name: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
];
