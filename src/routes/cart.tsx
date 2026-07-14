import { createFileRoute } from "@tanstack/react-router";
import Cart from "@/pages/Cart/Cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — Maison" },
      { name: "description", content: "Review the items in your cart." },
    ],
  }),
  component: Cart,
});
