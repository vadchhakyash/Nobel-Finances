import "../../../App.css";
import Logo from "../../molecules/NavBar/NavBarLogo/NavBarLogo";
import NavOther from "../../molecules/NavBar/NavBarOther/NavBarOther";


function NavBar(){
    return(
         <nav className='w-full h-[85px] flex bg-[#A0F1BD]'>
            <div className='w-full h-full relative flex flex-row items-center rounded-[inherit]'>
                <div className='w-full h-[85px] flex justify-between items-center relative p-6 box-border overflow-visible'>
                    <Logo />
                    <NavOther />
                </div>
            </div>
         </nav>
    )
}

export default NavBar;