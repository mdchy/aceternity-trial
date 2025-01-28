import HeroSection from "@/components/heroSection";
import MapSection from "@/components/mapSection";
import WeMaintainSection from "@/components/weMaintainSection"
import SpeedSection from "@/components/speedSection"
import FeaturesSection from "@/components/featuresSection";
import ArticleSection from "@/components/articleSection";
import StatsSection from "@/components/statsSection"

export default function Home() {
  return (
    <>
    <HeroSection />
    <WeMaintainSection />
    <SpeedSection />
    <FeaturesSection />
    <ArticleSection />
    <StatsSection/>
    <MapSection />
    </>
  );
}
