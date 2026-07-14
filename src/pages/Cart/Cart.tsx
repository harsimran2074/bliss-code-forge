import { Link } from "@tanstack/react-router";
import { useCart, cartStore } from "@/hooks/useCart";
import { formatPrice } from "@/utils/format";
import { Button } from "@/components/Button/Button";
import { Minus, Plus, X } from "lucide-react";

// Shopping cart page. State lives in the shared cart store.
export default function Cart() {
  const items = useCart();
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl font-semibold">Your cart is empty</h1>
        <p className="mt-3 text-muted-foreground">Start building your collection.</p>
        <Link to="/products" className="inline-block mt-6">
          <Button>Browse the shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold mb-10">Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <ul className="lg:col-span-2 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <li key={item.id} className="py-6 flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-md object-cover bg-secondary"
              />
              <div className="flex-1">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </p>
                    <p className="font-medium mt-1">{item.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => cartStore.remove(item.id)}
                    className="h-9 w-9 rounded-md hover:bg-accent inline-flex items-center justify-center"
                    aria-label="Remove"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 inline-flex items-center border border-border rounded-md">
                  <button
                    onClick={() => cartStore.setQuantity(item.id, item.quantity - 1)}
                    className="h-9 w-9 inline-flex items-center justify-center hover:bg-secondary"
                    aria-label="Decrease"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-10 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => cartStore.setQuantity(item.id, item.quantity + 1)}
                    className="h-9 w-9 inline-flex items-center justify-center hover:bg-secondary"
                    aria-label="Increase"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="bg-card rounded-lg border border-border p-6 h-fit">
          <h2 className="font-display text-2xl font-semibold">Summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd>{subtotal > 150 ? "Free" : formatPrice(15)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base font-medium">
              <dt>Total</dt>
              <dd>{formatPrice(subtotal + (subtotal > 150 ? 0 : 15))}</dd>
            </div>
          </dl>
          <Button className="w-full mt-6" size="lg">Checkout</Button>
          <button
            onClick={() => cartStore.clear()}
            className="mt-3 w-full text-sm text-muted-foreground hover:text-foreground"
          >
            Clear cart
          </button>
        </aside>
      </div>
    </div>
  );
}
