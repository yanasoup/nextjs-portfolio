import React from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/Spotlight';
import MagicButton from './ui/MagicButton';
import { FaDownload, FaLocationArrow } from 'react-icons/fa';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';

function Hero() {
  return (
    <div
      id='about'
      className='relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center'
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 [background-size:40px_40px] select-none',
          '[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]'
        )}
      />

      <Spotlight
        className='-top-40 left-0 md:-top-20 md:left-60'
        fill='white'
      />
      <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple' />
      <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />

      <div className='hidden md:flex justify-center relative my-20 z-10 p-8'>
        <Image
          width={400}
          height={800}
          style={{ objectFit: 'contain' }}
          className='object-center object-cover'
          src='/profile.png'
          alt='profile'
        />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <p className='text-center tracking-widest mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi! I&apos;m Yana, a Full Stack Developer and also a Data Analytic
            Engineer based in Indonesia.
          </p>
          <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            I Can Help you Build Dynamic Modern Web with React / Next.JS, by
          </p>
          <TextGenerateEffect
            words='Transforming Concepts into Seamless User Experiences'
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
          />

          <a href='#projects' className='mb-4'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
          <a href='/docs/Resume-Yana-Supriatna-EN.pdf' target='_blank'>
            <MagicButton
              title='Download My Resume'
              icon={<FaDownload />}
              position='left'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
