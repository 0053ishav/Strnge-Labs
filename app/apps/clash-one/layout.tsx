import Link from "next/link";
import { ReactNode } from "react";

export default function ClashOneLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/apps/clash-one"
            className="flex items-center gap-2"
          >
            <span className="text-xl">👑</span>

            <span className="font-bold text-amber-400">
              Clash One
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/apps/clash-one"
              className="hover:text-amber-400"
            >
              Home
            </Link>

            <Link
              href="/apps/clash-one/privacy"
              className="hover:text-amber-400"
            >
              Privacy
            </Link>

            <Link
              href="/apps/clash-one/terms"
              className="hover:text-amber-400"
            >
              Terms
            </Link>

            <a
              href="https://buymeacoffee.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-amber-400 px-4 py-2 font-bold text-slate-950"
            >
              Support
            </a>
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}