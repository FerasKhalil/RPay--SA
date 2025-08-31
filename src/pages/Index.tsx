import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <LogosSection />
      <AboutSection />
      <MissionSection />
    </div>
  );
};

export default Index;
