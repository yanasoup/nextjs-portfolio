import React from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/Spotlight';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

export function SpotlightDemo() {
  return (
    <div className='relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center'>
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
      <div className='relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0'>
        <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
          Full Stack <br /> Developer
        </h1>
        <div className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
          <a href='#about'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
        <div className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
          <button className='p-[3px] relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
            <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
              Lit up borders
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
