import { Activity, MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    "Who We Are",
    "Why Partner With Us",
    "Contact",
    "Privacy Policy",
  ];

  const coreServices = [
    "Radio & Audio Solutions",
    "Television & Video",
    "Connectivity & Testing",
    "Managed Services",
  ];

  const techServices = [
    "4K/UHD/HDR Workflow",
    "IP Workflows (SMPTE 2110)",
    "Virtual Studios & AR",
    "Frequency Coordination",
    "Cloud Integration",
    "Automation Systems",
  ];

  return (
    <footer className="bg-black py-8 relative overflow-hidden border-t border-white/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Contact Form Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#63c1b3]/20 p-2 rounded-lg border border-[#63c1b3]/30">
                <Activity className="w-6 h-6 text-[#63c1b3]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-tight text-[#63c1b3] uppercase leading-none">
                  Broadcast
                </span>
                <span className="text-xs font-medium tracking-[0.2em] text-[#63c1b3] uppercase leading-none mt-1">
                  Digitally
                </span>
              </div>
            </div>
            <p className="text-white/60 text-xs mb-6 uppercase tracking-wider">
              Where Heritage Engineering Meets Digital Innovation
            </p>

            <h3 className="text-lg font-bold text-primary mb-4">Stay Connected</h3>
            <p className="text-white/70 text-sm mb-4">
              Your Partner in the New Era of Media.
            </p>

            <div className="space-y-4 mb-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-white/70">
                  123 Media Tech Park,<br />Innovation District, NY 10001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-white/70">contact@broadcastdigitally.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <p className="text-white/70">www.broadcastdigitally.com</p>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">Core Services</h3>
            <ul className="space-y-3">
              {coreServices.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Services Column */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">Tech Services</h3>
            <ul className="space-y-3">
              {techServices.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <p className="text-white/60">
                © Broadcast Digitally
              </p>
              <span className="hidden md:inline text-white/20">|</span>
              <p className="text-primary/60">
                www.broadcastdigitally.com
              </p>
            </div>

            <p className="text-white/50">
              All Rights Reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button (optional) */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-all shadow-lg cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
