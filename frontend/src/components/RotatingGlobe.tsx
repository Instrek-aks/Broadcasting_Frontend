import { motion } from "framer-motion";
import { Globe, Wifi, Radio, Signal } from "lucide-react";

const RotatingGlobe = () => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 border-4 border-dashed border-accent/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle rotating ring with icons */}
      <motion.div
        className="absolute inset-4 border-2 border-primary/40 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting icons */}
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3b82f6] p-2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Wifi className="w-4 h-4 text-[#ffffff]" />
        </motion.div>
        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#f59e0b] p-2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Radio className="w-4 h-4 text-[#f59e0b]-foreground" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 -left-3 -translate-y-1/2 bg-[#3b82f6] p-2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Signal className="w-4 h-4 text-[#ffffff]" />
        </motion.div>
      </motion.div>

      {/* Inner rotating ring */}
      <motion.div
        className="absolute inset-12 border border-accent/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Center Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Globe background with gradient */}
          <div className="w-40 h-40 md:w-56 md:h-56 bg-yellow-200 from-accent via-accent/80 to-orange-light rounded-full relative overflow-hidden glow-accent">
            {/* Continent-like shapes */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-6 left-8 w-12 h-16 bg-[#1e293b]/40 rounded-full transform rotate-12" />
              <div className="absolute top-12 right-6 w-16 h-20 bg-[#1e293b]/40 rounded-full transform -rotate-12" />
              <div className="absolute bottom-8 left-12 w-20 h-14 bg-[#1e293b]/40 rounded-full transform rotate-6" />
              <div className="absolute bottom-16 right-10 w-10 h-12 bg-[#1e293b]/40 rounded-full" />
            </motion.div>

            {/* Grid lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-[#1e293b]" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1e293b]" />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-[#1e293b]" />
              <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#1e293b]" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1e293b]" />
              <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#1e293b]" />
            </div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-12 h-12 md:w-16 md:h-16 text-secondary/60" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#3b82f6] rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default RotatingGlobe;
