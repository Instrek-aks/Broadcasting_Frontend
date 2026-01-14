import { motion } from "framer-motion";
import {
  Wifi,
  MapPin,
  Mail,
  Phone,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Input } from "../components/ui/input";

const Footer = () => {
  const services = [
    "4K & 8K Streaming",
    "Mbps Youtube 100",
    "Business Smart Television",
    "Cyber Security",
    "Vendor Registration",
    "Broadband Line",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-black via-neutral-900 to-black pt-20 pb-8 relative overflow-hidden text-white"
    >
      {/* Decorative Tower */}
      <div className="absolute left-0 bottom-0 opacity-10">
        <svg
          width="200"
          height="400"
          viewBox="0 0 200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 0L120 150H80L100 0Z"
            fill="currentColor"
            className="text-blue-500"
          />
          <path
            d="M60 150H140L150 400H50L60 150Z"
            fill="currentColor"
            className="text-blue-500"
          />
          <circle
            cx="100"
            cy="80"
            r="30"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="100"
            cy="80"
            r="50"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="100"
            cy="80"
            r="70"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Newsletter</h3>

            <div className="relative mb-4">
              <Send className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="pl-12 bg-neutral-900 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-white/30 bg-neutral-900"
              />
              <label htmlFor="terms" className="text-white/70 text-sm">
                I agree all your{" "}
                <span className="text-orange-400">terms and policies</span>
              </label>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Services</h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-orange-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                You<span className="text-blue-500">link</span>
              </span>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              The world's first and largest digital platform for collectibles
              and services. Connect with us today.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-white/70">
                  Road Brooklyn Street, 600 86
                  <br />
                  New York, USA
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-white/70">Needhelp@company.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-white/70">+0000 888 666 92</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-orange-400 transition-colors"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
            </div>

            <p className="text-white/50 text-sm">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-orange-400">Youlink</span>. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
