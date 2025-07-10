import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/WhyUs";
import CategorySection from "../Components/Category";
import New from "../Components/New";
import ReviewsSection from "../Components/ReviewsSection";
import Season from "../Components/Season";
import Compo from "../Components/Compo";

export default function Home() {
  return (
    <div className="bg-cream">
      <HeroSection />         {/* Fixed BG, scrolls properly */}
      <Season />              {/* Normal */}
      <CategorySection />     {/* Normal */}
      <Compo />               
      <New />                 {/* Normal */}
      <ReviewsSection />      {/* Normal */}
      <AboutUs />             {/* Normal */}
    </div>
  );
}
