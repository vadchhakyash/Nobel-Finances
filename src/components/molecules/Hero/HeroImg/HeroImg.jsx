import "../../../../App.css";
import Img from "../../../atoms/ImageTag/Img";

function HeroImg({img}) {
  return (
    <div className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[529px] h-auto mt-10 md:mt-0 flex justify-center md:justify-end">
      <Img className="w-full h-auto object-contain" src={img} alt="Globle" />
    </div>
  );
}

export default HeroImg;