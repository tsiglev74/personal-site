import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, Mail, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  const experience = [
    {
      title: "Senior Data Scientist",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Lead data science initiatives, develop ML models, and create analytics solutions for business stakeholders.",
      achievements: [
        "Built predictive models that improved business metrics by 25%",
        "Led a team of 3 data scientists on multiple projects",
        "Implemented automated ML pipelines reducing deployment time by 60%",
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"],
    },
    {
      title: "Data Analyst",
      company: "Analytics Firm",
      period: "2020 - 2022",
      description: "Performed data analysis, created dashboards, and provided insights to support business decisions.",
      achievements: [
        "Created interactive dashboards used by 100+ stakeholders",
        "Automated reporting processes saving 20 hours per week",
        "Developed data quality monitoring systems",
      ],
      technologies: ["SQL", "Python", "Tableau", "Power BI", "Excel"],
    },
    {
      title: "Junior Developer",
      company: "Startup",
      period: "2019 - 2020",
      description: "Full-stack development with focus on data visualization and analytics features.",
      achievements: [
        "Built real-time analytics dashboard",
        "Implemented data processing pipelines",
        "Contributed to product development and user experience",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "D3.js"],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "University Name",
      period: "2018 - 2020",
      description: "Specialized in machine learning, statistics, and data engineering.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2014 - 2018",
      description: "Focused on software engineering and algorithms.",
    },
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript/TypeScript", "SQL", "R", "Java"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "NLP"],
    "Data Engineering": ["Apache Spark", "Kafka", "Airflow", "Docker", "Kubernetes"],
    "Web Development": ["React", "Next.js", "Node.js", "Django", "FastAPI"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
    "Data Visualization": ["D3.js", "Tableau", "Power BI", "Plotly", "Matplotlib"],
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Vlad Tsigler</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Senior Data Scientist & Full-Stack Developer
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="outline" size="sm">
              <a href="mailto:contact@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://github.com/tsiglev74" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <CardDescription className="text-base">
                            {job.company} • {job.period}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <ul className="space-y-2 mb-4">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator />

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>
                        {edu.school} • {edu.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-3 text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">AWS Certified Solutions Architect</h3>
                  <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Google Cloud Professional Data Engineer</h3>
                  <p className="text-sm text-muted-foreground">Google Cloud</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">TensorFlow Developer Certificate</h3>
                  <p className="text-sm text-muted-foreground">Google</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 