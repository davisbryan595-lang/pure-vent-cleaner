import technicianImage from "@/assets/about-technician.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Pure Vent Services
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At Pure Vent Services, we believe clean air is essential for a healthy life. Our certified team specializes in professional air duct and vent cleaning, helping you eliminate dust, allergens, and buildup that affect your air quality.
              </p>
              <p>
                Whether it's your home or office, we use advanced cleaning systems that restore your HVAC's efficiency and let you truly breathe easy.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <img
              src={technicianImage}
              alt="Professional technician cleaning air duct"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
