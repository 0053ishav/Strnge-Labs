import Link from "next/link";

const features = [
  {
    icon: "🏗️",
    title: "Builder Tracking",
    desc: "Monitor builders across all villages and know exactly when upgrades finish.",
  },
  {
    icon: "🧙",
    title: "Hero Tracking",
    desc: "Track hero upgrades and never forget what is upgrading next.",
  },
  {
    icon: "🧪",
    title: "Laboratory Research",
    desc: "Keep track of troop, spell and siege machine research progress.",
  },
  {
    icon: "🐾",
    title: "Pet Progress",
    desc: "Monitor pet upgrades without constantly opening the game.",
  },
  {
    icon: "📱",
    title: "Home Screen Widgets",
    desc: "View important timers directly from your home screen.",
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    desc: "Get alerts before upgrades finish and when builders become idle.",
  },
];

const roadmap = [
  "📊 Progress Analytics",
  "📝 Upgrade Planner",
  "📈 Weekly Reports",
  "🧠 Smart Recommendations",
  "⚡ Builder Optimization",
  "👥 Multi-Account Intelligence",
];

export default function ClashOnePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
              👑 Built for Clash of Clans Players
            </div>

            <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl">
              Stop Guessing.
              <span className="block text-amber-400">
                Start Planning.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Clash One helps Clash of Clans players track builders,
              heroes, pets, laboratory research, notifications and
              multiple villages from one place.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
              Know exactly what finishes next, stay ahead of idle
              builders and keep your progression moving.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#features"
                className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:scale-105"
              >
                Explore Features
              </a>

              <a
                href="#download"
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-amber-400 hover:text-amber-400"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          <div>
            <p className="text-3xl text-amber-400">⚡</p>
            <p className="mt-2 text-sm text-slate-400">
              Real-Time Progress
            </p>
          </div>

          <div>
            <p className="text-3xl text-amber-400">📱</p>
            <p className="mt-2 text-sm text-slate-400">
              Widgets
            </p>
          </div>

          <div>
            <p className="text-3xl text-amber-400">🔔</p>
            <p className="mt-2 text-sm text-slate-400">
              Notifications
            </p>
          </div>

          <div>
            <p className="text-3xl text-amber-400">👥</p>
            <p className="mt-2 text-sm text-slate-400">
              Multiple Accounts
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Built For Progression Players
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          Managing one village is easy. Managing multiple villages,
          heroes, pets, laboratories and upgrade schedules is not.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-slate-400">
          Clash One gives you a single place to monitor everything so
          you can focus on farming, upgrading and planning.
        </p>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 pb-24"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-400">
            Designed to make progression easier and more organized.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-amber-400/40"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CHIEF */}
      <section
        id="chief"
        className="mx-auto max-w-5xl px-6 pb-24"
      >
        <div className="rounded-3xl border border-amber-400 bg-slate-900 p-8 shadow-2xl shadow-amber-500/10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="text-6xl">👑</div>

            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-amber-400">
                Chief Membership
              </h2>

              <p className="mt-4 text-slate-300">
                Chief removes ads and unlocks unlimited widget
                accounts for players managing multiple villages.
              </p>

              <p className="mt-3 text-slate-400">
                Becoming Chief also directly supports future Clash One
                development.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-800 px-4 py-3">
                  ✓ No Ads
                </div>

                <div className="rounded-lg bg-slate-800 px-4 py-3">
                  ✓ Unlimited Widget Accounts
                </div>

                <div className="rounded-lg bg-slate-800 px-4 py-3">
                  ✓ Early Feature Access
                </div>

                <div className="rounded-lg bg-slate-800 px-4 py-3">
                  ✓ Support Future Development
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl bg-amber-400 px-8 py-4 font-extrabold text-slate-950">
                Become Chief In-App
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Coming Soon
          </h2>

          <p className="mt-4 text-slate-400">
            The future of Clash One.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {roadmap.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD */}
      <section
        id="download"
        className="mx-auto max-w-4xl px-6 pb-24 text-center"
      >
        <h2 className="text-4xl font-bold">
          Ready To Upgrade Your Progress Tracking?
        </h2>

        <p className="mt-4 text-slate-300">
          Download Clash One and keep every village, builder and
          upgrade under control.
        </p>

        <a
          href="YOUR_PLAY_STORE_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-amber-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-105"
        >
          Download on Google Play
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-400 md:flex-row">
          <div>
            © {new Date().getFullYear()} Clash One
          </div>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/apps/clash-one/privacy"
              className="hover:text-amber-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/apps/clash-one/terms"
              className="hover:text-amber-400"
            >
              Terms of Use
            </Link>

            <a
              href="mailto:strngeapps@gmail.com"
              className="hover:text-amber-400"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}