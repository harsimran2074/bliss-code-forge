import { createFileRoute } from "@tanstack/react-router";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";

function RouteComponent() {
  const { id } = Route.useParams();
  return <ProductDetails id={id} />;
}

export const Route = createFileRoute("/products/$id")({
  component: RouteComponent,
});
