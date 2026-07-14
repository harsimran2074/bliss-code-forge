import { Link } from "@tanstack/react-router";
import { Button } from "@/components/Button/Button";

// Landing-page hero. Kept purely presentational.
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            New Autumn Collection
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl leading-[1.05] font-semibold">
            Objects made to be lived with.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            A quiet, considered collection of home goods — designed slowly, built to last, and
            shipped from small workshops around the world.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/products">
              <Button size="lg">Shop the collection</Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="ghost">Our story</Button>
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
            alt="A softly lit interior featuring the collection"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
