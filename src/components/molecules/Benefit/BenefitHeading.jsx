import "../../../App.css";
import Heading2 from "../../atoms/Heading/Heading2";
import Paragraph from "../../atoms/Paragraph/Paragraph";

// function BenefitHeading(){
//     return(
//         <div className='flex mb-20'>
//             <div className='flex-1'>
//                 <Heading2 className={'text-green-900 text-5xl leading-tight font-normal'} Text={<>Smart Finance for<br />everyone </>} />
//             </div>
//             <div className='flex-1 pt-2 pl-12'>
//                 <Paragraph className={'text-green-900 text-lg'} Text={'At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you’re a solo entrepreneur, managing a growing family, or running a small business.'} />
//             </div>
//         </div>
//     )
// }

// export default BenefitHeading;


function BenefitHeading() {
  return (
    <div className="flex flex-col md:flex-row mb-12 md:mb-20 gap-6 md:gap-12">
      <div className="flex-1">
        <Heading2 className="text-green-900 text-3xl sm:text-4xl md:text-5xl leading-tight font-normal" Text={<>Smart Finance for<br />everyone</>} />
      </div>
      <div className="flex-1 pt-0 md:pt-2 pl-0 md:pl-12">
        <Paragraph className="text-green-900 text-base sm:text-lg" Text="At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you’re a solo entrepreneur, managing a growing family, or running a small business." />
      </div>
    </div>
  );
}
export default BenefitHeading;

