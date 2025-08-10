import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Vlad Tsigler — Personal Site",
  description: "Analytics projects, AI demos, and notes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-6xl p-6">{children}</main>
        <footer className="mx-auto max-w-6xl p-6 text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Vlad Tsigler · Built with Next.js, Tailwind, shadcn/ui
        </footer>
      </body>
    </html>
  );
}
