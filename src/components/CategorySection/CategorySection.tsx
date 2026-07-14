import { Link } from "@tanstack/react-router";
import { categories } from "@/data/products";

// Displays the browsable categories as image tiles.
export function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Shop by category</h2>
          <p className="mt-2 text-muted-foreground">Curated pieces for every room.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <Link
            key={c.name}
            to="/products"
            className="group relative aspect-[3/4] rounded-lg overflow-hidden"
          >
            <img
              src={c.image}
              alt={c.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <span className="absolute bottom-4 left-4 text-background font-display text-xl">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
