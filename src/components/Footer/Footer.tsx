import { Link } from "@tanstack/react-router";

// Site-wide footer.
export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-semibold">Maison.</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Considered home goods from small workshops. Made slowly, shipped worldwide.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-3">Shop</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">All products</Link></li>
            <li><Link to="/products" className="hover:text-foreground">New arrivals</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Sale</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-3">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maison. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
