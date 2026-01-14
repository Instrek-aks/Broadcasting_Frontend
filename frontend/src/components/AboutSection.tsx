import { motion } from "framer-motion";
import { Globe, Shield, Tv, Check } from "lucide-react";
import { Button } from "../components/ui/button";

const AboutSection = () => {
  const features = [
    { icon: Shield, label: "Fully Secure Internet" },
    { icon: Tv, label: "4K & 8K Streaming" },
  ];

  return (
    <section id="about" className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="text-[#f59e0b] font-semibold uppercase tracking-wider text-sm">
              Best IT Solutions
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4 mb-6">
              Best <span className="text-blue-500">Internet</span> Providing
              <br />
              Agency For People
            </h2>

            {/* Description */}
            <p className="text-[#64748b] mb-8 leading-relaxed">
              Business is the activity of making one's living or making money by
              producing or buying and selling products. We provide the fastest
              and most reliable internet solutions for homes and businesses.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-[#3b82f6] p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-black">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="bg-[#f1f5f9] p-6 rounded-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#64748b]">Mbps</span>
                <span className="text-5xl font-bold text-blue-500">30</span>
                <span className="text-">+</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#f59e0b]" />
                  <span className="text-black/80">
                    Series of manual and semi-manual installations
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#f59e0b]" />
                  <span className="text-black/80">
                    Construction is different from others
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 bg-black hover:bg-blue-600"
            >
              About Our Agency
            </Button>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Globe Icon */}
            <motion.div
              className="absolute -top-4 left-0 bg-[#3b82f6]/10 p-4 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Globe className="w-8 h-8 text-blue-500" />
            </motion.div>

            {/* Main Image Container */}
            <div className="relative">
              <div className="bg-linear-to-br from-muted to-background p-4 rounded-2xl">
                <div className="aspect-4/3 bg-linear-to-br from-blue-500/20 to-accent/20 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-24 h-24 text-blue-500/40 mx-auto mb-4" />
                      <p className="text-[#64748b]">Connecting the World</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Accent Bar */}
              <div className="absolute right-0 top-1/4 w-1 h-32 bg-[#f59e0b] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
