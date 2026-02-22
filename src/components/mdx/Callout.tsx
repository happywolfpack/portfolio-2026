interface CalloutProps {
  type?: "insight" | "quote" | "note";
  children: React.ReactNode;
}

export default function Callout({ type = "note", children }: CalloutProps) {
  const styles = {
    insight: "border-blue-400 [background-color:color-mix(in_srgb,var(--sf),#3b82f6_10%)]",
    quote: "[border-color:var(--bd)] [background-color:var(--sf)] italic",
    note: "border-yellow-400 [background-color:color-mix(in_srgb,var(--sf),#eab308_10%)]",
  };

  const labels = {
    insight: "Key Insight",
    quote: "Quote",
    note: "Note",
  };

  return (
    <div className={`my-8 rounded-lg border-l-4 p-5 ${styles[type]}`}>
      <p className="mb-1 text-xs font-medium uppercase tracking-wider [color:var(--muted-strong)]">
        {labels[type]}
      </p>
      <div className="text-sm [color:var(--muted)]">{children}</div>
    </div>
  );
}
