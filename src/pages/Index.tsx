import FloatingPetals from "@/components/FloatingPetals";
import BlessingSection from "@/components/BlessingSection";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventDetails from "@/components/EventDetails";
import CountdownTimer from "@/components/CountdownTimer";
import MapSection from "@/components/MapSection";
import BlessingsFooter from "@/components/BlessingsFooter";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <FloatingPetals />
    <BlessingSection />
    <HeroSection />
    <CoupleSection />
    <EventDetails />
    <CountdownTimer />
    <MapSection />
    <BlessingsFooter />
  </div>
);

export default Index;
