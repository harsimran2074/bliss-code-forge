import { Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/Button/Button";

// A grid of the highlighted "featured" products on the home page.
export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Featured</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">This season's essentials</h2>
        </div>
        <Link to="/products">
          <Button variant="ghost">View all →</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
