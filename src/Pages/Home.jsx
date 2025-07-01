import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/WhyUs";
import NewAndFeatured from "../Components/New";

export default function Home() {
  return (
    <div className="bg-cream">
      <HeroSection />
      <NewAndFeatured />
      <AboutUs />
    </div>
  );
}
