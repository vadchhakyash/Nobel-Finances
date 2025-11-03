import Img from "../../atoms/ImageTag/Img";
import Wood from "../../../assets/Wooden Stairs.png";

function CTAImg() {
  return (
    <div className="bg-green-100 rounded-2xl shadow-lg flex items-center justify-center min-h-[320px] p-4 md:p-8">
      <Img src={Wood} alt="Plan illustration" className="object-contain max-w-full h-auto" />
    </div>
  );
}

export default CTAImg;
