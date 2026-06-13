import HeroSection from "../Components/HeroSection";
import MarqueeBand from "../Components/MarqueeBand";
import LatestDrop from "../Components/Season";
import CategorySection from "../Components/Category";
import EditorialSplit from "../Components/New";
import Manifesto from "../Components/Compo";
import ReviewsSection from "../Components/ReviewsSection";
import AboutLazy from "../Components/AboutLazy";

export default function Home() {
  return (
    <div className="bg-canvas">
      <HeroSection />
      <MarqueeBand />
      <LatestDrop />
      <CategorySection />
      <EditorialSplit />
      <Manifesto />
      <ReviewsSection />
      <AboutLazy />
    </div>
  );
}
