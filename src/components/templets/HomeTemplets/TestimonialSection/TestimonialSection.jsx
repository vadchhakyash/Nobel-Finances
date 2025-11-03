import React, { useState } from "react";
import Heading1 from "../../../atoms/Heading/Heading1";
import Heading2 from "../../../atoms/Heading/Heading2";
import Paragraph from "../../../atoms/Paragraph/Paragraph";
import Img from "../../../atoms/ImageTag/Img";
import profiles from "../../../Data/ProfileData";

function TestimonialCards() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col items-center bg-[#F9FAF8] px-4 sm:px-8 md:px-16 py-12 sm:py-16">
      <Heading1 className="text-3xl sm:text-4xl md:text-5xl text-[#234423] font-semibold mb-12 sm:mb-20" Text={"Hear From Our Happy Clients"} />

      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left side - Profile list */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-[300px] pr-0 md:pr-10 border-b md:border-b-0 md:border-r border-[#4E6C50] mb-8 md:mb-0">
          {profiles.map((profile, idx) => (
            <div
              key={profile.title}
              onClick={() => setSelected(idx)}
              className={`cursor-pointer rounded-md mb-0 md:mb-8 p-4 md:p-6 flex-shrink-0 md:flex-shrink ${
                selected === idx
                  ? "bg-[#234423] text-white shadow-lg"
                  : "text-[#234423] hover:bg-[#E7F3E7]"
              }`}
              style={{ minWidth: "200px" }}
            >
              <Heading2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 border-b border-[#90B77D] pb-1" Text={profile.title} />
              <Paragraph className="text-xs sm:text-sm opacity-90" Text={profile.location} />
            </div>
          ))}
        </div>

        {/* Right side - Testimonial */}
        <div className="flex flex-col justify-center flex-1 pl-0 md:pl-16">
          <Paragraph className="text-xl sm:text-2xl md:text-3xl text-[#234423] mb-8 sm:mb-10 leading-snug max-w-full sm:max-w-3xl" Text={profiles[selected].testimonial} />

          <div className="flex items-center gap-4 sm:gap-5">
            <Img src={profiles[selected].avatar} alt={profiles[selected].name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
            <span className="font-semibold text-[#234423] text-base sm:text-lg">
              {profiles[selected].name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;