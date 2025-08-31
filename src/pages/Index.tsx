import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegratedSystemSection from "@/components/IntegratedSystemSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <LogosSection />
      <AboutSection />
      <MissionSection />
      <FeaturesSection />
      <IntegratedSystemSection />
    </div>
  );
};

export default Index;
