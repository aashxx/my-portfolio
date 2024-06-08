"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fugiat ",
    href: ""
  },
  {
    num: "02",
    title: "App Development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fugiat ",
    href: ""
  },
  {
    num: "03",
    title: "Desktop Development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fugiat ",
    href: ""
  },
  {
    num: "04",
    title: "Web Development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fugiat ",
    href: ""
  },
]

const Services = () => {
  return (
    <main className='min-h-[60vh] lg:max-w-[80%] mx-auto flex flex-col justify-center py-12 xl:py-0'>
      <section className='container mx-auto'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {
            services.map((service, index) => (
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
        </motion.div>
      </section>
    </main>
  )
}

export default Services;
