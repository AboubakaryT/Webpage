import { FaChevronUp,  FaChevronDown} from "react-icons/fa";

export default function Projects(){
    return(
       <div className ="flex flex-col justify-center items-center">
        <button className =""><FaChevronUp size={150}/></button>
        <div>
            PlaceHolder
        </div>
        <button><FaChevronDown size={150} /></button>
       </div>
    )
}