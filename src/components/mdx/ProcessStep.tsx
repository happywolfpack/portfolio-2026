interface ProcessStepProps {
  number?: number;
  title: string;
  children: React.ReactNode;
}

export default function ProcessStep({ number, title, children }: ProcessStepProps) {
  return (
    <div className="my-8 flex gap-4">
      {number && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full [background-color:var(--fg)] text-sm font-medium [color:var(--bg)]">
          {number}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold [color:var(--fg)]">{title}</h3>
        <div className="mt-2 text-sm [color:var(--muted)]">{children}</div>
      </div>
    </div>
  );
}
