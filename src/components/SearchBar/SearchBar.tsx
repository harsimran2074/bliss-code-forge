import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

// Simple search input. Wire onChange to filter product lists.
export function SearchBar(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search products..."
        {...props}
        className="w-full h-11 pl-10 pr-4 rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
