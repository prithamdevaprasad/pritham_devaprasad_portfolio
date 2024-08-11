"use client";

import {motion} from 'framer-motion'
import React,{useState} from "react";


import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import{
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
    {
      num: "01",
      category: "AI/ML",
      title: "Microsoft Imagine Cup",
      description: 
        "Advanced to the MVP round with TerraIntel, an AI solution for precision agriculture. Demonstrated innovative use of AI and ML to optimize crop yields, reduce resource wastage, and provide farmers with actionable insights. Utilized Arduino and EXG chip from Brainaby for hardware integration, alongside Python, TensorFlow, and Azure for software development.",
      stack: [{name: "Arduino"}, {name: "EXG Chip"}, {name: "Python"}, {name: "TensorFlow"}, {name: "Azure"}],
      image: "/assests/terraintel.jpg",
      live: "https://youtu.be/9PRS15dB0e8?si=q6GEZ775O7sbuuvn",
      github: "",
    },
    
    {
      num: "02",
      category: "AI/ML",
      title: "Sentiment Analysis App",
      description: 
        "Combined VADER and ROBERTa models to develop a sentiment analysis app for Twitter data. Achieved high accuracy in sentiment detection, providing valuable insights for social media analysis. Implemented using Python, this app enhances understanding of public opinion and trends.",
      stack: [{name: "VADER"}, {name: "ROBERTa"}, {name: "Python"}],
      image: "/assests/senti.jpeg",
      live: "",
      github: "https://github.com/prithamdevaprasad/combined_sentiment_analysis_vader_and_roberta",
    },
    {
      num: "03",
      category: "Mobile App",
      title: "WeMace App",
      description: 
        "Developed WeMace, a cross-platform app designed for Self Help Groups (SHGs) to promote collaboration and resource sharing. The app fosters community organization and support among members. Built using React Native for the front end and Firebase for backend services.",
      stack: [{name: "React Native"}, {name: "Firebase"}],
      image: "/assests/wemace.png",
      live: "",
      github: "https://github.com/WeMace",
    },
    {
      num: "04",
      category: "Game Development",
      title: "Car Game Development",
      description: 
        "Developed a car game using Unity, showcasing skills in game development and user interaction design. The game features realistic driving mechanics and engaging gameplay, providing an immersive experience for players. Implemented with C# scripting within Unity.",
      stack: [{name: "Unity"}, {name: "C#"}],
      image: "/assests/car_game.png",
      live: "",
      github: "https://github.com/prithamdevaprasad/car_game",
    },
    {
      num: "05",
      category: "Game Design",
      title: "Design Championship 2020",
      description: 
        "Despite having no prior experience in game design, rapidly learned and developed skills to secure the runner-up position in the Senior Game Design category at Nationals. This project demonstrated adaptability and quick learning, using Unity for development.",
      stack: [{name: "Game Design"}, {name: "Unity"}],
      image: "/assests/myth.png",
      live: "https://youtu.be/aHbK3IY9SRk",
      github: "",
    },
    {
      num: "06",
      category: "Game Design",
      title: "Design Championship 2020",
      description: 
        "Despite having no prior experience in game design, rapidly learned and developed skills to secure the first position in the Senior Game Design category at regional level. This project demonstrated adaptability and quick learning, using Unity for development.",
      stack: [{name: "Game Design"}, {name: "Unity"}],
      image: "/assests/amphi.png",
      live: "https://youtu.be/CgnVC8V_A6A?si=Hnm-sFprqLD_zaFL",
      github: "",
    },
    {
      num: "06",
      category: "Hackathon",
      title: "K! Hacks",
      description: 
        "Participated in K! Hacks, a 24-hour hackathon organized by CEG Tech Forum at Anna University Chennai. Our team secured a runner-up position in a stimulating quiz and won a prize of ₹1500. Focused on domains like Gen AI, Logistics, IoT/Edge Computing, Space Tech, Web3, and AR/VR.",
      stack: [{name: "Hackathon"}, {name: "Innovation"}],
      image: "/assests/k!.png",
      live: "",
      github: "",
    },
    {
      num: "07",
      category: "Hackathon",
      title: "PEC Hacks",
      description: 
        "Through three rounds of judging, our project for PEC Hacks involved tackling the frontend, integrating a crypto wallet, and crafting a compelling presentation. Recognized for the Best Use Case of TinyMCE, we also won Polygon tokens worth $100.",
      stack: [{name: "Frontend"}, {name: "Crypto Wallet"}, {name: "TinyMCE"}],
      image: "/assests/pec.jpeg",
      live: "https://youtu.be/BtOSrz-ZD4c",
      github: "https://github.com/CryptoLandBlockers/PolyBrix",
    },
    {
      num: "08",
      category: "Robotics",
      title: "AI & Robotics - Techno-Science Project Expo",
      description: 
        "Secured 2nd place at the Techno-Science Project Expo in the AI & Robotics category. Learned robotics through YouTube and successfully built a project demonstrating practical applications of robotics and AI.",
      stack: [{name: "Robotics"}, {name: "AI"}],
      image: "/assests/srm.png",
      live: "https://www.youtube.com/watch?v=qcyoganCy8g",
      github: "",
    },
    {
      num: "09",
      category: "Hackathon",
      title: "DeFY'24 Hackathon",
      description: 
        "Participated in DeFY'24 Hackathon at VIT Chennai and advanced to the Top 30 Finalists with a project focused on innovative tech solutions. This experience involved tackling challenging problems and collaborating with talented peers.",
      stack: [{name: "Hackathon"}, {name: "Tech Solutions"}],
      image: "/assests/defy.png",
      live: "",
      github: "https://github.com/Quantagon/Final",
    },
    
  ];
  


const Work = () => {
     const [project,setProject]=useState(projects[0]);

     const handleSlideChange = (swiper)=> {
      //get current slide index
      const currentIndex= swiper.activeIndex;
      //update project state based on current sldie index
      setProject(projects[currentIndex]);
     };

    
  return (
  <motion.section 
  initial={{opacity:0}} 
  animate={{opacity:1,transition: {delay:2.4,duration:0.4,ease:"easeIn"},
}} 
  className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">

    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/*outline num*/}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/*project category*/}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project</h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item,index)=> {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/*remove the last comma*/}
                    {index !==project.stack.length - 1 && ","}
                    </li>;
                
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*button*/}
              <div className="flex items-center gap-4">
                {/*live project button*/}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>

                {/*github project button*/}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>soon</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
          </div>
          </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
          spaceBetween={30} 
          slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
          >
            {projects.map((project,index)=>{
              return(
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/*overlay*/}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/*image*/}
                  <div className="relative w-full h-full">
                    <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt=""
                    />
                  </div>
                </div>
                  </SwiperSlide>
            );
            })}

            {/*slider button*/}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>

          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Work;