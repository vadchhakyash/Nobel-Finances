import Paragraph from "../../../../atoms/Paragraph/Paragraph";
import Heading2 from "../../../../atoms/Heading/Heading2";

function PhilosophyCard({ title, subtitle, beliefs }){
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
        {/* Top Text */}

        <Paragraph className={"text-sm md:text-base text-[#2E4F21] opacity-80 mb-3"} Text={subtitle}/>
         <Heading2 className={"text-[36px] sm:text-[46px] md:text-[58px] text-[#2E4F21] font-normal mb-14 md:mb-20 leading-tight"} Text={title}/>

        {/* Beliefs list */}
        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="
                bg-[#DDF8E3] text-[#2E4F21]
                rounded-[30px]
                py-10 md:py-14
                px-6 sm:px-10 md:px-16
                text-center flex flex-col items-center
                shadow-sm
              "
            >
              <p className="text-sm md:text-base font-normal opacity-80 mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p
                className="
                  text-[16px] sm:text-[18px] md:text-[20px]
                  font-normal leading-relaxed max-w-[800px]
                "
              >
                {belief}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyCard;
