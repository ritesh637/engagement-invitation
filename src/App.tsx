// pages/Index.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnvelopeOpening from "@/components/EnvelopeOpening";
import HeroSection from "@/components/HeroSection";
import BlessingSection from "@/components/BlessingSection";
import CoupleSection from "@/components/CoupleSection";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";
import MapSection from "@/components/MapSection";
import BlessingsFooter from "@/components/BlessingsFooter";
import FloatingPetals from "@/components/FloatingPetals";

const Index = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-play audio on first user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (isInvitationOpen) {
      const timer = setTimeout(() => setShowContent(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isInvitationOpen]);

  return (
    <div className="relative min-h-screen bg-cream overflow-x-hidden">
      <audio ref={audioRef} src="/shehnai.mp3" preload="auto" loop />
      
      <AnimatePresence mode="wait">
        {!isInvitationOpen ? (
          <EnvelopeOpening 
            key="envelope" 
            onOpen={() => setIsInvitationOpen(true)} 
          />
        ) : (
          showContent && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <FloatingPetals />
              <div className="max-w-md mx-auto bg-cream shadow-2xl relative z-10">
                <BlessingSection />
                <HeroSection />
                
                <CoupleSection />
                <EventDetails />
                <CountdownTimer />
                <MapSection />
                <BlessingsFooter />
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;