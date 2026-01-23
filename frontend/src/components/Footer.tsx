import { Activity, ArrowRight } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Footer = () => {
  const companyLinks = [
    "Our Team",
    "Why choose us",
    "Contact us",
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
    <footer className="bg-black py-16 relative overflow-hidden border-t border-white/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Contact Form Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg border border-primary/30">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-tight text-white uppercase leading-none">
                  Broadcast
                </span>
                <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase leading-none mt-1">
                  Digitally
                </span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-primary mb-4">Get in Touch</h3>
            <p className="text-white/70 text-sm mb-4">
              Reach out to us - let's talk possibilities.
            </p>

            <div className="relative mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-white border-0 text-gray-900 placeholder:text-gray-500 rounded-full"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white rounded-full h-8 w-8"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="contact-terms"
                className="rounded border-white/30 bg-white/10"
              />
              <label htmlFor="contact-terms" className="text-white/70 text-xs">
                I agree to be contacted via email
              </label>
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
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/60">
              © Broadcast Technologies
            </p>

            <p className="text-white/50">
              All Rights Reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button (optional) */}
      <div className="absolute bottom-8 right-8">
        <button className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-all shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
