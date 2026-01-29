import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image - Tower on Right (Full View) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-transparent z-10" />
        <img
          src="/hero-bg-tower-right-full.png"
          alt="Broadcast Digitally High Tech Background"
          className="w-full h-full object-cover object-right md:object-top opacity-100"
        />
      </div>

      {/* Content - Left Side, Vertically Centered */}
      <div className="container mx-auto px-4 md:px-12 relative z-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}
            <div className="mb-2">
              <span className="text-xs md:text-sm font-medium text-[#63c1b3] uppercase tracking-wider">
                Where Heritage Engineering Meets Digital Innovation
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6">
              BROADCAST
              <span className="text-[#63c1b3] block">DIGITALLY</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed">
              Engineering The Next Wave of Media.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
