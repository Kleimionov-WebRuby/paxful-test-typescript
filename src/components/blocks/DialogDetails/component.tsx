import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';

import { getCurrentTrade } from 'store/selectors/currentTradeSelectors';
import { changeTradeStatus } from 'store/actions/tradesActions';
import { SELLER_TYPE } from 'constants/account';
import ChangeUserButton from 'components/blocks/ChangeUserButton';
import FromServer from 'components/blocks/FromServer';
import UserAvatar from 'components/blocks/UserAvatar';
import Rating from 'components/blocks/Rating';
import InfoField from 'components/controls/InfoField';
import Button from 'components/controls/Button';
import { getAccount } from 'store/selectors/accountSelector';

import './style.css';

const DialogDetails: FC = () => {
  const account = useSelector(getAccount);
  const currentTrade = useSelector(getCurrentTrade);
  const dispatch = useDispatch();

  const {
    name,
    rating,
    avatar,
    isPaid,
    numberOfTrades,
    tradeHash,
    startAt,
  } = currentTrade;

  const handleOnClick = useCallback(() => {
    if (!isPaid) dispatch(changeTradeStatus(currentTrade.id));
    // eslint-disable-next-line
  }, [currentTrade.id]);

  return (
    <>
      <div className="trades-dialogs__details-hearer">
        You are trading with <span>{name}</span>
        <div className="trades-dialogs__start-time">
          Started{' '}
          <Moment fromNow interval={10000}>
            {startAt}
          </Moment>
        </div>
        {account === SELLER_TYPE && !isPaid && (
          <Button
            text="Release bitcoins"
            customClass="grin-btn medium"
            onClick={handleOnClick}
            htmlType="button"
          />
        )}
        {account === SELLER_TYPE && isPaid && 'You are released bitcoins!'}
      </div>
      <ul className="trades-dialogs__details-body">
        <li>
          <UserAvatar imageLink={avatar} />
          <Rating rating={rating} />
        </li>
        <InfoField name="# of trades" value={numberOfTrades} />
        <InfoField
          name="Trade status"
          value={
            <span className={`trade-status ${isPaid ? 'paid' : null}`}>
              {isPaid ? 'paid' : 'not paid'}
            </span>
          }
        />
        <InfoField name="Trade hash" value={tradeHash} />
        <InfoField name="Amount USD" value="25.00" />
        <InfoField name="Amount BTC" value="0.00234524" />
      </ul>
      <div className="information-from-server">
        <FromServer />
      </div>
      <div className="trades-dialogs__change-user">
        <ChangeUserButton />
      </div>
    </>
  );
};

export default DialogDetails;
