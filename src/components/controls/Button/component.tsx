import React, { FC } from 'react';

import './style.css';

type Props = {
  customClass: string,
  text: string,
  onClick: any,
  htmlType: 'button' | 'submit' | 'reset',
  disabled: boolean,
};

const Button: FC<Props> = ({
  customClass = '',
  text,
  onClick,
  htmlType,
  disabled,
}) => {
  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={`btn ${customClass}`}
      disabled={!disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = { htmlType: 'button' };

export default Button;
