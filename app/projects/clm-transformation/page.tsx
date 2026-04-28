import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI-Powered Global CLM Transformation | Sudharshan Soma",
  description:
    "Case study on a global AI-enabled Contract Lifecycle Management migration across sales, sourcing, legal, procurement, and treasury teams.",
};

const headlineMetrics = [
  {
    value: "8 weeks",
    label: "Legacy contract turnaround",
    tone: "border-rose-200 bg-rose-50 text-rose-700",
  },
  {
    value: "1-2 weeks",
    label: "New contract turnaround",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    value: "1,500+",
    label: "Contracts migrated",
    tone: "border-sky-200 bg-sky-50 text-sky-700",
  },
  {
    value: "300+",
    label: "End users supported",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
  },
];

const scopeStats = [
  ["Regions", "US, India, Spain, Brazil, Australia"],
  ["Stakeholders", "12+ key project stakeholders"],
  ["Teams", "Sales, Sourcing, Legal, Treasury, Procurement"],
  ["Contract types", "Vendor, customer, and treasury bond agreements"],
];

const legacyProblems = [
  "Very low sales adoption despite nearly 2 years of implementation",
  "Only 2-3 sales contracts executed through the legacy platform",
  "Expensive licensing and ongoing vendor support costs",
  "Limited visibility into contract lifecycle stages",
  "Sourcing stakeholders felt underrepresented during the earlier rollout",
];

const evaluationCriteria = [
  ["Ease of use", "User adoption potential", "w-[92%]"],
  ["Workflow flexibility", "Ability to support global process differences", "w-[88%]"],
  ["AI capabilities", "Clause extraction, risk scoring, tagging, playbooks", "w-[84%]"],
  ["Migration readiness", "Contract and metadata migration feasibility", "w-[80%]"],
  ["Salesforce compatibility", "Contract tracking and CRM process fit", "w-[90%]"],
  ["Support model", "Long-term operating cost and vendor partnership", "w-[86%]"],
];

const platformOptions = ["Malbek", "Ironclad", "DocuSign CLM", "Agiloft"];

const alignmentMoves = [
  "Included sourcing stakeholders early in evaluation decisions",
  "Prioritized sourcing workflows during demos and sandbox testing",
  "Partnered with vendors to clarify AI functionality and roadmap timing",
  "Launched the first implementation phase around sourcing contracts",
];

const deliveryFlow = [
  {
    title: "Evaluate",
    body: "Compared 4 CLM platforms with a weighted scoring matrix across usability, scalability, AI, integrations, and support.",
  },
  {
    title: "Validate",
    body: "Used sandbox demos and targeted sourcing workflows to test AI outputs and clarify platform misconceptions.",
  },
  {
    title: "Migrate",
    body: "Moved 1,500+ contracts with metadata migration and AI-assisted mapping to reduce manual cleanup effort.",
  },
  {
    title: "Integrate",
    body: "Coordinated Salesforce and DocuSign integration so contract visibility and execution fit business workflows.",
  },
  {
    title: "Enable",
    body: "Built internal support capability to reduce external dependency after go-live.",
  },
];

const aiCapabilities = [
  "Clause extraction",
  "Risk scoring",
  "Auto-tagging",
  "Redlining support",
  "Contract recommendations",
  "AI-generated playbooks",
];

