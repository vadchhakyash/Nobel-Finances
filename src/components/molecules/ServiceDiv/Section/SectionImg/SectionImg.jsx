import "../../../../../App.css";
import Img from "../../../../atoms/ImageTag/Img";


// function SectionImg({src,alt}){
//     return(
//         <div className='flex items-center gap-[60px] p-[64px] px-[50px] relative box-border'>
//            <Img src={src} alt={alt} className={'w-[320px] h-auto object-contain'}/>
//         </div>
//     )
// }

// export default SectionImg;

// function SectionImg({ src, alt }) {
//   return (
//     <div className="flex items-center justify-center gap-8 sm:gap-[60px] p-6 sm:p-[64px] px-6 sm:px-[50px] box-border">
//       <Img src={src} alt={alt} className="w-[200px] sm:w-[320px] h-auto object-contain" />
//     </div>
//   );
// }
// export default SectionImg;


function SectionImg({ src, alt }) {
  return (
    <div className="flex items-center justify-center w-full">
      <Img
        src={src}
        alt={alt}
        className="w-[140px] xs:w-[180px] sm:w-[200px] md:w-[220px] lg:w-[260px] h-auto object-contain"
      />
    </div>
  );
}

export default SectionImg;
