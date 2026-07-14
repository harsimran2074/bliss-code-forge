import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison" },
      { name: "description", content: "Get in touch with the Maison team." },
      { property: "og:title", content: "Contact — Maison" },
      { property: "og:description", content: "Get in touch with the Maison team." },
    ],
  }),
  component: Contact,
});
