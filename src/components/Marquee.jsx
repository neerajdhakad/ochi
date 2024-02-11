import { motion } from "framer-motion";
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-8 md:py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="flex overflow-hidden whitespace-nowrap border-t-2 border-b-2 border-zinc-300 py-5">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[16vw] leading-none font-['verdana] uppercase -mb-[] font-semibold pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[16vw] leading-none font-['verdana] uppercase -mb-[] font-semibold pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[16vw] leading-none font-['verdana] uppercase -mb-[] font-semibold pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
