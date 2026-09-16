import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudharshan-soma.vercel.app"),
  title: "Sudharshan Soma | Technical Program Manager",
  description: "Technical Program Manager leading enterprise systems, AI and workflow automation, supply chain, and critical-infrastructure programs with measurable business outcomes.",
  openGraph: {
    title: "Sudharshan Soma | Technical Program Manager",
    description: "Technical Program Manager leading enterprise systems, AI and workflow automation, supply chain, and critical-infrastructure programs with measurable business outcomes.",
    url: "https://sudharshan-soma.vercel.app",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sudharshan Soma | Technical Program Manager" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudharshan Soma | Technical Program Manager",
    description: "Technical Program Manager leading enterprise systems, AI and workflow automation, supply chain, and critical-infrastructure programs with measurable business outcomes.",
    images: [{ url: "/opengraph-image", alt: "Sudharshan Soma | Technical Program Manager" }],
  },
  other: {
    "twitter:url": "https://sudharshan-soma.vercel.app",
  },
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", useDark);
    document.documentElement.style.colorScheme = useDark ? "dark" : "light";
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
