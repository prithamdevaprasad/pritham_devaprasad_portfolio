"use client";

import { Description } from '@radix-ui/react-dialog';
import {FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaPython,
  FaJava,
  FaGitAlt,
  FaLinux,

} from 'react-icons/fa';

import { TbBrandCpp,TbBrandCSharp } from "react-icons/tb";

import {SiTailwindcss,SiNextdotjs,SiBlender,SiJavascript,SiUnrealengine, SiUnity,SiMongodb,SiTensorflow,SiArduino,SiFlutter} from 'react-icons/si';


//about intro
const about = {
  title:'About me',
  description:

  "I'm Pritham Devaprasad, a passionate and innovative Computer Science student specializing in Artificial Intelligence and Machine Learning. With a keen interest in software development and a strong foundation in both programming and system design, I strive to create impactful solutions across various domains. My journey so far includes a diverse range of projects, from developing SaaS applications to exploring the intricacies of machine learning algorithms. I’m also deeply interested in fitness and enjoy sharing my enthusiasm through daily motivation posts. My goal is to leverage my skills and knowledge to contribute to cutting-edge technologies and make a meaningful impact in the tech industry.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Pritham Devaprasad"
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91)6385100956"
    },
    {
      fieldName:"Experience",
      fieldValue:"0+ Years"
    },
    {
      fieldName:"Whatsapp",
      fieldValue:"(+91)6385100956"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian"
    },
    {
      fieldName:"Email",
      fieldValue:"prithamdevaprasad@gmail.com"
    },
    
    {
      fieldName:"Languages",
      fieldValue:"English,Spanish,French,Tamil,Hindi"
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    "As a Computer Science student specializing in Artificial Intelligence and Machine Learning, I am focusing on academic projects and coursework to build my skills and knowledge. In addition to my academic pursuits, I have actively participated in the Debate Club at VIT Chennai, further developing my communication and critical thinking skills.",
  items: [
    {
      company: "Academic Projects",
      position: "Various Roles",
      duration: "2020-Present",
      description: "Worked on various personal and academic projects related to software development, machine learning, and web development."
    },
    {
      company: "Education",
      position: "Student",
      duration: "2024-2026",
      description: "Currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning at VIT Chennai."
    },
    {
      company: "The Debate Society of VIT Chennai",
      position: "Member",
      duration: "2023-Present",
      description: "Participated in the Debate Club, honing skills in public speaking, argumentation, and critical analysis. [Link to Club](https://www.linkedin.com/company/the-debate-society-of-vitc/posts/?feedView=all)"
    }
  ],
};

// educatioon data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description:
    "A summary of my educational background, including certifications and academic achievements.",
  items: [
    {
      institution: "VIT Chennai - Vellore Institute of Technology ",
      degree: "B.Tech in Computer Science with AI and ML",
      duration: "2024-2026",
    },
    {
      institution: "Sunshine Chennai Senior Secondary School",
      degree: "1st Grade to 12th Grade",
      duration: "2010-2022",
    },
  ],
};


// skills data

const skills = {
  title: 'My Skills',
  description:
    "Proficient in a wide range of technologies and tools, ensuring robust and efficient solutions across various domains.",
  skillList: [
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <TbBrandCpp />,
      name: "C++",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiBlender />,
      name: "Blender",
    },
    {
      icon: <SiUnrealengine />,
      name: "Unreal Engine",
    },
    {
      icon: <SiUnity />,
      name: "Unity",
    },
    {
      icon: <SiArduino />,
      name: "Arduino",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <TbBrandCSharp />,
      name: "C#",
    },
  ],
};


import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},
  
  
  }}
  className="min-h-[80vh] flex items-cneter justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
        gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">Aboutme</TabsTrigger>
        </TabsList>

        {/*content*/}
        <div className="min-h-[70vh] w-full">
          {/* experience*/}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6
                      px-10 rounded-xl flex flex-col justify-center items-center
                      lg:items-start gap-1"> 
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl ma-w-[260px] min-h-[60px]
                      text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                      {/*dot*/}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p>{item.company}</p>
                      </div>
                    </li>
                    );
                  })}
                </ul>
                </ScrollArea>
            </div>
          </TabsContent>





          {/*education*/}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index)=>{
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6
                      px-10 rounded-xl flex flex-col justify-center items-center
                      lg:items-start gap-1"> 
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl ma-w-[260px] min-h-[60px]
                      text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                      {/*dot*/}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p>{item.institution}</p>
                      </div>
                    </li>
                    );
                  })}
                </ul>
                </ScrollArea>
            </div>
          </TabsContent>
          {/*skills*/}
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">skills</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill,index)=>{
                return <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[70px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {skill.name}
                </li>;
              })}
              </ul>
            </div>
          </TabsContent>
          {/*about*/}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px] ">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item,index)=>{
                  return
                  (
                  <li key={index} className="flex items-center justify-center
                  xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span cl>{item.fieldValue}</span>
                  </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>

      </Tabs>

    </div>
    </motion.div>
  );
};

export default Resume;