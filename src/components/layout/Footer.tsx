import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/contact" },
  ],
  services: [
    { name: "GRC Services", href: "/services" },
    { name: "VAPT Services", href: "/services" },
    { name: "Certifications", href: "/certifications" },
  ],
  certifications: [
    { name: "ISO 27001", href: "/certifications" },
    { name: "ISO 22301", href: "/certifications" },
    { name: "DPDP Compliance", href: "/certifications" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold font-playfair">
                Verion<span className="text-primary">Security</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Empowering organizations with comprehensive cybersecurity solutions.
              Your trusted partner in GRC and VAPT services.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 font-playfair">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 font-playfair">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 font-playfair">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4" />
                <span>info@verionsecurity.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Verion Security. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
