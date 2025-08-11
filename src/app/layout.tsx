import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import GTM from "@/components/Gtm";
import RouteChangeTracker from "@/components/RouteChangeTracker";

export const metadata: Metadata = {
  title: "Vlad Tsigler — Personal Site",
  description: "Data Scientist & Full-Stack Developer. Analytics projects, AI demos, and technical insights.",
  keywords: ["data science", "machine learning", "web development", "analytics", "AI"],
  authors: [{ name: "Vlad Tsigler" }],
  creator: "Vlad Tsigler",
  openGraph: {
    title: "Vlad Tsigler — Personal Site",
    description: "Data Scientist & Full-Stack Developer. Analytics projects, AI demos, and technical insights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vlad Tsigler — Personal Site",
    description: "Data Scientist & Full-Stack Developer. Analytics projects, AI demos, and technical insights.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <GTM />
        <RouteChangeTracker />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t bg-muted/50">
            <div className="mx-auto max-w-6xl p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Vlad Tsigler · Built with Next.js, Tailwind, shadcn/ui
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <a href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                  <a href="/sitemap.xml" className="hover:text-foreground transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}