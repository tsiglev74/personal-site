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
        </div>
      </body>
    </html>
  );
}