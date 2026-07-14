import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPrice } from "@/utils/format";
import { Button } from "@/components/Button/Button";
import { cartStore } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

// Single product tile used across the shop and featured sections.
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="block aspect-[4/5] overflow-hidden rounded-lg bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h3 className="mt-1 text-base font-medium">
            <Link to="/products/$id" params={{ id: product.id }} className="hover:text-primary">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{formatPrice(product.price)}</p>
        </div>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => cartStore.add(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          Add
        </Button>
      </div>
    </article>
  );
}
