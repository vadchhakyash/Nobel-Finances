import "../../../../App.css";
import Paragraph from "../../../atoms/Paragraph/Paragraph";
import Heading1 from "../../../atoms/Heading/Heading1";
import Anchor from "../../../atoms/AnchorTag/AnchorTag";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigator = useNavigate();
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center text-center gap-5 sm:gap-7 py-16 sm:py-20">
      
      {/* Top small heading */}
      <Paragraph
        className="text-sm sm:text-base md:text-[15px] leading-normal text-[#2E4F21]"
        Text="Services"
      />

      {/* Main heading */}
      <Heading1
        Text="Let us handle the numbers, so you can handle your success."
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-[350] text-[#2E4F21] leading-tight sm:leading-[1.2] tracking-normal max-w-[780px] mx-auto text-center"
      />

      {/* Subtext */}
      <Paragraph
        Text="Serving individuals and small businesses since 1987"
        className="text-sm sm:text-base md:text-lg leading-relaxed text-[#2E4F21] opacity-80 max-w-[700px]"
      />

      {/* CTA Button */}
      <Anchor
        onclick={()=>navigator("/Booking")}
        name="Schedule a call"
        clasName="bg-[#2E4F21] text-white px-5 py-2 sm:px-6 sm:py-[11px] rounded-full text-sm sm:text-[13px] font-normal hover:bg-[#234423] transition-all duration-300"
      />
    </div>
  );
}

export default Intro;