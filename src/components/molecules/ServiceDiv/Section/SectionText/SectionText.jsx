import "../../../../../App.css";
import Heading2 from "../../../../atoms/Heading/Heading2";
import Paragraph from "../../../../atoms/Paragraph/Paragraph";
import Button from "../../../../atoms/Button/Button";

// function SectionText({ Text,Texts }) {
//   return (
//     <div>
//       <Heading2 className={"text-[40px] font-normal text-[#2E4F21] mb-6 leading-[1.3]"} Text={Texts} />
//       <Paragraph
//         Text={Text}
//         className={"max-w-[400px] text-[20px] text-[#2E4F21] mb-8"}
//       />
//       <div className='flex gap-4'>
//            <Button label={'1099 taxes'} className={'px-5 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200'} />
//            <Button label={'Dependents'} className={'px-5 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200'} />
//            <Button label={'Trust Taxes'} className={'px-5 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200'} />
//       </div>
//     </div>
//   );
// }

// export default SectionText;

// function SectionText({ Text, Texts }) {
//   return (
//     <div>
//       <Heading2 className="text-3xl sm:text-4xl md:text-[40px] font-normal text-[#2E4F21] mb-4 sm:mb-6 leading-[1.3]" Text={Texts} />
//       <Paragraph
//         Text={Text}
//         className="max-w-full sm:max-w-[400px] text-base sm:text-[20px] text-[#2E4F21] mb-6 sm:mb-8"
//       />
//       <div className="flex flex-wrap gap-3 sm:gap-4">
//         <Button label="1099 taxes" className="px-4 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200" />
//         <Button label="Dependents" className="px-4 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200" />
//         <Button label="Trust Taxes" className="px-4 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200" />
//       </div>
//     </div>
//   );
// }
// export default SectionText;
function SectionText({ Text, Texts }) {
  return (
    <div className="w-full max-w-lg">
      <Heading2
        className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] font-normal text-[#2E4F21] mb-4 xs:mb-6 leading-[1.3]"
        Text={Texts}
      />
      <Paragraph
        Text={Text}
        className="max-w-full text-base xs:text-lg md:text-[20px] text-[#2E4F21] mb-6 md:mb-8"
      />
      <div className="flex flex-wrap gap-3 md:gap-4">
        <Button label="1099 taxes" className="px-4 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200" />
        <Button label="Dependents" className="px-4 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200" />
        <Button label="Trust Taxes" className="px-4 py-2 rounded-full bg-white text-[#2E4F21] shadow hover:bg-[#A0F1BD] transition-colors duration-200" />
      </div>
    </div>
  );
}

export default SectionText;

