import React from 'react';

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  size = 'reguler',
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  size?: 'small' | 'reguler' | 'large';
}) => {
  let styles =
    'relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[2px] focus:outline-none hover:p-[3px]';

  if (size === 'small')
    styles =
      'relative inline-flex h-10 w-full md:w-50 md:mt-6 overflow-hidden rounded-lg p-[2px] focus:outline-none hover:p-[3px]';

  return (
    <div className={styles} onClick={handleClick}>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] hover:animate-none' />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </div>
  );
};

export default MagicButton;
