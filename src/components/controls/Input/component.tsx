import React, { FC } from 'react';

import { useClasses } from './style';

type Props = {
  name: string,
  value: string,
  type: string,
  placeholder: string,
  onInputChange: any,
};

const Input: FC<Props> = ({
  name,
  value,
  type,
  placeholder,
  onInputChange,
}) => {
  const classes = useClasses();

  return (
    <input
      className={classes.simpleInput}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  );
};

export default Input;
