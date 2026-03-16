import { motion } from "framer-motion";
import coupleImg from "@/assets/couple.png";

const CoupleSection = () => (
  <section className="relative py-20 px-6 bg-warm-beige text-center overflow-hidden">
    {/* Subtle background decoration */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 Horizental-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 Horizental-full blur-3xl" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative max-w-md mx-auto"
    >
      {/* Simple title */}
      <div className="mb-10">
        <span className="text-xs text-gold-light uppercase tracking-[0.2em]">
          Together forever
        </span>
        <h3 className="font-display text-3xl text-primary mt-2">
          Sagar & Priyanka
        </h3>
        <div className="w-12 h-px bg-gold/30 mx-auto mt-4" />
      </div>

      {/* Clean photo frame */}
      <div className="relative w-64 h-64 mx-auto">
        {/* Simple single border */}
        <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
        
        {/* Photo container */}
        <div className="absolute inset-3 rounded-full overflow-hidden shadow-xl">
          <img
            src={coupleImg}
            alt="Sagar & Priyanka"
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Small decorative element */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gold/10 Horizental-full blur-sm" />
      </div>

      {/* Simple caption */}
      <p className="text-sm text-muted-foreground mt-6 max-w-xs mx-auto">
        Two hearts, one journey
      </p>
    </motion.div>
  </section>
);

export default CoupleSection;