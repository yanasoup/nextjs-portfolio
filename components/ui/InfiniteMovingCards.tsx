'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useEffect, useState } from 'react';
// import { AnimatedTooltip } from '@/components/ui/AnimatedTooltip';
import Image from 'next/image';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    image: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  }, [direction]);
  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  }, [speed]);
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  return (
    <>
      {/* <AnimatedTooltip items={items} /> */}
      <div
        ref={containerRef}
        className={cn(
          'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
            start && 'animate-scroll',
            pauseOnHover && 'hover:[animation-play-state:paused]'
          )}
        >
          {items.map((item) => (
            <li
              className='overflow-hidden relative shrink-0 rounded-2xl px-0 py-1 flex items-center gap-2'
              key={item.title}
            >
              <Image
                width={34}
                height={34}
                className='cursor-pointer object-cover object-center hover:filter-none'
                src={item.image}
                alt={item.title}
              />
              <span className='text-white'>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
