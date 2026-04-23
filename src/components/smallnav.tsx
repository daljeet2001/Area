import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";



export default function Smallnav() {
    const [menu, openMenu] = useState(false)
    return (
        <>
            <motion.div layout   className="flex flex-col bg-white  rounded-b-2xl shadow-xl fixed w-full z-100">


                <div className="flex items-center justify-between py-5 px-5">
                    <p className="[font-family:var(--font-dm)] text-[30px] font-medium cursor-pointer">Area</p>

                    <motion.button  onClick={() => openMenu(!menu)}>{menu ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}</motion.button>

                </div>

           
                    <motion.div layout  initial={false} animate={{height:menu?"auto":0,opacity:menu? 1 : 0,paddingTop:menu?"8px":"0px",paddingBottom:menu?"32px":"0px"}} transition={{duration:0.4,ease:"easeInOut"}}  className="  flex flex-col px-5 items-start gap-[50px] w-full">

                        <div className="flex flex-col w-full">

                            <div className="flex items-center gap-[10px] py-[30px] border-t border-[#E9E9E9] font-semibold [font-family:var(--font-dm)] text-sm " onClick={()=>openMenu(false)}>
                                <motion.a href="#code" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Benefits</motion.a>
                            </div>

                            <div className="flex items-center gap-[10px] py-[30px] border-t border-[#E9E9E9] font-semibold [font-family:var(--font-dm)] text-sm " onClick={()=>openMenu(false)}>
                                <motion.a href="#why" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Specifications</motion.a>
                            </div>

                            <div className="flex items-center gap-[10px] py-[30px] border-t border-[#E9E9E9] font-semibold [font-family:var(--font-dm)] text-sm " onClick={()=>openMenu(false)}>
                                <motion.a href="#success" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">How-to</motion.a>
                            </div>

                            <div className="flex items-center gap-[10px] py-[30px] border-t border-[#E9E9E9] font-semibold [font-family:var(--font-dm)] text-sm " onClick={()=>openMenu(false)}>
                                <motion.a href="#cta" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Contact Us</motion.a>
                            </div>

                        </div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover="hover" className="cursor-pointer px-[22px] py-[14px] flex items-center justify-center gap-[2px] rounded-full bg-[#485C11] hover:bg-[#8E9C78] text-white">
                            <p className="font-semibold text-sm [font-family:var(--font-dm)] ">Learn more</p>
                            <motion.div variants={{ hover: { y: -6 } }} transition={{ duration: 0.4, ease: "easeOut" }}>
                                <GoArrowUpRight size={10} />
                            </motion.div>
                        </motion.div>


                    </motion.div>

            </motion.div>


        </>
    )
}