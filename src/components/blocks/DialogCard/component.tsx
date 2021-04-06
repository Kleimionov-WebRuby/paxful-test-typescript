import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SELLER_TYPE } from 'constants/account';
import UserAvatar from '../UserAvatar';
import { Trade } from 'entries/trade';
import { getAccount } from 'store/selectors/accountSelector';

import { useClasses } from './style';
import clsx from 'clsx';

type Props = {
  item: Trade,
  isActive: string,
};

const DialogCard: FC<Props> = ({ item, isActive }) => {
  const classes = useClasses();

  const {
    isPaid,
    avatar,
    interlocutorAvatar,
    payMethod,
    name,
    newMessage,
  } = item;
  const account = useSelector(getAccount);
  const avatarImgLink = account === SELLER_TYPE ? interlocutorAvatar : avatar;
  const shallowCopyNewMessages: { [key: string]: boolean } = newMessage;

  return (
    <>
      <li
        className={clsx(
          classes.tradesCard,
          isActive && classes.active,
          shallowCopyNewMessages[account] && classes.newMessage,
        )}
      >
        <div>
          <div className={classes.tradesCardHowBuy}>
            {name} <span>is buying</span>
          </div>
          <div className={classes.tradesCardPayMethod}>{payMethod}</div>
          <div className={classes.tradesCardPurchaseRate}>
            77 USD (0.00542345 BTC)
          </div>
        </div>
        <div className={classes.tradesCardOwner}>
          <UserAvatar imageLink={avatarImgLink} />
          <span className={clsx(classes.tradeStatus, isPaid && classes.paid)}>
            {isPaid ? 'paid' : 'not paid'}
          </span>
        </div>
      </li>
    </>
  );
};

export default DialogCard;
