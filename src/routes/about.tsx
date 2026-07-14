import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison" },
      { name: "description", content: "The story behind Maison and the makers we work with." },
      { property: "og:title", content: "About — Maison" },
      { property: "og:description", content: "The story behind Maison and the makers we work with." },
    ],
  }),
  component: About,
});
