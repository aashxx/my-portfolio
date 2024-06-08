import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <main className='h-full'>
      <section className="container mx-auto h-full">
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-8 lg:pb-24'>
          <article className='text-center w-full flex flex-col gap-4 items-center'>
            <h3 className='lg:text-2xl text-md'>
              Hello Everyone 👋
            </h3>
            <h1 className='gradient-heading h1'>
              Mohamed Aashir
            </h1>
            <span className='lg:text-xl text-[10px] text-[gray]'>
              Software Engineer | Student | Fullstack Developer
            </span>
            <p className='max-w-[500px] text-sm mx-auto mb-9 text-[gray] dark:text-white/80'>
              Developer with a strong passion for creating innovative and user-friendly applications. Actively seeking opportunities to apply my skills in a professional setting.
            </p>
            <div className='flex flex-col items-center gap-8 w-full'>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>
                  Download CV
                </span>
                <FiDownload className='text-xl' />
              </Button>
              <aside className='mb-8 lg:mb-0'>
                <Socials containerStyles={'flex gap-6'} iconStyles={'w-9 h-9 border-accent rounded-full flex justify-center border items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'} />
              </aside>
            </div>
          </article>
        </div>
      </section>
      <section className='w-full px-12'>
          <Stats />
      </section>
    </main>
  )
}

export default Home;
