import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";

export default function AppsPage() {
  const apps = [
    {
      title: "AI Text Summarizer",
      description: "Intelligent text summarization using advanced NLP models to extract key insights from long documents",
      features: ["Multi-language support", "Customizable length", "Real-time processing"],
      status: "live",
      demo: "https://ai-summarizer.vercel.app",
      featured: true,
    },
    {
      title: "Image Classification Tool",
      description: "Upload images and get instant AI-powered classification with confidence scores",
      features: ["Multiple model support", "Batch processing", "API access"],
      status: "live",
      demo: "https://image-classifier.vercel.app",
      featured: true,
    },
    {
      title: "Sentiment Analysis API",
      description: "Real-time sentiment analysis for social media monitoring and customer feedback",
      features: ["REST API", "WebSocket support", "Custom training"],
      status: "beta",
      demo: "https://sentiment-api.vercel.app",
    },
    {
      title: "AI Chat Assistant",
      description: "Conversational AI assistant powered by large language models for customer support",
      features: ["Multi-turn conversations", "Context awareness", "Integration ready"],
      status: "development",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-green-100 text-green-800">Live</Badge>;
      case "beta":
        return <Badge className="bg-yellow-100 text-yellow-800">Beta</Badge>;
      case "development":
        return <Badge className="bg-blue-100 text-blue-800">In Development</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Applications</h1>
          <p className="text-xl text-muted-foreground">
            Interactive AI demos and tools I&apos;ve built to showcase machine learning capabilities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app, index) => (
            <Card key={index} className={app.featured ? "ring-2 ring-primary/20" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      {app.title}
                      {app.featured && (
                        <Badge variant="default" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {app.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  {getStatusBadge(app.status)}
                </div>
                
                <div className="space-y-2 mb-4">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  {app.demo && (
                    <Button asChild size="sm">
                      <a href={app.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-2" />
                        Try Demo
                      </a>
                    </Button>
                  )}
                  <Button asChild size="sm" variant="outline">
                    <a href={`/apps/${app.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in AI integration or custom solutions?
          </p>
          <Button asChild>
            <a href="mailto:contact@example.com">Let&apos;s Discuss</a>
          </Button>
        </div>
      </div>
    </div>
  );
} 