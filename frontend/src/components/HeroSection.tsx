import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent z-10" />
        <img
          src="/hero-bg.png"
          alt="Broadcast Digitally High Tech Background"
          className="w-full h-full object-cover object-center opacity-100 scale-x-[-1]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-24 md:pt-32 pb-12 md:pb-24 lg:pb-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 md:mb-8">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Where Heritage Engineering Meets Digital Innovation
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6">
              BROADCAST
              <span className="text-[#63c1b3] block">DIGITALLY</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
              Engineering the Next Wave of Media.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative overlaid gradient at bottom to merge with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
