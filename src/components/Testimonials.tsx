import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    text: "They did an amazing job! The air feels so much fresher.",
    rating: 5,
  },
  {
    name: "Mike R.",
    text: "Professional, fast, and honest pricing.",
    rating: 5,
  },
  {
    name: "Jennifer K.",
    text: "Best duct cleaning service in the area. Highly recommend!",
    rating: 5,
  },
  {
    name: "David M.",
    text: "My allergies have improved significantly since they cleaned our ducts.",
    rating: 5,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="animate-fade-up border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-card-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
