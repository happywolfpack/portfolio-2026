export const metadata = {
  title: "Contact — Alec Davy",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl tracking-tight [color:var(--fg)]">Contact</h1>
      <p className="mt-4 [color:var(--muted)]">
        I&apos;m always open to new opportunities and conversations. Feel free to reach out.
      </p>

      <div className="mt-12 space-y-6">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider [color:var(--muted-strong)]">Email</h2>
          <a
            href="mailto:davy.alec@gmail.com"
            className="mt-2 inline-block [color:var(--fg)] underline [text-decoration-color:var(--bd)] underline-offset-4 transition-colors hover:[text-decoration-color:var(--fg)]"
          >
            davy.alec@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider [color:var(--muted-strong)]">
            LinkedIn
          </h2>
          <a
            href="https://www.linkedin.com/in/alec-davy/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block [color:var(--fg)] underline [text-decoration-color:var(--bd)] underline-offset-4 transition-colors hover:[text-decoration-color:var(--fg)]"
          >
            linkedin.com/in/alec-davy
          </a>
        </div>
      </div>
    </div>
  );
}
