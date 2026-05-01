import { input } from "framer-motion/client";
import { useState, } from "react"

export default function Contact(){
    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const[inputError, setInputError] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        if (name == "" || email == "" || message == ""){
             setInputError(true);
        }
        else {
            setInputError(false);
            console.log(name, email, message);
        }
    }

    return(
        <div className = " flex mr-10 ml-10 items-center justify-center rounded-md  space-y-5 pb-10">
        <div className =" flex flex-col border-4 border-zinc-800 bg-zinc-900 w-96 lg:w-1/2  items-center rounded-lg">
        <h1 className ="text-white font-medium text-2xl leading-tight pt-10">Contact me!</h1>
        <div><h1 className = "font-medium text-lg">Name</h1>
        <input value={name} onChange ={(e) => setName(e.target.value)}className = "text-black rounded-md w-56"></input>
        </div>
        <div><h1 className ="font-medium text-lg">Email</h1>
        <input value={email} onChange = {(e) => setEmail(e.target.value)} className = "text-black w-56 rounded-md "></input>
        </div>
        <div className = "pb-5">
         <h1 className ="font-medium text-lg">Message</h1>
         <textarea value ={message} onChange ={(e) => setMessage(e.target.value)} className = "h-40 text-black justify-start rounded-md w-56"></textarea>   
        </div>
        <button onClick={handleSubmit}className ="bg-slate-50 w-20 h-10 rounded-lg text-black hover:w-24 hover:h-12 hover:bg-slate-300 mb-5">Submit</button>
         {inputError && <p>Error! One or more fields is empty!</p>}
         {!inputError && <p></p>}
        </div>
       
        </div>
    )
}