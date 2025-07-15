import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/WhyUs";
import CategorySection from "../Components/Category";
import New from "../Components/New";
import ReviewsSection from "../Components/ReviewsSection"
import Season from '../Components/Season';
export default function Home() {
  return (
    <div className="bg-cream">
      <HeroSection />
      <Season/>
      <CategorySection />
      <New />
      <ReviewsSection/>
      <AboutUs />
    </div>
  );
}
