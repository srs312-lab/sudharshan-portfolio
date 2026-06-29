"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type IconProps = {
  name: string;
  className?: string;
};

function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const commonProps: React.SVGProps<SVGSVGElement> = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons: Record<string, React.ReactElement> = {
    arrow: (
      <svg {...commonProps}>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    ),
    briefcase: (
      <svg {...commonProps}>
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        <path d="M3 13h18" />
        <path d="M9 13v2h6v-2" />
      </svg>
    ),
    chip: (
      <svg {...commonProps}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v3" />
        <path d="M15 1v3" />
        <path d="M9 20v3" />
        <path d="M15 20v3" />
        <path d="M20 9h3" />
        <path d="M20 14h3" />
        <path d="M1 9h3" />
        <path d="M1 14h3" />
      </svg>
    ),
    gauge: (
      <svg {...commonProps}>
        <path d="M12 14l4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        <path d="M7 19h10" />
      </svg>
    ),
    linkedin: (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    rocket: (
      <svg {...commonProps}>
        <path d="M4.5 16.5c-1.5 1.26-2 3.5-2 3.5s2.24-.5 3.5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-1.41-.59z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-4.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-5.05 11A22 22 0 0 1 12 15z" />
        <path d="M9 12H4l2-5h5" />
        <path d="M12 15v5l5-2v-5" />
      </svg>
    ),
    sparkle: (
      <svg {...commonProps}>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
        <path d="M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17z" />
        <path d="M5 1l.8 2.2L8 4l-2.2.8L5 7l-.8-2.2L2 4l2.2-.8L5 1z" />
      </svg>
    ),
    workflow: (
      <svg {...commonProps}>
        <rect x="3" y="4" width="6" height="6" rx="1" />
        <rect x="15" y="4" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M9 7h6" />
        <path d="M6 10v2a3 3 0 0 0 3 3" />
        <path d="M18 10v2a3 3 0 0 1-3 3" />
      </svg>
    ),
  };

  return icons[name] ?? icons.sparkle;
}

type ImpactMetric = {
  value: string;
  label: string;
  context: string;
};

type Project = {
  title: string;
  category: string;
  summary: string;
  impact: string;
  skills: string[];
  icon: string;
  href?: string;
  image?: {
    alt: string;
    src: string;
  };
  links?: {
    href: string;
    label: string;
  }[];
};

