import CalculatorImg from "../../../../../assets/Calculater.png";
import Heading2 from "../../../../atoms/Heading/Heading2";
import Button from "../../../../atoms/Button/Button";
import Img from "../../../../atoms/ImageTag/Img";
import { useNavigate } from "react-router-dom";

function ConnectSection() {
    const navigator = useNavigate();
  return (
    <section className="w-full bg-[#F5FAF7] py-20 px-6 sm:px-10 lg:px-20">
      <div
        className="
          flex flex-col-reverse md:flex-row 
          items-center justify-between 
          gap-12 md:gap-20 
          max-w-[1200px] mx-auto
        "
      >
        {/* LEFT TEXT SECTION (will appear second on mobile) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <Heading2 className={"text-[#2E4F21] font-normal text-[32px] sm:text-[42px] md:text-[52px] leading-tight mb-8 max-w-[500px]"} Text={<> Say goodbye to taxes <br className="hidden sm:block" /> of the past</>} />

          <Button className={"bg-[#2E4F21] text-white text-sm sm:text-base font-medium py-3 sm:py-4 px-8 sm:px-10 rounded-full hover:bg-[#A0F1BD] hover:text-[#2E4F21] transition-all duration-900"} label={'Connect with our experts'} onClick={()=>navigator("/Booking")} />
        </div>

        {/* RIGHT IMAGE SECTION (will appear first on mobile) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-[#A0F1BD] rounded-[30px] w-full max-w-[500px] h-[400px] sm:h-[420px] md:h-[460px] flex items-center justify-center overflow-hidden">
            <Img className={"w-auto h-[80%] object-contain"} src={CalculatorImg} alt={"Calculator"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
