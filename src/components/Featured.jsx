import {motion, useAnimation } from "framer-motion"; 

function Featured() {
  // const [isHovering, setHovering] = useState(false);
  const cards = [useAnimation(),useAnimation()];
  const handleHover = (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
  }

  return (
    <div className="w-full py-10 md:py-20">
      <div className="w-full px-10 md:px-20 border-b-[1px] pb-10 md:pb-20">
        <h1 className="text-3xl md:text-6xl font-['Neue_Montreal'] tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="w-full px-10 md:px-20">
        <div className="cards w-full flex flex-col sm:flex-row gap-10 mt-10">

          <motion.div  onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardContainer relative w-1/2 h-[70vh]">

            <h1 className="absolute flex overflow-hidden right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-9xl font-semibold leading-none tracking-tighter text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span 
                initial={{y:"100%"}}
                animate={cards[0]}
                transition={{ease:[0.22,1,0.36,1] , delay:index*.05}}
                key={index} 
                className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardContainer relative w-1/2 h-[70vh] ">
            <h1 className="absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2   text-9xl font-semibold leading-none tracking-tighter text-[#CDEA68]">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{y:"100%"}}
                  animate={cards[1]}
                  transition={{ease:[0.22,1,0.36,1] , delay:index*.05}}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
