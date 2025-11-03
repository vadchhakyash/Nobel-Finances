import ClockImg from "/Clock.png"
import Img from "../../atoms/ImageTag/Img";
import Heading2 from "../../atoms/Heading/Heading2";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

function BookingSection() {
  return (
    <section className="w-full bg-[#DDF8E3] py-16 sm:py-20 px-6 sm:px-10 lg:px-20">
      <div
        className="
          flex flex-col md:flex-row 
          items-center justify-between 
          gap-10 md:gap-20 
          max-w-[1200px] mx-auto
        "
      >
        {/* LEFT IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-[#A0F1BD] rounded-[25px] sm:rounded-[30px] w-full max-w-[400px] h-[320px] sm:h-[360px] md:h-[400px] flex items-center justify-center overflow-hidden">
            <Img className={"w-auto h-[80%] object-contain"} src={ClockImg} alt={"Clock"} />
          </div>
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <Heading2 className={"text-[#2E4F21] font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-tight mb-4"} Text={"Book an appointment now"} />
          <Paragraph className={"text-[#2E4F21]/70 text-sm sm:text-base mb-8"} Text={'Serving individuals and small businesses since 1987'} />
          <Button className={"bg-[#2E4F21] text-white text-sm sm:text-base font-medium py-3 px-8 rounded-full hover:bg-[#24401a] transition-all duration-300"} label={"Contact Us"} />
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
