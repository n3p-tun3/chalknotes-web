import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ExamplesSection } from "@/components/landing/examples-section";
import { GetStartedSection } from "@/components/landing/get-started-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <ExamplesSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}
