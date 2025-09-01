import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS"],
    description: "Creating responsive and interactive user interfaces"
  },
  {
    title: "Backend Development", 
    icon: "⚙️",
    skills: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB"],
    description: "Building robust server-side applications and APIs"
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️", 
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux", "Nginx"],
    description: "Deploying and scaling applications in the cloud"
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: ["Git", "Figma", "Jest", "Webpack", "Vite", "GraphQL"],
    description: "Development tools and methodologies I use daily"
  }
];

const stats = [
  { label: "Years Experience", value: "5+", icon: "📅" },
  { label: "Projects Completed", value: "50+", icon: "🚀" },
  { label: "Happy Clients", value: "30+", icon: "😊" },
  { label: "Code Commits", value: "2K+", icon: "💻" }
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-portfolio-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] border-border/50 hover:border-portfolio-accent/30"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl bg-accent/50 rounded-xl p-3 group-hover:bg-portfolio-accent/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-portfolio-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-accent/30 hover:bg-portfolio-accent/20 hover:text-portfolio-accent hover:border-portfolio-accent/30 transition-all duration-200 cursor-default text-xs px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;