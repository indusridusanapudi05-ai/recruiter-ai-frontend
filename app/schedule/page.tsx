"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type Candidate = { name: string; role: string };

const candidates: Candidate[] = [
  { name: "Jordan Smith", role: "Frontend" },
  { name: "Priya Patel", role: "Product Design" },
  { name: "Alex Chen", role: "Backend" },
  { name: "Sam Rivera", role: "Data" }
];

const availableSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"];

function buildMonthDays(year: number, month: number) {
  // month is 0-indexed
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const date = new Date(year, month, d);
    days.push({ day: d, weekday: date.getDay() });
  }
  return { days, startWeekday: firstDay.getDay() };
}

export default function SchedulePage() {
  const today = useMemo(() => new Date(), []);
  const { days, startWeekday } = useMemo(
    () => buildMonthDays(today.getFullYear(), today.getMonth()),
    [today]
  );

  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const toggleCandidate = (name: string) => {
    setSelectedCandidates((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-text-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-text-dark">Schedule Interviews</h1>
          <p className="text-sm text-text-medium">Choose a time slot for selected candidates</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border-light bg-bg-light-2 p-6 shadow-[0_12px_36px_-24px_rgba(168,159,205,0.5)]">
            <h2 className="text-lg font-semibold text-text-dark">Shortlisted Candidates</h2>
            <p className="text-sm text-text-medium">Select who to schedule</p>
            <div className="mt-4 space-y-3">
              {candidates.map((candidate) => (
                <label
                  key={candidate.name}
                  className="flex items-start gap-3 rounded-lg border border-border-light bg-bg-light-3 px-4 py-3 text-sm text-text-dark"
                >
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-border-light text-primary focus:ring-primary"
                    checked={selectedCandidates.includes(candidate.name)}
                    onChange={() => toggleCandidate(candidate.name)}
                  />
                  <div>
                    <p className="font-semibold text-text-dark">{candidate.name}</p>
                    <p className="text-xs text-text-medium">{candidate.role}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-border-light bg-white p-6 shadow-[0_12px_36px_-24px_rgba(168,159,205,0.5)]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-text-dark">Select Date</h2>
                <p className="text-sm text-text-medium">
                  {today.toLocaleString("default", { month: "long", year: "numeric" })}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm text-text-medium">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="font-semibold text-text-medium">
                  {d}
                </div>
              ))}
              {Array.from({ length: startWeekday }).map((_, idx) => (
                <div key={`pad-${idx}`} />
              ))}
              {days.map(({ day }) => {
                const isSelected = selectedDate === day;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => {
                      setSelectedDate(day);
                      setSelectedSlot(null);
                    }}
                    className={`flex h-10 items-center justify-center rounded-lg border transition ${
                      isSelected
                        ? "border-primary bg-primary text-white shadow-md shadow-primary/40"
                        : "border-border-light text-text-dark hover:bg-bg-light-2"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-sm font-semibold text-text-dark">Available time slots</p>
              <div className="flex flex-wrap gap-2">
                {availableSlots.map((slot) => {
                  const active = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                        active
                          ? "border-primary bg-primary text-white shadow-md shadow-primary/40"
                          : "border-border-light text-text-dark hover:bg-bg-light-2"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
              {!selectedDate && (
                <p className="text-xs text-text-medium">Select a date to apply a time slot.</p>
              )}
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <Link
            href="/success"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(168,159,205,0.7)] transition hover:-translate-y-0.5 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-bg-light-1"
          >
            Confirm Schedule
          </Link>
        </div>
      </div>
    </main>
  );
}

