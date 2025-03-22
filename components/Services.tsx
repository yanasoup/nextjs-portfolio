'use client';

// import Image from 'next/image';
import { Tabs } from '@/components/ui/Tabs';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import Image from 'next/image';

export function Services() {
  const tabs = [
    {
      title: 'Frontend Web Development',
      value: 'Frontend Web Development',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br text-white from-slate-800 to-slate-900'>
          <p className='text-xl'>Frontend Development</p>
          <div className='flex gap-2'>
            <Image
              width={100}
              height={100}
              src='/frontend.svg'
              alt='profile'
              className='lg:w-32 md:w-20 w-16'
            />

            <p className='text-lg text-slate-400'>
              Transforming ideas into visually stunning and user-friendly
              interfaces, I specialize in Frontend Web Development. Utilizing
              modern technologies such as HTML, CSS, and JavaScript frameworks
              like React and Next.js, I create responsive and interactive web
              applications that provide seamless user experiences across all
              devices. My focus is on crafting clean, maintainable code while
              ensuring that every design element aligns with your brand&apos;s
              vision
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Backend Development',
      value: 'Backend Development',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br text-white from-slate-800 to-slate-900'>
          <p className='text-xl'>Backend Development</p>
          <div className='flex gap-2'>
            <Image
              width={100}
              height={100}
              src='/backend.svg'
              alt='profile'
              className='lg:w-32 md:w-20 w-16'
            />

            <p className='text-lg text-slate-400'>
              Building robust and scalable server-side solutions, I offer
              comprehensive Backend Development services. With expertise in
              languages such as Python, and PHP, I design and implement APIs,
              manage databases, and ensure secure data transactions. My approach
              emphasizes performance optimization and reliability, allowing your
              applications to handle high traffic and deliver data efficiently.
              Let me help you create a solid foundation for your web
              applications
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Data Analytic',
      value: 'data',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br text-white from-slate-800 to-slate-900'>
          <p className='text-lg'>
            Data Analytic / Data Extraction & Transformation
          </p>
          <div className='flex gap-2'>
            <Image
              width={100}
              height={100}
              src='/data-analytic.svg'
              alt='profile'
              className='lg:w-32 md:w-20 w-16'
            />

            <p className='text-lg text-slate-400'>
              Unlock the power of your data with my Data Analytics services. I
              specialize in collecting, processing, and analyzing data to
              provide actionable insights that drive informed decision-making.
              Using tools like SQL, Python, and data visualization like Google
              Looker, I help businesses understand trends, customer behavior,
              and performance metrics. Whether you need to optimize your
              marketing strategies or improve operational efficiency, I can turn
              your data into a strategic asset
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'API Integration',
      value: 'api',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 bg-gradient-to-br text-white from-slate-800 to-slate-900'>
          <p className='text-xl'>API Integration</p>
          <div className='flex gap-2'>
            <Image
              width={100}
              height={100}
              src='/api.svg'
              alt='profile'
              className='lg:w-32 md:w-20 w-16'
            />

            <p className='text-lg text-slate-400'>
              Enhance your applications with seamless API Integration services.
              I specialize in connecting various software systems and services
              to streamline workflows and improve functionality. Whether
              integrating third-party services, payment gateways, or custom
              APIs, I ensure smooth communication between your applications. My
              goal is to create a cohesive ecosystem that enhances user
              experience and maximizes the potential of your digital solutions
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='h-[28rem] md:h-[24rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-center my-10 justify-center'>
      <h2 className='font-sans text-xl lg:text-[3rem] max-w-96 font-bold z-10'>
        My <span className='text-purple'>Services</span>
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
