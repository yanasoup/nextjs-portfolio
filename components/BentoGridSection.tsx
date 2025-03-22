import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';

import { gridItems } from '@/data';

export function BentoGridSection() {
  return (
    <BentoGrid className='max-w-7xl mx-auto mt-8'>
      {gridItems.map((item, i) => (
        <BentoGridItem
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          // remove icon prop
          // remove original classname condition
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  );
}
