import "../../../../../App.css";
import SectionText from "../../../../molecules/ServiceDiv/Section/SectionText/SectionText";
import SectionImg from "../../../../molecules/ServiceDiv/Section/SectionImg/SectionImg";
import Section2Img from "../../../../../assets/Section2.png"

function ServicesSection2() {
  return (
    <div className="w-full flex justify-end px-2 py-5 xs:px-4 sm:px-6">
      <div
        className="w-full max-w-[1036px] bg-[#CFF9D9] rounded-[32px]
        flex flex-col lg:flex-row justify-between items-start
        p-6 lg:p-10 box-border"
      >
        {/* Image container */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-auto">
          <SectionImg src={Section2Img} alt="Coins coming out of phone" />
        </div>

        {/* Text container */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left max-w-xl mt-6 lg:mt-0">
          <SectionText
            Texts={
              <>
                IRS Audit
                <br />
                Assistance
              </>
            }
            Text="Offer expert guidance and representation to resolve tax audits and disputes with confidence."
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection2;