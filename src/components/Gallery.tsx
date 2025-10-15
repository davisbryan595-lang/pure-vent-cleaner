import beforeImage from "@/assets/gallery-before-1.jpg";
import afterImage from "@/assets/gallery-after-1.jpg";

const galleryItems = [
  {
    before: beforeImage,
    after: afterImage,
    caption: "When it comes to duct cleaning, we're the team you can trust. Say goodbye to dust and hello to fresh, clean air.",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Before & After Results
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="animate-fade-up">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={item.before}
                    alt="Before cleaning"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold">
                    Before
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={item.after}
                    alt="After cleaning"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold">
                    After
                  </div>
                </div>
              </div>
              <p className="text-center text-lg text-muted-foreground italic max-w-3xl mx-auto">
                "{item.caption}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-lg text-foreground font-semibold">More highlights from our work:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-muted-foreground italic">"Dusty ducts? We'll clear them fast."</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground italic">"Breathe easy, literally. It's amazing what's hiding in your ducts!"</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-muted-foreground italic">"Our powerful extraction removes years of grime — cleaner air, healthier home."</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
