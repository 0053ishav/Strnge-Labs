import Link from "next/link";

export default function ClashOneTermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-amber-400">
            Terms of Use
          </h1>

          <p className="mt-3 text-slate-400">
            Terms and conditions for using Clash One.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border-l-4 border-amber-400 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">
            Last Updated
          </p>

          <p className="mt-1 font-semibold text-amber-400">
            July 2026
          </p>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Acceptance of Terms
            </h2>

            <p className="text-slate-300">
              By downloading, installing, or using Clash One, you
              agree to these Terms of Use. If you do not agree with
              these terms, please do not use the application.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              About Clash One
            </h2>

            <p className="text-slate-300">
              Clash One is an independent companion application
              designed to help players track Clash of Clans progress,
              upgrades, builders, heroes, laboratory research,
              notifications, and widgets.
            </p>

            <p className="mt-4 text-slate-300">
              Clash One is not affiliated with, endorsed by,
              sponsored by, or specifically approved by Supercell.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              User Responsibilities
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>
                • You are responsible for ensuring that any data
                imported into the app is accurate.
              </li>

              <li>
                • You must comply with all applicable laws and
                regulations while using the application.
              </li>

              <li>
                • You may not attempt to misuse, reverse engineer,
                exploit, or disrupt the application&apos;s services.
              </li>

              <li>
                • You remain solely responsible for your Clash of
                Clans account and game progress.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              No Affiliation With Supercell
            </h2>

            <p className="text-slate-300">
              Clash One is a fan-created utility application.
              Supercell does not operate, maintain, support, or
              guarantee the functionality of this application.
            </p>

            <p className="mt-4 text-slate-300">
              All Clash of Clans trademarks, game assets, names,
              logos, and related intellectual property belong to
              their respective owners.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Premium Features
            </h2>

            <p className="text-slate-300">
              Certain features may require a premium purchase or
              subscription.
            </p>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>
                • Pricing may change in future versions of the app.
              </li>

              <li>
                • Purchases are processed through the platform&apos;s
                billing system.
              </li>

              <li>
                • Refund requests are handled according to Google
                Play or Apple App Store policies.
              </li>

              <li>
                • Premium access may be revoked if payment is
                refunded or reversed.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Availability
            </h2>

            <p className="text-slate-300">
              We strive to keep Clash One available and functioning
              properly, but we do not guarantee uninterrupted
              availability.
            </p>

            <p className="mt-4 text-slate-300">
              Features may be modified, updated, restricted, or
              discontinued at any time without prior notice.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Disclaimer of Warranties
            </h2>

            <p className="text-slate-300">
              Clash One is provided on an &quot;as is&quot; and &quot;as available&quot;
              basis without warranties of any kind.
            </p>

            <p className="mt-4 text-slate-300">
              We do not guarantee that all upgrade timers,
              notifications, calculations, imported data, or widget
              information will always be accurate, complete, or
              available.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Limitation of Liability
            </h2>

            <p className="text-slate-300">
              To the maximum extent permitted by law, Clash One,
              Strnge Labs, and its developers shall not be liable
              for any direct, indirect, incidental, special, or
              consequential damages resulting from the use or
              inability to use the application.
            </p>

            <p className="mt-4 text-slate-300">
              This includes, but is not limited to, lost game
              progress, missed upgrades, notification failures, data
              loss, or service interruptions.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Termination
            </h2>

            <p className="text-slate-300">
              We reserve the right to restrict or terminate access
              to the application if these Terms of Use are violated
              or if misuse is detected.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Changes to These Terms
            </h2>

            <p className="text-slate-300">
              We may update these Terms of Use at any time. Changes
              become effective when published on this page.
            </p>

            <p className="mt-4 text-slate-300">
              Continued use of Clash One after updates constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-6">
            <h2 className="mb-4 text-xl font-bold">
              Fan Content Disclaimer
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
              Contact
            </h2>

            <p className="text-slate-300">
              If you have questions regarding these Terms of Use,
              please contact us.
            </p>

            <a
              href="mailto:legal@clashwidget.online"
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