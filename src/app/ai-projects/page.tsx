import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AIProjectsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Projects</h1>
          <p className="text-xl text-muted-foreground">
            Machine learning and AI applications
          </p>
        </div>
        
        {/* Embedded AI Application */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              src="https://vtsigler-career-conversation.hf.space"
              className="w-full h-96 md:h-[450px] border rounded-lg shadow-lg"
              title="Career Conversation AI"
            />
          </div>
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