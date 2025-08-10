"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link href="/" className="font-semibold text-lg">
          Vlad • Personal Site
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-3">
            <NavigationMenuItem>
              <Link href="/projects" className="text-sm hover:underline">Projects</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/apps" className="text-sm hover:underline">AI Apps</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resume" className="text-sm hover:underline">Resume</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/privacy" className="text-sm hover:underline">Privacy</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild size="sm">
          <a href="https://github.com/tsiglev74" target="_blank" rel="noreferrer">GitHub</a>
        </Button>
      </div>
    </header>
  );
}
