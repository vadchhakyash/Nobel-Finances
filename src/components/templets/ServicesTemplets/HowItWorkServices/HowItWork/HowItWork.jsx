import WorkSteps from "../WorkSteps/WorkSteps";
import PencilImg from "../../../../../assets/Pencils.png";
import MoneyImg from "../../../../../assets/Doller.png";
import CubeImg from "../../../../../assets/Cube.png";

function HowItWork() {
  const steps = [
    {
      number: "1",
      title: "Our tax advisors write you a plan",
      description:
        "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
      imgSrc: PencilImg,
      alt: "Pencils representing planning",
    },
    {
      number: "2",
      title: "Onboard us to your finances",
      description:
        "Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
      imgSrc: MoneyImg,
      alt: "Money representing finances",
    },
    {
      number: "3",
      title: "We solve the rest",
      description:
        "Maintain organized financial records and provide clear reports to support business growth and financial health.",
      imgSrc: CubeImg,
      alt: "Rubik’s cube representing solutions",
    },
  ];

  return (
    <>
      <section className="max-w-[1200px] bg-[#FFFFFF] mx-auto px-6 md:px-12 py-24 md:py-36">
        <div className="text-left mb-20 md:mb-24">
          <p className="text-sm md:text-base text-[#2E4F21] opacity-80 mb-3">
            How it works
          </p>
          <h2 className="text-[36px] sm:text-[46px] md:text-[58px] font-normal text-[#2E4F21] leading-tight mb-3">
            A simple onboarding
          </h2>
          <p className="text-[#2E4F21] opacity-80 text-[14px] sm:text-[15px] md:text-[17px]">
            Serving individuals and small businesses since 1987
          </p>
        </div>

        <div className="flex flex-col">
          {steps.map((step) => (
            <WorkSteps key={step.number} {...step} />
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] h-[1px] bg-gray-200" />
      </div>
    </>
  );
}

export default HowItWork;
