import { motion } from "framer-motion";

export default function Success(){
    return(
        <motion.div  viewport={{ once: true }}  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}} className="flex flex-col items-start gap-20 pt-20 pb-30 border-t border-[#E9E9E9]">

            <div className="w-full flex items-start justify-between">

                <div className="[font-family:var(--font-crimson)] text-6xl leading-[0.9]">
                    Map Your Success
                </div>

                    <motion.button whileHover={{ backgroundColor: "#8E9C78", color: "white" }} transition={{ duration: 0.2, ease: "easeInOut" }} className="cursor-pointer px-[22px] py-[14px] flex items-center justify-center  rounded-full bg-[#DFECC6]  text-black">
                        <p className="font-semibold text-sm [font-family:var(--font-dm)] ">Discover More</p>
                    </motion.button>

            </div>

            <div className="items-start grid grid-cols-3 gap-5 w-full">

                <div className="flex flex-col items-start gap-[60px] pt-[60px] pr-[30px] pb-5 border-t border-[#E9E9E9] ">
                    <div className="text-[80px] [font-family:var(--font-dm)] text-[#929292]">01</div>

                    <div className="flex flex-col items-start gap-5">
                        <div className="text-lg [font-family:var(--font-crimson)]">Get Started</div>
                        <div className="text-[15px] [font-family:var(--font-crimson)] leading-[1.4] text-[#6F6F6F]">With our intuitive setup, you’re up and running in minutes.
</div>

                    </div>
                </div>

                        <div className="flex flex-col items-start gap-[60px] pt-[60px] pr-[30px] pb-5 border-t border-[#E9E9E9]">
                    <div className="text-[80px] [font-family:var(--font-dm)] text-[#929292]">02</div>

                    <div className="flex flex-col items-start gap-5">
                        <div className="text-lg [font-family:var(--font-crimson)]">Customize and Configure</div>
                        <div className="text-[15px] [font-family:var(--font-crimson)] leading-[1.4] text-[#6F6F6F]">Adapt Area to your specific requirements and preferences.
</div>

                    </div>
                </div>

                        <div className="flex flex-col items-start gap-[60px] pt-[60px] pr-[30px] pb-5 border-t border-[#E9E9E9]">
                    <div className="text-[80px] [font-family:var(--font-dm)] text-[#929292]">03</div>

                    <div className="flex flex-col items-start gap-5">
                        <div className="text-lg [font-family:var(--font-crimson)]">Grow Your Business</div>
                        <div className="text-[15px] [font-family:var(--font-crimson)] leading-[1.4] text-[#6F6F6F]">Make informed decisions to exceed your goals.
</div>

                    </div>
                </div>
                 
            </div>

        </motion.div>
    )
}