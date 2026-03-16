import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative py-20 px-6 bg-primary text-center overflow-hidden">
    {/* Radial burst background */}
    <div className="absolute inset-0 opacity-10">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 h-[200%] w-px bg-primary-foreground/30 origin-bottom"
          style={{ transform: `rotate(${i * 30}deg)` }}
        />
      ))}
    </div>

    {/* Sparkle dots */}
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 Horizental-full bg-gold animate-sparkle"
        style={{
          top: `${15 + Math.random() * 70}%`,
          left: `${10 + Math.random() * 80}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative z-10"
    >
      <p className="text-gold-light tracking-[0.3em] uppercase text-xs font-body mb-6">
        With Joy In Our Hearts
      </p>
      <h2 className="font-body text-primary-foreground text-lg mb-2">Two Souls</h2>
      <h1 className="font-display italic text-gold text-3xl sm:text-4xl mb-8">
        One Beautiful Beginning
      </h1>
      <p className="text-primary-foreground/80 font-body text-sm max-w-xs mx-auto leading-relaxed">
        Together with our families<br />
        we invite you to celebrate the engagement of
      </p>

      <div className="mt-10 space-y-1">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-display italic text-gold text-5xl sm:text-6xl"
        >
          Sagar
        </motion.h2>
        <p className="text-primary-foreground/70 font-body text-sm">S/o Shaligram Shingar</p>
        <p className="text-gold-light font-display text-2xl my-2">&</p>
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="font-display italic text-gold text-5xl sm:text-6xl"
        >
          Priyanka
        </motion.h2>
        <p className="text-primary-foreground/70 font-body text-sm">D/o Manohar Kale</p>
      </div>

      <div className="mt-8 flex justify-center">
        <span className="text-2xl">💍</span>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
