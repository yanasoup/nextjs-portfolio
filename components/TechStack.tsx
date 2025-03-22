'use client';

import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

export function TechStack() {
  return (
    <div
      id='techstack'
      className='rounded-md flex flex-col antialiase items-center justify-center relative overflow-hidden mt-30'
    >
      <h2 className='font-sans text-xl lg:text-[3rem] max-w-96 font-bold z-10'>
        <span className='text-purple'>Tech</span> Stack
      </h2>
      <InfiniteMovingCards items={stacks} direction='left' speed='normal' />
    </div>
  );
}

const stacks = [
  {
    title: 'HTML5',
    image: '/logos/html5.svg',
  },
  {
    title: 'CSS',
    image: '/logos/css3-logo.svg',
  },
  {
    title: 'SCSS',
    image: '/logos/scss.svg',
  },
  {
    title: 'Tailwind',
    image: '/logos/tailwind.svg',
  },
  {
    title: 'React JS',
    image: '/logos/react-logo.svg',
  },
  {
    title: 'TypeScript',
    image: '/logos/typescript.png',
  },
  {
    title: 'Redux',
    image: '/logos/redux.png',
  },
  {
    title: 'Framer Motion',
    image: '/logos/framer-motion.png',
  },
  {
    title: 'Laravel',
    image: '/logos/laravel-logo.svg',
  },
  {
    title: 'Python',
    image: '/logos/python-logo.svg',
  },
  {
    title: 'MySQL',
    image: '/logos/mysql-logo.svg',
  },
  {
    title: 'PostgreSql',
    image: '/logos/postgresql-logo.svg',
  },
  {
    title: 'Google BigQuery',
    image: '/logos/google-bigquery-logo-1.svg',
  },
  {
    title: 'Google Looker',
    image: '/logos/looker-logo.svg',
  },
];
