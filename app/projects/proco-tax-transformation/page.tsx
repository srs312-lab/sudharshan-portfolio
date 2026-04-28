import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ProCo Tax Transformation | Sudharshan Soma",
  description:
    "Case study on establishing a UAE procurement entity through a high-pressure enterprise tax transformation and cross-platform automation rollout.",
};

const headlineMetrics = [
  {
    value: "$6M-$8M",
    label: "Estimated annual savings opportunity",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    value: "UAE",
    label: "New procurement entity operating model",
    tone: "border-cyan-200 bg-cyan-50 text-cyan-700",
  },
  {
    value: "90 days",
    label: "Execution window from assignment to go-live",
    tone: "border-sky-200 bg-sky-50 text-sky-700",
  },
  {
    value: "Apr 1",
    label: "Fiscal year aligned go-live target",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    value: "4 regions",
    label: "Automated Phase 1 rollout footprint",
    tone: "border-violet-200 bg-violet-50 text-violet-700",
  },
];

const businessFunctions = [
  "Finance",
  "Tax",
  "Compliance",
  "Logistics",
  "Sales",
  "Sales Ops",
  "Planning",
  "Procurement",
  "Accounts Receivable",
  "Accounts Payable",
  "Project Engineering",
  "P&L Owners",
];

const platforms = ["Anaplan", "Salesforce", "NetSuite", "Downstream business platforms"];

const keyChallenges = [
  "New UAE procurement entity required intercompany transaction redesign",
  "Undocumented workflows and inconsistent regional operating logic",
  "Stakeholder expectation to automate nearly every workflow within 90 days",
  "Localized process complexity across global markets",
  "Executive pressure tied to financial impact and year-end timing",
  "SME bandwidth constraints during critical discovery and validation",
];

const operatingModelImpacts = [
  "Procurement ownership across regions",
  "Intercompany transaction creation and routing",
  "Tax treatment across purchasing and fulfillment workflows",
  "Manual fallback processes where automation was not feasible",
  "Downstream accounting and reconciliation handling",
];

const deliveryFramework = [
  {
    title: "Controlled waterfall",
    body: "Existing projects continued under legacy logic while new projects beginning April 1 adopted the transformed UAE procurement and tax structure.",
  },
  {
    title: "Regional prioritization",
    body: "Automated rollout focused on the United States, India, Spain, and Australia, while Brazil was deferred due to localization complexity.",
  },
  {
    title: "Process design",
    body: "Future-state workflows clarified ownership, intercompany handoffs, automation boundaries, and manual operating models for excluded teams.",
  },
  {
    title: "Executive alignment",
    body: "Partnered with sponsors to secure support for teams outside Phase 1 automation scope and maintain business continuity.",
  },
];

const automationBoundaries = [
  ["Automate now", "High-volume intercompany transaction flows that could be delivered safely before April 1", "w-[88%]"],
  ["Manual with SOP", "Teams outside automation scope received documented fallback processes", "w-[72%]"],
  ["Defer responsibly", "Highly localized Brazil requirements moved out of Phase 1 to protect go-live quality", "w-[58%]"],
  ["Scale later", "Future-state process design preserved a path for broader automation", "w-[80%]"],
];

const implementationFlow = [
  {
    title: "Discover",
    body: "Used workshops and enterprise knowledge tools to understand legacy procurement, tax, pricing, and platform processes.",
  },
  {
    title: "Map",
    body: "Reverse-engineered undocumented logic into future-state workflows, ownership points, and intercompany handoffs.",
  },
  {
    title: "Prioritize",
    body: "Separated ideal automation from April 1 deliverables using region volume, risk, and feasibility.",
  },
  {
    title: "Implement",
    body: "Coordinated UAE procurement routing, intercompany transaction logic, tax treatment, and pricing logic across enterprise platforms.",
  },
  {
    title: "Cut over",
    body: "Protected active work by keeping existing projects on legacy logic and moving new projects to the transformed UAE entity structure.",
  },
];

