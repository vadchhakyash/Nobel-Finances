import "../../../App.css";
import NavBar from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import HeroServices from "../../templets/ServicesTemplets/HeroServices/HeroServices";
import ImageBreakServices from "../../templets/ServicesTemplets/ImageBreakServices/ImageBreakServices";
import HowItWork from "../../templets/ServicesTemplets/HowItWorkServices/HowItWork/HowItWork";
import PhilosophySection from "../../templets/ServicesTemplets/PhilosophyServices/PhilosophySection/PhilosophySection";
import ConnectSection from "../../templets/ServicesTemplets/ConnectServices/ConnectSection/ConnectSection";

function ServicesPage() {
  return (
    <div className="bg-[#Ffffff] w-full">
      <NavBar />
      <HeroServices/>
      <ImageBreakServices/>
      <HowItWork />
      <PhilosophySection />
      <ConnectSection />
      <Footer />
    </div>
  );
}

export default ServicesPage;