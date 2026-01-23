import { motion } from "framer-motion";
import { Check, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed-bg pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img
                src="/engineer.png"
                alt="Broadcast Engineer"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl z-0" />
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="mb-8">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Who We Are & Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                The Modern Standard in <span className="text-primary">Media Integration</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                At Broadcast Digitally, we don't just build stations; we build legacies. As the media landscape shifts from traditional hardware to software-defined environments, we provide the technical bridge for broadcasters to cross over without losing signal integrity.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-4">
                Our Core Values
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "Precision",
                    desc: "Every decibel and every pixel matters. We adhere to the highest international standards of engineering.",
                  },
                  {
                    title: "Innovation",
                    desc: "We specialize in IP-based workflows (SMPTE 2110 / AES67), ensuring your infrastructure is future-ready.",
                  },
                  {
                    title: "Partnership",
                    desc: "We are a lifecycle partner. From the first frequency study to the 1,000th hour of broadcast, we are with you.",
                  },
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-primary/20 p-2 rounded-lg h-fit">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-8 h-8 text-primary" />
                  <h4 className="text-white font-bold">Our Mission</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  To empower creators and broadcasters by removing technical complexity through world-class systems integration.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  <h4 className="text-white font-bold">Our Vision</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  To be the global leader in transitioning the broadcast industry into a fully digital, automated, and cloud-capable era.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
