// Full-section loading indicator used while data is being fetched.
export function Loading({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
      <div className="h-10 w-10 rounded-full border-2 border-border border-t-primary animate-spin" />
      <p className="mt-4 text-sm">{label}</p>
    </div>
  );
}
