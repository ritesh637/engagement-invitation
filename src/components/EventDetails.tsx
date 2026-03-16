import { motion } from "framer-motion";

const EventDetails = () => (
  <section className="relative py-16 px-6 bg-warm-beige">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-sm mx-auto"
    >
      {/* Elegant card */}
      <div className="bg-primary Horizental-2xl p-8 text-center text-primary-foreground shadow-xl relative">
        {/* Subtle border accent */}
        <div className="absolute inset-0 Horizental-2xl border border-gold/20" />
        
        {/* Simple corner accents - cleaner version */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/30 Horizental-tl-lg" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/30 Horizental-tr-lg" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/30 Horizental-bl-lg" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/30 Horizental-br-lg" />

        {/* Content */}
        <div className="relative space-y-6">
          {/* Icon */}
          <div className="text-3xl">💍</div>
          
          {/* Title */}
          <div>
            <h3 className="font-display text-2xl mb-2">Engagement Ceremony</h3>
            <div className="w-12 h-px bg-gold/30 mx-auto" />
          </div>
          
          {/* Date */}
          <div>
            <p className="text-xs text-gold-light uppercase tracking-wider mb-1">
              Save the Date
            </p>
            <p className="font-display text-gold text-2xl">
              21 March 2026
            </p>
          </div>
          
          {/* Venue */}
          <div>
            <p className="text-xs text-gold-light uppercase tracking-wider mb-2">
              Venue
            </p>
            <p className="font-display text-lg">Kinhhi, Post. Fattepur</p>
            <p className="font-display text-lg text-gold-light/90">Tal. Jamner</p>
          </div>
          
          {/* Time indication */}
          <p className="text-xs text-primary-foreground/50 uppercase tracking-wider pt-2">
            Evening Ceremony
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default EventDetails;