import "../../../../App.css";
import Img from "../../../atoms/ImageTag/Img";


function ImageBreakSection({img}){
    return(
        <div className='w-full aspect-[1280_/_600] shrink-0 block'>
            <Img src={img} alt={'Person working on laptop'} className={'w-full object-cover object-[50%_50%] absolute'} />
        </div>
    )
}

export default ImageBreakSection;