export function TypingIndicator() {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-2">
      {[0, 0.2, 0.4].map((delay) => (
        <span
          key={delay}
          className="h-2 w-2 rounded-full bg-primary"
          style={{ animation: `pulse-dot 1.2s ${delay}s infinite ease-in-out` }}
        />
      ))}
    </div>
  );
}
