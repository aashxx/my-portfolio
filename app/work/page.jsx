"use client";

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import WorkSliderButtons from '@/components/WorkSliderButtons';

const projects = [
  {
    num: '01',
    category: "Frontend",
    title: "Project 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolores earum amet.",
    stack: [
      {
        name: "HTML5"
      },
      {
        name: "CSS#"
      },
      {
        name: "JavaScript"
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: "Frontend",
    title: "Project 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolores earum amet.",
    stack: [
      {
        name: "HTML5"
      },
      {
        name: "CSS#"
      },
      {
        name: "JavaScript"
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
  {
    num: '03',
    category: "Frontend",
    title: "Project 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolores earum amet.",
    stack: [
      {
        name: "HTML5"
      },
      {
        name: "CSS#"
      },
      {
        name: "JavaScript"
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
  {
    num: '04',
    category: "Frontend",
    title: "Project 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolores earum amet.",
    stack: [
      {
        name: "HTML5"
      },
      {
        name: "CSS#"
      },
      {
        name: "JavaScript"
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
]

const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}} className='min-h-[80vh] lg:max-w-[80%] mx-auto flex flex-col justify-center py-12 lg:px-0'>
      <section className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-[60px]'>
          <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
            <div className='flex flex-col gap-[20px] h-[50%]'>
              <div className='text-7xl leading-none font-extrabold text-transparent text-outline-light dark:text-outline-dark'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none dark:text-white hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='dark:text-white/60'>
                {project.description}
              </p>
              <ul className='flex gap-4'>
                {
                  project.stack.map((item, index) => (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))
                }
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-[whitesmoke] dark:bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='dark:text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-[whitesmoke] dark:bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='dark:text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Github repo
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='lg:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {
                projects.map((project, index) => (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[360px] relative group flex justify-center items-center rounded-md bg-pink-50/20'>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-md'></div>
                      <div className='relative w-full h-full rounded-md'>
                        <Image src={project.image} fill className='object-cover rounded-md' alt='image' />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
              <WorkSliderButtons containerStyles={'flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-[calc(50%_-_150px)] z-20 w-full justify-between lg:w-max lg:justify-none'} btnStyles={'bg-accent rounded-md hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'} />
            </Swiper>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Work;
