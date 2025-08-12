import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Resume() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Vlad Tsigler</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Marketing Analytics Professional & AI Enthusiast
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="outline" size="sm">
              <a href="https://www.linkedin.com/in/vlad-tsigler/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://github.com/tsiglev74" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>

        {/* Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Marketing Analytics and Digital Business Intelligence Leader with a proven track record of building and leading high-performing teams. Expertise in driving analytical rigor to develop and implement business initiatives aimed at enhancing top and bottom-line growth.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Job 1 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">[Job Title]</h3>
                  <p className="text-muted-foreground">[Company Name]</p>
                </div>
                <span className="text-sm text-muted-foreground">[Date Range]</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>[Key achievement or responsibility]</li>
                <li>[Key achievement or responsibility]</li>
                <li>[Key achievement or responsibility]</li>
              </ul>
            </div>

            <Separator />

            {/* Job 2 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">[Job Title]</h3>
                  <p className="text-muted-foreground">[Company Name]</p>
                </div>
                <span className="text-sm text-muted-foreground">[Date Range]</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>[Key achievement or responsibility]</li>
                <li>[Key achievement or responsibility]</li>
                <li>[Key achievement or responsibility]</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">MBA</h3>
                <p className="text-muted-foreground">DePaul University</p>
              </div>
              <span className="text-sm text-muted-foreground">[Graduation Year]</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Bachelor of Science in International Business and Finance</h3>
                <p className="text-muted-foreground">Bradley University</p>
              </div>
              <span className="text-sm text-muted-foreground">[Graduation Year]</span>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Analytics & Data Science</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">[Skill 1]</Badge>
                  <Badge variant="secondary">[Skill 2]</Badge>
                  <Badge variant="secondary">[Skill 3]</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Programming & Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">[Skill 1]</Badge>
                  <Badge variant="secondary">[Skill 2]</Badge>
                  <Badge variant="secondary">[Skill 3]</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Business & Marketing</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">[Skill 1]</Badge>
                  <Badge variant="secondary">[Skill 2]</Badge>
                  <Badge variant="secondary">[Skill 3]</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">[Certification Name]</span>
                <span className="text-sm text-muted-foreground">[Year]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">[Certification Name]</span>
                <span className="text-sm text-muted-foreground">[Year]</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">[Project Name]</h4>
              <p className="text-sm text-muted-foreground mb-2">[Brief description of the project and your role]</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">[Technology]</Badge>
                <Badge variant="outline" className="text-xs">[Technology]</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-1">[Project Name]</h4>
              <p className="text-sm text-muted-foreground mb-2">[Brief description of the project and your role]</p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">[Technology]</Badge>
                <Badge variant="outline" className="text-xs">[Technology]</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
