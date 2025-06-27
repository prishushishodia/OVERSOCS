import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/WhyUs";
import CategoriesSection from "../Components/CategoriesSection";

export default function Home() {
  return (
    <div className="bg-cream">
      <HeroSection />
      <AboutUs />
      <CategoriesSection />
    </div>
  );
}
