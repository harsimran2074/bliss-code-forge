import { Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { formatPrice } from "@/utils/format";
import { Button } from "@/components/Button/Button";
import { cartStore } from "@/hooks/useCart";

interface ProductDetailsProps {
  id: string;
}

// Single-product page. Receives id from the route params.
export default function ProductDetails({ id }: ProductDetailsProps) {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Product not found</h1>
        <p className="mt-3 text-muted-foreground">This piece may have sold out.</p>
        <Link to="/products" className="inline-block mt-6 text-primary underline">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12">
      <div className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">{product.category}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold">{product.name}</h1>
        <p className="mt-4 text-2xl">{formatPrice(product.price)}</p>
        <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

        <div className="mt-8 flex gap-3">
          <Button size="lg" onClick={() => cartStore.add(product)}>
            Add to cart
          </Button>
          <Link to="/cart">
            <Button size="lg" variant="ghost">View cart</Button>
          </Link>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
          <div>
            <dt className="text-muted-foreground">Shipping</dt>
            <dd className="mt-1">Free over $150</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Returns</dt>
            <dd className="mt-1">30 days, on us</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
