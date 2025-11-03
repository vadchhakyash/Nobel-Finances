import "../../../../App.css";
import HeroHeading from "../../../molecules/Hero/HeroHeading/HeroHeading";
import HeroImg from "../../../molecules/Hero/HeroImg/HeroImg";
import worldImg from "/World.png";

function HeroSection() {
  return (
    <header className="w-full min-h-[612px] bg-[#A0F1BD] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 py-16 sm:py-20 overflow-hidden">
      {/* Left side: Text always aligned left */}
      <div className="w-full md:w-1/2 flex justify-start">
        <HeroHeading Heading={"Financial Clarity You Can Trust"} Para={"Trusted financial guidance for every stage of life and business since 1987"} Name={"Connect with our experts"} />
      </div>

      {/* Right side: Image (first on mobile, right on desktop) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <HeroImg img={worldImg} />
      </div>
    </header>
  );
}

export default HeroSection;