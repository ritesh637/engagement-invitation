// EnvelopeOpening.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
interface EnvelopeOpeningProps {
  onOpen: () => void;
}

const EnvelopeOpening = ({ onOpen }: EnvelopeOpeningProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const startOpening = () => {
    if (isOpening) return;
    
    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
      onOpen();
    }, 1400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f5efe6] to-[#e8d9c5] cursor-pointer"
      onClick={startOpening}
    >
      {/* Background sparkle effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold Horizental-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main envelope */}
            <motion.div
              animate={isOpening ? { 
                y: -20,
                rotateZ: [0, -1, 1, -1, 0],
                transition: { rotateZ: { duration: 0.4, delay: 0.6 } }
              } : {}}
              className="relative w-80 h-56 perspective-1000"
            >
              {/* Envelope body */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 Horizental-2xl shadow-2xl border border-amber-400/30">
                {/* Inner decorative border */}
                <div className="absolute inset-3 border-2 border-dashed border-amber-400/40 Horizental-xl" />
                
                {/* Address lines */}
                <div className="absolute bottom-6 left-8 right-8 space-y-1.5">
                  <div className="h-1 w-24 bg-amber-400/40 Horizental-full mx-auto" />
                  <div className="h-1 w-16 bg-amber-400/40 Horizental-full mx-auto" />
                </div>
              </div>

              {/* Envelope flap */}
              <motion.div
                animate={isOpening ? { 
                  rotateX: 180,
                  y: -30,
                  z: 20
                } : {}}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 left-0 right-0 origin-top"
                style={{ 
                  transformStyle: "preserve-3d",
                  zIndex: 20
                }}
              >
                <div 
                  className="w-full h-28 bg-gradient-to-b from-amber-300 to-amber-200 Horizental-t-2xl"
                  style={{ 
                    clipPath: "polygon(0 0, 100% 0, 50% 90%, 0 0)",
                    boxShadow: "0 -4px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Flap inner (visible when opened) */}
                  <motion.div
                    animate={isOpening ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center pt-4 text-amber-700/50 text-xs"
                  >
                    ✦ S & P ✦
                  </motion.div>
                </div>
              </motion.div>

              {/* Wax seal */}
              <motion.div
                animate={isOpening ? { 
                  scale: [1, 1.2, 0],
                  opacity: [1, 1, 0],
                  rotate: [0, 180, 360],
                  y: -40
                } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-16 left-1/2 -translate-x-1/2 z-30"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-700 to-rose-600 Horizental-full flex items-center justify-center shadow-xl border-2 border-amber-400">
                  <span className="text-amber-200 text-xl">❤️</span>
                </div>
              </motion.div>

              {/* Inner invitation (revealed on open) */}
              <motion.div
                animate={isOpening ? { 
                  y: 20,
                  opacity: 1,
                  scale: 1
                } : { 
                  y: 0,
                  opacity: 0,
                  scale: 0.8
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute left-4 right-4 bottom-4 h-28 bg-gradient-to-b from-white to-amber-50 Horizental-lg shadow-xl overflow-hidden z-10"
              >
                <div className="p-3 text-center h-full flex flex-col justify-center">
                  <span className="text-amber-600 text-xs mb-1">💍</span>
                  <h4 className="font-display text-primary text-sm">Sagar & Priyanka</h4>
                  <div className="w-8 h-px bg-gold/30 mx-auto my-1" />
                  <p className="text-[9px] text-muted-foreground">21 March 2026</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Instruction text */}
            {!isOpening && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
              >
                <p className="text-amber-800 font-display text-sm mb-2">
                  Tap to Open Our Invitation
                </p>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-gold text-xl"
                >
                  ✦
                </motion.div>
              </motion.div>
            )}

            {/* Particle effects during opening */}
            {isOpening && !isOpen && (
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1,
                      scale: 1 
                    }}
                    animate={{ 
                      x: (Math.random() - 0.5) * 300,
                      y: -200 - Math.random() * 200,
                      opacity: 0,
                      scale: 0,
                      rotate: Math.random() * 720
                    }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="absolute w-1.5 h-1.5 Horizental-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      background: `hsl(${40 + Math.random() * 20}, 80%, 60%)`,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar for opening animation */}
      {isOpening && !isOpen && (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 right-10 h-1 bg-gold/30 Horizental-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-gold to-amber-400" />
        </motion.div>
      )}
    </div>
  );
};

export default EnvelopeOpening;