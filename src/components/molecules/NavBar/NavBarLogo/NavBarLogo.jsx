import "../../../../App.css";
import Anchor from "../../../atoms/AnchorTag/AnchorTag";
import { useNavigate } from "react-router-dom";

function Logo(){
   const navigate = useNavigate();

    return(
        <div className='overflow-visible min-w-[1px] min-h-[1px] relative box-border flex flex-col items-start gap-[8px] flex-[1_0_0px]'>
            <Anchor onclick={()=>navigate("/")} clasName={'cursor-pointer relative w-[132.285px] h-[15.12px] shrink-0 block text-[#2E4F21] no-underline leading-[0.7]'} name={"Nobel Finances"} />
        </div>
    )
}

export default Logo;