export default function DeleteDataPage() {
  return (
    <main className="min-h-screen bg-white-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          Clash One Data Deletion Request
        </h1>

        <p className="        </p>mt-4 text-white-300
">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">
              How to Delete Your Data
            </h2>

            <p className="mt-3 text-white-700">
              Clash One primarily stores village and tracking data locally on
              your device.
            </p>

            <ol className="mt-4 list-decimal space-y-2 pl-6 text-white-700">
              <li>Open Clash One.</li>
              <li>Remove your imported village/account.</li>
              <li>Or uninstall the application.</li>
              <li>
                Local village data, settings, caches, and tracking information
                stored on the device will be removed.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Request Deletion of Analytics Data
            </h2>

            <p className="mt-3 text-white-700">
              If you would like us to remove analytics or diagnostic data
              associated with your device, please contact us.
            </p>

            <div className="mt-4 rounded-lg border p-4">
              <p>
                <strong>Email: </strong>
                <a
                  href="mailto:strngeapps@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                   strngeapps@gmail.com
                </a>
              </p>

              <p className="mt-2">
                <strong>Subject:</strong> Data Deletion Request
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Information to Include
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-white-700">
              <li>App Name: Clash One</li>
              <li>Device Platform (Android)</li>
              <li>Approximate Date of Use</li>
              <li>Player Tag (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Data Retention
            </h2>

            <p className="mt-3 text-white-700">
              Local village data is deleted when the user removes the account
              from the app or uninstalls the application.
            </p>

            <p className="mt-3 text-white-700">
              Diagnostic, crash, and analytics information may be retained for a
              limited period by third-party service providers according to their
              own retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Processing Time
            </h2>

            <p className="mt-3 text-white-700">
              Data deletion requests white typically processed within 30 days.
            </p>
          </section>

          <section className="border-t pt-6">
            <p className="text-white-600">
              Developer: <strong>Strnge Labs</strong>
            </p>

            <p className="text-white-600">
              App: <strong>Clash One</strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}