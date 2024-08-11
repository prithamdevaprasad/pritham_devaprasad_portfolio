"use client";

 import {motion} from "framer-motion";
 import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity: 1,
          transition: {delay: 2,duration:0.4,ease: "easeIn"},
        }}>

          {/*image*/}
            <motion.div
            initial={{opacity:0}}
            animate={{
              opacity: 1,
              transition: {delay: 2.4,duration:0.4,ease: "easeInOut"},
            }}
             className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
               <Image 
               src ="/assests/newprop.png" 
               priority quality={100} 
               fill
               alt="" 
               className="object-contain"
               />
            </motion.div>


          {/*circle*/}
          <motion.svg
  className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#00ff99', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <motion.circle
    cx="253"
    cy="253"
    r="250"
    stroke="url(#gradientStroke)"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ strokeDasharray: '600 150', filter: 'drop-shadow(0 0 10px #0ea5e9)' }}
    animate={{
      strokeDasharray: ['600 150', '300 150', '600 150'],
      rotate: [120, 360],
      filter: ['drop-shadow(0 0 10px #0ea5e9)', 'drop-shadow(0 0 20px #00ff99)', 'drop-shadow(0 0 10px #0ea5e9)'],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />
</motion.svg>

        </motion.div>
    </div>
  );
};

export default Photo;