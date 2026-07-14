import { Hero } from "@/components/Hero/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";
import { CategorySection } from "@/components/CategorySection/CategorySection";

// Home page — composed from small, reusable sections.
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
    </>
  );
}
