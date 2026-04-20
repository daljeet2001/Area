
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.div viewport={{ once: true }}   initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,ease:"easeOut",delay:0.2}} className="flex flex-col w-full items-start justify-end gap-20 box-border pt-10 pb-10  border-t border-[#E9E9E9]">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-[27px] font-semibold [font-family:var(--font-dm)] text-sm">
                    <motion.a href="#code" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Benefits</motion.a>
                    <motion.a href="#why"  whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Specifications</motion.a>
                    <motion.a href="#success" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">How-to</motion.a>

                </div>

            </div>

            <div className="flex items-end gap-10 w-full">

                <img className="w-[31.75px] h-[70px] object-cover" src="/area9.svg" />
                <div className="flex items-center gap-4 grow shrink-0 basis-0 text-[#485C11]">
                    <p className="[font-family:var(--font-roboto)] text-xs leading-[1.4]">
                        © Area.


                    </p>
                    <p className="[font-family:var(--font-roboto)] text-xs leading-[1.4]">
                        2025
                    </p>
                </div>
                <p className="[font-family:var(--font-roboto)] text-xs leading-[1.4] text-[#485C11]">
                    All Rights Reserved
                </p>
            </div>
        </motion.div>
    )
}