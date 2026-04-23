import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center pt-5 pb-20 px-10">

            <p className="[font-family:var(--font-dm)] text-3xl font-medium cursor-pointer">Area</p>

                <motion.div  initial={{opacity:0}} animate={{opacity:1}}  whileHover="hover" className="cursor-pointer px-[22px] py-[14px] flex items-center justify-center gap-[2px] rounded-full bg-[#485C11] hover:bg-[#8E9C78] text-white">
                    <p className="font-semibold text-sm [font-family:var(--font-dm)] ">Learn more</p>
                    <motion.div variants={{hover:{y:-6}}} transition={{duration:0.4,ease:"easeOut"}}>
                         <GoArrowUpRight size={10} />
                    </motion.div>
                   
                </motion.div>

    
        </div>
    )
}