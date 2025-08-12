import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Analytics Projects</h1>
          <p className="text-xl text-muted-foreground">
            Data science and analytics work
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/ai-projects">AI Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
