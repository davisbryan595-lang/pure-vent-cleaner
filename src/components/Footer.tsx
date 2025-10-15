import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2025 Pure Vent Services – All Rights Reserved
          </p>
          
          <a
            href="https://facebook.com/pureventservices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span className="text-sm">Follow us on Facebook</span>
          </a>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-secondary-foreground/70">
            #DuctCleaning #VentCleaning #CleanAir #IndoorAirQuality #HealthyHome #HomeMaintenance #HVAC #AllergyRelief #BreatheEasy #DeepClean #DustFree
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
