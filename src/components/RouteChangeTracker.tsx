"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// Define the dataLayer type more specifically
interface DataLayerEvent {
  event: string;
  page_location: string;
  page_path: string;
  page_title: string;
  page_referrer?: string;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

function RouteChangeTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtual_pageview",
      page_location: window.location.origin + url,
      page_path: pathname,
      page_title: document.title,
      page_referrer: document.referrer || undefined,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function RouteChangeTracker() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTrackerInner />
    </Suspense>
  );
}