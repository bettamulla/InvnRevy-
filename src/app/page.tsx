import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold">Pay &amp; Review</div>
          <nav className="flex items-center gap-3">
            <Link href="/login" className="btn-secondary">Log in</Link>
            <Link href="/signup" className="btn-primary">Get started</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Get paid faster.<br />Get more reviews.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          The autopilot for late invoices and review requests.
          Built for solo operators and small trade businesses who&rsquo;d rather be doing the work.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link href="/signup" className="btn-primary text-base px-6 py-3">Start free</Link>
          <Link href="/login" className="btn-secondary text-base px-6 py-3">I have an account</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-8">
        <Feature
          title="Chase invoices automatically"
          body="Friendly email + WhatsApp reminders on a smart cadence. Clients pay with one click."
        />
        <Feature
          title="Ask for reviews at the right moment"
          body="Right after payment, when goodwill is highest. One polite follow-up if needed."
        />
        <Feature
          title="See what&rsquo;s working"
          body="A simple dashboard: invoices sent, paid, reviews collected. No spreadsheet needed."
        />
      </section>

      <footer className="border-t border-gray-200 py-10 mt-20">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Pay &amp; Review. Built for people who&rsquo;d rather not chase.
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
