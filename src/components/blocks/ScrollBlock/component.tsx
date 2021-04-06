import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode,
  className?: string,
};

const ScrollBlock: FC<Props> = ({ children, className }) => {
  return (
    <div data-simplebar style={{ height: '100%' }} className={className}>
      {children}
    </div>
  );
};

export default ScrollBlock;
