const notifications = [
  {
    title: "Shortlist ready for Backend Developer role",
    icon: "🔔",
    time: "2h ago",
    detail: "Top matches generated from the latest screening run."
  },
  {
    title: "Interview scheduled with John Doe at 3:00 PM",
    icon: "✅",
    time: "4h ago",
    detail: "Confirmed time slot and invite sent to interviewer and candidate."
  },
  {
    title: "New candidate added: Priya Sharma",
    icon: "🛎️",
    time: "6h ago",
    detail: "Resume uploaded and parsed; profile added to Screening queue."
  }
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-text-dark">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-text-dark">Notifications</h1>
          <p className="text-sm text-text-medium">Your latest activity and updates</p>
        </header>

        <section className="max-h-[70vh] space-y-6 overflow-auto pr-1">
          {notifications.map((note) => (
            <article
              key={note.title}
              className="flex gap-4 rounded-xl border border-border-light bg-white p-5 shadow-[0_12px_30px_-20px_rgba(168,159,205,0.5)]"
              style={{ borderLeftWidth: "6px", borderLeftColor: "#A89FCD" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-light-3 text-lg text-icon">
                {note.icon}
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base font-semibold text-text-dark">{note.title}</h2>
                  <span className="text-xs text-text-medium">{note.time}</span>
                </div>
                <p className="text-sm text-text-medium">{note.detail}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

