import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "ParkReserve AI | Sudharshan Soma",
  description:
    "Case study on building a full-stack national park reservation monitoring product with Next.js, FastAPI, Postgres, Recreation.gov, Resend, and Twilio.",
};

const headlineMetrics = [
  {
    value: "Live",
    label: "Public demo deployed on Vercel",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    value: "60s",
    label: "Normal-priority availability polling interval",
    tone: "border-sky-200 bg-sky-50 text-sky-700",
  },
  {
    value: "2",
    label: "Alert channels through Resend and Twilio",
    tone: "border-violet-200 bg-violet-50 text-violet-700",
  },
  {
    value: "25",
    label: "Batch watches supported per request",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
  },
];

const stack = [
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "APScheduler",
  "Recreation.gov",
  "Resend",
  "Twilio",
  "Railway",
  "Vercel",
];

const architectureSteps = [
  {
    title: "Public demo",
    body: "A safe `/demo` route uses static sample data and disabled controls so the project can be shared publicly.",
  },
  {
    title: "Protected dashboard",
    body: "The production dashboard is password protected and supports real watch creation, pause/resume, check-now, and alert retry workflows.",
  },
  {
    title: "Server-side proxy",
    body: "Vercel forwards dashboard API requests to Railway and injects the backend token without exposing it in browser JavaScript.",
  },
  {
    title: "Reservation agent layer",
    body: "FastAPI coordinates preference normalization, Recreation.gov search, decision logic, scheduled checks, and notification execution.",
  },
];

const highlights = [
  ["Batch watch creation", "One park search can create multiple campground watches while skipping duplicates."],
  ["Flexible stay matching", "Minimum nights allows users to get alerts for shorter openings inside a wider date range."],
  ["Priority polling", "High, normal, and low priorities balance speed against rate-conscious monitoring."],
  ["Deduped alerts", "Repeated campsite/date openings are suppressed so users are not spammed by the same result."],
  ["Delivery health", "Email and text-message outcomes are stored, summarized, filtered, and retryable from the dashboard."],
  ["Production security", "The public demo is isolated, the dashboard is password protected, and backend routes require a shared token."],
];

const tradeoffs = [
  "Focused on alerting instead of auto-booking to avoid payment and policy complexity.",
  "Started with Recreation.gov campgrounds before expanding to lodges, permits, lotteries, or private systems.",
  "Used APScheduler for a simple single-service deployment; a larger SaaS version would use distributed queues.",
  "Kept the public demo static so portfolio visitors can inspect the product without touching real data.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{children}</p>;
}

function AccentBar({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-16 rounded-full ${className}`} />;
}

export default function ParkReserveAICaseStudy() {
  return (
    <main className="case-study min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/#projects" className="text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
            Back to projects
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <a href="#architecture" className="hover:text-slate-950">
              Architecture
            </a>
            <a href="#highlights" className="hover:text-slate-950">
              Highlights
            </a>
            <a href="#tradeoffs" className="hover:text-slate-950">
              Tradeoffs
            </a>
            <a href="#next" className="hover:text-slate-950">
              Next
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button className="hidden rounded-full sm:inline-flex" asChild>
              <a href="https://parkreserve-ai-dashboard.vercel.app/demo" target="_blank" rel="noreferrer">
                Live demo
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <section className="overflow-hidden px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Case Study</SectionLabel>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              ParkReserve AI: National Park Reservation Monitor
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Built a full-stack reservation monitoring product that searches Recreation.gov campground inventory,
              schedules recurring watches, detects matching openings, and sends email or text-message alerts through an
              agentic FastAPI backend.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Agentic AI Product", "Next.js", "FastAPI", "Postgres", "Travel Automation"].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full" asChild>
                <a href="https://parkreserve-ai-dashboard.vercel.app/demo" target="_blank" rel="noreferrer">
                  Open live demo
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="https://github.com/srs312-lab/parkreserve-ai" target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70">
            <Image
              alt="ParkReserve AI public demo dashboard"
              className="h-auto w-full rounded-md border border-slate-200"
              height={1100}
              priority
              src="/projects/parkreserve-ai-demo.png"
              width={1440}
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {headlineMetrics.map((metric) => (
            <div key={metric.label} className={`rounded-lg border p-6 shadow-sm ${metric.tone}`}>
              <p className="text-3xl font-semibold tracking-tight">{metric.value}</p>
              <p className="mt-2 leading-6 text-slate-700">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Problem</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Campground reservations move too quickly for manual refresh loops.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Popular national park reservations often disappear within minutes. Users need continuous monitoring,
              flexible matching, fast alerts, and fallback discovery across multiple campgrounds instead of repeatedly
              checking Recreation.gov by hand.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <AccentBar className="bg-emerald-400" />
            <h3 className="mt-5 text-2xl font-semibold">Solution</h3>
            <p className="mt-4 leading-8 text-slate-700">
              ParkReserve AI converts a user preference into scheduled watches. The system polls Recreation.gov,
              filters matching openings, deduplicates repeated results, and notifies the user through email,
              text message, or both. The dashboard exposes watch operations, alert history, delivery health, and watch
              analytics.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Architecture</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Built as a product dashboard wrapped around a reservation agent system.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {architectureSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="highlights" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Engineering Highlights</SectionLabel>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map(([title, body]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tradeoffs" className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Tradeoffs</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Product decisions kept the system useful, safe, and deployable.
            </h2>
          </div>
          <div className="grid gap-4">
            {tradeoffs.map((tradeoff) => (
              <div key={tradeoff} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="leading-7 text-slate-700">{tradeoff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="next" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>What I Would Build Next</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            From portfolio project to reservation intelligence product.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Account login and per-user watch ownership",
              "Stripe subscriptions for high-priority monitoring",
              "Push notifications and richer alert preferences",
              "Nearby fallback recommendations across parks",
              "Trend charts for demand signals and alert volume",
              "More inventory sources, including permits and lotteries",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
