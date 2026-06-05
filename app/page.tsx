import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          Strnge Labs
        </h1>

        <p className="mt-4 text-slate-300">
          Building useful software for everyday users and gamers.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <Link href="/apps/clash-one">
            Clash One
          </Link>

          <Link href="/apps/wa-saver">
            WA Saver
          </Link>

          <Link href="/support">
            Support
          </Link>
        </div>
      </div>
    </main>
  );
}