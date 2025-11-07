import BrandIntro from "./brandIntro/BrandIntro";
import Category from "./category/Category";
import HeroSection from "./heroSection/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
       <BrandIntro/>
      <Category />
    </>
  );
}
