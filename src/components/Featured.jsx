import { motion } from "framer-motion";

function Featured() {

  return (
    <div className="w-full py-10 md:py-20">
      <div className="w-full px-10 md:px-20 border-b-[1px] pb-10 md:pb-20">
        <h1 className="text-3xl md:text-6xl font-['Neue_Montreal'] tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="w-full px-10 md:px-20">
        <div className="cards w-full flex flex-col sm:flex-row gap-10 mt-10">
          <div className="cardContainer relative w-1/2 h-[70vh]">
            <h1 className="absolute overflow-hidden left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-9xl font-semibold leading-none tracking-tighter text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{}} key={index} className="inline-block translate-y-full">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardContainer relative w-1/2 h-[70vh] ">
            <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2   text-9xl font-semibold leading-none tracking-tighter text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
