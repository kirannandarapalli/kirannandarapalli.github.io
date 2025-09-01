import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge 
              variant="secondary" 
              className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20 hover:bg-portfolio-accent/20 transition-all duration-300"
            >
              Available for Work
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Hey There,{" "}
              <span className="bg-gradient-to-r from-portfolio-accent via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                I'm Alex
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web applications. 
              I turn ideas into digital experiences that users love.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-portfolio-accent to-yellow-500 hover:from-yellow-500 hover:to-portfolio-accent text-black font-semibold shadow-[var(--shadow-accent)] hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-accent/50 hover:border-portfolio-accent transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 pt-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-accent)] transition-all duration-500 group">
            <img 
              src={heroImage} 
              alt="Professional headshot"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-[var(--shadow-card)] border border-border">
            <div className="text-2xl">👋</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;