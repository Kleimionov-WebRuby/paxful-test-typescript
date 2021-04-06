import React, { FC } from 'react';

import { useClasses } from './style';

type Props = {
  text: string,
  onClick: any,
  htmlType: 'button' | 'submit' | 'reset',
};

const Button: FC<Props> = ({ text, onClick, htmlType = 'button' }) => {
  const classes = useClasses();

  return (
    <button type={htmlType} onClick={onClick} className={classes.btn}>
      {text}
    </button>
  );
};

export default Button;
