"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from "framer-motion";

// Update the services array with achievements
const achievements = [
  {
    num: '01',
    title: 'HackOverflow 3.0 Victory',
    description: 'Secured first place in the HackOverflow 3.0 competition.',
    href: 'https://www.linkedin.com/posts/pritham-devaprasad_hackathon-gamedevelopment-unrealengine-activity-7127615060314652672-YiZv?utm_source=share&utm_medium=member_desktop' // Replace with actual link
  },
  {
    num: '02',
    title: 'Techno-Science Project Expo - AI & Robotics',
    description: 'Achieved 2nd place in the AI & Robotics category at Techno-Science Project Expo.',
    href: 'https://youtu.be/qcyoganCy8g' // Replace with actual link
  },
  {
    num: '03',
    title: 'Microsoft Imagine Cup 2024 - MVP Round',
    description: 'Advanced to the MVP round with TerraIntel, an AI solution for precision agriculture.',
    href: 'https://youtu.be/9PRS15dB0e8' // Replace with actual link
  },
  {
    num: '04',
    title: 'Design Championship 2020 - Nationals',
    description: 'Secured runner-up position in the Nationals at the Design Championship 2020.',
    href: 'https://youtu.be/aHbK3IY9SRk' // Replace with actual link
  },
  {
    num: '05',
    title: 'Design Championship 2020 - regional',
    description: 'Secured first position in the Design Championship 2020.',
    href: 'https://youtu.be/CgnVC8V_A6A' // Replace with actual link
  },
];

const Achievements = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {achievements.map((achievement, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {achievement.num}
                  </div>
                  <Link 
                    href={achievement.href} 
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {achievement.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{achievement.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
