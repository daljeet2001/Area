import { motion } from "framer-motion";


export default function Picture(){
    return(
        <motion.div viewport={{ once: true }}  className="flex gap-5 pb-30"  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}}>

            <div className="flex flex-col items-start gap-10 pt-[60px] bg-20 border-t border-[#E9E9E9]">

                <div className="flex flex-col items-start pr-20 gap-10 w-full">
                    <p className="[font-family:var(--font-crimson)] leading-[0.9] text-[60px]">See the Big Picture</p>
                    <p className="text-[15px] [font-family:var(--font-dm)] leading-[1.4] text-[#6F6F6F]">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
                </div>

                <div className="flex flex-col items-start w-full">

                    <div className="py-5 pr-20 flex items-start justify-center gap-[30px] box-border border-y border-[#E9E9E9]" >
                        <p className="font-bold [font-family:var(--font-dm)] text-[15px] leading-[1.4] text-[#6F6F6F]">01</p>
                        <p className="text-base  leading-[1.3] [font-family:var(--font-dm)] w-[460px]">Spot Trends in Seconds: No more digging through numbers. </p>
                    </div>

                        <div className="py-5 pr-20 flex items-start justify-center gap-[30px] box-border border-b border-[#E9E9E9]" >
                        <p className="font-bold [font-family:var(--font-dm)] text-[15px] leading-[1.4] text-[#6F6F6F]">02</p>
                        <p className="text-base leading-[1.3] [font-family:var(--font-dm)] w-[460px]">Get Everyone on the Same Page: Share easy-to-understand reports with your team. 

 </p>
                    </div>

                        <div className="py-5 pr-20 flex items-start justify-center gap-[30px] box-border border-b border-[#E9E9E9]" >
                        <p className="font-bold [font-family:var(--font-dm)] text-[15px] leading-[1.4] text-[#6F6F6F]">03</p>
                        <p className="text-base leading-[1.3] [font-family:var(--font-dm)] w-[460px]">Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.



</p>
                    </div>

                        <div className="py-5 pr-20 flex items-start justify-center gap-[30px] box-border" >
                        <p className="font-bold [font-family:var(--font-dm)] text-[15px] leading-[1.4] text-[#6F6F6F]">04</p>
                        <p className="text-base leading-[1.3] [font-family:var(--font-dm)] w-[460px]">Your Global Snapshot: Get a quick, clear overview of your entire operation. </p>
                    </div>


                </div>

                       <motion.button whileHover={{ backgroundColor: "#8E9C78", color: "white" }} transition={{ duration: 0.2, ease: "easeInOut" }} className="cursor-pointer px-[22px] py-[14px] flex items-center justify-center  rounded-full bg-[#DFECC6]  text-black">
                        <p className="font-semibold text-sm [font-family:var(--font-dm)] ">Discover More</p>
                    </motion.button>

            </div>

<div>
     <img className="w-[685px] h-[711px] rounded-4xl object-cover" src="/area5.jpeg"/>
</div>
           
        


        </motion.div>
    )
}