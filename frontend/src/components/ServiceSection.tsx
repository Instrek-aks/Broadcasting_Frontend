import { motion } from "framer-motion";
import { Shield, Tv, Radio, Wifi, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Internet & Cyber Security",
    description:
      "We uphold industry standards with customer-oriented security solutions for all your needs.",
  },
  {
    icon: Tv,
    title: "Business Smart Television",
    description:
      "Experience crystal clear 4K streaming with our smart TV solutions for homes and offices.",
  },
  {
    icon: Radio,
    title: "Family Internet Phone Pack",
    description:
      "Stay connected with family bundles that include high-speed internet and phone services.",
  },
  {
    icon: Wifi,
    title: "Fiber Line & Broadband",
    description:
      "Ultra-fast fiber optic connections delivering speeds up to 1Gbps for seamless browsing.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#f59e0b] font-semibold uppercase tracking-wider text-sm">
            Best IT Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4">
            Best Digital <span className="text-[#f59e0b]">Broadband</span>
            <br />
            Service For People
            <span className="inline-block ml-3 w-16 h-1 bg-[#f59e0b] rounded-full align-middle" />
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center group-hover:bg-[#3b82f6] transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-[#ffffff] transition-colors" />
                </div>
                {/* Decorative accent */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#f59e0b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748b] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-500 font-medium hover:gap-3 transition-all"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Read More</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 text-[#64748b]">
            <div className="w-16 h-px bg-border" />
            <span className="uppercase tracking-wider text-sm">
              Bring them together and you overcome the ordinary.
            </span>
            <a href="#" className="text-primary font-medium hover:underline">
              View More Services
            </a>
            <div className="w-16 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
