'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { IoCopyOutline } from 'react-icons/io5';
// import { GridWorldMap } from './GridWorldMap';
import { BackgroundGradientAnimation } from './GradientBg';
// import animationData from '@/data/confetti.json';
// import Lottie from 'react-lottie';
import MagicButton from './MagicButton';
import Image from 'next/image';
// import dynamic from 'next/dynamic';
import { BoxesCore } from './BoxCore';
// const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ['ReactJS', 'Typescript', 'FramerMotion'];
  const rightLists = ['PHP', 'Python', 'Express'];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = 'yana.soup@gmail.com';
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === 5 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <Image
              fill={true}
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <Image
              fill={true}
              src={spareImg}
              alt={spareImg}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>

        {id === 5 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <>
              <BoxesCore />
              <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
                {/* tech stack lists */}
                <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                    >
                      {item}
                    </span>
                  ))}
                  <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
                </div>
                <div className='flex flex-col gap-3 md:gap-3 lg:gap-8'>
                  <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {id === 5 && (
            <div className='mt-5 relative'>
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                }`}
              >
                {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
              </div>

              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my email address'}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
                otherClasses='!bg-[#161A31]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
