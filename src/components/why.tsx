import { easeOut, motion } from "framer-motion";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function Why() {
    return (

        <motion.div viewport={{ once: true }}  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}} className="flex flex-col gap-5 items-start pb-30">

            <motion.div className="flex flex-col items-center gap-10 px-60 py-20 border-t border-[#E9E9E9]">

                <div className="flex flex-col items-center gap-10">

                    <div className="text-xs [font-family:var(--font-dm)] text-[#485C11]">
                        Specs
                    </div>

                    <div className="[font-family:var(--font-crimson)] text-6xl leading:[0.9] ">
                        Why Choose Area?
                    </div>

                    <div className="text-[15px] text-center [font-family:var(--font-dm)] text-[#6F6F6F] leading-[1.4] ">
                        You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business.
                    </div>

                    <motion.button whileHover={{ backgroundColor: "#8E9C78", color: "white" }} transition={{ duration: 0.2, ease: "easeInOut" }} className="cursor-pointer px-[22px] py-[14px] flex items-center justify-center  rounded-full bg-[#DFECC6]  text-black">
                        <p className="font-semibold text-sm [font-family:var(--font-dm)] ">Discover More</p>
                    </motion.button>




                </div>

            </motion.div>


            <div className="grid grid-cols-3 gap-6">

                <div className="flex flex-col items-start w-[463.33px] text-[#6F6F6F] rounded-2xl overflow-hidden hover:ring hover:ring-[#E9E9E9]  hover:text-black hover:shadow-xl hover:rounded-2xl">

                    <div className="h-24 w-full px-[30px] py-10 flex items-center justify-center [font-family:var(--font-dm)] font-medium text-[25.71px] leading-[1.2] box-border w-full  border-b border-[#929292] ">Area </div>

                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Ultra-fast browsing</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Advanced AI insights</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Seamless integration</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Advanced AI insights</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Ultra-fast browsing</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Full UTF-8 support</p>
                    </div>

                </div>

                    <div className="flex flex-col items-start w-[463.33px]  text-[#6F6F6F] rounded-2xl overflow-hidden hover:ring hover:ring-[#E9E9E9]  hover:text-black hover:shadow-xl hover:rounded-2xl">

                    <div className="h-24 w-full px-[30px] py-10 flex items-center justify-center [font-family:var(--font-dm)] font-medium text-[25.71px] leading-[1.2] box-border w-full  border-b border-[#929292]">WebSurge </div>

                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Fast browsing</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full  border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Basic AI recommendations</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Restricts customization</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Basic AI insights</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full   border-b  border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Fast browsing</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Potential display errors</p>
                    </div>

                </div>

                    <div className="flex flex-col items-start w-[463.33px] hover:ring hover:ring-[#E9E9E9]  text-[#6F6F6F] rounded-2xl overflow-hidden   hover:text-black hover:shadow-xl hover:rounded-2xl">

                    <div className="h-24 w-full px-[30px] py-10 flex items-center justify-center [font-family:var(--font-dm)] font-medium text-[25.71px] leading-[1.2] box-border w-full  border-b border-[#929292]">HyperView </div>

                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Moderate speeds</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">No AI assistance</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Steep learning curve</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">No AI assistance</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full border-b border-[#E9E9E9]">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Moderate speeds</p>
                    </div>
                    <div className="flex items-center gap-2 py-8 px-[30px] w-full">
                        <IoCheckmarkOutline size={12.25} />
                        <p className="[font-family:var(--font-dm)] leading-[1.4] text-xs">Partial UTF-8 support</p>
                    </div>

                </div>

             
                

            </div>

        </motion.div>

    )
}