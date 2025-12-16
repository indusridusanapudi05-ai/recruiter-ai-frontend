import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12 text-text-dark">
      <div className="relative w-full max-w-md">
        <div className="absolute -inset-6 rounded-3xl bg-bg-light-2 opacity-50 blur-2xl" aria-hidden />
        <div className="relative space-y-6 rounded-3xl border border-border-light bg-white p-10 text-center shadow-[0_24px_70px_-30px_rgba(168,159,205,0.6)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bg-light-3 text-3xl text-icon">
            ✓
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-text-dark">All Set!</h1>
            <p className="text-sm text-text-medium">Your interviews have been successfully scheduled.</p>
          </div>
          <div className="space-y-3">
            <Link
              href="/dashboard"
              className="block w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-bg-light-1"
            >
              Back to Dashboard
            </Link>
            <Link
              href="/schedule"
              className="block text-sm font-semibold text-primary transition hover:text-primary-hover"
            >
              View Scheduled Interviews
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

