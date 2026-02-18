export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Alec Davy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
