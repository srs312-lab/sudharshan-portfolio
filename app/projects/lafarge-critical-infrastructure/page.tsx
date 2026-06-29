import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Lafarge Critical Infrastructure Modernization | Sudharshan Soma",
  description:
    "Case study on electrical, instrumentation, power, controls, commissioning, and reliability modernization in a 24x7 industrial operation.",
};

const headlineMetrics = [
  {
    value: "95% to 98%",
    label: "Plant reliability improvement",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    value: "~$2M/year",
    label: "Analog-to-digital controls savings",
    tone: "border-sky-200 bg-sky-50 text-sky-700",
  },
  {
    value: "~$320K/year",
    label: "Power-factor improvement savings",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    value: "33%",
    label: "Reduction in avoidable shutdowns",
    tone: "border-violet-200 bg-violet-50 text-violet-700",
  },
];

const infrastructureSystems = [
  {
    title: "High-voltage power",
    body: "132 kV substations, electrical distribution, relay coordination, power quality, harmonic mitigation, and power-factor improvement.",
  },
  {
    title: "Controls & telemetry",
    body: "Industrial control and SCADA modernization, energy-management integration, digital controls, monitoring, and operational visibility.",
  },
  {
    title: "Condition monitoring",
    body: "Sweep Frequency Response Analysis, Tan Delta testing, predictive maintenance, quality assurance, and early failure detection.",
  },
  {
    title: "Operational reliability",
    body: "Incident prevention, maintenance coordination, safe change windows, commissioning, validation, and 24x7 business continuity.",
  },
];

const deliveryPhases = [
  {
    title: "Define",
    body: "Built business cases, clarified scope and success measures, and translated operational pain points into engineering requirements.",
  },
  {
    title: "Plan",
    body: "Coordinated engineering, operations, maintenance, vendors, budgets, dependencies, shutdown windows, and delivery risks.",
  },
  {
    title: "Commission",
    body: "Managed installation, controls migration, testing, validation, issue resolution, and readiness for operational cutover.",
  },
  {
    title: "Stabilize",
    body: "Supported handover, monitored reliability outcomes, strengthened predictive maintenance, and reduced recurring disruption.",
  },
];

const programCapabilities = [
  ["24x7 industrial operations", "Uptime-sensitive facilities, controlled change windows, escalation discipline, and continuity planning"],
  ["132 kV substations and power quality", "Critical electrical distribution, protection coordination, capacity awareness, and power-quality risk"],
  ["Industrial controls and SCADA", "Transferable controls, telemetry, alarming, monitoring, and infrastructure-operations visibility"],
  ["Commissioning and cutover", "Contractor coordination, test plans, acceptance criteria, punch-list closure, and operational handover"],
  ["Condition monitoring", "Predictive maintenance, early fault detection, asset health, and reliability-centered operations"],
  ["Vendor, budget, and risk leadership", "Capital program controls, dependency management, executive reporting, and multi-team delivery"],
];

const outcomes = [
  ["Reliability", "Raised plant reliability from 95% to 98% across an uptime-sensitive industrial operation"],
  ["Controls modernization", "Migrated cooling-system controls from analog to digital and generated approximately $2M in annual savings"],
  ["Power efficiency", "Improved power factor and delivered approximately $320K in annual savings"],
  ["Operational continuity", "Reduced avoidable shutdowns by 33% through power-quality and protection improvements"],
  ["Predictive maintenance", "Introduced condition-monitoring practices to identify asset degradation before failure"],
  ["Cross-functional delivery", "Aligned engineering, operations, maintenance, vendors, budgets, and commissioning activities"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{children}</p>;
}

function AccentBar({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-16 rounded-full ${className}`} />;
}

export default function LafargeCriticalInfrastructureCaseStudy() {
  return (
    <main className="case-study min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/#projects" className="text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
            Back to projects
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <a href="#scope" className="hover:text-slate-950">Scope</a>
            <a href="#delivery" className="hover:text-slate-950">Delivery</a>
            <a href="#capabilities" className="hover:text-slate-950">Capabilities</a>
            <a href="#impact" className="hover:text-slate-950">Impact</a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button className="hidden rounded-full sm:inline-flex" asChild>
              <a href="mailto:soma.sudharshan.reddy@gmail.com">Contact</a>
            </Button>
          </div>
        </nav>
      </header>

      <section className="overflow-hidden px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <SectionLabel>Case Study</SectionLabel>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Lafarge Critical Infrastructure & Reliability Modernization
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Program-managed electrical, instrumentation, controls, and high-voltage infrastructure upgrades across a
              24x7 industrial operation, coordinating engineering, operations, maintenance, vendors, budgets, and
              commissioning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Electrical & Instrumentation",
                "Critical Power",
                "Controls & SCADA",
                "Commissioning",
                "24x7 Operations",
              ].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <AccentBar className="bg-cyan-500" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">
              Critical-Infrastructure Program Experience
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Infrastructure delivery built around uptime and reliability</h2>
            <p className="mt-4 leading-8 text-slate-600">
              The program combined uptime-sensitive power systems, controls and monitoring, commissioning, vendor
              delivery, incident prevention, safety-conscious change windows, and operational handover.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Power systems", "Controls", "Commissioning", "Reliability"].map((item) => (
                <div key={item} className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-center font-semibold text-cyan-900">
                  {item}
                </div>
              ))}
            </div>
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

      <section id="scope" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Infrastructure Scope</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Power, controls, monitoring, and operational reliability.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {infrastructureSystems.map((system) => (
              <div key={system.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold">{system.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{system.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Program Delivery</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Managed infrastructure upgrades from business case through operational stabilization.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {deliveryPhases.map((phase, index) => (
              <div key={phase.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{phase.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Infrastructure Program Capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Program disciplines for uptime-sensitive infrastructure.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The work required power-system awareness, controls and monitoring, commissioning rigor,
                reliability-centered maintenance, and multi-vendor program execution.
              </p>
            </div>
            <div className="grid gap-4">
              {programCapabilities.map(([experience, application]) => (
                <div key={experience} className="grid gap-3 rounded-lg border border-white/10 bg-white/5 p-5 md:grid-cols-[0.72fr_1.28fr]">
                  <p className="font-semibold text-cyan-200">{experience}</p>
                  <p className="leading-7 text-slate-200">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Results & Business Impact</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Improved uptime, efficiency, and infrastructure resilience.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The program combined technical depth with program controls: aligning stakeholders, coordinating vendors,
                managing commissioning risk, and translating modernization into measurable operational outcomes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map(([label, result]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-3 text-lg font-semibold leading-7">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-cyan-200 bg-cyan-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Infrastructure Delivery Foundation</p>
            <p className="mt-4 max-w-5xl text-xl font-semibold leading-9">
              I bring infrastructure program experience grounded in power, controls, commissioning, reliability, and
              24x7 operations, supported by vendor leadership, program controls, and operational discipline.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button className="rounded-full" asChild>
              <Link href="/#projects">View more projects</Link>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="/Sudharshan_Soma.pdf" target="_blank" rel="noreferrer">View resume</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
