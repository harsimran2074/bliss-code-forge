import { createFileRoute } from "@tanstack/react-router";
import Products from "@/pages/Products/Products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Shop — Maison" },
      { name: "description", content: "Browse every piece in the Maison collection." },
      { property: "og:title", content: "Shop — Maison" },
      { property: "og:description", content: "Browse every piece in the Maison collection." },
    ],
  }),
  component: Products,
});
