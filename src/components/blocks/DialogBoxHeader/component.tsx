import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTrade } from 'store/selectors/currentTradeSelectors';
import Rating from 'components/blocks/Rating';
import DialogDelete from 'components/blocks/DialogDelete';

import { useClasses } from './style';

const DialogBoxHeader: FC = () => {
  const classes = useClasses();

  const currentTrade = useSelector(getCurrentTrade);

  const { name, payMethod, rating } = currentTrade;

  return (
    <div className={classes.tradesDialogsHeader}>
      <DialogDelete />
      <div className={classes.tradesDialogsHeaderTitle}>{payMethod}</div>
      <div className={classes.tradesDialogsHeaderInfo}>
        <span className={classes.tradesDialogsHeaderName}>{name}</span>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default DialogBoxHeader;
