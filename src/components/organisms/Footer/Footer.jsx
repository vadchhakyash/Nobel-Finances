import { useNavigate } from "react-router-dom";

function Footer () {
  const navigator = useNavigate();

  return(
    <footer className="bg-[#2E4F21] text-white pt-12 pb-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[280px]">
      {/* Top row: stack vertically on small screens, horizontally on medium+ */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 space-y-6 md:space-y-0">
        {/* Left: Brand */}
        <div className="text-2xl font-semibold" onClick={()=>navigator("/")}>Noble Finances</div>
        
        {/* Center: Services & Button horizontally aligned */}
        <div className="flex flex-row justify-center items-center space-x-4">
          <span className="text-base" onClick={()=>navigator("/Services")}>Services</span>
          <button onClick={()=>navigator("/Booking")} className="rounded-full bg-white text-green-900 px-6 py-2 text-base font-medium shadow hover:bg-[#A0F1BD] transition">
            Book An Appointment
          </button>
        </div>
        
        {/* Right: Spacer hidden on small screens */}
        <div className="w-40 hidden md:block"></div>
      </div>

      {/* Bottom row: stack vertically on small screens */}
      <div className="flex flex-col md:flex-row justify-between text-sm items-center md:items-end space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <div className="font-semibold">Financial Clarity You Can Trust</div>
          <div>
            Trusted financial guidance for every stage of life and business since 1987
          </div>
        </div>
        <div className="w-full md:w-auto text-center">
          © 2025 All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
  )

  
};

export default Footer;
