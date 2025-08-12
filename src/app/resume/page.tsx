import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold">Resume</h1>
          <p className="text-xl text-muted-foreground">
            Professional experience and qualifications
          </p>
          
          <div className="pt-8">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 