const outcomes = [
  ["Turnaround time", "Reduced from 8 weeks to 1-2 weeks"],
  ["Visibility", "Improved contract tracking directly within Salesforce"],
  ["Adoption", "Increased cross-functional engagement"],
  ["Vendor dependency", "Reduced through internal enablement"],
  ["Scalability", "Expanded beyond sales and sourcing into treasury workflows"],
  ["Support costs", "Reduced reliance on external support teams"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{children}</p>;
}

function AccentBar({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-16 rounded-full ${className}`} />;
}

export default function ClmTransformationCaseStudy() {
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
            <a href="#evaluation" className="hover:text-slate-950">
              Evaluation
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
              AI-Powered Global CLM Transformation Program
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Led a global migration from a legacy Contract Lifecycle Management platform to an AI-enabled enterprise
              solution supporting sales, sourcing, legal, procurement, treasury, and contract management teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Program Leadership", "Vendor Evaluation", "AI CLM", "Change Management"].map((item) => (
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
                <h2 className="mt-2 text-2xl font-semibold">Legacy CLM</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Low adoption, limited status visibility, high support cost, and fragile trust between business teams.
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
                <h2 className="mt-2 text-2xl font-semibold">AI-Enabled CLM</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Global workflows, Salesforce visibility, AI-assisted contract intelligence, and internal ownership.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Salesforce", "DocuSign", "AI Playbooks"].map((item) => (
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
            <SectionLabel>Business Problem</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The prior implementation was live, but the business had not truly adopted it.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The legacy CLM platform had been active for nearly two years, but engagement remained low, especially
              within sales. Sourcing teams had only recently built confidence in the old platform after feeling
              underrepresented during the earlier rollout, so another migration carried real trust risk.
            </p>
          </div>
          <div className="grid gap-3">
            {legacyProblems.map((problem, index) => (
              <div key={problem} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-700">
                  {index + 1}
                </span>
                <p className="leading-7 text-slate-700">{problem}</p>
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
              A global program across regions, functions, and contract types.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Global rollout footprint</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-5">
                {["US", "India", "Spain", "Brazil", "Australia"].map((region, index) => (
                  <div key={region} className="relative rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                      {index + 1}
                    </div>
                    <p className="mt-3 font-semibold">{region}</p>
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

      <section id="evaluation" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Platform Evaluation</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Four CLM platforms, one weighted selection framework.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                I directed vendor evaluation using criteria tied to adoption, migration feasibility, AI maturity,
                Salesforce compatibility, and long-term operational fit.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {platformOptions.map((platform) => (
                  <span key={platform} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100">
                    {platform}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Selected Platform</p>
                <p className="mt-2 text-2xl font-semibold">Malbek</p>
                <p className="mt-3 leading-7 text-emerald-50">
                  Selected for workflow deployment speed, intuitive UI, contract stage visibility, native AI,
                  Salesforce fit, and responsive customer support.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Weighted Criteria</p>
              <div className="mt-6 space-y-5">
                {evaluationCriteria.map(([name, detail, width]) => (
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
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Stakeholder Challenge</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The hardest part was not tool selection. It was rebuilding trust.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.7fr_1fr]">
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-6">
              <AccentBar className="bg-sky-400" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Sales</p>
              <h3 className="mt-2 text-2xl font-semibold">Wanted modernization</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Sales teams pushed for a more scalable AI-enabled platform to improve adoption, workflow speed, and
                visibility.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Program Response</p>
              <p className="mt-4 text-lg font-semibold leading-8">
                Reframed the migration as an evidence-based adoption program, not a top-down system replacement.
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
              <AccentBar className="bg-amber-400" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Sourcing</p>
              <h3 className="mt-2 text-2xl font-semibold">Needed confidence</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Sourcing stakeholders resisted because they had previously felt excluded and were concerned their
                workflows would again be deprioritized.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {alignmentMoves.map((move, index) => (
              <div key={move} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">Alignment Move {index + 1}</p>
                <p className="mt-3 leading-7 text-slate-700">{move}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Technical Delivery</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Migration, integrations, AI validation, and support model design.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {deliveryFlow.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Integration View</p>
              <div className="mt-6 grid gap-3 md:grid-cols-5">
                {["Legacy contracts", "AI metadata mapping", "Malbek CLM", "Salesforce", "DocuSign"].map((node) => (
                  <div key={node} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                    <p className="text-sm font-semibold leading-6">{node}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 leading-7 text-slate-600">
                The program organized contract data for migration readiness, supported metadata migration, and connected
                the future-state workflow to Salesforce and DocuSign for tracking and execution.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">AI Capabilities Used</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {aiCapabilities.map((capability) => (
                  <span key={capability} className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
                    {capability}
                  </span>
                ))}
              </div>
              <p className="mt-5 leading-7 text-slate-600">
                Sourcing initially compared the CLM AI experience to an external legal analysis assistant. I clarified
                the difference between playbook-driven workflow AI and chat-style legal analysis, then validated the
                intended strengths through demos and vendor roadmap discussions.
              </p>
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
                The program improved speed, visibility, adoption, and operating sustainability.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The transformation combined platform modernization with organizational repair: stakeholder inclusion,
                phased rollout sequencing, AI capability alignment, and internal support enablement.
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
              Successful transformation depended not only on selecting the right technology, but on resolving
              organizational disagreement, validating AI risk, enabling adoption, and creating a sustainable operating
              model.
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
