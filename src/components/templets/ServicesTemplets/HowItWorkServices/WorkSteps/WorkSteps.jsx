// import Heading2 from "../../../../atoms/Heading/Heading2";
// import Img from "../../../../atoms/ImageTag/Img";
// import Heading3 from "../../../../atoms/Heading/Heading3";
// import Paragraph from "../../../../atoms/Paragraph/Paragraph";

// function WorkSteps({ number, title, description, imgSrc, alt }) {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 w-full py-10">
//       {/* Left Section: Number + Text */}
//       <div className="flex items-start gap-6 w-full md:w-2/3">
//       <Heading2 className={"text-6xl md:text-8xl text-[#2E4F21] font-light"} Text={number} />
//         <div className="flex flex-col gap-2">
//             <Heading3 className={"text-xl md:text-2xl font-medium text-[#2E4F21]"} Text={title} />
//           <Paragraph className={"text-sm md:text-base text-[#2E4F21] opacity-80 leading-relaxed"} Text={description} />
//         </div>
//       </div>

//       {/* Right Section: Image */}
//       <div className="w-full md:w-[250px] h-auto flex justify-center md:justify-end">
//         <Img
//           src={imgSrc}
//           alt={alt}
//           className={"w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-2xl bg-[#F9FAF8]"}
//         />
//       </div>
//     </div>
//   );
// }

// export default WorkSteps;


// import Heading2 from "../../../../atoms/Heading/Heading2";
// import Img from "../../../../atoms/ImageTag/Img";
// import Heading3 from "../../../../atoms/Heading/Heading3";
// import Paragraph from "../../../../atoms/Paragraph/Paragraph";

// function WorkSteps({ number, title, description, imgSrc, alt }) {
//   return (
//     <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 w-full py-10">
//       {/* Left Section: Number + Text */}
//       <div className="flex items-start gap-6 w-full md:w-2/3 text-left">
//         <Heading2
//           className={
//             "text-6xl md:text-8xl text-[#2E4F21] font-light leading-none"
//           }
//           Text={number}
//         />
//         <div className="flex flex-col gap-2">
//           <Heading3
//             className={
//               "text-xl md:text-2xl font-medium text-[#2E4F21] leading-snug"
//             }
//             Text={title}
//           />
//           <Paragraph
//             className={
//               "text-sm md:text-base text-[#2E4F21] opacity-80 leading-relaxed"
//             }
//             Text={description}
//           />
//         </div>
//       </div>

//       {/* Right Section: Image (comes first on mobile) */}
//       <div className="w-full md:w-[250px] h-auto flex justify-center md:justify-end mb-6 md:mb-0">
//         <Img
//           src={imgSrc}
//           alt={alt}
//           className={
//             "w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-2xl bg-[#F9FAF8]"
//           }
//         />
//       </div>
//     </div>
//   );
// }

// export default WorkSteps;


// import Heading2 from "../../../../atoms/Heading/Heading2";
// import Img from "../../../../atoms/ImageTag/Img";
// import Heading3 from "../../../../atoms/Heading/Heading3";
// import Paragraph from "../../../../atoms/Paragraph/Paragraph";

// function WorkSteps({ number, title, description, imgSrc, alt }) {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center w-full py-24 md:py-32 gap-12 md:gap-0">
//       {/* Left: Number + Text */}
//       <div className="flex items-start gap-10 md:gap-16 w-full md:w-2/3 text-left">
//         {/* Step number */}
//         <Heading2
//           className={
//             "text-[110px] md:text-[160px] leading-none text-[#2E4F21] font-light tracking-tight"
//           }
//           Text={number}
//         />

//         {/* Text content */}
//         <div className="flex flex-col gap-4 md:gap-6 mt-2">
//           <Heading3
//             className={
//               "text-[24px] md:text-[36px] font-medium text-[#2E4F21] leading-snug max-w-[460px]"
//             }
//             Text={title}
//           />
//           <Paragraph
//             className={
//               "text-[14px] md:text-[17px] text-[#2E4F21] opacity-80 leading-relaxed max-w-[460px]"
//             }
//             Text={description}
//           />
//         </div>
//       </div>

//       {/* Right: Image */}
//       <div className="w-full md:w-[300px] flex justify-start md:justify-end mt-10 md:mt-0">
//         <Img
//           src={imgSrc}
//           alt={alt}
//           className={
//             "w-[220px] h-[220px] md:w-[300px] md:h-[300px] object-cover rounded-3xl bg-[#F9FAF8]"
//           }
//         />
//       </div>
//     </div>
//   );
// }

// export default WorkSteps;


import Heading2 from "../../../../atoms/Heading/Heading2";
import Img from "../../../../atoms/ImageTag/Img";
import Heading3 from "../../../../atoms/Heading/Heading3";
import Paragraph from "../../../../atoms/Paragraph/Paragraph";

function WorkSteps({ number, title, description, imgSrc, alt }) {
  return (
    <div
      className="
      flex flex-col md:flex-row justify-between items-start md:items-center
      w-full py-20 md:py-12 gap-10 md:gap-0
    "
    >
      {/* Left Section: Number + Text */}
      <div
        className="
        flex flex-col md:flex-row items-start md:items-start
        gap-6 md:gap-30 w-full md:w-2/3 text-left
      "
      >
        {/* Step number */}
        <Heading2
          className="
          text-[90px] sm:text-[120px] md:text-[160px]
          leading-none text-[#2E4F21] font-light tracking-tight
        "
          Text={number}
        />

        {/* Text content */}
        <div className="flex flex-col gap-3 md:gap-5">
          <Heading3
            className="
            text-[22px] sm:text-[28px] md:text-[36px]
            font-medium text-[#2E4F21] leading-snug
            max-w-[460px]
          "
            Text={title}
          />
          <Paragraph
            className="
            text-[14px] sm:text-[15px] md:text-[17px]
            text-[#2E4F21] opacity-80 leading-relaxed
            max-w-[460px]
          "
            Text={description}
          />
        </div>
      </div>

      {/* Right Section: Image */}
      <div
        className="
        w-full md:w-[300px]
        flex justify-center md:justify-end
        mt-6 md:mt-0
      "
      >
        <Img
          src={imgSrc}
          alt={alt}
          className="
          w-[240px] sm:w-[280px] md:w-[300px]
          h-[240px] sm:h-[280px] md:h-[300px]
          object-cover rounded-3xl bg-[#F9FAF8]
        "
        />
      </div>
    </div>
  );
}

export default WorkSteps;
