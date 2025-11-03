import "../../../../../App.css";
import SectionText from "../../../../molecules/ServiceDiv/Section/SectionText/SectionText";
import SectionImg from "../../../../molecules/ServiceDiv/Section/SectionImg/SectionImg";
import Section3Img from "/Section3.png"


function ServicesSection3() {
  return (
    <div className="w-full flex justify-start px-2 xs:px-4 sm:px-6 py-5">
      <div
        className="w-full max-w-full lg:w-[1036px]
          bg-[#CFF9D9] rounded-[32px]
          flex flex-col lg:flex-row
          justify-center lg:justify-between
          items-center p-4 lg:py-[50px] lg:px-[24px] box-border
          ml-0"
      >
        {/* Image ALWAYS on top in mobile, left in desktop */}
        <div className="w-full lg:w-auto order-1 lg:order-none mb-4 lg:mb-0">
          <SectionImg src={Section3Img} alt={"Coins coming out of phone"} />
        </div>
        {/* Text ALWAYS below in mobile, right in desktop */}
        <div className="w-full lg:w-auto order-2 lg:order-none">
          <SectionText
            Texts={<>Book keeping &<br />Accounting</>}
            Text={
              "Maintain organized financial records and provide clear reports to support business growth and financial health."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection3;





