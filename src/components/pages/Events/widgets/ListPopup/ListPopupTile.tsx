import React, {ReactNode} from 'react';

interface ListPopupTileProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ListPopupTile = ({children, onClick}: ListPopupTileProps) => {
  return (
    <button
      onClick={onClick}
      className='tw-bg-white tw-border-0 tw-rounded-[1.9rem] tw-text-black tw-w-full tw-min-h-[3.9rem] tw-max-w-[32.6rem] tw-text-[1.75rem] tw-font-normal tw-text-center tw-my-[1.1rem]'
      style={{
        lineHeight: 32.4 / 30,
      }}>
      {children}
    </button>
  );
};
