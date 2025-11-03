import "../../../App.css";
import Img from "../../atoms/ImageTag/Img";
import Paragraph from "../../atoms/Paragraph/Paragraph";


// const BenefitCard = ({ icon, title, subtitle, description }) => (
//   <div className="px-8 py-10 flex flex-col gap-[30px] border-r border-b-green-800">
//     <Img src={icon} alt={'icon'} className={'w-[30px] h-[30px] text-3xl text-green-900'} />
//     <div className="text-3xl text-green-900 font-normal">{title}</div>
//     <div className="font-semibold text-green-900">{subtitle}</div>
//     <Paragraph className={'text-green-900'} Text={description} />
//   </div>
// );

// export default BenefitCard;

const BenefitCard = ({ icon, title, subtitle, description }) => (
  <div className="px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-6 sm:gap-[30px] border-l border-b-green-800 last:border-r-0 last:border-b-0">
    <Img src={icon} alt="icon" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] text-green-900" />
    <div className="text-2xl sm:text-3xl text-green-900 font-normal">{title}</div>
    <div className="font-semibold text-green-900 text-lg">{subtitle}</div>
    <Paragraph className="text-green-900 text-base sm:text-lg" Text={description} />
  </div>
);
export default BenefitCard;
