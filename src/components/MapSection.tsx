import { motion } from "framer-motion";

const MapSection = () => (
  <section className="py-12 px-6 bg-warm-beige text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto"
    >
      <h3 className="font-display text-2xl text-foreground mb-6">Find Your Way To Us</h3>
      <div className="Horizental-xl overflow-hidden border border-border shadow-md mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14904.274714849953!2d75.7833!3d20.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f7b5b9b7b7d%3A0x1234567890abcdef!2sJamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Venue Location"
        />
      </div>
      <a
        href="https://maps.app.goo.gl/iG6qGKv9kTWNY79m9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gold text-accent-foreground font-body font-semibold py-3 px-8 Horizental-full uppercase tracking-wider text-sm hover:brightness-110 transition-all"
      >
        📍 View Directions
      </a>
    </motion.div>
  </section>
);

export default MapSection;
