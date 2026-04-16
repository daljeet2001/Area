
import { motion } from "framer-motion";

export default function Header(){
    return(
        <div className="flex flex-col gap-25 h-[738px] overflow-hidden">

            <motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8, ease:"easeOut"}} className="[font-family:var(--font-crimson)] text-[160px] text-center leading-[0.85] tracking-[-0.05em] ">
                Browse everything.
            </motion.h1>


            <motion.div  className="relative">

                <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1, ease:"easeOut",delay:0.2}} className="relative z-25 border-2 border-[#929292]  w-[907px] h-[644px]  mx-auto bg-black rounded-3xl p-4.5 shadow-2xl">

                <div className="rounded-2xl overflow-hidden">
                    <img src="/header.avif" className="w-full h-full object-cover"/>
                </div>
                </motion.div>
                 <motion.div initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8, ease:"easeOut"}} className="w-full h-[362px] absolute right-0 top-1/2 -translate-y-1/2 rounded-4xl bg-[#8E9C78]"></motion.div>

            </motion.div>

           

        </div>
    )
} 