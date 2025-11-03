import "../../../../App.css";
import Heading1 from "../../../atoms/Heading/Heading1";
import Paragraph from "../../../atoms/Paragraph/Paragraph";
import Anchor from "../../../atoms/AnchorTag/AnchorTag";
import { useNavigate } from "react-router-dom";

function HeroHeading({Heading,Para,Name}) {
  const navigator = useNavigate();
  return (
    <div className="max-w-[600px] flex flex-col gap-4 sm:gap-6 text-start md:text-left items-start md:items-start">
      <Heading1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#2E4F21] leading-tight font-normal"
        Text={Heading}
      />
      <Paragraph
        className="text-[#2E4F21] text-sm sm:text-base md:text-lg opacity-90"
        Text={Para}
      />
      <Anchor
        onclick={()=>navigator("/Booking")}
        name={Name}
        clasName="bg-[#2E4F21] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-[12px] sm:text-[13px] mt-6 hover:bg-[#A0F1BD] hover:text-[#2E4F21] transition-all duration-900"
      />
    </div>
  );
}

export default HeroHeading;