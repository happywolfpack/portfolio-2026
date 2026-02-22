"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio-authenticated";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: input }),
    });

    if (res.ok) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (loading) return null;

  if (authenticated) return <>{children}</>;

  return (
    <div className="flex min-h-screen items-center justify-center [background-color:var(--bg)] px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl tracking-tight [color:var(--fg)]">Alec Davy</h1>
        <p className="mt-2 text-sm [color:var(--muted)]">
          Enter the password to view this portfolio.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            className="w-full rounded-lg border [border-color:var(--bd)] [background-color:var(--bg)] px-4 py-2.5 text-sm [color:var(--fg)] outline-none transition-colors focus:[border-color:var(--fg)]"
          />
          {error && (
            <p className="mt-2 text-sm text-red-500">Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            className="mt-3 w-full rounded-lg [background-color:var(--fg)] px-5 py-2.5 text-sm font-medium [color:var(--bg)] transition-opacity hover:opacity-80"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
