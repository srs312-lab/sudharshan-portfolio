import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Corporate Travel & Expense Transformation | Sudharshan Soma",
  description:
    "Case study on implementing a corporate travel, expense, card, and duty-of-care operating model after a company separation.",
};

const headlineMetrics = [
  {
    value: "Jan 2025",
    label: "North America go-live",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    value: "4",
    label: "Core platforms in the T&E ecosystem",
    tone: "border-sky-200 bg-sky-50 text-sky-700",
  },
  {
    value: "5 markets",
    label: "Support footprint after rollout expansion",
    tone: "border-violet-200 bg-violet-50 text-violet-700",
  },
  {
    value: "2-person",
    label: "Global support team managed in steady state",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
  },
];

const platforms = [
  "Egencia / Amex GBT",
  "Coupa Expense",
  "Brex",
  "International SOS",
];

const scopeStats = [
  ["Program trigger", "Post-separation replacement of inherited and interim travel processes"],
  ["Primary users", "Employees, contractors, executives, travel arrangers, finance users, and regional teams"],
  ["Internal partners", "Travel, Finance, HR, BizSys/IT, cybersecurity, operations, and regional owners"],
  ["Core integrations", "Okta SSO, HR profile feeds, project data, NetSuite, Coupa, Egencia, Brex, and ISOS"],
];

const businessProblems = [
  "The company needed an independent travel and expense model after separating from Flex-supported processes.",
  "Regional interim agency workflows created inconsistent experiences and limited global scalability.",
  "Travel booking, expense reporting, travel card support, and emergency assistance had to work as one operating model.",
  "Employee profile data, manager relationships, project fields, policy controls, and financial postings had to stay aligned across systems.",
  "The launch needed training, hypercare, support channels, and vendor escalation paths, not just configured software.",
  "The solution had to support sensitive data, high availability, policy compliance, and public-company control expectations.",
];

const deliveryFlow = [
  {
    title: "Take ownership",
    body: "Stepped into program leadership after platform selection and converted the selected toolset into a delivery and operating plan.",
  },
  {
    title: "Define the model",
    body: "Translated business requirements into travel booking, expense, card, emergency support, reporting, policy, and support operations scope.",
  },
  {
    title: "Integrate data",
    body: "Coordinated SSO, HR profile feeds, project data, finance-system dependencies, and profile rules needed for launch stability.",
  },
  {
    title: "Test and adjust",
    body: "Used SIT, UAT, and targeted retesting to resolve hierarchy, policy, access, expense, tax, and reconciliation issues before launch.",
  },
  {
    title: "Launch and support",
    body: "Delivered training, launch-fair readiness, daily hypercare, self-service content, and tiered escalation paths for go-live.",
  },
];

const implementationIssues = [
  [
    "Profile data quality",
    "Manager hierarchy, regional POS logic, contractor profiles, and admin exceptions had to be handled before users could book and expense cleanly.",
  ],
  [
    "SSO and access readiness",
    "Okta SSO, mobile access, and user provisioning needed production-grade validation because travel users depended on day-one availability.",
  ],
  [
    "Policy behavior",
    "Out-of-policy messages, cabin rules, fare thresholds, trip purpose, and project fields needed UAT coverage beyond happy-path bookings.",
  ],
  [
    "Integration lifecycle gaps",
    "Booking, cancellation, card, reimbursement, and downstream expense behavior required process decisions where automation was incomplete.",
  ],
  [
    "Cutover timing",
    "Quarter-end and holiday constraints required careful sequencing of production deployment, smoke testing, communication, and support coverage.",
  ],
  [
    "Adoption support",
    "Users needed training, clear support entry points, mobile setup guidance, FAQs, and daily hypercare to move confidently into the new model.",
  ],
];

const supportLayers = [
  {
    layer: "Tier 0",
    title: "Self-service knowledge",
    body: "Internal travel and expense pages, policy guidance, FAQs, mobile app setup, and duty-of-care resources reduced repeated support questions.",
  },
  {
    layer: "Tier 1",
    title: "User intake",
    body: "Dedicated travel and expense intake channels handled access, booking, expense, card, profile, and how-to questions during launch and steady state.",
  },
  {
    layer: "Tier 2",
    title: "Functional ownership",
    body: "Travel, finance, HR, regional, and card owners resolved policy questions, profile corrections, exceptions, and reimbursement blockers.",
  },
  {
    layer: "Tier 3",
    title: "Technical and vendor escalation",
    body: "BizSys/IT and vendor teams addressed SSO, feed, API, platform, integration, data-quality, and production defect escalations.",
  },
  {
    layer: "Governance",
    title: "Continuous improvement",
    body: "Support trends fed FAQ updates, training improvements, configuration fixes, vendor follow-up, SLA review, and rollout readiness.",
  },
];

