import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead a team of 5 developers building scalable web applications using React, Node.js, and AWS. Architected microservices handling 1M+ daily users.",
    skills: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed responsive web applications using modern JavaScript frameworks. Collaborated with design team to implement pixel-perfect UI components.",
    skills: ["Vue.js", "JavaScript", "Tailwind CSS", "Firebase"],
    link: "#"
  },
  {
    title: "Junior Web Developer",
    company: "WebAgency Pro",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Built custom websites for clients using WordPress and custom PHP solutions. Optimized site performance and improved SEO rankings.",
    skills: ["PHP", "WordPress", "MySQL", "jQuery"],
    link: "#"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building digital solutions that make a difference
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-portfolio-accent/30"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1 group-hover:text-portfolio-accent transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <span className="font-medium text-foreground">{exp.company}</span>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a 
                        href={exp.link}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-muted-foreground hover:text-portfolio-accent"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-accent/50 hover:bg-portfolio-accent/20 hover:text-portfolio-accent transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;