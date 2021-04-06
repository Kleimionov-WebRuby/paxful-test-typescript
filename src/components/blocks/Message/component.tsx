import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SELLER_TYPE } from 'constants/account';
import { Message as MessageType } from 'entries/trade';
import { getAccount } from 'store/selectors/accountSelector';
import clsx from 'clsx';

import { useClasses } from './style';

type Props = {
  message: MessageType,
  avatar: string,
  interlocutorAvatar: string,
};

const Message: FC<Props> = ({ message, avatar, interlocutorAvatar }) => {
  const classes = useClasses();

  const account = useSelector(getAccount);
  const { type, text, date } = message;
  const avatarImgLink = type === SELLER_TYPE ? avatar : interlocutorAvatar;

  return (
    <div
      className={clsx(classes.messageBlock, type === account && classes.right)}
    >
      <div className={classes.messageBlockAvatar}>
        <img src={avatarImgLink} alt="" />
      </div>
      <div>
        <div className={classes.messageBlockText}>{text}</div>
        <div className={classes.messageBlockDate}>{date}</div>
      </div>
    </div>
  );
};

export default Message;
