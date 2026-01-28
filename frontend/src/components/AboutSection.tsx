import { motion } from "framer-motion";
import { Check, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed-bg pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image + Core Values */}
          <div className="space-y-12">
            {/* Image */}
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
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl z-0" />
            </motion.div>

            {/* Core Values - Now below the image */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#63c1b3] mb-6 border-l-4 border-[#63c1b3] pl-4 uppercase tracking-tight">
                Our Core Values
              </h3>
              <div className="grid gap-6">
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
                  <div key={idx} className="flex gap-5">
                    <div className="mt-1 bg-primary/20 p-2.5 rounded-lg h-fit">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold mb-1">{value.title}</h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Section Header */}
            <motion.div
              className="mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-base md:text-lg">
                Who We Are & Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                <span className="text-[#63c1b3]">The Modern Standard</span> in Media Integration
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                At Broadcast Digitally, we don't just build stations; we build legacies. As the media landscape shifts from traditional hardware to software-defined environments, we provide the technical bridge for broadcasters to cross over without losing signal integrity.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision - Moved to bottom */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-[#111111] p-10 rounded-3xl border border-white/5 shadow-2xl hover:border-[#63c1b3]/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#63c1b3]/10 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-[#63c1b3]" />
              </div>
              <h4 className="text-[#63c1b3] text-2xl font-bold tracking-tight">Our Mission</h4>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              To empower creators and broadcasters by removing technical complexity through world-class systems integration.
            </p>
          </div>

          <div className="bg-[#111111] p-10 rounded-3xl border border-white/5 shadow-2xl hover:border-[#63c1b3]/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#63c1b3]/10 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                <Lightbulb className="w-10 h-10 text-[#63c1b3]" />
              </div>
              <h4 className="text-[#63c1b3] text-2xl font-bold tracking-tight">Our Vision</h4>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              To be the global leader in transitioning the broadcast industry into a fully digital, automated, and cloud-capable era.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