type SkillGroup = {
  title: string;
  skills: string[];
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const impactMetrics: ImpactMetric[] = [
  {
    value: "$6M-$8M",
    label: "Estimated enterprise savings",
    context: "Target from UAE procurement entity and intercompany tax transformation aligned to an April 1 launch.",
  },
  {
    value: "8 weeks → 1-2 weeks",
    label: "Contract turnaround reduction",
    context: "Baseline from legacy Contract Lifecycle Management process; outcome after global AI-enabled rollout.",
  },
  {
    value: "-30 → +7",
    label: "Planning-platform satisfaction improvement",
    context: "Net Promoter Score improved during a six-month Anaplan recovery program.",
  },
  {
    value: "47 → 13 days",
    label: "Supplier onboarding cycle-time reduction",
    context: "Procure-to-Pay transformation shortened vendor onboarding from request to readiness.",
  },
  {
    value: "6 roles",
    label: "Annual manual effort avoided",
    context: "Proof of Delivery automation removed follow-up work equivalent to six full-time roles.",
  },
  {
    value: "260 hours/month",
    label: "Supply chain automation capacity saved",
    context: "Robotic process automation reduced repetitive planning, logistics, and procurement effort.",
  },
  {
    value: "$2M/year",
    label: "Reliability modernization savings",
    context: "Annual savings from industrial controls, condition monitoring, and reliability modernization.",
  },
];

const projects: Project[] = [
  {
    title: "ParkReserve AI",
    category: "Agentic AI Product",
    summary:
      "Built a full-stack national park reservation monitor that searches Recreation.gov campgrounds, schedules watches, and sends email or text-message alerts when openings appear.",
    impact:
      "Deployed a protected production dashboard, public demo, Railway backend, Vercel proxy, Postgres persistence, and Resend/Twilio notifications.",
    skills: ["Next.js", "FastAPI", "PostgreSQL", "Agentic AI Workflows", "Recreation.gov"],
    icon: "rocket",
    href: "/projects/parkreserve-ai",
    image: {
      alt: "ParkReserve AI public demo dashboard",
      src: "/projects/parkreserve-ai-demo.png",
    },
    links: [
      {
        href: "https://parkreserve-ai-dashboard.vercel.app/demo",
        label: "Live demo",
      },
      {
        href: "https://github.com/srs312-lab/parkreserve-ai",
        label: "GitHub",
      },
    ],
  },
  {
    title: "ProCo Tax Transformation",
    category: "Enterprise Tax Automation",
    summary:
      "Led a deadline-sensitive tax transformation to establish a UAE procurement entity and redesign intercompany flows across multiple enterprise platforms.",
    impact: "Positioned the organization to capture an estimated $6M-$8M in savings through a phased April 1 rollout.",
    skills: ["Technical Program Management", "Tax Transformation", "Intercompany Flows", "Executive Alignment"],
    icon: "briefcase",
    href: "/projects/proco-tax-transformation",
  },
  {
    title: "AI-Powered Global Contract Management Transformation",
    category: "AI + Enterprise Systems",
    summary:
      "Led migration from a legacy Contract Lifecycle Management platform to an AI-enabled enterprise solution across sales, sourcing, legal, procurement, and treasury teams.",
    impact: "Reduced contract turnaround from 8 weeks to 1-2 weeks while migrating 1,500+ contracts.",
    skills: ["Technical Program Management", "Contract Lifecycle Management", "Vendor Evaluation", "Change Management"],
    icon: "sparkle",
    href: "/projects/clm-transformation",
  },
  {
    title: "Anaplan Recovery Program",
    category: "Program Recovery",
    summary:
      "Stabilized a business-critical Anaplan planning platform through governance, delivery-blocker resolution, sprint execution, and performance optimization.",
    impact: "Resolved delivery blockers across 250+ planning-system issues, improved Net Promoter Score from -30 to +7 in six months, and delivered 4 strategic initiatives.",
    skills: ["Program Recovery", "Anaplan", "Governance", "Supply Chain Planning"],
    icon: "gauge",
    href: "/projects/anaplan-recovery",
  },
  {
    title: "Procure-to-Pay Transformation",
    category: "Procurement Transformation",
    summary:
      "Implemented a new Procure-to-Pay system to improve invoice automation, supplier onboarding, and procurement operating efficiency.",
    impact: "Reached 80% invoice scan rate and reduced onboarding from 47 to 13 days.",
    skills: ["Procure-to-Pay", "Procurement", "Process Improvement"],
    icon: "workflow",
  },
  {
    title: "Proof of Delivery Automation",
    category: "Automation at Scale",
    summary:
      "Automated Proof of Delivery workflows using Power Automate to improve customer visibility and reduce manual follow-up effort.",
    impact: "Saved annual effort equivalent to 6 full-time roles.",
    skills: ["Power Automate", "Workflow Automation", "Customer Visibility"],
    icon: "rocket",
  },
  {
    title: "Supply Chain Robotic Process Automation",
    category: "Robotic Process Automation + Operations",
    summary:
      "Delivered robotic process automation bots across planning, logistics, and procurement workflows to reduce manual errors and increase operational speed.",
    impact: "Saved 260 employee hours per month.",
    skills: ["UiPath", "Robotic Process Automation", "Supply Chain", "Operations"],
    icon: "chip",
  },
  {
    title: "Lafarge Systems Modernization & Plant Reliability",
    category: "Industrial Systems Transformation",
    summary:
      "Led technical modernization across industrial sites, coordinating planning-system migration support, SAP/Maximo data readiness, controls upgrades, and launch support.",
    impact: "Improved reliability from 95% to 98% while driving cross-functional readiness, issue tracking, and process improvement.",
    skills: ["Technical Program Management", "Systems Migration", "SAP/Maximo Data Readiness", "Launch Support"],
    icon: "briefcase",
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Program Leadership",
    skills: ["Technical Program Management", "Agile Delivery", "Roadmaps", "Risk Management", "Executive Updates"],
  },
  {
    title: "AI & Automation",
    skills: ["Agentic AI Implementation", "UiPath", "Power Automate", "Workflow Automation", "Process Mining"],
  },
  {
    title: "Enterprise Systems",
    skills: ["Contract Lifecycle Management", "Anaplan", "Procure-to-Pay", "Procurement Systems", "System Modernization"],
  },
  {
    title: "Analytics",
    skills: ["SQL", "Python", "Power BI", "Tableau", "Predictive Modeling"],
  },
];

const heroHighlights = [
  {
    value: "12 years",
    label: "Technical program leadership",
  },
  {
    value: "8+",
    label: "AI/workflow automation use cases delivered",
  },
  {
    value: "250+",
    label: "Delivery blockers resolved across planning workstreams",
  },
];

function validatePortfolioData() {
  const requiredProjectFields: Array<keyof Project> = ["title", "category", "summary", "impact", "skills", "icon"];

  console.assert(impactMetrics.length >= 4, "Expected at least 4 impact metrics.");
  console.assert(projects.length >= 4, "Expected at least 4 featured projects.");
  console.assert(skillGroups.length >= 3, "Expected at least 3 skill groups.");

  projects.forEach((project) => {
    requiredProjectFields.forEach((field) => {
      console.assert(Boolean(project[field]), `Project is missing required field: ${String(field)}`);
    });
    console.assert(Array.isArray(project.skills), `${project.title} skills should be an array.`);
    console.assert(project.skills.length > 0, `${project.title} should include at least one skill.`);
  });
}

validatePortfolioData();

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}

