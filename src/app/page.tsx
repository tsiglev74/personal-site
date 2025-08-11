import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Vlad Tsigler</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Data Scientist & Full-Stack Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            I build analytics projects, AI demos, and write about data science, 
            machine learning, and web development.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/apps">AI Apps</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume">Resume</Link>
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Quick Links */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Analytics Projects
            </CardTitle>
            <CardDescription>
              Data analysis, visualization, and insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Explore my data science projects and analytics work.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/projects">Browse Projects</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🤖 AI Applications
            </CardTitle>
            <CardDescription>
              Interactive AI demos and tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Try out my AI-powered applications and demos.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/apps">Try Apps</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📝 Notes & Blog
            </CardTitle>
            <CardDescription>
              Technical writing and insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Read my thoughts on technology and development.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/blog">Read More</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">JavaScript/TypeScript</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">Data Analysis</Badge>
          <Badge variant="secondary">SQL</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">Git</Badge>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Interested in collaborating or just want to say hello?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="outline">
            <a href="https://github.com/tsiglev74" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:contact@example.com">
              Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
