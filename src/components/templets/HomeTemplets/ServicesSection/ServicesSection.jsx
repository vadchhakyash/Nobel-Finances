import "../../../../App.css";
import IntroSection from "./IntroSection/IntroSection";
import ServicesSection1 from "./ServicesSection1/ServicesSection1";
import ServicesSection2 from "./ServiceSection2/ServiceSection2";
import ServicesSection3 from "./ServiceSection3/ServiceSection3";

function ServicesSection() {
  return (
    <div >
      <IntroSection />
      <ServicesSection1/>
      <ServicesSection2 />
      <ServicesSection3 />
    </div>
  );
}

export default ServicesSection;
