export default function Footer() {
  return (
    <footer className="border-t [border-color:var(--bd)] [background-color:var(--bg)]">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-sm [color:var(--muted)]">
          &copy; {new Date().getFullYear()} Alec Davy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
