import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Get a Quote Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="cta"
          size="lg"
          onClick={scrollToContact}
          className="shadow-2xl rounded-full"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Get a Free Quote
        </Button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-40">
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollToTop}
            className="shadow-2xl rounded-full h-12 w-12"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
