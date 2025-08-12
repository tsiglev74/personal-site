import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Vlad Tsigler</h1>
          <p className="text-xl text-muted-foreground">
            Data Scientist & Full-Stack Developer
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/analytics">Analytics Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/ai-projects">AI Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
