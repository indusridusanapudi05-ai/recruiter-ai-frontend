import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
      <div className="relative w-full max-w-sm">
        <div className="absolute -inset-4 rounded-3xl bg-bg-light-2 opacity-60 blur-2xl" aria-hidden />
        <div className="relative space-y-8 rounded-3xl border border-border-light bg-white p-8 shadow-[0_24px_70px_-30px_rgba(168,159,205,0.6)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bg-light-3 text-icon">
            <span className="text-lg font-semibold">AI</span>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-text-dark">Recruit-AI</h1>
            <p className="text-sm text-text-medium">Your calm hiring companion</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-dark" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-border-light bg-white px-4 py-3 text-text-dark shadow-inner shadow-bg-light-1/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-bg-light-1"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-dark" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-border-light bg-white px-4 py-3 text-text-dark shadow-inner shadow-bg-light-1/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-bg-light-1"
              />
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/dashboard"
                className="block w-full rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-bg-light-1"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block w-full rounded-2xl border border-border-light px-4 py-3 text-center text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-bg-light-2 focus:outline-none focus:ring-2 focus:ring-bg-light-1"
              >
                Create Account
              </Link>
              <div className="text-center text-sm">
                <Link href="/forgot-password" className="text-primary transition hover:text-primary-hover">
                  Forgot password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

