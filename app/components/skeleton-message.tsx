export function SkeletonMessage() {
  return (
    <div className="flex justify-start">
      <div className="w-64 animate-pulse rounded-2xl border border-border bg-card p-4">
        <div className="mb-2 h-3 w-52 rounded bg-muted" />
        <div className="mb-2 h-3 w-44 rounded bg-muted" />
        <div className="h-3 w-36 rounded bg-muted" />
      </div>
    </div>
  );
}
