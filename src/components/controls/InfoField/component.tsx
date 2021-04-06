import React, { ReactNode } from 'react';

import { useClasses } from './style';

type Props = {
  name: string,
  value?: string | number | null | ReactNode,
};

const InfoField = ({ name, value }: Props) => {
  const classes = useClasses();

  return (
    <li>
      <div className={classes.tradesDialogsDetailsTitle}>{name}</div>
      <div className={classes.tradesDialogsDetailsText}>{value}</div>
    </li>
  );
};

export default InfoField;
