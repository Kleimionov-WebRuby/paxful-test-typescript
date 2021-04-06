import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTrade } from 'store/selectors/currentTradeSelectors';
import Rating from 'components/blocks/Rating';
import DialogDelete from 'components/blocks/DialogDelete';

import './style.css';

const DialogBoxHeader: FC = () => {
  const currentTrade = useSelector(getCurrentTrade);

  const { name, payMethod, rating } = currentTrade;

  return (
    <div className="trades-dialogs__header">
      <DialogDelete />
      <div className="trades-dialogs__header-title">{payMethod}</div>
      <div className="trades-dialogs__header-info">
        <span className="trades-dialogs__header-name">{name}</span>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default DialogBoxHeader;
