export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-8 rounded-2xl bg-bg-light-2 p-10 shadow-lg ring-1 ring-border-light backdrop-blur">
        <h1 className="text-4xl font-bold tracking-tight text-text-dark">
          Next.js 14 + TypeScript + Tailwind
        </h1>
        <p className="mt-4 text-lg text-text-medium">
          Starter scaffold for your capstone project.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-text-dark">
          <span className="rounded-full bg-bg-light-3 px-3 py-1">App Router</span>
          <span className="rounded-full bg-bg-light-3 px-3 py-1">TypeScript</span>
          <span className="rounded-full bg-bg-light-3 px-3 py-1">TailwindCSS</span>
        </div>
      </div>
      <p className="text-sm text-text-medium">Edit app/page.tsx to get started.</p>
    </main>
  );
}

