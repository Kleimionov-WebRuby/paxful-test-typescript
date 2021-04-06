import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SELLER_TYPE } from 'constants/account';
import { Message as MessageType } from 'entries/trade';
import { RootState } from 'store/reducers';

import './style.css';

type Props = {
  message: MessageType,
  avatar: string,
  interlocutorAvatar: string,
};

const Message: FC<Props> = ({ message, avatar, interlocutorAvatar }) => {
  const account = useSelector((state: RootState) => state.account);
  const { type, text, date } = message;
  const avatarImgLink = type === SELLER_TYPE ? avatar : interlocutorAvatar;

  return (
    <div className={`message-block ${type === account ? 'right' : ''}`}>
      <div className="message-block__avatar">
        <img src={avatarImgLink} alt="" />
      </div>
      <div className="message-block-wrap">
        <div className="message-block__text">{text}</div>
        <div className="message-block__date">{date}</div>
      </div>
    </div>
  );
};

export default Message;
