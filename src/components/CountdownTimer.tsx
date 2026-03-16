import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-03-21T00:00:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, TARGET_DATE - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <section className="py-16 px-6 bg-primary text-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 Horizental-full bg-gold/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative max-w-md mx-auto"
      >
        {/* Title with elegant styling */}
        <div className="mb-10">
          <p className="text-gold-light text-xs uppercase tracking-[0.3em] mb-2">
            Save the Date
          </p>
          <h3 className="font-display text-2xl text-gold">
            Counting Down
          </h3>
          <div className="w-12 h-px bg-gold/30 mx-auto mt-4" />
        </div>

        {/* Timer blocks - cleaner design */}
        <div className="flex justify-center gap-4">
          {blocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 max-w-[70px]"
            >
              <div className="bg-primary-foreground/5 Horizental-xl p-3 backdrop-blur-sm">
                <div className="text-center">
                  <span className="font-display text-gold text-3xl font-light block leading-none">
                    {String(block.value).padStart(2, "0")}
                  </span>
                  <span className="text-primary-foreground/50 text-[10px] uppercase tracking-wider mt-2 block">
                    {block.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;