import { useEffect, useRef, useState } from "react";
import beforeImage from "@/assets/gallery-before-1.jpg";
import afterImage from "@/assets/gallery-after-1.jpg";

const galleryItems = [
  {
    before: beforeImage,
    after: afterImage,
    caption: "When it comes to duct cleaning, we're the team you can trust. Say goodbye to dust and hello to fresh, clean air.",
  },
];

const reels = [
  "https://www.facebook.com/reel/1537240857299226",
  "https://www.facebook.com/reel/1160821272627752",
  "https://www.facebook.com/reel/4225875760963976",
  "https://www.facebook.com/reel/682141017549655",
];

const BeforeAfterSlider = ({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setPosition(Math.round((x / rect.width) * 100));
    };

    const onPointerMove = (e: PointerEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const el = container;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        window.addEventListener("mousemove", onPointerMove);
        window.addEventListener("mouseup", onUp);
      } else {
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("touchend", onUp as any);
      }
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp as any);
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("touchstart", onDown as any, { passive: true });

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("touchstart", onDown as any);
      onUp();
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} className="relative overflow-hidden rounded-xl shadow-lg cursor-col-resize select-none">
        <img src={afterSrc} alt="After cleaning" className="w-full h-auto block" />
        <div className="absolute inset-0" style={{ width: `${position}%`, overflow: "hidden" }}>
          <img src={beforeSrc} alt="Before cleaning" className="w-full h-auto block" />
        </div>
        <div className="absolute inset-y-0" style={{ left: `calc(${position}% - 1px)` }}>
          <div className="h-full w-0.5 bg-white/80" />
        </div>
        <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-lg font-bold">Before</div>
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-lg font-bold">After</div>
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `calc(${position}% - 16px)` }}
        >
          <div className="h-8 w-8 rounded-full bg-background/90 border border-border shadow-md grid place-items-center text-foreground font-bold">⇔</div>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number((e.target as HTMLInputElement).value))}
          className="w-full"
          aria-label="Adjust before/after position"
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>More Before</span>
          <span>More After</span>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-muted-foreground">Highlights from recent projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {reels.map((url) => {
            const embed = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500`;
            return (
              <div key={url} className="aspect-video w-full overflow-hidden rounded-xl shadow-md bg-black/10">
                <iframe
                  src={embed}
                  width="100%"
                  height="100%"
                  className="h-full w-full"
                  scrolling="no"
                  frameBorder={0}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={url}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Before & After Results</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="animate-fade-up">
              <BeforeAfterSlider beforeSrc={item.before} afterSrc={item.after} />
              <p className="mt-6 text-center text-lg text-muted-foreground italic max-w-3xl mx-auto">"{item.caption}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
