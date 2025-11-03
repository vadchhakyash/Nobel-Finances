import BenefitHeading from "../../../molecules/Benefit/BenefitHeading";
import BenefitMapCard from "../../../molecules/Benefit/BenefitMapCard";

// function BenefitSection() {
//   return (
//     <section className="bg-white py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading + Blurb */}
//         <BenefitHeading />
//         {/* 3-Column Feature Grid */}
//         <BenefitMapCard />
//       </div>
//     </section>
//   );
// }

// export default BenefitSection;

function BenefitSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <BenefitHeading />
        <BenefitMapCard />
      </div>
    </section>
  );
}
export default BenefitSection;
