import "../../../App.css";
import NavBar from "../../organisms/Header/Header";
import HeroSection from "../../templets/HomeTemplets/HeroSection/HeroSection";
import ServicesSection from "../../templets/HomeTemplets/ServicesSection/ServicesSection";
import TestimonialCards from "../../templets/HomeTemplets/TestimonialSection/TestimonialSection";
import ImageBreakSection from "../../templets/HomeTemplets/ImageBreakSection/ImageBreakSection";
import BenefitSection from "../../templets/HomeTemplets/BenefitsSection/BenefitsSection";
import CTASection from "../../templets/HomeTemplets/CTASection/CTASection";
import ExpertSection from "../../templets/HomeTemplets/ExpertsSection/ExpertsSection";
import Footer from "../../organisms/Footer/Footer";
import PersonImg from "../../../assets/Person Working On Laptop.png";

function HomePage() {
  return (
    <div className="bg-[#F9F9F9] w-full">
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TestimonialCards />
      <ImageBreakSection img={PersonImg} />
      <BenefitSection />
      <CTASection />
      <ExpertSection />
      <Footer />
    </div>
  );
}

export default HomePage;
