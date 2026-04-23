
import './App.css'
import Navbar from './components/navbar';
import Header from './components/header';
import Trusted from './components/trusted';
import Code from './components/code';
import Why from './components/why';
import CTA from './components/cta';
import Picture from './components/picture';
import Quote from './components/quote';
import Success from './components/success';
import Footer from './components/footer';
import Smallnav from './components/smallnav';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [ small,setSmall ] = useState(false);

  useEffect(()=>{

    console.log("window.innerWidth is",window.innerWidth)
    setSmall(window.innerWidth<=799)
  },[])
  return (
    <>
      <div className="w-full">


      { !small && <div className="sticky top-5 z-50">
          <div className=" absolute  bg-white/20  backdrop-blur-lg left-1/2 -translate-x-1/2 px-6 py-5 flex items-center gap-[27px] font-semibold [font-family:var(--font-dm)] text-sm bg-white rounded-full ">
            <motion.a href="#code" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Benefits</motion.a>
            <motion.a href="#why" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Specifications</motion.a>
            <motion.a href="#success" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">How-to</motion.a>
            <motion.a href="#cta" whileHover={{ color: "#929292" }} transition={{ duration: 0.4, ease: "easeOut" }} className="cursor-pointer">Contact Us</motion.a>
          </div>
        </div>}
<div className="hidden md:block">
  <Navbar />
</div>

<div className="block md:hidden">
  <Smallnav/>
</div>
      
        <Header />
        <Trusted />
    <div id="code">
          <Code />
        </div> 
   
        <Picture />
        <div id="why">
          <Why />
        </div>
        <Quote />
        <div id="success">
          <Success />
        </div>

        <motion.div viewport={{ once: true }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="pb-10 px-4 md:px-10">
          <img src="/area10.webp" className="w-full h-[600px] md:h-[664.28px] lg:h-[769.46px] object-cover rounded-4xl" />
        </motion.div>
        <div id="cta" className="px-4 md:px-10">
          <CTA />
        </div>
        <Footer />  

      </div>
    </>
  )
}

export default App