export default function SudharshanPortfolio() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      setIsDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((current) => {
      const next = !current;
      window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div
      className={`${
        isDarkMode ? "dark bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-950"
      } min-h-screen transition-colors duration-300`}
    >
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-slate-200/80 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-950/90"
            : "border-transparent bg-white/70 dark:bg-slate-950/70"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-all duration-300 ${
            isScrolled ? "py-4" : "py-5 md:py-6"
          }`}
        >
          <a href="#home" className="min-w-0 tracking-tight">
            <span
              className={`block whitespace-nowrap font-semibold transition-all duration-300 ${
                isScrolled ? "text-sm text-slate-950 dark:text-white sm:text-base" : "text-lg text-slate-950 dark:text-white sm:text-2xl lg:text-3xl"
              }`}
            >
              Sudharshan Soma
            </span>
            <span
              className={`hidden overflow-hidden text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500 transition-all duration-300 dark:text-slate-400 sm:block ${
                isScrolled ? "max-h-0 opacity-0" : "mt-1 max-h-5 opacity-100"
              }`}
            >
              Portfolio
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
            <a href="#impact" className="hover:text-slate-950 dark:hover:text-white">Impact</a>
            <a href="#projects" className="hover:text-slate-950 dark:hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-slate-950 dark:hover:text-white">Skills</a>
            <a href="/Sudharshan_Soma.pdf" target="_blank" rel="noreferrer" className="hover:text-slate-950 dark:hover:text-white">
              Resume
            </a>
            <a href="#contact" className="hover:text-slate-950 dark:hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button
              aria-label="Toggle dark mode"
              className="rounded-full border-slate-200 bg-white/70 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
              onClick={toggleTheme}
              type="button"
              variant="outline"
            >
              {isDarkMode ? "Light" : "Dark"}
            </Button>
            <Button className="hidden rounded-full sm:inline-flex" asChild>
              <a href="mailto:soma.sudharshan.reddy@gmail.com">
                Contact
                <Icon name="mail" className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-6 pb-20 pt-8 md:pb-28 md:pt-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(71,85,105,0.14),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
          <div className="mx-auto mb-10 grid max-w-7xl gap-3 rounded-lg border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <div key={highlight.value} className="rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-800/70">
                <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">{highlight.value}</p>
                <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">{highlight.label}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                Technical Program Manager · Agentic AI · Enterprise Systems · Workflow Automation
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-7xl">
                I lead complex transformation programs, turning ambiguous problems into measurable enterprise impact.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
                I specialize in agentic AI implementation, workflow automation, procurement transformation, enterprise system modernization, and cross-functional program recovery.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="#projects">
                    View featured projects
                    <Icon name="arrow" className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href="/Sudharshan_Soma.pdf" target="_blank" rel="noreferrer">
                    Download Resume
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href="#impact">See impact metrics</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-xl dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-slate-950/40">
                <CardContent className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    Portfolio Snapshot
                  </p>
                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="text-4xl font-semibold">12 years</p>
                      <p className="mt-2 text-slate-600 dark:text-slate-300">
                        Driving technical programs, automation, procurement, and enterprise systems.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
                        <p className="text-2xl font-semibold">8+</p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">AI/workflow automation use cases delivered</p>
                      </div>
                      <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
                        <p className="text-2xl font-semibold">250+</p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Delivery blockers resolved</p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Current focus</p>
                      <p className="mt-2 text-lg font-semibold">
                        Agentic AI implementation, workflow automation, and enterprise transformation programs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="impact" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Impact Dashboard"
              title="A portfolio built around outcomes, not just responsibilities."
              description="The strongest stories combine technical execution, stakeholder alignment, and measurable business value."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={metric.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    <CardContent className="p-6">
                      <p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{metric.value}</p>
                      <p className="mt-3 font-semibold leading-6 text-slate-700 dark:text-slate-200">{metric.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{metric.context}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white px-6 py-20 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected transformation stories"
              description="Each project is framed like a case study: problem, role, approach, and quantified impact."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="group h-full rounded-[2rem] border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    <CardContent className="p-7">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="rounded-2xl bg-slate-950 p-3 text-white dark:bg-slate-100 dark:text-slate-950">
                          <Icon name={project.icon} className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
                      {project.image ? (
                        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                          <Image
                            alt={project.image.alt}
                            className="h-auto w-full object-cover"
                            height={620}
                            src={project.image.src}
                            width={900}
                          />
                        </div>
                      ) : null}
                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>
                      <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Impact</p>
                        <p className="mt-2 font-semibold text-slate-950 dark:text-white">{project.impact}</p>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.href ? (
                          <Button className="rounded-full" asChild>
                            <a href={project.href}>
                              Read case study
                              <Icon name="arrow" className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ) : null}
                        {project.links?.map((link) => (
                          <Button key={link.href} variant="outline" className="rounded-full" asChild>
                            <a href={link.href} target="_blank" rel="noreferrer">
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Skills"
              title="The capabilities behind the outcomes"
              description="A mix of technical fluency, program execution, business process understanding, and executive communication."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => (
                <Card key={group.title} className="rounded-3xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Let’s connect around AI transformation, automation, and enterprise program leadership.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I’m interested in roles and conversations where complex systems, cross-functional execution, and measurable business outcomes come together.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" className="rounded-full" asChild>
                <a href="mailto:soma.sudharshan.reddy@gmail.com">
                  Email me
                  <Icon name="mail" className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-950"
                asChild
              >
                <a href="https://www.linkedin.com/in/sudarshan-soma/" target="_blank" rel="noreferrer">
                  LinkedIn
                  <Icon name="linkedin" className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
