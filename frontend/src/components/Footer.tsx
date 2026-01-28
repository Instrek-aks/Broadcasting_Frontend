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
              <h3 className="text-base font-bold text-white mb-1">Contact Details</h3>
            </div>

            <div className={`space-y-3 md:block ${isConnectOpen ? "block" : "hidden"}`}>
              <div className="flex items-start gap-3 group">
                <div className="bg-primary/10 p-1.5 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>
                <div className="text-white/70 text-xs leading-relaxed">
                  <span className="block font-semibold text-white/90">Address:</span>
                  C-18, Greater Kailash, New Delhi - 110048
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-1.5 rounded-lg">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>
                <div className="text-white/70 text-xs">
                  <span className="font-semibold text-white/90 mr-1">Contact number:</span>
                  +91 9899287454
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-1.5 rounded-lg">
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>
                <div className="text-white/70 text-xs">
                  <span className="font-semibold text-white/90 mr-1">Email:</span>
                  (Pending)
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-1.5 rounded-lg">
                  <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>
                <div className="text-white/70 text-xs">
                  <span className="font-semibold text-white/90 mr-1">Website:</span>
                  www.broadcastdigitally.com
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col space-y-4 md:pl-10">
            <div
              className="cursor-pointer md:cursor-default"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              <h3 className="text-base font-bold text-white">Company</h3>
            </div>
            <ul className={`space-y-2.5 md:block ${isCompanyOpen ? "block" : "hidden"}`}>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-all duration-300 text-xs flex items-center gap-2 group"
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center text-[10px] uppercase tracking-widest text-white/40">
            <p>© Broadcast Digitally {new Date().getFullYear()}</p>
            <span className="hidden md:block w-0.5 h-0.5 rounded-full bg-white/20"></span>
            <p>www.broadcastdigitally.com</p>
            <span className="hidden md:block w-0.5 h-0.5 rounded-full bg-white/20"></span>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-50">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors border border-primary/30 cursor-pointer shadow-lg"
        >
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
