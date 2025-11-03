import Heading1 from "../../../atoms/Heading/Heading1";
import Button from "../../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

function ExpertSection() {
  const navigator = useNavigate();
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-[160px] py-12 sm:py-20 flex flex-col items-center justify-center bg-[#fafafa]">
      <Heading1
        className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[350] text-[#2E4F21] leading-tight text-center max-w-full sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] mb-12"
        Text={
          <>
            We believe that tax filing should be seamless, accurate, and stress-free.
            <br />
            Get started with Noble Finance today!
          </>
        }
      />
      <Button
        className="mt-6 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-green-900 text-white text-base sm:text-lg rounded-full hover:bg-green-800 transition"
        label="Connect with our experts" onClick={()=>navigator("/Booking")}
      />
    </div>
  );
}

export default ExpertSection;