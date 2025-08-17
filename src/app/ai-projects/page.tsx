import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AIProjectsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Projects</h1>
          <p className="text-xl text-muted-foreground">
            Machine learning and AI applications
          </p>
        </div>
        
        {/* Chatbot Section */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3">My Digital Twin (But Cooler)</h2>
            <p className="text-muted-foreground leading-relaxed">
              My personal career spokesperson that never needs coffee breaks! This chatbot has 
              been fed all my professional details and is ready to answer questions about my 
              background, skills, and experience.
            </p>
          </div>
          
          {/* Embedded AI Application */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <iframe
                src="https://vtsigler-career-conversation.hf.space?theme=dark&scale=0.7"
                className="w-full h-[650px] md:h-[750px] border rounded-lg shadow-lg"
                title="Career Conversation AI"
              />
            </div>
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