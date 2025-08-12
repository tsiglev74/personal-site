"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/analytics", label: "Analytics" },
    { href: "/ai-projects", label: "AI Projects" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
        {/* Left spacer */}
        <div className="w-20"></div>
        
        {/* Desktop Navigation - Centered */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-3">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link 
                  href={item.href} 
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:flex">
            <a href="https://github.com/tsiglev74" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:flex">
            <a href="https://www.linkedin.com/in/vlad-tsigler/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t space-y-2">
              <Button asChild size="sm" className="w-full">
                <a href="https://github.com/tsiglev74" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
              <Button asChild size="sm" className="w-full">
                <a href="https://www.linkedin.com/in/vlad-tsigler/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
