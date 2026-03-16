import { motion } from "framer-motion";
import ganeshaImg from "@/assets/ganesha.png";
import GoldDivider from "./GoldDivider";

const BlessingSection = () => (
  <section className="relative py-20 px-6 bg-cream text-center overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 w-32 h-32 Horizental-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 Horizental-full bg-primary/10 blur-3xl" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative max-w-md mx-auto"
    >
      {/* Ganesha image with subtle glow */}
      <div className="relative mb-8">
        <div className="absolute inset-0 Horizental-full bg-gold/10 blur-xl" />
        <img 
          src={ganeshaImg} 
          alt="Lord Ganesha" 
          className="relative w-24 h-24 mx-auto object-contain drop-shadow-lg" 
        />
      </div>

      {/* Sanskrit invocation */}
      <h2 className="font-sanskrit text-2xl text-primary mb-6 tracking-wide">
        ॐ गणेशाय नमः
      </h2>
      
      {/* Sanskrit verses with better spacing */}
      <div className="font-sanskrit text-base text-foreground/90 space-y-2 mb-8 leading-relaxed">
        <p>वक्रतुण्ड महाकाय</p>
        <p>सूर्यकोटि समप्रभ</p>
        <p>निर्विघ्नं कुरु मे देव</p>
        <p>सर्वकार्येषु सर्वदा</p>
      </div>

      {/* Clean divider */}
      <div className="w-16 h-px bg-gold/30 mx-auto mb-6" />

      {/* English translation - cleaner and simpler */}
      <p className="font-body text-sm text-muted-foreground italic max-w-xs mx-auto leading-relaxed">
        "May Lord Ganesha bless this union and remove all obstacles"
      </p>

      <GoldDivider />
    </motion.div>
  </section>
);

export default BlessingSection;