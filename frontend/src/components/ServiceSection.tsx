import { motion } from "framer-motion";
import { Mic2, Tv, Cable, Settings, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "Radio & Audio Solutions",
    description: "We specialize in turnkey FM, AM, and Digital Radio (DRM/DAB+) setups.",
    features: [
      "SITC of High-Power Transmitters",
      "Visual Radio & Podcast Studio integration",
      "Automated Traffic & Billing software deployment"
    ],
    className: "md:col-span-2"
  },
  {
    icon: Tv,
    title: "Television & Video Infrastructure",
    description: "From Newsrooms to Sports Production.",
    features: [
      "4K/UHD/HDR Workflow Design",
      "Virtual Studios and Augmented Reality (AR) Graphics",
      "Master Control Room (MCR) & Playout Automation"
    ],
    className: "md:col-span-1"
  },
  {
    icon: Settings,
    title: "Managed Services (O&M)",
    description: "Let us handle the technology while you handle the content.",
    features: [
      "24/7 On-site Technical Support",
      "Annual Maintenance Contracts (AMC)",
      "Frequency Coordination & Regulatory Consultancy"
    ],
    className: "md:col-span-1"
  },
  {
    icon: Cable,
    title: "Connectivity & Testing (The Comcon Edge)",
    description: "The backbone of any station is its connectivity.",
    features: [
      "Cabling: Authorized integration of Belden, Neutrik, and SMPTE Fiber",
      "T&M: Comprehensive Test & Measurement services for RF and AV quality",
      "Remote Production: Low-latency IP links for live event coverage"
    ],
    className: "md:col-span-2"
  },
];

const ServicesSection = () => {
  return (
    <section id="solutions" className="py-24 bg-[#0f172a] relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            End-to-End Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 max-w-3xl mx-auto">
            <span className="text-[#63c1b3]">Our Solutions</span> & Services
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive tools and expertise to power every aspect of your media operations.
          </p>
        </motion.div>

        {/* Services Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={`group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07] ${service.className}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#63c1b3]/20 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[#63c1b3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#63c1b3]">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-400 mb-6 border-b border-white/10 pb-6 text-lg">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
