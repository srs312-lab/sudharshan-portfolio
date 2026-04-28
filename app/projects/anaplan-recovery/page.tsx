import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Anaplan Platform Recovery Program | Sudharshan Soma",
  description:
    "Case study on stabilizing a business-critical Anaplan platform through governance, backlog recovery, sprint execution, and performance optimization.",
};

const headlineMetrics = [
  {
    value: "250+",
    label: "Backlog issues resolved",
    tone: "border-sky-200 bg-sky-50 text-sky-700",
  },
  {
    value: "6 months",
    label: "Recovery program duration",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    value: "100+",
    label: "Supply chain users supported",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    value: "-30 to +7",
    label: "User satisfaction NPS improvement in six months",
    tone: "border-violet-200 bg-violet-50 text-violet-700",
  },
];

const scopeStats = [
  ["Platform", "Business-critical Anaplan planning environment"],
  ["Functions", "Planning, Procurement, Sourcing, Logistics"],
  ["Team", "5 external team members and 2 internal platform resources"],
  ["Delivery", "2-phase recovery with sprint-based execution"],
];

const platformSymptoms = [
  "No clear separation between development and production environments",
  "Frequent reversions of work due to changing priorities",
  "Large volume of undocumented issues and recurring defects",
  "Poor collaboration between internal and external teams",
  "Production incidents created blame culture instead of ownership",
  "Recurring model-busy interruptions during integrations",
];

const governanceMoves = [
  "Created a review board for backlog items and business requests",
  "Introduced impact vs effort vs business outcome prioritization",
  "Presented issue trends and platform health with measurable impact analysis",
  "Held sprint reprioritization reviews to keep stakeholders aligned",
];

const recoveryFlow = [
  {
    title: "Discover",
    body: "Mapped undocumented defects, enhancement requests, incidents, and workflow gaps across business functions.",
  },
  {
    title: "Prioritize",
    body: "Ranked work by severity, business impact, technical dependency, implementation effort, and urgency.",
  },
  {
    title: "Batch",
    body: "Grouped related fixes into sprint execution batches to reduce rework and improve delivery predictability.",
  },
  {
    title: "Optimize",
    body: "Analyzed global usage patterns and rescheduled integrations into low-usage windows to reduce model-busy issues.",
  },
  {
    title: "Stabilize",
    body: "Shifted the platform from reactive firefighting to planned execution with shared ownership and clear communication.",
  },
];

const initiatives = [
  "High-Level Planning Forecasting",
  "Intercompany SO/PO Automation",
  "Tools Planning",
  "Volume Commitment Planning",
];

const prioritizationSignals = [
  ["Business impact", "How strongly the issue affected planning operations", "w-[94%]"],
  ["Implementation effort", "Relative delivery complexity and dependency risk", "w-[72%]"],
  ["Urgency", "Production risk, user pain, and stakeholder timing", "w-[88%]"],
  ["Business outcome", "Measurable value unlocked by completing the work", "w-[84%]"],
];

