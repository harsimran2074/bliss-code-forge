import { useMemo, useState } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { cn } from "@/lib/utils";

// Products listing page with search + category filter.
// Later: replace `products` with data fetched from your backend.
export default function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold">The Shop</h1>
        <p className="mt-3 text-muted-foreground">Every piece, hand-picked.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="md:w-96">
          <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterPill active={category === null} onClick={() => setCategory(null)}>
            All
          </FilterPill>
          {categories.map((c) => (
            <FilterPill
              key={c.name}
              active={category === c.name}
              onClick={() => setCategory(c.name)}
            >
              {c.name}
            </FilterPill>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground py-16 text-center">
          No products match your search.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-11 px-4 rounded-md text-sm border transition-colors",
        active
          ? "bg-foreground text-background border-foreground"
          : "bg-transparent border-border hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}
