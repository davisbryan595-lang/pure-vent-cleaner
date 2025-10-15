import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroBg from "@/assets/hero-bg.jpg";
import techImg from "@/assets/about-technician.jpg";

const testimonials = [
  {
    name: "Sarah L.",
    text: "They did an amazing job! The air feels so much fresher.",
    rating: 5,
    image: heroBg,
  },
  {
    name: "Mike R.",
    text: "Professional, fast, and honest pricing.",
    rating: 5,
    image: techImg,
  },
  {
    name: "Jennifer K.",
    text: "Best duct cleaning service in the area. Highly recommend!",
    rating: 5,
    image: heroBg,
  },
  {
    name: "David M.",
    text: "My allergies have improved significantly since they cleaned our ducts.",
    rating: 5,
    image: techImg,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden bg-card border-border">
                    <div className="h-40 w-full overflow-hidden">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex gap-1 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-card-foreground mb-2 italic">"{t.text}"</p>
                      <p className="font-semibold text-card-foreground">— {t.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background/80 backdrop-blur" />
            <CarouselNext className="bg-background/80 backdrop-blur" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
