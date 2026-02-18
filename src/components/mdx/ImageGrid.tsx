interface ImageGridProps {
  columns?: 2 | 3;
  children: React.ReactNode;
}

export default function ImageGrid({ columns = 2, children }: ImageGridProps) {
  return (
    <div
      className={`my-8 grid gap-4 ${
        columns === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}
