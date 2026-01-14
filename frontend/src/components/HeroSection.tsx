import { motion } from "framer-motion";
import { ArrowRight, Wifi } from "lucide-react";
import { Button } from "../components/ui/button";
import RotatingGlobe from "./RotatingGlobe";

const HeroSection = () => {
  return (
    <section
      className="relat
    ive min-h-screen bg-[#0f172a] linear-gradient(#0f172a, #1e293b) pt-32 pb-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#3b82f6]/20 text-primary px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider">
                Best IT Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Enjoy Fast <span className="text-[#f59e0b]">Internet</span>
              <br />
              Solution
              <span className="inline-block ml-3 w-20 h-1 bg-[#f59e0b] rounded-full align-middle" />
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-[#ffffff]/70">
                Subscribe & get 1 month WiFi Free
              </span>
              <Wifi className="w-5 h-5 text-[#f59e0b]" />
              <span className="text-[#ffffff]/50">|</span>
              <span className="text-[#ffffff]/70">month 1 /</span>
              <span className="text-4xl font-bold text-[#f59e0b]">$99</span>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-[#ffffff] px-8 py-6 text-lg group"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Globe */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Discount Badge */}
              <motion.div
                className="absolute -left-4 top-8 z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="bg-[#f59e0b] text-[#f59e0b]-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold">40%</span>
                  <span className="text-xs font-medium">OFF</span>
                </div>
              </motion.div>

              <RotatingGlobe />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