const outcomes = [
  ["Operational independence", "Replaced the post-separation interim travel model with a company-owned T&E operating model"],
  ["Launch readiness", "Completed signed BRD, production readiness, training materials, release planning, and UAT sign-off"],
  ["North America launch", "Held the January 2025 go-live with training, support channels, and daily hypercare through stabilization"],
  ["Global rollout", "Extended the model to Brazil, India, Spain, and Australia after the North America launch"],
  ["Control alignment", "Improved policy enforcement, traveler visibility, reporting, sensitive-data handling, and duty-of-care support"],
  ["Support operations", "Built and now manage a two-person India-based global support team with vendor escalation governance"],
];

const projectedBenefits = [
  "Faster self-service booking through web and mobile travel tools",
  "Shorter expense-report effort through Coupa mobile capture and OCR-assisted submission",
  "Lower out-of-pocket burden through travel card and lodge-card support",
  "Better duty-of-care visibility through International SOS travel risk and emergency assistance",
  "Improved spend, exception, supplier, trip-purpose, and policy reporting",
  "Lower recurring support load through self-service content and root-cause feedback loops",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{children}</p>;
}

function AccentBar({ className = "" }: { className?: string }) {
  return <div className={`h-1.5 w-16 rounded-full ${className}`} />;
}

export default function CorporateTravelExpenseCaseStudy() {
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
            <a href="#support" className="hover:text-slate-950">Support</a>
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
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Corporate Travel, Expense & Card Operating Model Implementation
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Led implementation of an independent corporate travel and expense capability after a company separation,
              spanning travel booking, expense management, travel card support, traveler safety, integrations,
              training, hypercare, and global support operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Enterprise Systems", "Travel & Expense", "Support Operations", "Vendor Governance"].map((item) => (
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
                <h2 className="mt-2 text-2xl font-semibold">Inherited & Interim Processes</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Travel and expense support depended on legacy services and regional interim agency processes with
                  limited standardization.
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
                <h2 className="mt-2 text-2xl font-semibold">Company-Owned T&E Model</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Integrated travel, expense, card, duty-of-care, training, support, and vendor escalation into a
                  scalable operating model.
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
              The work was an operating-model replacement, not only a software rollout.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The program had to replace inherited services with a controlled travel and expense capability that could
              support day-to-day employees, eligible non-employees, executive delegates, finance teams, and global
              regional operations.
            </p>
          </div>
          <div className="grid gap-3">
            {businessProblems.map((problem, index) => (
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
            <SectionLabel>Scope & Complexity</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Cross-functional delivery across travel, expense, identity, HR data, finance, and vendor operations.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Core ecosystem</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                {platforms.map((platform, index) => (
                  <div key={platform} className="rounded-lg border border-sky-200 bg-sky-50 p-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                      {index + 1}
                    </div>
                    <p className="mt-3 font-semibold leading-6">{platform}</p>
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

      <section id="delivery" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Delivery Approach</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Converted selected platforms into a launchable operating model.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                I treated the program as a business capability build: requirements, governance, data readiness,
                integration design, UAT, change management, launch support, and steady-state operations had to move
                together.
              </p>
              <div className="mt-8 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Leadership Focus</p>
                <p className="mt-2 text-2xl font-semibold">Stabilize adoption while building the service model</p>
                <p className="mt-3 leading-7 text-emerald-50">
                  The launch was only successful if users could book, expense, escalate, and get help after go-live.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {deliveryFlow.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-200">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {implementationIssues.map(([issue, response], index) => (
              <div key={issue} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-slate-400">Issue {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{issue}</h3>
                <p className="mt-3 leading-7 text-slate-200">{response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>Support Operating Model</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Built launch support into the implementation deliverable.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The support team had to cover access, booking, expense, card, profile, policy, and vendor issues while
                turning launch questions into durable process improvements.
              </p>
            </div>
            <div className="grid gap-4">
              {supportLayers.map((support) => (
                <div key={support.title} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[0.22fr_0.78fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">{support.layer}</p>
                    <h3 className="mt-2 text-lg font-semibold">{support.title}</h3>
                  </div>
                  <p className="leading-7 text-slate-600">{support.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Projected Benefits</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              The program created a foundation for faster, safer, and more controlled travel operations.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectedBenefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <AccentBar className="bg-cyan-400" />
                <p className="mt-4 font-semibold leading-7 text-slate-950">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Results & Business Impact</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Delivered a controlled T&E launch and converted it into an ongoing global support operation.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The work gave the organization a standardized travel and expense path, clearer policy enforcement,
                stronger travel-risk support, and a support model that could scale beyond North America.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map(([label, result]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Key Takeaway</p>
            <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-950">
              The durable value came from joining platform implementation with support operations: identity, data,
              policy, training, vendor escalation, and continuous improvement all had to be designed as one service.
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
