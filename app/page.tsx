import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-xl font-semibold text-gray-900">
          Recruiter AI
        </h1>

        <div className="space-x-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-gray-900"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 max-w-3xl">
          AI-powered hiring for fast-moving HR teams
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Screen resumes, shortlist candidates, and schedule interviews —
          without juggling emails or missing top talent.
        </p>

        <div className="mt-8 space-x-4">
          <Link
            href="/signup"
            className="px-6 py-3 bg-[#A89FCD] text-white rounded-lg hover:bg-[#9888BE]"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
