import Link from "next/link";

export default function ClashOnePage() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold">
        Clash One
      </h1>

      <p className="mt-6">
        Everything Clash. One Place.
      </p>

      <p className="mt-4">
        Track upgrades, heroes, pets, laboratory research,
        notifications, widgets and more.
      </p>

      <div className="mt-8 flex gap-6">
        <Link href="/apps/clash-one/privacy">
          Privacy Policy
        </Link>

        <Link href="/apps/clash-one/terms">
          Terms of Use
        </Link>
      </div>
    </main>
  );
}