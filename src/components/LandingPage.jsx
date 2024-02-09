import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
        <div className="textstructure mt-52 px-20">
            {["We Create","Eye Opening","Presentations"].map((item,index)=>{
                return <div className="masker" key={index}>
                    <div className="w-fit flex items-end  overflow-hidden"> 
                    {index===1 && (<div className="w-[9vw] h-[5vw] mr-3 rounded-md bg-red-300"></div>)}
                    <h1 className="uppercase text-[6vw] leading-[6vw] tracking-tighter font-['Verdana'] font-bold ">{item}</h1>
                </div>
            </div>
            })}
        </div>
        <div className="border-t-[1px] border-zinc-700 mt-20 flex items-center justify-between">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
                return <p key={index} className="py-5 px-20 text-md tracking-tight leading-none">{item}</p>
            })}
        <div className="start flex items-center gap-2 px-20">
            <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">start the project</div>
            <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
                <span className="rotate-[45deg]">
                <FaArrowUpLong />
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage