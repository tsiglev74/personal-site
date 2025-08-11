import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for analyzing business metrics and KPIs using React and D3.js",
      technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/tsiglev74/dashboard",
      demo: "https://dashboard-demo.vercel.app",
      featured: true,
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for predictive analytics with automated model training and deployment",
      technologies: ["Python", "Scikit-learn", "Docker", "AWS"],
      github: "https://github.com/tsiglev74/ml-pipeline",
      featured: true,
    },
    {
      title: "Real-time Analytics",
      description: "Real-time data processing and visualization system using Apache Kafka and Elasticsearch",
      technologies: ["Apache Kafka", "Elasticsearch", "Python", "React"],
      github: "https://github.com/tsiglev74/realtime-analytics",
    },
    {
      title: "Data Visualization Library",
      description: "Custom React components for creating interactive charts and graphs",
      technologies: ["React", "D3.js", "TypeScript", "Storybook"],
      github: "https://github.com/tsiglev74/viz-components",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Analytics Projects</h1>
          <p className="text-xl text-muted-foreground">
            A collection of data science and analytics projects I&apos;ve built
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className={project.featured ? "ring-2 ring-primary/20" : ""}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {project.title}
                      {project.featured && (
                        <Badge variant="default" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to collaborate on a project or have questions?
          </p>
          <Button asChild>
            <a href="mailto:contact@example.com">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
} 