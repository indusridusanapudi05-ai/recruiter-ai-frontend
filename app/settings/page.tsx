export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-text-dark">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-text-dark">Settings</h1>
          <p className="text-sm text-text-medium">Manage your account and integrations</p>
        </header>

        {/* Profile */}
        <section className="rounded-xl border border-border-light bg-white p-6 shadow-[0_12px_30px_-20px_rgba(168,159,205,0.5)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-text-dark">Profile</h2>
              <p className="text-sm text-text-medium">Update your personal details</p>
            </div>
            <button className="rounded-lg border border-border-light bg-white px-3 py-2 text-sm font-semibold text-primary transition hover:bg-bg-light-2 focus:outline-none focus:ring-2 focus:ring-bg-light-1">
              Edit Profile
            </button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-text-medium">
                Full Name
              </label>
              <p className="mt-1 rounded-lg border border-border-light bg-bg-light-3 px-3 py-2 text-sm text-text-dark">
                Jane Recruiter
              </p>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-text-medium">
                Email
              </label>
              <p className="mt-1 rounded-lg border border-border-light bg-bg-light-3 px-3 py-2 text-sm text-text-dark">
                jane@recruit-ai.com
              </p>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-text-medium">
                Organization
              </label>
              <p className="mt-1 rounded-lg border border-border-light bg-bg-light-3 px-3 py-2 text-sm text-text-dark">
                Acme Talent
              </p>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="space-y-4 rounded-xl border border-border-light bg-white p-6 shadow-[0_12px_30px_-20px_rgba(168,159,205,0.5)]">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-text-dark">Integrations</h2>
            <p className="text-sm text-text-medium">Connect your tools</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-border-light bg-bg-light-3 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-text-dark">Google Calendar</p>
                <p className="text-xs text-text-medium">Status: Not Connected</p>
              </div>
              <button className="rounded-lg border border-border-light bg-white px-3 py-2 text-sm font-semibold text-primary transition hover:bg-bg-light-2 focus:outline-none focus:ring-2 focus:ring-bg-light-1">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-border-light bg-bg-light-3 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-text-dark">Email Notifications</p>
                <p className="text-xs text-text-medium">Enable alerts for updates</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full border border-border-light bg-white after:absolute after:left-[4px] after:top-[4px] after:h-4 after:w-4 after:rounded-full after:bg-primary after:transition peer-checked:border-primary peer-checked:bg-primary peer-checked:after:translate-x-5 peer-checked:after:bg-white" />
              </label>
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="space-y-4 rounded-xl border border-border-light bg-white p-6 shadow-[0_12px_30px_-20px_rgba(168,159,205,0.5)]">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-text-dark">Preferences</h2>
            <p className="text-sm text-text-medium">Customize your experience</p>
          </div>
          <div className="space-y-3">
            {[
              { label: "Enable AI auto-scheduling", desc: "Let AI suggest and book slots." },
              { label: "Show match explanations", desc: "Display reasons behind candidate matches." }
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-border-light bg-bg-light-3 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-text-dark">{item.label}</p>
                  <p className="text-xs text-text-medium">{item.desc}</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full border border-border-light bg-white after:absolute after:left-[4px] after:top-[4px] after:h-4 after:w-4 after:rounded-full after:bg-primary after:transition peer-checked:border-primary peer-checked:bg-primary peer-checked:after:translate-x-5 peer-checked:after:bg-white" />
                </label>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

