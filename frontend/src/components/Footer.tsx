import { useState } from "react";
import { Activity, MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const companyLinks = [
    { name: "Who We Are", href: "#about" },
    { name: "Why Partner With Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-black pt-12 pb-8 relative overflow-hidden border-t border-white/10 font-sans">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10">
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#63c1b3]/10 p-2 rounded-xl border border-[#63c1b3]/20">
                <Activity className="w-5 h-5 text-[#63c1b3]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-tight text-[#63c1b3] uppercase leading-none">
                  Broadcast
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-[#63c1b3] uppercase leading-none mt-1 opacity-80">
                  Digitally
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Your Partner in the New Era of Media.
            </p>
          </div>

          {/* Column 2: Contact Details */}
          <div className="flex flex-col space-y-4">
            <div
              className="cursor-pointer md:cursor-default"
              onClick={() => setIsConnectOpen(!isConnectOpen)}
            >
              <h3 className="text-base font-bold text-white">Contact Details</h3>
            </div>

            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://maps.google.com/?q=C-18, Greater Kailash, New Delhi - 110048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-all duration-300 text-xs flex items-center gap-2 group"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  C-18, Greater Kailash, New Delhi - 110048
                </a>
              </li>

              <li>
                <a
                  href="tel:+919899287454"
                  className="text-white/60 hover:text-white transition-all duration-300 text-xs flex items-center gap-2 group"
                >
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  +91 9899287454
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@broadcastdigitally.com"
                  className="text-white/60 hover:text-white transition-all duration-300 text-xs flex items-center gap-2 group"
                >
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  contact@broadcastdigitally.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.broadcastdigitally.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-all duration-300 text-xs flex items-center gap-2 group"
                >
                  <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                  www.broadcastdigitally.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col space-y-4">
            <div
              className="cursor-pointer md:cursor-default"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              <h3 className="text-base font-bold text-white">Company</h3>
            </div>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-all duration-300 text-xs flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center">
          <div className="flex flex-row gap-2 md:gap-4 items-center text-[8px] sm:text-[10px] uppercase tracking-widest text-white/40 text-center">
            <p>© Broadcast Digitally {new Date().getFullYear()}</p>
            <span className="text-white/20">|</span>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
