import { motion } from "framer-motion"

export default function Quote() {
    return (
        <motion.div viewport={{ once: true }}  initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}} className="flex justify-start flex-wrap lg:flex-nowrap gap-10 lg:gap-5 pb-25 md:pb-30 h-auto lg:h-[789.38px] px-4 md:px-10 w-full">

            <img className="object-cover rounded-4xl w-full lg:w-[685px]  h-[358px] md:h-[813px]  lg:h-[777.16px]" src="/area7.webp" />

            <div className="border-t border-[#E9E9E9] flex flex-col items-start justify-center gap-[50px] pt-10 py-4 md:pt-0 md:py-0   lg:pl-[50px] h-full
            
            ">
                <p className=" text-[32px] md:text-[40px] [font-family:var(--font-crimson)] leading-[105%] tracking-[-0.04em]">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</p>


                <div className="flex lg:flex-col items-center lg:items-start gap-2">
                    <p className="text-[15px] [font-family:var(--font-dm)] leading-[1.4]">John Smith</p>
                    <p className=" text-[10.5px] md:text-[11px] lg:text-xs [font-family:var(--font-roboto)] leading-[1.4] text-[#485C11]">Head of Data</p>

                </div>



            </div>

        </motion.div>
    )
}