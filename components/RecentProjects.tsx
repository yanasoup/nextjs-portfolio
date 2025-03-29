'use client';
import React from 'react';
import { StickyScroll } from '@/components/ui/StickyScrollReveal';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

export const RecentProjects = () => {
  return (
    <>
      <div
        id='projects'
        className='mt-30 rounded-md flex flex-col antialiase items-center justify-center relative overflow-hidden'
      >
        <h2 className='font-sans text-xl lg:text-[3rem] font-bold z-10'>
          A small selection of{' '}
          <span className='text-purple'>recent projects</span>
        </h2>
      </div>
      <div className='w-full py-4'>
        <StickyScroll content={content} />
      </div>
    </>
  );
};

const content = [
  {
    title: 'Next.JS Food App',
    description: 'An excercise project developed Next.JS 14.',
    content: (
      <div className='p-4 relative h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <Image
          src='/portfolio/nextjsfood.png'
          width={300}
          height={300}
          className='h-full w-full object-cover rotate-2 rounded-md'
          alt='NextJS Food App'
        />
      </div>
    ),
  },
  {
    title: 'LapakPedia',
    description:
      'An excercise project. It is a marketplace website with a responsive layout for desktop and mobile devices. Include payment feature using 3rd party payment gateway (MidTrans). Developed using React JS.',
    content: (
      <div className='relative p-4 h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <Image
          src='/portfolio/lapakpedia.png'
          width={300}
          height={300}
          className='h-full w-full object-cover rotate-2 rounded-md'
          alt='LapakPedia React JS'
        />
        <a
          className='absolute bottom-1 right-1'
          href='https://yanasoup-lapakpedia.vercel.app'
          target='_blank'
        >
          <MagicButton
            title='Visit Site'
            icon={<FaLocationArrow />}
            position='right'
            size='small'
          />
        </a>
      </div>
    ),
  },
  {
    title: 'Network Simulator',
    description: 'Fullstack Web Development (CodeIgniter, Leaflet, PostgreSQL)',
    content: (
      <div className='p-4 flex h-full w-full items-center justify-center text-white'>
        <Image
          src='/portfolio/netsim.jpg'
          width={300}
          height={300}
          className='h-full w-full object-cover rotate-2 rounded-md'
          alt='Telkom network simulator'
        />
      </div>
    ),
  },
  {
    title: 'SamojaFarm',
    description:
      'A chicken farm website in Bandung, Indonesia. with capability to sent order inquiry, order notification to telegram and email and online order tracking. Developed using ReactJS and Laravel.',
    content: (
      <div className='relative p-4 flex h-full w-full items-center justify-center text-white'>
        <Image
          src='/portfolio/samoja-farm.png'
          width={300}
          height={300}
          className='h-full w-full object-cover object-top rotate-2 rounded-md'
          alt='samoja farm - react js website'
        />
        <a
          className='absolute bottom-1 right-1'
          href='https://samojafarm-yanasoup.web.app'
          target='_blank'
        >
          <MagicButton
            title='Visit Site'
            icon={<FaLocationArrow />}
            position='right'
            size='small'
          />
        </a>
      </div>
    ),
  },
  {
    title: 'Transaction Anomaly alerting System',
    description:
      'Fullstack Web Development / Machine Learning (BigQuery AutoML, PHP, Telegram API)',
    content: (
      <div className='p-4 flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <Image
          src='/portfolio/telegram-ml-alert.jpg'
          width={300}
          height={300}
          className='h-full w-full object-cover rotate-2 rounded-md'
          alt='Transaction Anomaly alerting System'
        />
      </div>
    ),
  },
  {
    title: 'Transaction Forecasting Dashboard',
    description:
      'Web Development / BI Dashboard (Looker Studio, BigQuery AutoML)',
    content: (
      <div className='p-4 flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <Image
          src='/portfolio/ml-forecast-chart.jpeg'
          width={300}
          height={300}
          className='h-full w-full object-cover rotate-2 rounded-md'
          alt='Transaction Forecasting Dashboard'
        />
      </div>
    ),
  },
  {
    title: 'UPoint Deposit',
    description:
      'Multi tenant web application to manage partner deposit (topup, manual refund, view balance and transaction reporting). developed using CodeIgniter, JQuery, BigQuery API',
    content: (
      <div className='relative p-4 flex h-full w-full items-center justify-center text-white'>
        <Image
          src='/portfolio/deposit.jpg'
          width={300}
          height={300}
          className='h-full w-full object-cover object-top rotate-2 rounded-md'
          alt='samoja farm - react js website'
        />
        <a
          className='absolute bottom-1 right-1'
          href='https://deposit.upoint.co.id'
          target='_blank'
        >
          <MagicButton
            title='Visit Site'
            icon={<FaLocationArrow />}
            position='right'
            size='small'
          />
        </a>
      </div>
    ),
  },

  {
    title: 'Manajemen Billing',
    description:
      'Web application to process and manage electricity meter reading data. detect customer electricity usage anomalies based on KWH usage, verify customer KWH usage anomalies using photos captured in the field, analyze average customer kwh usage, view photos history of the kwh meter captured in the field, show meter reading routes on google maps, adjust meter reading sequence numbers.',
    content: (
      <div className='p-4 flex h-full w-full items-center justify-center text-white'>
        <Image
          src='/portfolio/billman-3.png'
          width={300}
          height={300}
          className='h-full w-full object-cover object-top rotate-2 rounded-md'
          alt='samoja farm - react js website'
        />
      </div>
    ),
  },
  {
    title: 'PlacePicker',
    description: 'An excercise project developed using React JS.',
    content: (
      <div className='p-4 flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <Image
          src='/portfolio/reactplacepicker.png'
          width={300}
          height={300}
          className='h-full w-full object-cover rotate-2 rounded-md'
          alt='React JS Placepicker'
        />
      </div>
    ),
  },

  {
    title: '',
    description: '',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        &nbsp;
      </div>
    ),
  },
];