const impactResults = [
  ["Backlog recovery", "Resolved approximately 250 platform issues"],
  ["Delivery execution", "Moved from reactive firefighting to sprint-based planning"],
  ["User confidence", "Improved user satisfaction NPS from -30 to +7 in six months"],
  ["Performance", "Reduced disruption from recurring model-busy integration conflicts"],
  ["Collaboration", "Improved alignment across internal teams, vendors, and business users"],
  ["Strategic delivery", "Delivered 4 high-priority supply chain initiatives during recovery"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{children}</p>;
}

function AccentBar({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-16 rounded-full ${className}`} />;
}

export default function AnaplanRecoveryCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/#projects" className="text-sm font-semibold text-slate-600 hover:text-slate-950">
            Back to projects
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#scope" className="hover:text-slate-950">
              Scope
            </a>
            <a href="#governance" className="hover:text-slate-950">
              Governance
            </a>
            <a href="#delivery" className="hover:text-slate-950">
              Delivery
            </a>
            <a href="#impact" className="hover:text-slate-950">
              Impact
            </a>
          </div>
          <Button className="rounded-full" asChild>
            <a href="mailto:soma.sudharshan.reddy@gmail.com">Contact</a>
          </Button>
        </nav>
      </header>

      <section className="overflow-hidden px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <SectionLabel>Case Study</SectionLabel>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Anaplan Platform Recovery & Transformation
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Led a 6-month recovery initiative for a business-critical Anaplan platform supporting supply chain
              planning operations. The program stabilized delivery, recovered trust, optimized performance, and brought
              structure to a fragmented backlog.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Program Recovery", "Anaplan", "Governance", "Supply Chain Planning"].map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
                <AccentBar className="bg-rose-400" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Before</p>
                <h2 className="mt-2 text-2xl font-semibold">Reactive Platform</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Unmanaged backlog, model-busy interruptions, rework, incidents, slow resolution cycles, and declining
                  user confidence.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-full border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                  to
                </div>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
                <AccentBar className="bg-emerald-400" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">After</p>
                <h2 className="mt-2 text-2xl font-semibold">Governed Recovery</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Review board, transparent prioritization, sprint execution, performance tuning, and shared platform
                  ownership.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Backlog Review", "Sprint Planning", "Model Optimization"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold">
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

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Business Challenge</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The platform had strong development capability, but lacked operational discipline.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Users had lost confidence in the system. Backlog items were unmanaged, issue ownership was unclear, and
              production incidents created friction between teams instead of root-cause resolution.
            </p>
          </div>
          <div className="grid gap-3">
            {platformSymptoms.map((symptom, index) => (
              <div key={symptom} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
                  {index + 1}
                </span>
                <p className="leading-7 text-slate-700">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scope" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Scope & Scale</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              A business-critical planning platform across supply chain functions.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Supported Functions</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                {["Planning", "Procurement", "Sourcing", "Logistics"].map((team, index) => (
                  <div key={team} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                      {index + 1}
                    </div>
                    <p className="mt-3 font-semibold">{team}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {scopeStats.map(([label, detail]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="governance" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Governance Model</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Replaced reactive intake with transparent, impact-based prioritization.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The recovery work needed a decision system. I introduced review boards, measurable impact analysis, and
                sprint reprioritization so stakeholders could see why work moved forward.
              </p>
              <div className="mt-8 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Operating Shift</p>
                <p className="mt-2 text-2xl font-semibold">Firefighting to planned execution</p>
                <p className="mt-3 leading-7 text-emerald-50">
                  Work moved from ad hoc fixes and escalations into sprint batches with clearer ownership and
                  stakeholder communication.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Prioritization Signals</p>
              <div className="mt-6 space-y-5">
                {prioritizationSignals.map(([name, detail, width]) => (
                  <div key={name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-semibold">{name}</p>
                      <p className="hidden text-sm text-slate-400 sm:block">{detail}</p>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className={`h-2 rounded-full bg-cyan-300 ${width}`} />
                    </div>
                    <p className="mt-2 text-sm text-slate-400 sm:hidden">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {governanceMoves.map((move, index) => (
              <div key={move} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-slate-400">Governance Move {index + 1}</p>
                <p className="mt-3 leading-7 text-slate-100">{move}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Recovery Strategy</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Stabilized the platform through backlog recovery, collaboration repair, and performance optimization.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {recoveryFlow.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Model-Busy Optimization</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Global usage analysis", "Low-usage windows", "Integration rescheduling"].map((node) => (
                  <div key={node} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-sm font-semibold leading-6">{node}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-7 text-slate-600">
                I reviewed usage patterns and integration schedules across geographies, then coordinated timing changes
                to reduce contention during peak business activity.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Strategic Initiatives Delivered</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {initiatives.map((initiative, index) => (
                  <div key={initiative} className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm font-semibold text-emerald-700">Initiative {index + 1}</p>
                    <p className="mt-2 font-semibold leading-6 text-slate-950">{initiative}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>Team Alignment</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Moved teams from blame to shared platform ownership.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-6">
                <AccentBar className="bg-rose-400" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Incident Pattern</p>
                <p className="mt-3 leading-7 text-slate-700">
                  Production issues triggered escalations and fault-finding across internal and external teams.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">TPM Response</p>
                <p className="mt-4 leading-7 text-slate-100">
                  Led cross-functional discussions, clarified trade-offs, and kept teams focused on root-cause
                  resolution.
                </p>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
                <AccentBar className="bg-emerald-400" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Recovery Outcome</p>
                <p className="mt-3 leading-7 text-slate-700">
                  Improved collaboration, execution quality, and stakeholder trust in the recovery process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Results & Business Impact</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The recovery program restored delivery discipline and rebuilt confidence in Anaplan.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The platform moved from unmanaged backlog and recurring operational disruption to a clearer governance
                model, planned sprint execution, and stronger cross-functional ownership.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {impactResults.map(([label, result]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-sky-200 bg-sky-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Key Takeaway</p>
            <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-950">
              Recovery was not just about closing tickets. It required governance, prioritization, communication, and
              performance discipline so a business-critical planning platform could become dependable again.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button className="rounded-full" asChild>
              <Link href="/#projects">View more projects</Link>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="/Sudharshan_Soma.pdf" target="_blank" rel="noreferrer">
                View resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
