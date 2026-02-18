interface CalloutProps {
  type?: "insight" | "quote" | "note";
  children: React.ReactNode;
}

export default function Callout({ type = "note", children }: CalloutProps) {
  const styles = {
    insight: "border-blue-300 bg-blue-50",
    quote: "border-gray-300 bg-gray-50 italic",
    note: "border-yellow-300 bg-yellow-50",
  };

  const labels = {
    insight: "Key Insight",
    quote: "Quote",
    note: "Note",
  };

  return (
    <div className={`my-8 rounded-lg border-l-4 p-5 ${styles[type]}`}>
      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
        {labels[type]}
      </p>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}
