// import "../../../App.css";
// import Heading2 from "../../atoms/Heading/Heading2";
// import Paragraph from "../../atoms/Paragraph/Paragraph";
// import Button from "../../atoms/Button/Button";


// function CTAGreenCard(){
//     return(
//         <div className='bg-[#2E4F21] text-white rounded-2xl shadow-lg p-12 flex flex-col justify-center min-h-[320px]'>
//             <Heading2 className={'text-4xl font-extrabold mb-8 leading-tight'} Text={' A custom built plan for you'} />
//             <Paragraph className={'text-lg mb-10 max-w-xl text-green-100'} Text={' At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.'} />
//             <Button className={'bg-white text-green-900 rounded-full px-6 py-2 font-semibold shadow hover:bg-green-100 w-max'} label={'Learn More'}/>
//         </div>
//     )
// }

// export default CTAGreenCard;

import Heading2 from "../../atoms/Heading/Heading2";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

function CTAGreenCard() {
  const navigator = useNavigate();
  return (
    <div className="bg-[#2E4F21] text-white rounded-2xl shadow-lg p-6 sm:p-10 md:p-12 flex flex-col justify-center min-h-[320px]">
      <Heading2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 leading-tight" Text=" A custom built plan for you" />
      <Paragraph className="text-base sm:text-lg mb-6 sm:mb-10 max-w-full sm:max-w-xl text-green-100" Text=" At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security." />
      <Button className="bg-white text-green-900 rounded-full px-4 sm:px-6 py-2 font-semibold shadow hover:bg-green-100 w-max" label="Learn More" onClick={()=>navigator("/Services")} />
    </div>
  );
}

export default CTAGreenCard;
