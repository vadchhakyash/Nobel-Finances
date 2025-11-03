import "../../../../App.css";
import HeroHeading from "../../../molecules/Hero/HeroHeading/HeroHeading";
import HeroImg from "../../../molecules/Hero/HeroImg/HeroImg";
import Laptop from "/Laptop&Coin.png";

function HeroServices() {
  return (
    <header className="w-full min-h-[710px] bg-[#F9F9F9] flex flex-col-reverse md:flex-row items-center justify-around px-6 sm:px-10 py-16 sm:py-20 overflow-hidden">
      {/* Left side: Text always aligned left */}
      <div className="w-full md:w-1/2 flex justify-start">
        <HeroHeading Heading={"Your Financial Journey, Clearly Defined"} Para={"Trusted financial guidance for every stage of life and business since 1987"} Name={"Connect with our experts"} />
      </div>

      {/* Right side: Image (first on mobile, right on desktop) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <HeroImg img={Laptop} />
      </div>
    </header>
  );
}

export default HeroServices;