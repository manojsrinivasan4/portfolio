import { Download, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/download-resume");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Manoj_Srinivasan_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast({
          title: "Resume Downloaded",
          description: "Resume has been downloaded successfully.",
        });
      } else {
        throw new Error("Download failed");
      }
    } catch (error) {
      toast({
        title: "Download Error",
        description: "Resume download will be available soon.",
        variant: "destructive",
      });
    }
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
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
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
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>9080363287</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>manojsrinivasan3473@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
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
