import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AIProjectsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">AI Projects</h1>
          <p className="text-xl text-muted-foreground">
            Machine learning and AI applications
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/analytics">Analytics Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
