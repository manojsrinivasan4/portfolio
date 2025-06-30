import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    "Business Analysis",
    "Data Analytics", 
    "Power BI Development",
    "Process Optimization",
    "KPI Reporting",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Manoj Srinivasan</span>
            </div>
            <p className="text-slate-400 mb-4">
              Transforming data into business value through analytics, insights, and automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-slate-800 text-slate-300 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <IconComponent className="text-sm w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="text-slate-400">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            © 2024 Manoj Srinivasan. All rights reserved.
          </div>
          <div className="text-slate-400 text-sm mt-4 md:mt-0">
            Built with modern web technologies
          </div>
        </div>
      </div>
    </footer>
  );
}
