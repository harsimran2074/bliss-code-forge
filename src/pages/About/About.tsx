// Static About page.
export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">Our Story</p>
      <h1 className="mt-4 text-5xl font-semibold">Slow objects for a fast world.</h1>

      <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Maison began in 2019 as a search for objects that would last. We travel to small
          workshops across Europe, Japan, and South America, working directly with the people
          who make what we sell.
        </p>
        <p>
          Every piece in our collection is chosen for one reason: it's the kind of thing you'll
          keep for decades. No trends. No fast turnover. Just quiet, considered design.
        </p>
        <p>
          We're a small team based in Lisbon, and we ship worldwide.
        </p>
      </div>
    </div>
  );
}
