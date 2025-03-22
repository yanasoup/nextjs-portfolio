'use client';

import React from 'react';

import { testimonials } from '@/data';
import { InfiniteMovingCards } from '@/components/ui/InfiniteCards';

const Clients = () => {
  return (
    <section
      id='testimonials'
      className='mt-30 rounded-md flex flex-col antialiase items-center justify-center relative overflow-hidden'
    >
      <h2 className='font-sans text-xl lg:text-[3rem] font-bold z-10'>
        Kind words from
        <span className='text-purple'> satisfied clients</span>
      </h2>

      <div className='flex flex-col items-center max-lg:mt-10'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='normal'
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
