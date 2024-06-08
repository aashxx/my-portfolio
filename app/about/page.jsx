"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux, SiMui, SiChakraui, SiVite, SiElectron, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiSupabase, SiPrisma, SiMongoose, SiDrizzle, SiShadcnui } from 'react-icons/si';

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, libero provident doloremque corrupti consequuntur veritatis natus est minus deleniti porro nulla voluptatibus! Nostrum, cupiditate!",
  info: [
    {
      fieldName: "Name",
      feildValue: "Mohamed Aashir"
    },
    {
      fieldName: "Phone",
      feildValue: "+91 7358728447"
    },
    {
      fieldName: "Experience",
      feildValue: "2+ Years"
    },
    {
      fieldName: "Nationality",
      feildValue: "Indian"
    },
    {
      fieldName: "Email",
      feildValue: "tmohamedaashir@gmail.com"
    },
    {
      fieldName: "Freelance",
      feildValue: "Available"
    },
    {
      fieldName: "Languages",
      feildValue: "English, Hindi, Tamil, Urdu"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, libero provident doloremque corrupti consequuntur veritatis natus est minus deleniti porro nulla voluptatibus! Nostrum, cupiditate!",
  info: [
    {
      company: "Astrapi Money",
      position: "Sr. Software Engineer",
      duration: "May 2024 - Present"
    },
    {
      company: "Allotrix",
      position: "Product Manager",
      duration: "Oct 2023 - Present"
    },
    {
      company: "Dream Clerk",
      position: "Freelance Web Developer",
      duration: "Jun 2024 - TBA"
    },
    {
      company: "Tribesflix",
      position: "Freelance Web Developer",
      duration: "Feb 2024 - Jun 2024"
    },
    {
      company: "Exposys Data Labs",
      position: "Web Developer Intern",
      duration: "Jun 2023 - Jul 2023"
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, libero provident doloremque corrupti consequuntur veritatis natus est minus deleniti porro nulla voluptatibus! Nostrum, cupiditate!",
  info: [
    {
      institution: "University of Helsinki",
      degree: "Full Stack Open",
      duration: "2023"
    },
    {
      institution: "freeCodeCamp",
      degree: "JavaScript Algorithms and Data Structures",
      duration: "2022"
    },
    {
      institution: "BSA Crescent Univ.",
      degree: "BTech Computer Science and Engg.",
      duration: "2021 - 2025"
    },
    {
      institution: "Don Bosco Hr. Sec. School",
      degree: "Schooling",
      duration: "2007 - 2021"
    },
  ]
}

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, libero provident doloremque corrupti consequuntur veritatis natus est minus deleniti porro nulla voluptatibus! Nostrum, cupiditate!",
  info: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaSass />,
      name: "SCSS"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiRedux />,
      name: "Redux"
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCN UI"
    },
    {
      icon: <SiMui />,
      name: "MUI"
    },
    {
      icon: <SiChakraui />,
      name: "Chakra UI"
    },
    {
      icon: <SiVite />,
      name: "Vite"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs"
    },
    {
      icon: <SiElectron />,
      name: "ElectronJS"
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs"
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs"
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB"
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL"
    },
    {
      icon: <SiFirebase />,
      name: "Firebase"
    },
    {
      icon: <SiSupabase />,
      name: "Supabase"
    },
    {
      icon: <SiPrisma />,
      name: "Prisma"
    },
    {
      icon: <SiMongoose />,
      name: "Mongoose"
    },
    {
      icon: <SiDrizzle />,
      name: "Drizzle"
    },
    {
      icon: <FaPython />,
      name: "Python"
    }
  ]
}

const About = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}} className="min-h-[80vh] mx-auto flex items-center justify-center py-12 lg:py-0 lg:max-w-[80%]">
      <section className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col lg:flex-row gap-[60px]">
          <TabsList className='flex flex-col w-full lg:max-w-[280px] mx-auto lg:mx-0 gap-6'>
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about-me">
              About me
            </TabsTrigger>
          </TabsList>
          <article className="min-h-[70vh] w-full">
            <TabsContent value='experience' className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      experience.info.map((item, index) => (
                        <li key={index} className="dark:bg-[#232329] bg-[whitesmoke] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-[gray]">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      education.info.map((item, index) => (
                        <li key={index} className="dark:bg-[#232329] bg-[whitesmoke] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-[gray]">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className="w-full h-full">
              <div className="flex felx-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                    {skills.description}
                  </p>
                  <ScrollArea className="h-[350px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] gap-4">
                      {
                        skills.info.map((skill, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[whitesmoke] dark:bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>
                                    {skill.name}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))
                      }
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='about-me' className="w-full text-center lg:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[720px] mx-auto lg:mx-0">
                  {
                    about.info.map((item, index) => (
                      <li key={index} className="flex items-center justify-center lg:justify-start gap-2">
                        <span className="dark:text-white/60 text-[gray]">
                          {item.fieldName}
                        </span>
                        <span className="text-md">
                          {item.feildValue}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabsContent>
          </article>
        </Tabs>
      </section>
    </motion.main>
  )
}

export default About;
