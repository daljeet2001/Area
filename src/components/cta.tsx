import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

export default function CTA() {
    return (
        <motion.div viewport={{ once: true }}   initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}} className="flex flex-col items-center gap-10 py-30 px-[300px] w-full">

            <div className="[font-family:var(--font-crimson)] text-6xl leading-[0.9] ">
                Connect with us
            </div>
            <div className="[font-family:var(--font-dm)] text-base leading-[1.3] text-[#6F6F6F]">
                Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover="hover" className="cursor-pointer px-[22px] py-[14px] flex items-center justify-center gap-[2px] rounded-full bg-[#485C11] hover:bg-[#8E9C78] text-white w-full">
                <p className="font-semibold text-sm [font-family:var(--font-dm)] ">Learn more</p>
                <motion.div variants={{ hover: { y: -6 } }} transition={{ duration: 0.4, ease: "easeOut" }}>
                    <GoArrowUpRight size={10} />
                </motion.div>

            </motion.div>

        </motion.div>
    )
}