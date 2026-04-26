import { FaChevronUp,  FaChevronDown} from "react-icons/fa";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
export default function Projects(){
    const projects = [{Name: "HackYourHeart"},
    {Name: "Blockchain Transaction Processing Automation",
        
    }]

    return(

       <div className ="flex flex-col justify-center items-center">
        <button><FaChevronUp size={150}/></button>
        <div className = "swiper">

        </div>

        <button><FaChevronDown size={150} /></button>
       </div>
    )
}