export const metadata = {
  title: "Contact — Alec Davy",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h1>
      <p className="mt-4 text-gray-600">
        I&apos;m always open to new opportunities and conversations. Feel free to reach out.
      </p>

      <div className="mt-12 space-y-6">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400">Email</h2>
          <a
            href="mailto:davy.alec@gmail.com"
            className="mt-2 inline-block text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
          >
            davy.alec@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-400">
            LinkedIn
          </h2>
          <a
            href="https://www.linkedin.com/in/alec-davy/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
          >
            linkedin.com/in/alec-davy
          </a>
        </div>
      </div>
    </div>
  );
}
