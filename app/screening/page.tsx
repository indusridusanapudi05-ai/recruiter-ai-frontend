import Link from "next/link";

export default function ScreeningPage() {
  const uploads = [
    {
      title: "Upload Job Description (PDF, TXT)",
      helper: "Drag & drop or click to upload",
      accept: ".pdf,.txt",
      placeholderFiles: ["job-description.pdf"]
    },
    {
      title: "Upload Resumes (Multiple PDFs or ZIP)",
      helper: "Drag & drop or click to upload",
      accept: ".pdf,.zip",
      placeholderFiles: ["candidate-1.pdf", "candidate-2.pdf"]
    }
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-text-dark">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-text-dark">Start Screening</h1>
          <p className="text-sm text-text-medium">Upload your job description and resumes to begin.</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {uploads.map((item) => (
            <div
              key={item.title}
              className="relative flex h-[300px] flex-col justify-between rounded-xl border-2 border-dashed border-primary/60 bg-bg-light-2 p-6 text-center shadow-[0_16px_40px_-28px_rgba(168,159,205,0.5)]"
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-light-3 text-icon">
                  <span className="text-xl font-semibold">⇪</span>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-text-dark">{item.title}</p>
                  <p className="text-sm text-text-medium">{item.helper}</p>
                </div>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-lg border border-border-light bg-white px-3 py-2 text-sm font-medium text-primary transition hover:bg-bg-light-3 focus:outline-none focus:ring-2 focus:ring-bg-light-1"
                >
                  Choose file
                </button>
              </div>
              <div className="rounded-lg border border-border-light bg-bg-light-2 px-3 py-2 text-left text-xs text-text-dark">
                <p className="font-semibold text-text-dark">Uploaded</p>
                <ul className="mt-1 space-y-1">
                  {item.placeholderFiles.map((file) => (
                    <li key={file} className="truncate">
                      {file}
                    </li>
                  ))}
                </ul>
              </div>
              <input
                aria-label={item.title}
                type="file"
                multiple
                accept={item.accept}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
            </div>
          ))}
        </section>

        <div className="flex justify-center">
          <Link
            href="/shortlist"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(168,159,205,0.7)] transition hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-bg-light-1"
          >
            Generate Shortlist
          </Link>
        </div>
      </div>
    </main>
  );
}

