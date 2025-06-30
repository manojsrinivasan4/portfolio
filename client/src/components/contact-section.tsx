import { useState } from "react";
import { Phone, Mail, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9080363287",
      color: "primary",
    },
    {
      icon: Mail,
      label: "Email", 
      value: "manojsrinivasan3473@gmail.com",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manoj-srinivasan2345",
      color: "accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      color: "success",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/manoj-srinivasan2345/", color: "bg-primary hover:bg-secondary" },
  ];

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600">
            Ready to transform your data into business value? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const bgColorClass = `bg-${info.color}/10`;
                const textColorClass = `text-${info.color}`;

                const getContactLink = () => {
                  if (info.label === "Phone") {
                    return `tel:+91${info.value.replace(/\D/g, '')}`;
                  } else if (info.label === "Email") {
                    return `mailto:${info.value}`;
                  } else if (info.label === "LinkedIn") {
                    return `https://${info.value}`;
                  }
                  return null;
                };

                const contactLink = getContactLink();

                const content = (
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${bgColorClass} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`${textColorClass} w-6 h-6`} />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{info.label}</div>
                      <div className="text-slate-600">{info.value}</div>
                    </div>
                  </div>
                );

                return (
                  <div key={index}>
                    {contactLink ? (
                      <a
                        href={contactLink}
                        target={info.label === "LinkedIn" ? "_blank" : undefined}
                        rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="block hover:bg-slate-50 p-2 rounded-lg transition-colors duration-200"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="p-2">
                        {content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${social.color} text-white rounded-lg flex items-center justify-center transition-colors duration-200`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
