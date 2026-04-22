
import { motion } from "framer-motion";

export default function Header(){
    return(
        <div className="flex flex-col gap-20 md:gap-25 h-[666.59px] md:h-[738px]  overflow-hidden px-4 md:px-10">

            <motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8, ease:"easeOut"}} className="[font-family:var(--font-crimson)] text-[76px] md:text-[140px] lg:text-[160px] text-center leading-[0.85] tracking-[-0.05em] ">
                Browse everything.
            </motion.h1> 


            <motion.div  className="relative block md:hidden  ">

                <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1, ease:"easeOut",delay:0.2}} className="relative z-25 border-2 border-[#929292] w-[300px] 
                 md:w-[676.55px]  lg:w-[907px] h-[489.82px] md:h-[422.94px] lg:h-[644px]   mx-auto bg-black rounded-4xl p-2.5 md:p-3.5 lg:p-4.5 shadow-2xl">

                    <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-black h-[22.19px] w-[94.06px] rounded-4xl "></div>

                <div className="rounded-2xl overflow-hidden w-full h-full">
                    <img src="/Umbria.webp" className="w-full h-full object-cover"/>
                </div>
                </motion.div>
                 <motion.div initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8, ease:"easeOut"}} className="w-full h-[362px] absolute right-0 top-[62%] md:top-1/2 -translate-y-1/2 rounded-4xl bg-[#8E9C78]"></motion.div>

            </motion.div>

            <motion.div  className="relative hidden md:block  ">

                <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1, ease:"easeOut",delay:0.2}} className="relative z-25 border-2 border-[#929292] w-[270px]
                 md:w-[676.55px]  lg:w-[907px] h-[541.82px] md:h-[522.94px] lg:h-[644px]   mx-auto bg-black rounded-3xl p-2.5 md:p-3.5 lg:p-4.5 shadow-2xl">

                <div className="rounded-2xl overflow-hidden w-full h-full">
                    <img src="/Umbria.webp" className="w-full h-full object-cover"/>
                </div>
                </motion.div>
                 <motion.div initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8, ease:"easeOut"}} className="w-full h-[362px] absolute right-0 top-1/2 -translate-y-1/2 rounded-4xl bg-[#8E9C78]"></motion.div>

            </motion.div>

           

        </div>
    )
} 