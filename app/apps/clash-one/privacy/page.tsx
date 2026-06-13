import Link from "next/link";

export default function ClashOnePrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-amber-400">
            Privacy Policy
          </h1>

          <p className="mt-3 text-slate-400">
            Your data matters to us.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border-l-4 border-amber-400 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">
            Last Updated
          </p>

          <p className="mt-1 font-semibold text-amber-400">
            May 2026
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Your Privacy
            </h2>

            <p className="text-slate-300">
              Clash One is designed to help players track upgrades,
              builders, heroes, laboratory research and village
              progress. Most gameplay data is stored locally on your
              device. Some third-party services such as advertising
              providers may collect limited technical information in
              accordance with their own privacy policies.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Data We Collect
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Clash of Clans player tags you choose to add</li>
              <li>• Upgrade tracking and builder information</li>
              <li>• Notification preferences and reminder settings</li>
              <li>
                • Anonymous analytics and app performance information
                (if enabled)
              </li>
            </ul>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              What We Don&apos;t Do
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• We do not sell your personal information</li>
              <li>
                • We do not request your Clash of Clans login
                credentials
              </li>
              <li>
                • We do not modify your Clash of Clans account or game
                data
              </li>
            </ul>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Data Storage
            </h2>

            <p className="text-slate-300">
              All your data is stored locally on your device. We do
              not use cloud storage or remote servers to store your
              information. You have full control over your data and
              can remove it at any time.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              App Permissions
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl bg-slate-800 p-4">
                <h3 className="font-semibold text-amber-400">
                  Notifications
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  Used to alert you when upgrades complete and when
                  tracked timers finish.
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <h3 className="font-semibold text-amber-400">
                  File Access
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  Used only for importing village JSON data exported
                  by the game.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Children&apos;s Privacy
            </h2>

            <p className="text-slate-300">
              We do not knowingly collect personal information from
              children under the age of 13. If such information is
              identified, it will be removed promptly.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Advertising
            </h2>

            <p className="text-slate-300">
              Clash One may display advertisements provided by Google
              AdMob. Advertising partners may collect device
              identifiers, approximate location, and usage information
              to provide and measure advertisements. Please review
              Google&apos;s privacy policy for more information.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Policy Changes
            </h2>

            <p className="text-slate-300">
              We may update this Privacy Policy from time to time.
              Changes will be reflected on this page with an updated
              &quot;Last Updated&quot; date. Continued use of the app indicates
              acceptance of any updates.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Disclaimer
            </h2>

            <p className="text-slate-300">
              This content is not affiliated with, endorsed,
              sponsored, or specifically approved by Supercell and
              Supercell is not responsible for it.
            </p>

            <a
              href="https://supercell.com/en/fan-content-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-amber-400 hover:text-amber-300"
            >
              View Supercell Fan Content Policy →
            </a>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Contact Us
            </h2>

            <p className="text-slate-300">
              Questions, feedback, bug reports, or privacy concerns?
              Contact us anytime.
            </p>

            <a
              href="mailto:legal@clashwidget.online?subject=Clash One Support"
              className="mt-4 inline-block font-semibold text-amber-400 hover:text-amber-300"
            >
              legal@clashwidget.online
            </a>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/apps/clash-one"
            className="inline-flex rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition hover:scale-105"
          >
            Back to Clash One
          </Link>
        </div>
      </div>
    </main>
  );
}