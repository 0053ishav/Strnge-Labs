import Link from "next/link";

export default function WaSaverPage() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold">
        WA Saver
      </h1>

      <p className="mt-6">
        Save statuses directly to your device.
      </p>

      <div className="mt-8 flex gap-6">
        <Link href="/apps/wa-saver/privacy">
          Privacy Policy
        </Link>

        <Link href="/apps/wa-saver/terms">
          Terms of Use
        </Link>
      </div>
    </main>
  );
}