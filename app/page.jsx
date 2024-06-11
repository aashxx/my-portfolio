"use client";

import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ABOUT, EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from '@/lib/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub, BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderButtons from '@/components/WorkSliderButtons';
import { SERVICES } from '@/lib/constants';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from '@/lib/constants';

const Home = () => {

  const [project, setProject] = useState(PROJECTS[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(PROJECTS[currentIndex]);
  }

  return (
    <main>
      <section className='h-full'>
        <section className="container mx-auto h-full">
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-8'>
            <article className='text-center w-full flex flex-col gap-4 items-center pt-4 lg:pt-[unset]'>
              <h3 className='lg:text-2xl text-md'>
                Hello Everyone 👋
              </h3>
              <h1 className='gradient-heading h1'>
                Mohamed Aashir
              </h1>
              <span className='lg:text-xl text-[10px] text-[gray]'>
                Software Engineer | Student | Fullstack Developer
              </span>
              <p className='max-w-[500px] text-[12px] lg:text-sm mx-auto mb-9 text-[gray] dark:text-white/80'>
                Developer with a strong passion for creating innovative and user-friendly applications. Actively seeking opportunities to apply my skills in a professional setting.
              </p>
              <div className='flex flex-col items-center gap-8 w-full'>
                <a href="https://drive.google.com/uc?export=download&id=1aKTMKKUu9dFFjT6Mfxub2pJAKXMc5XxZ" download="aashir-cv.pdf">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>
                      Download CV
                    </span>
                    <FiDownload className='text-xl' />
                  </Button>
                </a>
                <aside className='mb-8 lg:mb-0'>
                  <Socials containerStyles={'flex gap-6'} iconStyles={'w-9 h-9 border-accent rounded-full flex justify-center border items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'} />
                </aside>
              </div>
            </article>
          </div>
        </section>
        <section className='w-full px-12 mt-10 lg:mt-20 mb-28'>
            <Stats />
        </section>
      </section>
      <section className="mx-auto flex items-center justify-center lg:first-letter: lg:my-24 lg:py-0 lg:max-w-[80%]">
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
                    {EXPERIENCE.title}
                  </h3>
                  <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                    {EXPERIENCE.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {
                        EXPERIENCE.info.map((item, index) => (
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
                    {EDUCATION.title}
                  </h3>
                  <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                    {EDUCATION.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {
                        EDUCATION.info.map((item, index) => (
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
                      {SKILLS.title}
                    </h3>
                    <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                      {SKILLS.description}
                    </p>
                    <ScrollArea className="h-[350px]">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] gap-4">
                        {
                          SKILLS.info.map((skill, index) => (
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
                    {ABOUT.title}
                  </h3>
                  <p className="max-w-[600px] lg:text-justify text-[14px] text-primary dark:text-white/60 mx-auto lg:mx-0">
                    {ABOUT.description}
                  </p>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[720px] mx-auto lg:mx-0">
                    {
                      ABOUT.info.map((item, index) => (
                        <li key={index} className="flex items-center justify-start gap-2">
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
      </section>
      <section className='lg:max-w-[80%] mx-auto flex flex-col justify-center py-12 lg:py-0'>
        <section className='container mx-auto'>
          <h2 className='lg:text-5xl text-4xl mb-16 font-extrabold text-center'>
            Projects
          </h2>
          <div className='flex flex-col lg:flex-row lg:gap-[60px] gap-6'>
            <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
              <div className='flex flex-col gap-[20px]'>
                <div className='text-7xl leading-none font-extrabold text-transparent text-outline-light dark:text-outline-dark'>
                  {project.num}
                </div>
                <h2 className='text-[42px] font-bold leading-none dark:text-white hover:text-accent transition-all duration-500 capitalize'>
                  {project.title}
                </h2>
                <p className='dark:text-white/60 text-justify text-sm'>
                  {project.description}
                </p>
                <ul className='flex items-center gap-4'>
                  {
                    project.stack.map((item) => (
                      <li key={item.name} className='text-xl text-accent'>
                        {item.icon}
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
            <div className='w-full relative lg:w-[50%]'>
              <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange}>
                {
                  PROJECTS.map((project, index) => (
                    <SwiperSlide key={index} className='w-full'>
                      <div className='h-[360px] relative group flex justify-center items-center rounded-md bg-pink-50/20'>
                        <div className='relative w-full h-full rounded-md'>
                          <Image src={project.image} fill className='object-cover rounded-md' alt='image' />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
                <WorkSliderButtons containerStyles={'flex gap-2 absolute right-8 bottom-[calc(50%_-_22px)] lg:bottom-10 z-50 w-full justify-between lg:w-max lg:justify-none'} btnStyles={'bg-accent rounded-md hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'} />
              </Swiper>
            </div>
          </div>
        </section>
      </section>
      <section className='lg:max-w-[80%] mx-auto flex flex-col justify-center py-12 lg:mb-24 lg:py-0'>
        <section className='container mx-auto'>
          <h2 className='lg:text-5xl text-4xl mb-24 font-extrabold text-center'>
            Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
            {
              SERVICES.map((service, index) => (
                <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                  <div className='w-full flex justify-between items-center'>
                    <div className='text-5xl font-extrabold text-outline-light dark:text-outline-dark text-transparent group-hover:text-outline-hover transition-all duration-500'>
                      {service.num}
                    </div>
                    <Link href={service.href} className='w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45'>
                      <BsArrowDownRight className='text-primary text-3xl' />
                    </Link>
                  </div>
                  <h2 className='text-[32px] font-bold leading-none text-primary dark:text-white group-hover:text-accent transition-all duration-500'>
                    {service.title}
                  </h2>
                  <p className='dark:text-white/60 text-sm text-[gray]'>
                    {service.description}
                  </p>
                  <div className="border-b border-primary dark:border-white/20 w-full"></div>
                </div>
              ))
            }
          </div>
        </section>
      </section>
      <section className='lg:my-24 lg:max-w-[80%] mx-auto'>
        <section className='container mx-auto'>
          <h2 className='lg:text-5xl text-4xl mb-10 font-extrabold text-center'>
            Connect With Me
          </h2>
          <div className="flex flex-col lg:flex-row gap-[10px]">
            <div className="lg:w-[50%] order-2 lg:order-none">
              <form className="flex flex-col gap-3 p-4 lg:p-6 bg-[#27272c] rounded-xl">
                <h3 className="text-3xl text-accent pb-4">
                  Let&apos;s work together
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input type="firstname" placeholder="First Name" />
                  <Input type="lastname" placeholder="Last Name" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>
                        Select a service
                      </SelectLabel>
                      <SelectItem value="webdev">
                        Web Development
                      </SelectItem>
                      <SelectItem value="appdev">
                        App Development
                      </SelectItem>
                      <SelectItem value="desktopdev">
                        Desktop Development
                      </SelectItem>
                      <SelectItem value="seo">
                        SEO
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea className="h-[150px]" placeholder="Type your message here." />
                <Button size='md' className="max-w-40 self-center mt-5">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
              <ul className="flex flex-col gap-10">
                {
                  CONTACT.map((item, index) => (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">
                          {item.title}
                        </p>
                        <h3 className="text-xl">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home;
