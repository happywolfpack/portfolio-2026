interface BeforeAfterProps {
  beforeLabel?: string;
  afterLabel?: string;
  children: React.ReactNode;
}

export default function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  children,
}: BeforeAfterProps) {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {children}
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-gray-400">
          {beforeLabel}
        </p>
        <p className="text-center text-xs font-medium uppercase tracking-wider text-gray-400">
          {afterLabel}
        </p>
      </div>
    </div>
  );
}
