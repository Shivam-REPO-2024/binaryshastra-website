import { Youtube, Linkedin, Github, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: Youtube,
      href: "https://youtube.com/@binaryshastra",
      label: "YouTube",
      color: "hover:text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shivam-kumar-mishra",
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    },
    {
      icon: Github,
      href: "https://github.com/Shivam-REPO-2024",
      label: "GitHub",
      color: "hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
    },
    {
      icon: Mail,
      href: "mailto:contact@binaryshastra.com",
      label: "Email",
      color: "hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#specializations", label: "Courses" },
    { href: "#youtube", label: "YouTube" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-primary/20">
      {/* Neon line effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-muted">
  <img
    src={logo}
    alt="BinaryShastra Logo"
    className="w-full h-full object-cover"
  />
</div>
              <span className="text-2xl font-bold font-['Orbitron'] gradient-text">
                BinaryShastra
              </span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building Future Coders with Python. Learn programming the smart way 
              with expert guidance for CBSE, ICSE & WB Board students.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Orbitron']">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Orbitron']">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@binaryshastra.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                binaryshastra26contact@gmail.com
              </a>
              
              <div className="glass-panel p-4 rounded-xl">
                <p className="text-sm text-muted-foreground mb-2">Ready to start learning?</p>
                <a
                  href="#contact"
                  className="neon-button px-4 py-2 rounded-lg text-sm text-primary-foreground font-semibold inline-flex items-center gap-2"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BinaryShastra. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shivam Kumar Mishra
            </p>
          </div>
          
          {/* Tagline */}
          <div className="text-center mt-8">
            <p className="text-lg font-['Orbitron'] gradient-text neon-text">
              "Building Future Coders with Python"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
