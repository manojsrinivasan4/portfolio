import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@assets/1702017134417_1751303201057.jfif";

export default function HeroSection() {
  const { toast } = useToast();

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/manoj-srinivasan2345/", "_blank");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4">
                Manoj Srinivasan
              </h1>
              <p className="text-xl lg:text-2xl text-primary font-medium mb-4">
                Business Analyst | Data & Operations Analyst | Power BI Developer
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Driving KPI Reporting, Process Optimization & Strategic Insights in BFSI Domain
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={handleLinkedInClick}
                className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View LinkedIn Profile
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <a href="tel:+919080363287" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <Phone className="w-4 h-4 text-primary" />
                <span>9080363287</span>
              </a>
              <a href="mailto:manojsrinivasan3473@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                <Mail className="w-4 h-4 text-primary" />
                <span>manojsrinivasan3473@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Manoj Srinivasan - Business Analyst and Data Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-medium">4+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
