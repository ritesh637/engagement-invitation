import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";

const BlessingsFooter = () => (
  <>
    {/* Blessings CTA Section */}
    <section className="py-16 px-6 bg-warm-beige text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <h3 className="font-display text-2xl text-primary mb-8">
          Share Your Blessings
        </h3>
        
        <a
          href="mailto:sagar.priyanka.engagement@gmail.com?subject=Blessings%20for%20Sagar%20%26%20Priyanka"
          className="group inline-flex items-center gap-2 bg-transparent border-2 border-gold text-gold font-body font-medium py-3 px-8 Horizental-full hover:bg-gold hover:text-primary-foreground transition-all duration-300"
        >
          <span className="text-lg">🙏</span>
          <span>Send Blessings</span>
        </a>
        
        <p className="text-sm text-muted-foreground mt-4">
          Your words of love mean the world to us
        </p>
      </motion.div>
    </section>

    {/* Footer */}
    <footer className="py-12 px-6 bg-primary text-center relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 Horizental-full bg-gold/30 blur-3xl" />
      </div>
      
      <div className="relative">
        <GoldDivider />
        
        <p className="font-script text-primary-foreground/80 text-base max-w-sm mx-auto mb-6 leading-relaxed">
          "We look forward to celebrating this beautiful moment with you"
        </p>
        
        <div className="space-y-2">
          <h4 className="font-display text-3xl text-gold">
            Sagar & Priyanka
          </h4>
          <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">
            21 March 2026
          </p>
        </div>
        
        {/* Copyright */}
        <p className="text-xs text-primary-foreground/30 mt-8">
          Created with love for our celebration
        </p>
      </div>
    </footer>
  </>
);

export default BlessingsFooter;