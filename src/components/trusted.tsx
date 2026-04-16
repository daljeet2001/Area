"use client"


import { motion } from "framer-motion";




export default function Trusted() {
    return (
        <motion.div viewport={{ once: true }}   initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}} className="py-[50px] flex flex-col items-center gap-8 border-b border-[#E9E9E9]">

            <motion.div className="[font-family:var(--font-dm)] text-[15px] text-[#6F6F6F] flex items-center justify-start w-full ">
                Trusted by:
            </motion.div>

            <div className="flex items-center justify-center gap-[30px] flex-wrap">

                <motion.div   className="p-5 flex items-center justify-center w-[154px] h-[84px]">
                    <img src="/logo1.png" className="object-contain w-[114px] h-11 " />
                </motion.div>


                <motion.div  className="p-5 flex items-center justify-center w-[154px] h-[84px]">
                    <img src="/logo2.png" className="object-contain w-[114px] h-11 " />
                </motion.div>


                <motion.div    className="p-5 flex items-center justify-center w-[154px] h-[84px]">
                    <img src="/logo3.png" className="object-contain w-[114px] h-11 " />
                </motion.div>


                <motion.div  className="p-5 flex items-center justify-center w-[154px] h-[84px]">
                    <img src="/logo4.png" className="object-contain w-[114px] h-11" />
                </motion.div>


                <motion.div className="p-5 flex items-center justify-center w-[154px] h-[84px]">
                    <img src="/logo5.png" className="object-contain w-[114px] h-11" />
                </motion.div>


                <motion.div  className="p-5  w-[154px] h-[84px]">
                    <img src="/logo6.png" className="object-contain w-[114px] h-11" />
                </motion.div>

            </div>




        </motion.div>

    )
}