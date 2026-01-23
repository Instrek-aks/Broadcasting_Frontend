import { motion } from "framer-motion";
import { ArrowRight, Activity, Radio, Cpu } from "lucide-react";
import { Button } from "../components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] z-10" />
        <img
          src="/hero-bg.png"
          alt="Broadcast Digitally High Tech Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20 pb-24 lg:pb-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Where Heritage Engineering Meets Digital Innovation
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-0">
              BROADCAST
              <span className="text-primary block mt-1">DIGITALLY</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Engineering the Next Wave of Media.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full min-w-[200px]"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-black bg-white hover:bg-white/90 px-8 py-6 text-lg rounded-full min-w-[200px]"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights (Optional but good for visuals) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              icon: Radio,
              label: "RF Engineering",
              desc: "Precision transmission systems",
            },
            {
              icon: Cpu,
              label: "IP Workflows",
              desc: "SMPTE 2110 / AES67 Ready",
            },
            {
              icon: Activity,
              label: "Digital Integration",
              desc: "Future-proof infrastructure",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
              </div>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative overlaid gradient at bottom to merge with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
