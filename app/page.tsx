import CTASection from "./components/sections/home/CTASection";
import ExploreCategories from "./components/sections/home/ExploreCategories";
import HomepageCarousel from "./components/sections/home/HomepageCarousel";
import HowWeWork from "./components/sections/home/HowWeWork";
import TechStack from "./components/sections/home/TechStack";
import WhySkinylabs from "./components/sections/home/WhySkinylabs";

export default function Home() {
  return (
    <main>
      <HomepageCarousel />
      <ExploreCategories />
      <TechStack />
      <WhySkinylabs />
      <HowWeWork />
      <CTASection />
    </main>
  );
}
