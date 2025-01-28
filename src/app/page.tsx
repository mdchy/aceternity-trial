import HeroSection from "@/components/heroSection";
import MapSection from "@/components/mapSection";
import WeMaintainSection from "@/components/weMaintainSection"
import SpeedSection from "@/components/speedSection"
import FeaturesSection from "@/components/featuresSection";
import ArticleSection from "@/components/articleSection";
import StatsSection from "@/components/statsSection"
import TestimoniesSection from "@/components/testimoniesSection";
import CtaSection from "@/components/ctaSection";


export default function Home() {
  return (
    <>
    <HeroSection />
    <StatsSection/>
    <WeMaintainSection />
    <SpeedSection />
    <FeaturesSection />
    <ArticleSection />
    <MapSection />
    <TestimoniesSection/>
    <CtaSection />
    </>
  );
}
