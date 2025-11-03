import "../../../../App.css";
import Anchor from "../../../atoms/AnchorTag/AnchorTag";
import { useNavigate } from "react-router-dom";

function NavOther() {
  const navigator = useNavigate();
  return (
    <div className="overflow-visible relative box-border flex justify-end items-center gap-[20px] flex-[1_0_0px] min-w-[1px] min-h-[1px]">
      <Anchor
        onclick={()=>navigator("/Services")}
        clasName={"cursor-pointer text-[#2E4F21] no-underline font-normal"}
        name={"services"}
      />
      <div className="cursor-pointer w-[141.05px] h-[37.2px] relative opacity-100 rounded-[51.575px] text-[11px] text-[#FFFFFF] bg-[#2E4F21] flex box-border justify-center items-center gap-[4px] p-[12px] hover:bg-[#ffffff] hover:text-[#2E4F21] transition-all duration-900">
        <Anchor
           onclick={()=>navigator("/Booking")}
          clasName={
            " flex flex-row  align-top relative items-start leading-4.5"
          }
          name={"Book an appointment"}
        />
      </div>
    </div>
  );
}

export default NavOther;