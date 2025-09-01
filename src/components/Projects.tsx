import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
    image: "🛒",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, file sharing, and team communication features. Used by 500+ teams worldwide.",
    image: "📋",
    tech: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Real-time weather data visualization dashboard with predictive analytics and historical data insights for agricultural planning.",
    image: "🌤️",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Social Media Analytics",
    description: "Comprehensive social media analytics platform providing insights into engagement, reach, and audience demographics across platforms.",
    image: "📊",
    tech: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    github: "#",
    live: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from complex web applications to innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-portfolio-accent/30 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl bg-accent/50 rounded-xl p-3">
                        {project.image}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-portfolio-accent transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge className="mt-1 bg-portfolio-accent/20 text-portfolio-accent border-portfolio-accent/30">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-portfolio-accent/10 hover:border-portfolio-accent/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-portfolio-accent to-yellow-500 hover:from-yellow-500 hover:to-portfolio-accent text-black font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="hover:bg-accent/50 hover:border-portfolio-accent/30"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-portfolio-accent/10 hover:border-portfolio-accent hover:text-portfolio-accent transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;