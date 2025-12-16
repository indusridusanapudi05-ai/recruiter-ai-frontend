import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/dashboard", active: true },
  { name: "Screening", href: "/screening", active: false },
  { name: "Scheduling", href: "/scheduling", active: false },
  { name: "Notifications", href: "/notifications", active: false },
  { name: "Settings", href: "/settings", active: false }
];

const stats = [
  { label: "Resumes Pending", value: "127" },
  { label: "Shortlist Ready", value: "18" },
  { label: "Interviews Scheduled", value: "5" }
];

const activity = [
  "5 new resumes added to the pipeline",
  "2 candidates moved to Shortlist",
  "Interview scheduled with Priya (Thu 2 PM)",
  "Offer extended to Jordan (pending response)"
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-text-dark">
      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-10 lg:px-8">
        <aside className="sticky top-8 hidden h-fit w-60 shrink-0 rounded-2xl border border-border-light bg-white p-6 shadow-[0_12px_40px_-22px_rgba(168,159,205,0.6)] lg:block">
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-light-3 text-icon font-semibold">
              AI
            </div>
            <span className="text-lg font-semibold text-text-dark">Recruit-AI</span>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-xl px-3 py-2 text-sm font-medium transition ${
                  item.active
                    ? "bg-primary text-white shadow-sm shadow-primary/40"
                    : "text-text-medium hover:bg-bg-light-2"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="flex-1 space-y-8">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-text-dark">Dashboard</h1>
              <p className="text-sm text-text-medium">Overview of your hiring pipeline</p>
            </div>
            <Link
              href="/screening"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-18px_rgba(168,159,205,0.7)] transition hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-bg-light-1"
            >
              Start Screening
            </Link>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border-light bg-bg-light-2 p-5 shadow-[0_12px_36px_-24px_rgba(168,159,205,0.5)]"
              >
                <p className="text-sm text-text-medium">{stat.label}</p>
                <p className="mt-3 text-3xl font-semibold text-text-dark">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border-light bg-white p-6 shadow-[0_12px_36px_-24px_rgba(168,159,205,0.5)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-dark">Recent Activity</h2>
            </div>
            <ul className="space-y-3 text-sm text-text-medium">
              {activity.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border-light bg-bg-light-2 px-4 py-3 text-text-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

