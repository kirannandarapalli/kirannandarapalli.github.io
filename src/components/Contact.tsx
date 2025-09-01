import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kiran@nandarapalli.com",
      href: "mailto:kiran@nandarapalli.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <section className="py-20 px-4 bg-accent/30" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're looking for a developer, have a question, or just want to connect, 
                don't hesitate to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center group-hover:bg-portfolio-accent/30 transition-colors">
                    <info.icon className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium group-hover:text-portfolio-accent transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-accent/50 rounded-lg flex items-center justify-center hover:bg-portfolio-accent/20 hover:text-portfolio-accent transition-all duration-200 hover:scale-110"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="h-fit">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your project and see how I can help you achieve your goals. 
                I'm available for freelance work and full-time opportunities.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-portfolio-accent to-yellow-500 hover:from-yellow-500 hover:to-portfolio-accent text-black font-semibold shadow-[var(--shadow-accent)]"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full hover:bg-portfolio-accent/10 hover:border-portfolio-accent hover:text-portfolio-accent"
                >
                  Schedule a Call
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Typically responds within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;