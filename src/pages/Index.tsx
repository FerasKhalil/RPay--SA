import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegratedSystemSection from "@/components/IntegratedSystemSection";
import StatisticsSection from "@/components/StatisticsSection";
import DevicesSection from "@/components/DevicesSection";
import IntegratedPaymentSection from "@/components/IntegratedPaymentSection";
import CallToActionSection from "@/components/CallToActionSection";

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
      <StatisticsSection />
      <DevicesSection />
      <IntegratedPaymentSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;
