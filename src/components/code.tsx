import { LuCable } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrAssistListening } from "react-icons/gr";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { motion } from "framer-motion";


const segoerpighe = [

    {
        icon: <LuCable size={24} />,
        title: "Amplify Insights",
        description: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."
    },
    {
        icon: <AiOutlineGlobal size={24} />,
        title: "Control Your Global Presence",
        description: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."
    },
    {
        icon: <GrAssistListening size={24} />,
        title: "Remove Language Barriers",
        description: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."
    },
    {
        icon: <MdOutlineStackedLineChart size={24} />,
        title: "Visualize Growth",
        description: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
    }
]

export default function Code() {
    return (
        <>
            <motion.div viewport={{ once: true }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col">

                <motion.div className="pt-20 pb-[60px] flex flex-col items-start gap-[50px]">

                    <div className="flex flex-col items-start gap-[50px]">

                        <div className="text-xs [font-family:var(--font-dm)] text-[#485C11]">
                            Benefits
                        </div>

                        <div className="text-6xl [font-family:var(--font-crimson)] leading-[0.9]">
                            We’ve cracked the code.
                        </div>

                        <div className="[font-family:var(--font-dm)] text-[#6F6F6F] text-[15px]">
                            Area provides real insights, without the data overload.
                        </div>

                    </div>

                    <div className="pt-10 flex items-start gap-5 flex-wrap">
                        {segoerpighe.map((s, index) => (
                            <div key={index} className="pt-10 pr-5 pb-10 pl-0 flex flex-col items-start gap-6 w-[332.5px] border-t border-[#E9E9E9]">
                                <div>{s.icon}</div>

                                <div className="flex flex-col items-start gap-5">
                                    <div className="text-lg [font-family:var(--font-crimson)]">
                                        {s.title}
                                    </div>

                                    <div className="text-[15px] [font-family:var(--font-dm)] text-[#6F6F6F]">
                                        {s.description}
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>


                </motion.div>

                <motion.div className="pb-30" >
                    <img className="w-[1390px] h-[620px] object-cover rounded-4xl" src="/areaimg1.webp" />
                </motion.div>

            </motion.div>
        </>

    )
}