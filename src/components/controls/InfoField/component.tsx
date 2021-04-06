import React, { ReactNode } from 'react';

type Props = {
  name: string,
  value?: string | number | null | ReactNode,
};

const InfoField = ({ name, value }: Props) => {
  return (
    <li>
      <div className="trades-dialogs__details-title">{name}</div>
      <div className="trades-dialogs__details-text">{value}</div>
    </li>
  );
};

export default InfoField;
