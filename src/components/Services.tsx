import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import techImg from "@/assets/about-technician.jpg";

const services = [
  {
    key: "air-duct-cleaning",
    title: "Air Duct Cleaning",
    description: "Remove dust, debris, and allergens from HVAC ducts.",
    image: techImg,
  },
  {
    key: "vent-cleaning",
    title: "Vent Cleaning",
    description: "Improve airflow and indoor air quality with professional vent cleaning.",
    image: heroBg,
  },
  {
    key: "dryer-vent-cleaning",
    title: "Dryer Vent Cleaning",
    description: "Prevent lint buildup and reduce fire hazards.",
    image: heroBg,
  },
  {
    key: "system-sanitization",
    title: "System Sanitization",
    description: "Kill bacteria and odors, leaving your air fresh and healthy.",
    image: techImg,
  },
];

const Services = () => {
  const scrollToContact = (service?: string) => {
    const params = new URLSearchParams(window.location.search);
    if (service) params.set("service", service);
    const newUrl = `${window.location.pathname}?${params.toString()}#contact`;
    window.history.replaceState({}, "", newUrl);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Cleaning Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.key}
              className="animate-fade-up overflow-hidden group border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-primary-foreground mb-4">{service.description}</p>
                  <Button variant="cta" size="sm" onClick={() => scrollToContact(service.title)}>
                    Request {service.title}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-up">
          <Button variant="cta" size="lg" onClick={() => scrollToContact()}>
            Request a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
