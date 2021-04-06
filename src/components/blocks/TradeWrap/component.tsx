import React, { FC, ReactNode, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import setCurrentTrade from 'store/actions/currentTradeAction';
import isObjectEmpty from 'helper/isObjectEmpty';
import Loader from 'components/controls/Loader';
import { NOT_FOUND } from 'constants/index';
import {
  getCurrentTrade,
  getCurrentTradeIsLoading,
} from 'store/selectors/currentTradeSelectors';
import { getTradesList, getTradeById } from 'store/selectors/tradesSelectors';

import { useClasses } from './style';

type Props = {
  children: ReactNode,
};

const TradeWrap: FC<Props> = ({ children }) => {
  const classes = useClasses();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const tradesList = useSelector(getTradesList);
  const currentTrade = useSelector(getCurrentTrade);
  const isLoading = useSelector(getCurrentTradeIsLoading);

  const trade = getTradeById(tradesList, id);

  useEffect(() => {
    if (trade !== NOT_FOUND) {
      dispatch(setCurrentTrade(trade, currentTrade.id));
    }
  }, [dispatch, trade, currentTrade.id]);

  if (trade === NOT_FOUND && tradesList.length > 0) {
    return <Redirect to={`/${tradesList[0].id}`} />;
  }

  if (isObjectEmpty(currentTrade)) return <Loader />;

  return (
    <div className={classes.tradeMessageBoxInfo}>
      {isLoading && !isObjectEmpty(currentTrade) ? <Loader /> : null}
      {children}
    </div>
  );
};
export default TradeWrap;
