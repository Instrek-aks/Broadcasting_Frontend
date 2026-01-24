import { useState } from "react";
import { Activity, MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const companyLinks = [
    "Who We Are",
    "Why Partner With Us",
    "Contact",
    "Privacy Policy",
  ];

  return (
    <footer className="bg-black pt-20 pb-10 relative overflow-hidden border-t border-white/10 font-sans">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 lg:gap-20 mb-12 md:mb-20">
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#63c1b3]/10 p-2.5 rounded-xl border border-[#63c1b3]/20">
                <Activity className="w-6 h-6 text-[#63c1b3]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-bold tracking-tight text-[#63c1b3] uppercase leading-none">
                  Broadcast
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#63c1b3] uppercase leading-none mt-1.5 opacity-80">
                  Digitally
                </span>
              </div>
            </div>

            <p className="text-white/50 text-xs uppercase tracking-widest leading-relaxed max-w-xs">
              Where Heritage Engineering Meets Digital Innovation
            </p>
          </div>

          {/* Column 2: Connect (Card Style) */}
          <div className="flex flex-col space-y-6">
            <div
              className="cursor-pointer md:cursor-default"
              onClick={() => setIsConnectOpen(!isConnectOpen)}
            >
              <h3 className="text-lg font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-white/60 text-sm hidden md:block">
                Your Partner in the New Era of Media.
              </p>
            </div>

            <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 md:block ${isConnectOpen ? "block" : "hidden"}`}>
              <p className="text-white/60 text-sm mb-4 md:hidden">
                Your Partner in the New Era of Media.
              </p>
              <div className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  123 Media Tech Park,<br />Innovation District, NY 10001
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                </div>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                </div>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">contact@broadcastdigitally.com</p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-4 h-4 text-primary shrink-0" />
                </div>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors">www.broadcastdigitally.com</p>
              </div>
            </div>
          </div>

          {/* Column 3: Company Links */}
          <div className="flex flex-col space-y-6 md:pl-10">
            <div
              className="cursor-pointer md:cursor-default"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              <h3 className="text-lg font-bold text-white">Company</h3>
            </div>
            <ul className={`space-y-4 md:block ${isCompanyOpen ? "block" : "hidden"}`}>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-6 items-center text-sm text-white/40">
            <p>
              © Broadcast Digitally
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
            <p>
              www.broadcastdigitally.com
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
            <p>
              All Rights Reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button - positioned in corner */}
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