const outcomes = [
  ["Financial value", "Positioned the organization to capture an estimated $6M-$8M in savings through the UAE procurement entity model"],
  ["Deadline delivery", "Delivered a complex tax transformation under an aggressive 90-day timeline"],
  ["Business continuity", "Protected ongoing workstreams through a controlled April 1 cutover model"],
  ["Global alignment", "Aligned finance, tax, sales, logistics, planning, procurement, and P&L stakeholders around new intercompany flows"],
  ["Scalable process", "Defined future-state workflows and automation boundaries for later expansion"],
  ["Expectation management", "Balanced executive urgency with realistic delivery scope and regional complexity"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{children}</p>;
}

function AccentBar({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-16 rounded-full ${className}`} />;
}

export default function ProcoTaxTransformationCaseStudy() {
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
            <a href="#strategy" className="hover:text-slate-950">
              Strategy
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
              ProCo Tax Transformation & Cross-Platform Automation Rollout
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Led a highly visible enterprise tax transformation tied to financial year-end deadlines, with a strict
              April 1 go-live requirement, a new UAE procurement entity operating model, and an estimated $6M-$8M
              savings opportunity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Enterprise Transformation", "Tax Automation", "Executive Delivery", "Cross-Platform Rollout"].map(
                (item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
                <AccentBar className="bg-rose-400" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Before</p>
                <h2 className="mt-2 text-2xl font-semibold">Fragmented Logic</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Procurement ownership, tax workflows, pricing structures, and operating handoffs varied across teams,
                  creating manual effort and execution risk.
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
                <h2 className="mt-2 text-2xl font-semibold">Phased Automation</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  New UAE procurement routing, regional prioritization, controlled cutover, and defined manual paths for
                  work outside Phase 1.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {platforms.map((platform) => (
                <div key={platform} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold">
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
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
            <SectionLabel>Business Context</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The program had to convert a new procurement entity model into executable workflows.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The transformation centered on establishing a new procurement entity in the UAE to optimize global tax
              structure and improve enterprise cost efficiency. Existing processes varied by region and function, so
              intercompany transaction logic had to be reverse-engineered, validated, and translated into future-state
              workflows.
            </p>
          </div>
          <div className="grid gap-3">
            {keyChallenges.map((challenge, index) => (
              <div key={challenge} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
                  {index + 1}
                </span>
                <p className="leading-7 text-slate-700">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scope" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Scope & Complexity</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Deep coordination across business functions, regions, and enterprise platforms.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Business Functions</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {businessFunctions.map((team) => (
                  <div key={team} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold">
                    {team}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Phase 1 Regional Strategy</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["United States", "India", "Spain", "Australia"].map((region, index) => (
                  <div key={region} className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm font-semibold text-emerald-700">Automated Region {index + 1}</p>
                    <p className="mt-2 text-lg font-semibold">{region}</p>
                  </div>
                ))}
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 sm:col-span-2">
                  <p className="text-sm font-semibold text-amber-700">Deferred from Phase 1</p>
                  <p className="mt-2 text-lg font-semibold">Brazil, due to localization complexity and setup requirements</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Operating Model Redesign</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-5">
                {operatingModelImpacts.map((item, index) => (
                  <div key={item} className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
                    <p className="text-sm font-semibold text-cyan-700">Area {index + 1}</p>
                    <p className="mt-2 font-semibold leading-6 text-slate-950">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Strategy</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Protected the deadline by drawing clear automation boundaries.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The key leadership challenge was separating ideal future state from what could be safely delivered
                before the fiscal year start. The implementation model balanced speed, feasibility, and stakeholder
                expectations.
              </p>
              <div className="mt-8 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Delivery Principle</p>
                <p className="mt-2 text-2xl font-semibold">Automate high-value scope, document the rest</p>
                <p className="mt-3 leading-7 text-emerald-50">
                  Teams outside Phase 1 still received defined manual operating models so the organization had a clear
                  path forward.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Automation Scope Model</p>
              <div className="mt-6 space-y-5">
                {automationBoundaries.map(([name, detail, width]) => (
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
            {deliveryFramework.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-slate-400">Decision {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-100">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Delivery Approach</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Used process discovery, platform coordination, and cutover design to move quickly without breaking continuity.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {implementationFlow.map((step, index) => (
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
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Cross-Platform Logic</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {platforms.map((platform) => (
                  <div key={platform} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-sm font-semibold leading-6">{platform}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-7 text-slate-600">
                The program introduced UAE procurement routing, intercompany transaction handling, and new tax and
                pricing logic across several enterprise platforms, requiring process alignment before implementation
                could safely proceed.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Leadership Under Pressure</p>
              <p className="mt-5 leading-7 text-slate-600">
                Because SMEs had limited bandwidth, I accelerated discovery by using historical documentation and
                enterprise knowledge tools to understand legacy workflows, then validated assumptions with constrained
                business teams.
              </p>
              <div className="mt-6 rounded-lg border border-sky-200 bg-sky-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Hard Trade-Off</p>
                <p className="mt-3 text-lg font-semibold leading-7">
                  Preserve the April 1 value window by limiting Phase 1 automation to the regions and workflows that
                  could be delivered responsibly.
                </p>
              </div>
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
                Delivered deadline-sensitive transformation while protecting business continuity.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The program turned undefined process logic into an executable operating model, created stakeholder
                agreement across multiple functions, and positioned the business to capture significant annual value.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map(([label, result]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Key Takeaway</p>
            <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-950">
              The transformation succeeded because the new UAE procurement model was translated into explicit operating
              rules: automate what could deliver fiscal-year value safely, define manual paths for the rest, and
              preserve a scalable roadmap for future phases.
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
