import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-24 px-6 bg-primary text-center overflow-hidden">

      {/* Radial Background */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-[200%] w-px bg-primary-foreground/30 origin-bottom"
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))}
      </div>

      {/* Sparkles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 Horizental-full bg-yellow-400 animate-pulse"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-xl mx-auto"
      >
        {/* Top Text */}
        <p className="tracking-[0.3em] uppercase text-xs text-yellow-300 mb-6">
          With Joy In Our Hearts
        </p>

        <h2 className="text-white text-lg mb-2">
          Two Souls
        </h2>

        <h1 className="italic text-yellow-400 text-3xl sm:text-4xl mb-8">
          One Beautiful Beginning
        </h1>

        <p className="text-white/80 text-sm leading-relaxed">
          Together with our families <br />
          we invite you to celebrate the engagement of
        </p>

        {/* Names */}
        <div className="mt-12 space-y-3">

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-yellow-400 italic text-4xl sm:text-5xl md:text-6xl"
          >
            Sagar
          </motion.h2>

          <p className="text-white/70 text-sm">
            S/o Shaligram Shingar
          </p>

          {/* Ring */}
          <div className="flex justify-center my-6">
            <span className="text-3xl">💍</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-yellow-400 italic text-4xl sm:text-5xl md:text-6xl"
          >
            Priyanka
          </motion.h2>

          <p className="text-white/70 text-sm">
            D/o Manohar Kale
          </p>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;