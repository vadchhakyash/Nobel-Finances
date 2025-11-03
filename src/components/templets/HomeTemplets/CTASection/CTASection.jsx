import CTAImg from "../../../molecules/CTA/CTAImg";
import CTAGreenCard from "../../../molecules/CTA/CTAGreenCard";

function CTASection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <CTAGreenCard />
        <CTAImg />
      </div>
    </section>
  );
}

export default CTASection;