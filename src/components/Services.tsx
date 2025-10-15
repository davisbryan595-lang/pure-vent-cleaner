import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Home, Flame, Sparkles } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Air Duct Cleaning",
    description: "Remove dust, debris, and allergens from HVAC ducts.",
  },
  {
    icon: Home,
    title: "Vent Cleaning",
    description: "Improve airflow and indoor air quality with professional vent cleaning.",
  },
  {
    icon: Flame,
    title: "Dryer Vent Cleaning",
    description: "Prevent lint buildup and reduce fire hazards.",
  },
  {
    icon: Sparkles,
    title: "System Sanitization",
    description: "Kill bacteria and odors, leaving your air fresh and healthy.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Cleaning Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="animate-fade-up hover:shadow-xl transition-all duration-300 border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-up">
          <Button variant="cta" size="lg" onClick={scrollToContact}>
            Request a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
