import Link from "next/link";

type Candidate = {
  name: string;
  experience: string;
  skills: string[];
  match: number;
  summary: string;
};

const candidates: Candidate[] = [
  {
    name: "Jordan Smith",
    experience: "5 yrs • Full-Stack",
    skills: ["React", "Node.js", "TypeScript"],
    match: 92,
    summary: "Strong alignment with required stack and prior hiring domain experience."
  },
  {
    name: "Priya Patel",
    experience: "4 yrs • Frontend",
    skills: ["React", "Next.js", "UI/UX"],
    match: 88,
    summary: "Excellent UI delivery record and experience with design systems."
  },
  {
    name: "Alex Chen",
    experience: "6 yrs • Backend",
    skills: ["Node.js", "PostgreSQL", "Redis"],
    match: 81,
    summary: "Robust backend architecture, scaling experience, and API design."
  }
];

const filters = ["All", "80%+", "60%+"];

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-border-light bg-bg-light-2 px-6 py-10 text-center shadow-[0_12px_36px_-24px_rgba(168,159,205,0.5)]">
      <p className="text-base font-medium text-text-dark">No shortlist yet</p>
      <p className="mt-2 text-sm text-text-medium">Run screening to generate top candidates.</p>
    </div>
  );
}

export default function ShortlistPage() {
  const hasCandidates = candidates.length > 0;

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-text-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-text-dark">Shortlist Results</h1>
          <p className="text-sm text-text-medium">Top candidates based on job description match</p>
        </header>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`rounded-full border px-3 py-1 text-sm font-medium transition ${
                filter === "All"
                  ? "border-primary bg-primary text-white shadow-[0_10px_30px_-18px_rgba(168,159,205,0.7)]"
                  : "border-border-light text-text-medium hover:bg-bg-light-2"
              }`}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        {!hasCandidates && <EmptyState />}

        {hasCandidates && (
          <div className="grid gap-6 md:grid-cols-2">
            {candidates.map((candidate) => (
              <details
                key={candidate.name}
                className="group rounded-xl border border-border-light bg-white p-6 shadow-[0_12px_36px_-24px_rgba(168,159,205,0.5)] transition"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-text-dark">{candidate.name}</h3>
                      <span className="rounded-full bg-bg-light-3 px-3 py-1 text-xs font-semibold text-text-dark">
                        {candidate.match}%
                      </span>
                    </div>
                    <p className="text-sm text-text-medium">{candidate.experience}</p>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-bg-light-3 px-3 py-1 text-xs font-medium text-text-dark"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-text-dark">{candidate.match}%</p>
                    <button
                      type="button"
                      className="mt-3 inline-flex items-center justify-center rounded-lg border border-border-light bg-white px-3 py-2 text-xs font-semibold text-primary transition hover:bg-bg-light-2 focus:outline-none focus:ring-2 focus:ring-bg-light-1"
                    >
                      View Details
                    </button>
                  </div>
                </summary>

                <div className="mt-4 space-y-3 border-t border-border-light pt-4 text-sm text-text-medium">
                  <p className="font-semibold text-text-dark">Why this match?</p>
                  <p>{candidate.summary}</p>
                </div>
              </details>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(168,159,205,0.7)] transition hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-bg-light-1"
          >
            Schedule Interviews
          </Link>
        </div>
      </div>
    </main>
  );
}

