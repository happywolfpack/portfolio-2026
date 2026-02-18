interface ProcessStepProps {
  number?: number;
  title: string;
  children: React.ReactNode;
}

export default function ProcessStep({ number, title, children }: ProcessStepProps) {
  return (
    <div className="my-8 flex gap-4">
      {number && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
          {number}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="mt-2 text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
}
